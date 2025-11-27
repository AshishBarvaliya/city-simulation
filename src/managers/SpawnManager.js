/**
 * Spawn Manager
 * Handles entity spawning logic
 */
import * as THREE from 'three'
import { Car } from '../Car.js'
import { Pedestrian } from '../Pedestrian.js'
import { CONFIG } from '../config/config.js'
import { randomInt } from '../utils/MathUtils.js'
import { ROTATIONS } from '../config/constants.js'

export class SpawnManager {
  constructor(entityManager, cityGroup) {
    this.entityManager = entityManager
    this.cityGroup = cityGroup
    this.buildings = [] // Store building positions for collision detection
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
    const spawnCount = cfg.spawnCount
    
    for (let i = 0; i < spawnCount; i++) {
      const car = this.createCar(grid, cellSize)
      if (car) {
        this.entityManager.add(car)
        this.cityGroup.add(car)
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
      // East-West Road - car travels horizontally
      if (worldX > 0) {
        rotation = ROTATIONS.WEST // Traveling West (negative X)
        laneOffset = -offsetAmount // Right side of road
      } else {
        rotation = ROTATIONS.EAST // Traveling East (positive X)
        laneOffset = offsetAmount // Right side of road
      }
      
      // Apply offset to Z (perpendicular to travel direction)
      return new Car(new THREE.Vector3(worldX, 0, worldZ + laneOffset), rotation)
      
    } else if (orientation === 'VERTICAL') {
      // North-South Road - car travels vertically
      if (worldZ > 0) {
        rotation = ROTATIONS.SOUTH // Traveling South (positive Z)
        laneOffset = -offsetAmount // Right side of road
      } else {
        rotation = ROTATIONS.NORTH // Traveling North (negative Z)
        laneOffset = offsetAmount // Right side of road
      }
      
      // Apply offset to X (perpendicular to travel direction)
      return new Car(new THREE.Vector3(worldX + laneOffset, 0, worldZ), rotation)
    }
    
    return null
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
    
    if (spawned < spawnCount) {
      console.warn(`⚠️  Only spawned ${spawned}/${spawnCount} pedestrians due to space constraints`)
    }
  }
}
