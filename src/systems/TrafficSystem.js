/**
 * Traffic System
 * Manages traffic flow and collision avoidance
 */
import * as THREE from 'three'
import { ENTITY_TYPES, DIRECTIONS } from '../config/constants.js'
import { distance2D } from '../utils/MathUtils.js'

export class TrafficSystem {
  constructor(entityManager) {
    this.entityManager = entityManager
    this.stopDistance = 8 // Distance to stop behind another car
    this.pedestrianStopDistance = 10 // Distance to stop for pedestrians
  }

  update(delta) {
    const cars = this.entityManager.getByType(ENTITY_TYPES.CAR)
    const pedestrians = this.entityManager.getByType(ENTITY_TYPES.PEDESTRIAN)
    
    cars.forEach(car => {
      this.checkCollisions(car, cars, pedestrians)
    })
  }

  checkCollisions(car, allCars, allPedestrians) {
    // Assume path is clear initially
    let shouldStop = false
    
    // 1. Check for other cars
    for (const otherCar of allCars) {
      if (car === otherCar) continue
      
      if (this.isObstacleInFront(car, otherCar, this.stopDistance)) {
        shouldStop = true
        break
      }
    }
    
    // 2. Check for pedestrians (if not already stopping for a car)
    if (!shouldStop) {
      for (const ped of allPedestrians) {
        if (this.isObstacleInFront(car, ped, this.pedestrianStopDistance)) {
          shouldStop = true
          break
        }
      }
    }
    
    // Apply state
    if (shouldStop) {
      car.stop()
    } else {
      car.resume()
    }
  }

  isObstacleInFront(car, obstacle, checkDistance) {
    // Get car's forward direction vector
    const forward = car.getForwardVector()
    
    // Vector to obstacle
    const toObstacle = new THREE.Vector3()
    toObstacle.subVectors(obstacle.position, car.position)
    
    // Distance check
    const dist = toObstacle.length()
    if (dist > checkDistance) return false
    
    // Direction check (dot product)
    // If dot product is positive, obstacle is in front (roughly)
    // We want a narrower cone, so we check if dot product is close to 1 (normalized)
    toObstacle.normalize()
    const dot = forward.dot(toObstacle)
    
    // Angle check: dot > 0.8 means within ~37 degrees cone
    // Also check lateral distance to ensure it's in the same lane
    // But for simplicity, the cone check works well for now
    return dot > 0.9
  }
}
