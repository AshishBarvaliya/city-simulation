/**
 * City Generator
 * Handles city generation logic including grid layout, buildings, roads, and decorations
 */
import * as THREE from 'three'
import { Building } from '../Building.js'
import { Road } from '../Road.js'
import { TrafficLight } from '../TrafficLight.js'
import { Tree } from '../Tree.js'
import { CONFIG } from '../config/config.js'
import { CORNERS, ROAD_ORIENTATIONS } from '../config/constants.js'
import { randomInt } from '../utils/MathUtils.js'
import { createPlane, createCylinder, createSphere, createMesh, createLambertMaterial, createBasicMaterial } from '../utils/GeometryFactory.js'
import { SignalValidator } from '../systems/SignalValidator.js'
import { IntersectionConfig } from '../data/IntersectionConfig.js'
import { TrafficLightController } from '../systems/TrafficLightController.js'

export class CityGenerator {
  constructor(cityGroup, entityManager, worldGrid, spawnManager = null) {
    this.cityGroup = cityGroup
    this.entityManager = entityManager
    this.worldGrid = worldGrid
    this.spawnManager = spawnManager
    this.signalValidator = new SignalValidator()
    this.intersectionConfigs = []
    this.intersectionCount = 0
    this.trafficControllers = [] // Store controllers for each intersection
  }

  /**
   * Generate the entire city
   */
  generateCity(size) {
    this.gridSize = size
    this.grid = this.createGrid(size)
    const cellSize = CONFIG.city.cellSize
    
    // Generate buildings and roads
    for (let x = 0; x < size; x++) {
      for (let z = 0; z < size; z++) {
        const type = this.grid[x][z]
        const posX = (x - size / 2) * cellSize
        const posZ = (z - size / 2) * cellSize
        
        if (type === 'BUILDING') {
          this.createBuildingCell(x, z, posX, posZ, cellSize)
        } else if (type === 'ROAD') {
          this.createRoadCell(x, z, this.grid, size, posX, posZ, cellSize)
        }
      }
    }
    
    // Add ground plane
    this.createGroundPlane(size, cellSize)
    
    // Prune traffic lights that face buildings
    this.pruneInvalidTrafficLights()
    
    // Add intersection approach markings (Arrows)
    this.addIntersectionApproachMarkings()
    
    // Print validation report
    this.printReport()
    
    return this.grid
  }

  /**
   * Remove traffic lights that are facing buildings or obstructions
   */
  pruneInvalidTrafficLights() {
    if (!this.worldGrid) return

    const lights = this.entityManager.getByType('TRAFFIC_LIGHT')
    const toRemove = []

    lights.forEach(light => {
      // Get facing direction
      const direction = light.getForwardVector() // Vector3
      if (!direction) return

      // Check a point in front of the light (e.g., 1 cell away)
      const checkDist = CONFIG.city.cellSize
      const checkPos = light.position.clone().add(direction.clone().multiplyScalar(checkDist))
      
      // Check what's at that position
      const cell = this.worldGrid.getCellFromWorldPos(checkPos.x, checkPos.z)
      
      if (cell && cell.type === 'BUILDING') {
        console.log(`⚠️ DETECTED invalid traffic light at (${light.position.x.toFixed(1)}, ${light.position.z.toFixed(1)}) facing building`)
        console.log(`   Facing: ${direction.x.toFixed(1)}, ${direction.z.toFixed(1)}`)
        console.log(`   Check Pos: ${checkPos.x.toFixed(1)}, ${checkPos.z.toFixed(1)}`)
        // toRemove.push(light) // DISABLED PRUNING FOR DEBUGGING
      }
    })

    // Remove invalid lights
    toRemove.forEach(light => {
      this.cityGroup.remove(light)
      this.entityManager.remove(light)
      
      // Also remove from intersection config if needed
      // This is a bit tricky since we don't have a direct link back to the config here
      // But for visual purposes, this is sufficient.
    })
    
    if (toRemove.length > 0) {
      console.log(`🧹 Pruned ${toRemove.length} invalid traffic lights.`)
    }
  }

  /**
   * Add approach arrow markings to roads near intersections
   */
  addIntersectionApproachMarkings() {
    // Iterate through all cells to find intersections
    for (let x = 0; x < this.gridSize; x++) {
      for (let z = 0; z < this.gridSize; z++) {
        const cell = this.grid[x][z]
        if (cell && cell.type === 'INTERSECTION') {
          // Check neighbors for roads
          const neighbors = [
            { dx: 0, dz: -1, dir: 'SOUTH' }, // North neighbor approaches from South
            { dx: 0, dz: 1, dir: 'NORTH' },  // South neighbor approaches from North
            { dx: -1, dz: 0, dir: 'EAST' },  // West neighbor approaches from East
            { dx: 1, dz: 0, dir: 'WEST' }    // East neighbor approaches from West
          ]
          
          neighbors.forEach(n => {
            const nx = x + n.dx
            const nz = z + n.dz
            
            if (nx >= 0 && nx < this.gridSize && nz >= 0 && nz < this.gridSize) {
              const neighborCell = this.grid[nx][nz]
              if (neighborCell && neighborCell.type === 'ROAD' && neighborCell.entity) {
                if (neighborCell.entity.addApproachArrows) {
                  neighborCell.entity.addApproachArrows(n.dir)
                }
              }
            }
          })
        }
      }
    }
    
    console.log(`🎯 Added approach arrow markings to roads`)
  }

  /**
   * Create the city grid layout
   */
  createGrid(size) {
    const grid = []
    for (let x = 0; x < size; x++) {
      const row = []
      for (let z = 0; z < size; z++) {
        // Roads on every 3rd cell to create wider blocks
        if (x % 3 === 0 || z % 3 === 0) {
          row.push('ROAD')
        } else {
          row.push('BUILDING')
        }
      }
      grid.push(row)
    }
    return grid
  }

  /**
   * Create a building cell with lawn and trees
   */
  createBuildingCell(gridX, gridZ, x, z, cellSize) {
    const building = new Building()
    building.position.set(x, 0, z)
    this.cityGroup.add(building)
    this.entityManager.add(building)
    
    // Register building position with spawn manager for collision detection
    if (this.spawnManager) {
      this.spawnManager.registerBuilding(building)
    }

    // Update world matrix to ensure correct bounds calculation
    building.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(building)
    
    // Register in WorldGrid
    if (this.worldGrid) {
      this.worldGrid.register(gridX, gridZ, 'BUILDING', building, box)
    }
    
    // Add lawn
    this.addLawn(x, z, cellSize)
    
    // Add trees
    this.addTrees(x, z, cellSize)
  }

  /**
   * Create a road cell with appropriate orientation
   */
  createRoadCell(x, z, grid, size, posX, posZ, cellSize) {
    // Determine road orientation
    let orientation = ROAD_ORIENTATIONS.BOTH // Default for intersections
    if (x % 3 === 0 && z % 3 !== 0) {
      orientation = ROAD_ORIENTATIONS.VERTICAL // North-South road
    } else if (x % 3 !== 0 && z % 3 === 0) {
      orientation = ROAD_ORIENTATIONS.HORIZONTAL // East-West road
    }
    
    const road = new Road(orientation)
    road.position.set(posX, 0.05, posZ)
    this.cityGroup.add(road)
    this.entityManager.add(road)

    // Update world matrix
    road.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(road)

    // Register in WorldGrid
    if (this.worldGrid) {
      this.worldGrid.register(x, z, 'ROAD', road, box)
    }
    
    // Add traffic lights and crosswalks at intersections
    if (x % 3 === 0 && z % 3 === 0) {
      this.createIntersection(posX, posZ)
    }
  }

  /**
   * Create intersection with traffic lights and crosswalks
   */
  createIntersection(x, z) {
    // Create intersection configuration
    this.intersectionCount++
    const intersectionId = `INT-${this.intersectionCount}`
    const config = new IntersectionConfig({ x, y: 0, z }, intersectionId)
    
    console.log(`🚦 Creating intersection ${intersectionId} at (${x}, ${z})`)
    
    // Add 4 traffic lights (one at each corner)
    const corners = [CORNERS.NE, CORNERS.NW, CORNERS.SE, CORNERS.SW]
    const lights = {}
    
    corners.forEach((corner) => {
      const light = new TrafficLight(corner)
      light.position.x += x
      light.position.z += z
      light.externalControl = true // Enable external control
      
      // Always add the traffic light (validation is optional)
      this.cityGroup.add(light)
      this.entityManager.add(light)
      
      // Store light reference by direction
      // NE pole primary faces South (controls Northbound)
      // NW pole primary faces East (controls Westbound)
      // SE pole primary faces West (controls Eastbound)
      // SW pole primary faces North (controls Southbound)
      if (corner === CORNERS.NE) lights.north = light
      if (corner === CORNERS.NW) lights.west = light
      if (corner === CORNERS.SE) lights.east = light
      if (corner === CORNERS.SW) lights.south = light
      
      // Validate signal for reporting purposes
      const validationResult = this.signalValidator.isValid(light, config)
      
      if (!validationResult.valid) {
        console.warn(`⚠️  Signal at ${corner} corner (${x}, ${z}) failed validation:`, validationResult.errors)
      }
      
      // Add to intersection config
      const worldPos = new THREE.Vector3()
      light.getWorldPosition(worldPos)
      const worldQuat = new THREE.Quaternion()
      light.getWorldQuaternion(worldQuat)
      const worldRot = new THREE.Euler().setFromQuaternion(worldQuat)
      
      config.addSignal(
        corner,
        worldPos,
        worldRot,
        { direction: light.getFacingDirection(), length: CONFIG.trafficLight.armLength },
        validationResult.valid
      )
    })
    
    // Create traffic light controller for this intersection
    const controller = new TrafficLightController(config)
    controller.setLights(lights.north, lights.south, lights.east, lights.west)
    this.trafficControllers.push(controller)
    this.entityManager.add(controller) // Add to entity manager for update loop
    
    // Store config
    this.intersectionConfigs.push(config)
    
    // Add crosswalk markings
    this.addCrosswalk(x, z)
  }

  /**
   * Add lawn around a building
   */
  addLawn(x, z, cellSize) {
    const lawnSize = cellSize * 0.9
    const lawnGeo = createPlane(lawnSize, lawnSize)
    const lawnMat = createLambertMaterial(CONFIG.road.lawnColor)
    const lawn = createMesh(lawnGeo, lawnMat, false, true)
    lawn.rotation.x = -Math.PI / 2
    lawn.position.set(x, 0.01, z)
    this.cityGroup.add(lawn)
  }

  /**
   * Add trees around a building
   */
  addTrees(x, z, cellSize) {
    const cfg = CONFIG.tree
    const numTrees = randomInt(cfg.countPerLawn.min, cfg.countPerLawn.max)
    const offset = cellSize * 0.35
    
    for (let i = 0; i < numTrees; i++) {
      const tree = this.createTree()
      const angle = (i / numTrees) * Math.PI * 2
      const distance = offset + Math.random() * 2
      tree.position.set(
        x + Math.cos(angle) * distance,
        0,
        z + Math.sin(angle) * distance
      )
      this.cityGroup.add(tree)
    }
  }

  /**
   * Create a tree (using new detailed Tree class)
   */
  createTree() {
    // Randomly select tree type (1-3)
    return new Tree()
  }

  /**
   * Add crosswalk markings at an intersection
   */
  addCrosswalk(x, z) {
    const stripeMat = createBasicMaterial(CONFIG.road.crosswalkColor)
    const sidewalkWidth = 1.6
    const stripeWidth = CONFIG.road.crosswalkStripeWidth
    const stripeSpacing = CONFIG.road.crosswalkStripeGap + stripeWidth
    const numStripes = 30
    const roadHalfWidth = CONFIG.city.roadWidth / 2 + 2
    
    // North crosswalk
    for (let i = 0; i < numStripes; i++) {
      const stripe = createMesh(createPlane(stripeWidth, sidewalkWidth), stripeMat, false)
      stripe.rotation.x = -Math.PI / 2
      stripe.position.set(
        x - (numStripes * stripeSpacing) / 2 + i * stripeSpacing,
        0.07,
        z - roadHalfWidth
      )
      this.cityGroup.add(stripe)
    }
    
    // South crosswalk
    for (let i = 0; i < numStripes; i++) {
      const stripe = createMesh(createPlane(stripeWidth, sidewalkWidth), stripeMat, false)
      stripe.rotation.x = -Math.PI / 2
      stripe.position.set(
        x - (numStripes * stripeSpacing) / 2 + i * stripeSpacing,
        0.07,
        z + roadHalfWidth
      )
      this.cityGroup.add(stripe)
    }
    
    // East crosswalk
    for (let i = 0; i < numStripes; i++) {
      const stripe = createMesh(createPlane(sidewalkWidth, stripeWidth), stripeMat, false)
      stripe.rotation.x = -Math.PI / 2
      stripe.position.set(
        x + roadHalfWidth,
        0.07,
        z - (numStripes * stripeSpacing) / 2 + i * stripeSpacing
      )
      this.cityGroup.add(stripe)
    }
    
    // West crosswalk
    for (let i = 0; i < numStripes; i++) {
      const stripe = createMesh(createPlane(sidewalkWidth, stripeWidth), stripeMat, false)
      stripe.rotation.x = -Math.PI / 2
      stripe.position.set(
        x - roadHalfWidth,
        0.07,
        z - (numStripes * stripeSpacing) / 2 + i * stripeSpacing
      )
      this.cityGroup.add(stripe)
    }
  }

  /**
   * Create ground plane
   */
  createGroundPlane(size, cellSize) {
    const groundGeo = createPlane(size * cellSize, size * cellSize)
    const groundMat = createLambertMaterial(0x228b22) // Green grass
    const ground = createMesh(groundGeo, groundMat, false, true)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.1
    this.cityGroup.add(ground)
  }

  /**
   * Print validation and intersection configuration report
   */
  printReport() {
    // Print validation summary
    this.signalValidator.printReport()
    
    // Print each intersection config
    console.log(`\n╔════════════════════════════════════════╗`)
    console.log(`║  INTERSECTION CONFIGURATIONS           ║`)
    console.log(`╚════════════════════════════════════════╝`)
    
    this.intersectionConfigs.forEach(config => {
      config.print()
    })
    
    // Print JSON export option
    console.log(`\n💾 To export intersection data as JSON, run:`)
    console.log(`   city.generator.getIntersectionData()`)
  }

  /**
   * Get all intersection data as JSON
   */
  getIntersectionData() {
    return this.intersectionConfigs.map(config => config.toJSON())
  }

  /**
   * Get traffic controllers for all intersections
   */
  getTrafficControllers() {
    return this.trafficControllers
  }
}
