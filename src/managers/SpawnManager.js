/**
 * Spawn Manager
 * Handles entity spawning logic
 */
import * as THREE from 'three'
import { Car } from '../Car.js'
import { Pedestrian } from '../Pedestrian.js'
import { CONFIG } from '../config/config.js'
import { randomInt } from '../utils/MathUtils.js'
import { ROTATIONS, DIRECTIONS } from '../config/constants.js'
import { Pathfinder } from '../systems/Pathfinder.js'

export class SpawnManager {
  constructor(entityManager, cityGroup, worldGrid) {
    this.entityManager = entityManager
    this.cityGroup = cityGroup
    this.worldGrid = worldGrid // Need worldGrid to find current cell
    this.buildings = [] // Store building positions for collision detection
    this.pathfinder = null
  }

  /**
   * Store building positions for collision detection
   */
  registerBuilding(building) {
    this.buildings.push({
      x: building.position.x,
      z: building.position.z,
      size: CONFIG.building.baseSizeMax // Use max size for safety
    })
  }

  /**
   * Check if a position overlaps with any building
   */
  isOverlappingBuilding(x, z, safetyMargin = 2) {
    for (const building of this.buildings) {
      const halfSize = building.size / 2 + safetyMargin
      if (Math.abs(x - building.x) < halfSize && 
          Math.abs(z - building.z) < halfSize) {
        return true
      }
    }
    return false
  }

  /**
   * Spawn cars on the road grid
   */
  spawnCars(grid, cellSize) {
    const cfg = CONFIG.car
    const spawnCount = 1 // DEBUG: Only spawn 1 car
    
    // Initialize pathfinder
    this.pathfinder = new Pathfinder(grid.length)
    
    // Store grid and cellSize for path assignment
    this.grid = grid
    this.cellSize = cellSize
    
    for (let i = 0; i < spawnCount; i++) {
      const car = this.createCar(grid, cellSize)
      if (car) {
        this.entityManager.add(car)
        this.cityGroup.add(car)
        
        // Assign a path with a left turn for debugging
        // Convert world position to grid coordinates
        const gridX = Math.round(car.position.x / cellSize + grid.length / 2)
        const gridZ = Math.round(car.position.z / cellSize + grid.length / 2)
        const startCell = { x: gridX, z: gridZ }
        
        // Find nearest intersection as starting point for pathfinding
        const startIntersection = this.findNearestIntersection(startCell, grid)
        if (startIntersection) {
          this.assignPathWithLeftTurn(car, startIntersection, grid, cellSize)
        }
        
        // Set callback for when car reaches destination
        car.onReachDestination = (reachedCar) => {
          // Convert world position to grid coordinates
          const gridX = Math.round(reachedCar.position.x / this.cellSize + this.grid.length / 2)
          const gridZ = Math.round(reachedCar.position.z / this.cellSize + this.grid.length / 2)
          const currentCell = { x: gridX, z: gridZ }
          
          const intersection = this.findNearestIntersection(currentCell, this.grid)
          if (intersection) {
            this.assignPathWithLeftTurn(reachedCar, intersection, this.grid, this.cellSize)
          }
        }
      }
    }
  }

  /**
   * Create a single car at a valid spawn position
   */
  createCar(grid, cellSize) {
    // Find road cells with their orientation
    const roadCells = []
    for (let x = 0; x < grid.length; x++) {
      for (let z = 0; z < grid[x].length; z++) {
        if (grid[x][z] === 'ROAD') {
          // Determine road orientation
          let orientation = 'BOTH' // Intersection
          if (x % 3 === 0 && z % 3 !== 0) {
            orientation = 'VERTICAL' // North-South road
          } else if (x % 3 !== 0 && z % 3 === 0) {
            orientation = 'HORIZONTAL' // East-West road
          }
          roadCells.push({ x, z, orientation })
        }
      }
    }
    
    if (roadCells.length === 0) return null
    
    // Try to find a valid spawn position (max 50 attempts)
    for (let attempt = 0; attempt < 50; attempt++) {
      // Pick random road cell
      const cell = roadCells[randomInt(0, roadCells.length - 1)]
      const worldX = (cell.x - grid.length / 2) * cellSize
      const worldZ = (cell.z - grid[0].length / 2) * cellSize
      
      // Check if this position would overlap with buildings
      if (this.isOverlappingBuilding(worldX, worldZ, 3)) {
        continue // Try another position
      }
      
      // Skip intersections - only spawn on straight roads
      if (cell.orientation === 'BOTH') {
        continue
      }
      
      return this.createCarAtPosition(worldX, worldZ, cell.orientation)
    }
    
    return null // Failed to find valid position
  }

  /**
   * Create a car at a specific world position with proper orientation
   */
  createCarAtPosition(worldX, worldZ, orientation) {
    let rotation = ROTATIONS.NORTH
    let laneOffset = 0
    
    // Randomly choose inner or outer lane
    const useOuterLane = Math.random() < 0.5
    // Inner lane: 1.875, Outer lane: 5.625
    const offsetAmount = useOuterLane ? 5.625 : 1.875
    
    if (orientation === 'HORIZONTAL') {
      // East-West Road
      // US Driving Rule: Drive on the Right
      
      if (worldX > 0) {
        rotation = ROTATIONS.WEST // Traveling West (-X)
        // Right side of Westbound (-X) is North (+Z).
        // So we need Positive Z.
        laneOffset = offsetAmount 
      } else {
        rotation = ROTATIONS.EAST // Traveling East (+X)
        // Right side of Eastbound (+X) is South (-Z).
        // So we need Negative Z.
        laneOffset = -offsetAmount 
      }
      
      // Apply offset to Z (perpendicular to travel direction)
      return new Car(new THREE.Vector3(worldX, 0, worldZ + laneOffset), rotation)
      
    } else if (orientation === 'VERTICAL') {
      // North-South Road
      // US Driving Rule: Drive on the Right
      
      if (worldZ > 0) {
        rotation = ROTATIONS.SOUTH // Traveling South (+Z)
        // Right side of Southbound (+Z) is West (+X). Wait.
        // Forward: (0,0,1). Up: (0,1,0). Right: Cross(Up, Fwd) = (1,0,0) = +X.
        // So we need Positive X.
        laneOffset = offsetAmount 
      } else {
        rotation = ROTATIONS.NORTH // Traveling North (-Z)
        // Right side of Northbound (-Z) is East (-X). Wait.
        // Forward: (0,0,-1). Up: (0,1,0). Right: Cross(Up, Fwd) = (-1,0,0) = -X.
        // So we need Negative X.
        laneOffset = -offsetAmount 
      }
      
      // Apply offset to X (perpendicular to travel direction)
      return new Car(new THREE.Vector3(worldX + laneOffset, 0, worldZ), rotation)
    }
    
    return null
  }

  /**
   * Find the nearest intersection from a given cell
   */
  findNearestIntersection(cell, grid) {
    // If already at intersection, return it
    if (cell.x % 3 === 0 && cell.z % 3 === 0) {
      return cell
    }
    
    // Find all intersections and return the closest one
    let nearest = null
    let minDist = Infinity
    
    for (let x = 0; x < grid.length; x += 3) {
      for (let z = 0; z < grid[x].length; z += 3) {
        const dist = Math.abs(x - cell.x) + Math.abs(z - cell.z)
        if (dist < minDist) {
          minDist = dist
          nearest = { x, z }
        }
      }
    }
    
    return nearest
  }

  /**
   * Assign a path with a guaranteed left turn (for debugging)
   */
  assignPathWithLeftTurn(car, startCell, grid, cellSize) {
    // Find all valid intersection destinations
    const destinations = []
    for (let x = 0; x < grid.length; x += 3) {
      for (let z = 0; z < grid[x].length; z += 3) {
        if (x !== startCell.x || z !== startCell.z) {
          destinations.push({ x, z })
        }
      }
    }
    
    if (destinations.length === 0) return
    
    // Try to find a path with a left turn
    let foundLeftTurn = false
    let attempts = 0
    const maxAttempts = 50
    
    while (!foundLeftTurn && attempts < maxAttempts) {
      attempts++
      
      // Pick random destination
      const endCell = destinations[randomInt(0, destinations.length - 1)]
      
      // Find path
      const gridPath = this.pathfinder.findPath(startCell, endCell)
      
      if (gridPath && gridPath.length > 2) {
        // Simplify path (only turns)
        const simplifiedPath = this.pathfinder.simplifyPath(gridPath)
        
        // Check if path contains a left turn
        for (let i = 0; i < simplifiedPath.length - 1; i++) {
          const currentNode = simplifiedPath[i]
          const nextNode = simplifiedPath[i + 1]
          
          // Determine direction at current node
          let currentDir = null
          if (i === 0) {
            currentDir = car.direction
          } else {
            const prevNode = simplifiedPath[i - 1]
            const dx = currentNode.x - prevNode.x
            const dz = currentNode.z - prevNode.z
            if (Math.abs(dx) > Math.abs(dz)) {
              currentDir = dx > 0 ? DIRECTIONS.EAST : DIRECTIONS.WEST
            } else {
              currentDir = dz > 0 ? DIRECTIONS.SOUTH : DIRECTIONS.NORTH
            }
          }
          
          // Determine direction to next node
          const dx = nextNode.x - currentNode.x
          const dz = nextNode.z - currentNode.z
          let nextDir = null
          if (Math.abs(dx) > Math.abs(dz)) {
            nextDir = dx > 0 ? DIRECTIONS.EAST : DIRECTIONS.WEST
          } else {
            nextDir = dz > 0 ? DIRECTIONS.SOUTH : DIRECTIONS.NORTH
          }
          
          // Check if it's a left turn
          if (currentDir !== nextDir) {
            let turnDir = 'STRAIGHT'
            if (currentDir === DIRECTIONS.NORTH) turnDir = nextDir === DIRECTIONS.EAST ? 'RIGHT' : 'LEFT'
            else if (currentDir === DIRECTIONS.SOUTH) turnDir = nextDir === DIRECTIONS.WEST ? 'RIGHT' : 'LEFT'
            else if (currentDir === DIRECTIONS.EAST) turnDir = nextDir === DIRECTIONS.SOUTH ? 'RIGHT' : 'LEFT'
            else if (currentDir === DIRECTIONS.WEST) turnDir = nextDir === DIRECTIONS.NORTH ? 'RIGHT' : 'LEFT'
            
            if (turnDir === 'LEFT') {
              foundLeftTurn = true
              
              // Convert to world coordinates
              const worldPath = simplifiedPath.map(node => ({
                x: (node.x - grid.length / 2) * cellSize,
                z: (node.z - grid[0].length / 2) * cellSize
              }))
              
              // Remove first node (we're already there)
              if (worldPath.length > 0) {
                worldPath.shift()
              }
              
              car.setPath(worldPath)
              return
            }
          }
        }
      }
    }
    
    // Fallback: if no left turn found, just assign any path
    this.assignRandomPath(car, startCell, grid, cellSize)
  }

  /**
   * Assign a random path to a car
   */
  assignRandomPath(car, startCell, grid, cellSize) {
    // Find all valid road cells (intersections are best for destinations)
    const destinations = []
    for (let x = 0; x < grid.length; x += 3) {
      for (let z = 0; z < grid[x].length; z += 3) {
        // Only pick intersections as destinations for now
        if (x !== startCell.x || z !== startCell.z) {
          destinations.push({ x, z })
        }
      }
    }
    
    if (destinations.length === 0) return
    
    // Pick random destination
    const endCell = destinations[randomInt(0, destinations.length - 1)]
    
    // Find path
    const gridPath = this.pathfinder.findPath(startCell, endCell)
    
    if (gridPath) {
      // Simplify path (only turns)
      const simplifiedPath = this.pathfinder.simplifyPath(gridPath)
      
      // Convert to world coordinates
      const worldPath = simplifiedPath.map(node => ({
        x: (node.x - grid.length / 2) * cellSize,
        z: (node.z - grid[0].length / 2) * cellSize
      }))
      
      // Remove first node if it's too close to start (optional)
      // But simplified path starts with start node, so we should remove it if we are already there
      // Actually, Car.js expects path to start with target node.
      // If we are at startCell, the first node in path IS startCell.
      // We should remove it.
      if (worldPath.length > 0) {
        worldPath.shift()
      }
      
      car.setPath(worldPath)
      
      // Smart Lane Selection
      // If the first turn is LEFT, ensure we are in the INNER lane (smaller offset)
      // If the first turn is RIGHT, ensure we are in the OUTER lane (larger offset)
      if (simplifiedPath.length > 1) {
        const startNode = simplifiedPath[0]
        const nextNode = simplifiedPath[1]
        
        // Determine turn direction
        // We need the car's current direction
        const carDir = car.direction
        
        // Let's compute direction to next node
        let turnDir = 'STRAIGHT'
        const dx = nextNode.x - startNode.x
        const dz = nextNode.z - startNode.z
        
        let pathDir = null
        if (Math.abs(dx) > Math.abs(dz)) {
          pathDir = dx > 0 ? DIRECTIONS.EAST : DIRECTIONS.WEST
        } else {
          pathDir = dz > 0 ? DIRECTIONS.SOUTH : DIRECTIONS.NORTH
        }
        
        if (carDir !== pathDir) {
           // It's a turn! Determine if LEFT or RIGHT
           // Using the same logic as Car.getTurnDirection()
           if (carDir === DIRECTIONS.NORTH) turnDir = pathDir === DIRECTIONS.EAST ? 'RIGHT' : 'LEFT'
           else if (carDir === DIRECTIONS.SOUTH) turnDir = pathDir === DIRECTIONS.WEST ? 'RIGHT' : 'LEFT'
           else if (carDir === DIRECTIONS.EAST) turnDir = pathDir === DIRECTIONS.SOUTH ? 'RIGHT' : 'LEFT'
           else if (carDir === DIRECTIONS.WEST) turnDir = pathDir === DIRECTIONS.NORTH ? 'RIGHT' : 'LEFT'
        }
        
        // Adjust lane
        // Inner lane offset: 1.875
        // Outer lane offset: 5.625
        // We need to know which axis is the "lane offset" axis.
        // It's perpendicular to travel.
        
        // Helper to get current lane type
        // We can check the car's position relative to the road center
        // But we don't know the road center easily here without calculation.
        // However, we know we just spawned it.
        
        // Let's just re-calculate the position based on the desired lane.
        // We need to know the road orientation and direction again.
        // This is getting complicated to reverse-engineer.
        
        // Alternative: Pass the desired lane preference to createCar?
        // But we create car BEFORE path.
        
        // Let's just modify the car's position directly.
        // We know the car's local "right" vector is perpendicular to direction.
        // Inner lane is closer to center (0). Outer is further.
        // Actually, let's look at createCarAtPosition logic.
        // Inner: 1.875, Outer: 5.625.
        
        const innerOffset = 1.875
        const outerOffset = 5.625
        
        let desiredOffset = null
        if (turnDir === 'LEFT') desiredOffset = innerOffset
        if (turnDir === 'RIGHT') desiredOffset = outerOffset
        
        if (desiredOffset !== null) {
            // Apply new offset
            // We need to know which coordinate to change (X or Z)
            // If moving North/South (Z axis), we change X.
            // If moving East/West (X axis), we change Z.
            
            if (carDir === DIRECTIONS.NORTH || carDir === DIRECTIONS.SOUTH) {
                // Moving Z. Offset is X.
                // We need to know the SIGN of the offset.
                // In createCarAtPosition:
                // South: +X. North: -X.
                const sign = carDir === DIRECTIONS.SOUTH ? 1 : -1
                car.position.x = ((startNode.x - grid.length/2) * cellSize) + (sign * desiredOffset)
            } else { // EAST or WEST
                // Moving X. Offset is Z.
                // West: +Z. East: -Z.
                const sign = carDir === DIRECTIONS.WEST ? 1 : -1
                car.position.z = ((startNode.z - grid[0].length/2) * cellSize) + (sign * desiredOffset)
            }
        }
      }
    }
  }

  /**
   * Spawn pedestrians on sidewalks
   */
  spawnPedestrians() {
    const cfg = CONFIG.pedestrian
    const spawnCount = cfg.spawnCount
    const sidewalkOffset = cfg.sidewalkOffset
    const roadSpacing = CONFIG.city.cellSize * 3 // Roads are every 3 cells
    
    const positions = [
      { x: sidewalkOffset, z: 0, rotation: ROTATIONS.SOUTH },
      { x: -sidewalkOffset, z: 0, rotation: ROTATIONS.NORTH },
      { x: 0, z: sidewalkOffset, rotation: ROTATIONS.WEST },
      { x: 0, z: -sidewalkOffset, rotation: ROTATIONS.EAST },
    ]
    
    let spawned = 0
    let attempts = 0
    const maxAttempts = spawnCount * 10
    
    while (spawned < spawnCount && attempts < maxAttempts) {
      attempts++
      
      const pos = positions[spawned % positions.length]
      
      // Generate random offset along the sidewalk
      const maxOffset = roadSpacing * 2 // Allow spawning along multiple blocks
      const offset = (Math.random() - 0.5) * maxOffset
      
      let x = pos.x
      let z = pos.z
      
      if (Math.abs(pos.x) > Math.abs(pos.z)) {
        z += offset
      } else {
        x += offset
      }
      
      // Check if this position overlaps with buildings
      if (this.isOverlappingBuilding(x, z, 4)) {
        continue // Try another position
      }
      
      const pedestrian = new Pedestrian(x, z, pos.rotation)
      this.entityManager.add(pedestrian)
      this.cityGroup.add(pedestrian)
      spawned++
    }
    
    // Spawn complete
  }
}
