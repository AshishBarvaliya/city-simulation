import * as THREE from 'three'
import { CONFIG } from './config/config.js'
import { WorldGrid } from './managers/WorldGrid.js'
import { EntityManager } from './managers/EntityManager.js'
import { CityGenerator } from './managers/CityGenerator.js'
import { SpawnManager } from './managers/SpawnManager.js'
import { TrafficSystem } from './systems/TrafficSystem.js'

export class City extends THREE.Group {
  constructor(size = CONFIG.city.gridSize) {
    super()
    
    this.size = size
    
    // Initialize managers
    this.worldGrid = new WorldGrid(size, CONFIG.city.cellSize)
    this.entityManager = new EntityManager()
    this.spawnManager = new SpawnManager(this.entityManager, this)
    this.generator = new CityGenerator(this, this.entityManager, this.worldGrid, this.spawnManager)
    this.trafficSystem = new TrafficSystem(this.entityManager)
    
    // Generate the city
    this.generateCity()
  }

  generateCity() {
    // Generate city layout (buildings, roads, decorations)
    const grid = this.generator.generateCity(this.size)
    
    // Pass traffic controllers to traffic system
    this.trafficSystem.setTrafficControllers(this.generator.getTrafficControllers())
    
    // Spawn dynamic entities
    const cellSize = CONFIG.city.cellSize
    this.spawnManager.spawnCars(grid, cellSize)
    this.spawnManager.spawnPedestrians()
  }

  /**
   * Update all entities in the city
   */
  update(delta, time) {
    this.entityManager.update(delta, time)
    this.trafficSystem.update(delta)
  }

  /**
   * Get entity manager for external access
   */
  getEntityManager() {
    return this.entityManager
  }

  /**
   * Get all entities of a specific type
   */
  getEntitiesByType(entityType) {
    return this.entityManager.getByType(entityType)
  }

  /**
   * Get total entity count
   */
  getEntityCount() {
    return this.entityManager.getCount()
  }
  
  /**
   * Get intersection configuration data
   */
  getIntersectionData() {
    return this.generator.getIntersectionData()
  }
}
