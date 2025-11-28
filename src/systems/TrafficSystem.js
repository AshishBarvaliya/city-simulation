/**
 * Traffic System
 * Manages traffic flow, collision avoidance, and traffic light compliance
 */
import * as THREE from 'three'
import { ENTITY_TYPES, DIRECTIONS, TRAFFIC_LIGHT_STATES, CORNERS } from '../config/constants.js'
import { distance2D } from '../utils/MathUtils.js'

export class TrafficSystem {
  constructor(entityManager) {
    this.entityManager = entityManager
    this.stopDistance = 8 // Distance to stop behind another car
    this.pedestrianStopDistance = 10 // Distance to stop for pedestrians
    this.trafficControllers = [] // Set externally
    this.intersectionDetectionRange = 20 // How far ahead to check for intersections
    this.stopLineOffset = 7.5 // Distance from intersection center to stop line (half cellSize)
  }

  /**
   * Set traffic controllers (called from City after generation)
   */
  setTrafficControllers(controllers) {
    this.trafficControllers = controllers
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
    
    // 1. Check for red traffic lights
    if (this.checkTrafficLights(car)) {
      shouldStop = true
    }
    
    // 2. Check for other cars (if not already stopping for a light)
    if (!shouldStop) {
      for (const otherCar of allCars) {
        if (car === otherCar) continue
        
        if (this.isObstacleInFront(car, otherCar, this.stopDistance)) {
          shouldStop = true
          break
        }
      }
    }
    
    // 3. Check for pedestrians (if not already stopping)
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

  /**
   * Check if car should stop for a red traffic light
   */
  checkTrafficLights(car) {
    if (!this.trafficControllers || this.trafficControllers.length === 0) {
      return false
    }
    
    const carPos = car.position
    const carDir = car.direction // 'NORTH', 'SOUTH', 'EAST', 'WEST'
    const forward = car.getForwardVector()
    
    // Check each intersection
    for (const controller of this.trafficControllers) {
      const intersection = controller.intersection
      if (!intersection || !intersection.position) continue
      
      const intPos = intersection.position
      
      // Calculate distance to intersection
      const toIntersection = new THREE.Vector3()
      toIntersection.subVectors(intPos, carPos)
      const distance = toIntersection.length()
      
      // Skip if intersection is too far or behind us
      if (distance > this.intersectionDetectionRange) continue
      
      // Check if intersection is ahead (dot product check)
      toIntersection.normalize()
      const dot = forward.dot(toIntersection)
      if (dot < 0.7) continue // Not ahead of us
      
      // Find the controlling light for this car's direction
      const controllingLight = this.findControllingLight(controller, carDir)
      if (!controllingLight) continue
      
      // Check the light state
      const lightState = this.getLightState(controllingLight)
      
      // Stop if light is RED or YELLOW and we're before the stop line
      if (lightState === TRAFFIC_LIGHT_STATES.RED || lightState === TRAFFIC_LIGHT_STATES.YELLOW) {
        const stopLineDistance = this.calculateStopLineDistance(carPos, intPos, carDir)
        
        // If we're within range but before the stop line, we should stop
        if (stopLineDistance > 0 && stopLineDistance < this.intersectionDetectionRange) {
          return true
        }
      }
    }
    
    return false
  }

  /**
   * Find which traffic light controls a car based on its direction
   */
  findControllingLight(controller, carDirection) {
    const lights = controller.lights
    
    // Map car direction to controlling pole
    // Northbound (traveling -Z, toward North) → controlled by NE pole (primary, faces South at them)
    // Southbound (traveling +Z, toward South) → controlled by SW pole (primary, faces North at them)
    // Eastbound (traveling +X, toward East) → controlled by SE pole (primary, faces West at them)
    // Westbound (traveling -X, toward West) → controlled by NW pole (primary, faces East at them)
    
    switch (carDirection) {
      case 'NORTH':
        return lights.north // NE pole
      case 'SOUTH':
        return lights.south // SW pole
      case 'EAST':
        return lights.east // SE pole
      case 'WEST':
        return lights.west // NW pole
      default:
        return null
    }
  }

  /**
   * Get the state of a traffic light (check primary signal group)
   */
  getLightState(light) {
    if (!light || !light.primaryMats) {
      return TRAFFIC_LIGHT_STATES.RED // Default to red if unknown
    }
    
    // Check if green light is on
    const greenMat = light.primaryMats.green[0]
    if (greenMat && greenMat.color.getHex() !== 0x00ff00) {
      // Green is off
      const redMat = light.primaryMats.red[0]
      if (redMat && redMat.color.getHex() === 0xff0000) {
        return TRAFFIC_LIGHT_STATES.RED
      }
      const yellowMat = light.primaryMats.yellow[0]
      if (yellowMat && yellowMat.color.getHex() === 0xffff00) {
        return TRAFFIC_LIGHT_STATES.YELLOW
      }
      return TRAFFIC_LIGHT_STATES.RED
    }
    
    return TRAFFIC_LIGHT_STATES.GREEN
  }

  /**
   * Calculate distance from car to stop line
   */
  calculateStopLineDistance(carPos, intPos, carDirection) {
    // Stop line is at the edge of the intersection minus a small buffer
    // Intersection is centered at intPos with size ~15 units
    
    switch (carDirection) {
      case 'NORTH':
        // Traveling North (-Z), stop line is South of intersection (+Z side)
        return intPos.z + this.stopLineOffset - carPos.z
      case 'SOUTH':
        // Traveling South (+Z), stop line is North of intersection (-Z side)
        return carPos.z - (intPos.z - this.stopLineOffset)
      case 'EAST':
        // Traveling East (+X), stop line is West of intersection (-X side)
        return intPos.x + this.stopLineOffset - carPos.x
      case 'WEST':
        // Traveling West (-X), stop line is East of intersection (+X side)
        return carPos.x - (intPos.x - this.stopLineOffset)
      default:
        return 999 // Unknown direction, don't stop
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
