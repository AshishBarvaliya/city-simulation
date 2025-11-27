/**
 * Base Entity Class
 * Abstract base class for all simulation entities
 */
import * as THREE from 'three'
import { CONFIG } from '../config/config.js'
import { wrapValue } from '../utils/MathUtils.js'

export class BaseEntity extends THREE.Group {
  constructor(entityType) {
    super()
    
    this.entityType = entityType
    this.speed = 0
    this.active = true
    this.maxBoundary = CONFIG.simulation.maxBoundary
  }

  /**
   * Enable shadow casting for this entity
   */
  enableShadows(castShadow = true, receiveShadow = false) {
    this.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = castShadow
        child.receiveShadow = receiveShadow
      }
    })
  }

  /**
   * Wrap position within world boundaries
   */
  wrapPosition() {
    this.position.x = wrapValue(this.position.x, -this.maxBoundary, this.maxBoundary)
    this.position.z = wrapValue(this.position.z, -this.maxBoundary, this.maxBoundary)
  }

  /**
   * Check if entity is within boundaries
   */
  isInBounds() {
    return (
      Math.abs(this.position.x) <= this.maxBoundary &&
      Math.abs(this.position.z) <= this.maxBoundary
    )
  }

  /**
   * Move forward in the direction the entity is facing
   */
  moveForward(delta) {
    this.translateZ(this.speed * delta)
  }

  /**
   * Update method to be overridden by subclasses
   */
  update(delta, time) {
    // Override in subclasses
  }

  /**
   * Cleanup method for when entity is removed
   */
  dispose() {
    this.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (child.geometry) child.geometry.dispose()
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => mat.dispose())
          } else {
            child.material.dispose()
          }
        }
      }
    })
  }
}
