/**
 * Entity Manager
 * Manages all entities in the simulation
 */
import { ENTITY_TYPES } from '../config/constants.js'

export class EntityManager {
  constructor() {
    this.entities = []
    this.entitiesByType = new Map()
    
    // Initialize type maps
    Object.values(ENTITY_TYPES).forEach((type) => {
      this.entitiesByType.set(type, [])
    })
  }

  /**
   * Add an entity to the manager
   */
  add(entity) {
    this.entities.push(entity)
    
    if (entity.entityType) {
      const typeList = this.entitiesByType.get(entity.entityType)
      if (typeList) {
        typeList.push(entity)
      }
    }
    
    return entity
  }

  /**
   * Remove an entity from the manager
   */
  remove(entity) {
    const index = this.entities.indexOf(entity)
    if (index > -1) {
      this.entities.splice(index, 1)
    }
    
    if (entity.entityType) {
      const typeList = this.entitiesByType.get(entity.entityType)
      if (typeList) {
        const typeIndex = typeList.indexOf(entity)
        if (typeIndex > -1) {
          typeList.splice(typeIndex, 1)
        }
      }
    }
    
    // Cleanup entity resources
    if (entity.dispose) {
      entity.dispose()
    }
  }

  /**
   * Get all entities of a specific type
   */
  getByType(entityType) {
    return this.entitiesByType.get(entityType) || []
  }

  /**
   * Get all entities
   */
  getAll() {
    return this.entities
  }

  /**
   * Update all entities
   */
  update(delta, time) {
    this.entities.forEach((entity) => {
      if (entity.active && entity.update) {
        entity.update(delta, time)
      }
    })
  }

  /**
   * Get entity count
   */
  getCount() {
    return this.entities.length
  }

  /**
   * Get entity count by type
   */
  getCountByType(entityType) {
    const typeList = this.entitiesByType.get(entityType)
    return typeList ? typeList.length : 0
  }

  /**
   * Clear all entities
   */
  clear() {
    this.entities.forEach((entity) => {
      if (entity.dispose) {
        entity.dispose()
      }
    })
    
    this.entities = []
    this.entitiesByType.forEach((list) => {
      list.length = 0
    })
  }
}
