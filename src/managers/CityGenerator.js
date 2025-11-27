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

export class CityGenerator {
  constructor(cityGroup, entityManager, spawnManager = null) {
    this.cityGroup = cityGroup
    this.entityManager = entityManager
    this.spawnManager = spawnManager
    this.signalValidator = new SignalValidator()
    this.intersectionConfigs = []
    this.intersectionCount = 0
  }

  /**
   * Generate the entire city
   */
  generateCity(size) {
    const grid = this.createGrid(size)
    const cellSize = CONFIG.city.cellSize
    
    // Generate buildings and roads
    for (let x = 0; x < size; x++) {
      for (let z = 0; z < size; z++) {
        const type = grid[x][z]
        const posX = (x - size / 2) * cellSize
        const posZ = (z - size / 2) * cellSize
        
        if (type === 'BUILDING') {
          this.createBuildingCell(posX, posZ, cellSize)
        } else if (type === 'ROAD') {
          this.createRoadCell(x, z, grid, size, posX, posZ, cellSize)
        }
      }
    }
    
    // Add ground plane
    this.createGroundPlane(size, cellSize)
    
    // Print validation report
    this.printReport()
    
    return grid
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
  createBuildingCell(x, z, cellSize) {
    const building = new Building()
    building.position.set(x, 0, z)
    this.cityGroup.add(building)
    this.entityManager.add(building)
    
    // Register building position with spawn manager for collision detection
    if (this.spawnManager) {
      this.spawnManager.registerBuilding(building)
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
    
    corners.forEach((corner) => {
      const light = new TrafficLight(corner)
      light.position.x += x
      light.position.z += z
      
      // Always add the traffic light (validation is optional)
      this.cityGroup.add(light)
      this.entityManager.add(light)
      
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
}
