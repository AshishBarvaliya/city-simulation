/**
 * Collision System
 * Prevents cars from crashing into each other
 */
import * as THREE from 'three'

export class CollisionSystem {
  constructor(entityManager) {
    this.entityManager = entityManager
    this.minDistance = 4.0 // Minimum distance between cars
  }

  update(delta) {
    const cars = this.entityManager.getByType('CAR')
    
    // Simple O(N^2) check for now (optimization: spatial grid)
    for (let i = 0; i < cars.length; i++) {
      const carA = cars[i]
      if (!carA.active) continue
      
      let blocked = false
      
      for (let j = 0; j < cars.length; j++) {
        if (i === j) continue
        const carB = cars[j]
        if (!carB.active) continue
        
        // Check if carB is in front of carA
        if (this.isCarInFront(carA, carB)) {
          blocked = true
          break
        }
      }
      
      if (blocked) {
        carA.stop()
      } else {
        // Only resume if not stopped by traffic light or other logic
        // We need a way to distinguish "stopped by collision" vs "stopped by light"
        // For now, let's assume collision stop overrides everything, 
        // and resumption happens if clear.
        // But Car.js has `isStopped`.
        // Let's add `isBlocked` to Car.js?
        // Or just call stop/resume and let Car handle state.
        // If we call resume(), it might override a red light stop.
        // Safer: carA.setBlocked(blocked)
        if (carA.setBlocked) {
            carA.setBlocked(false)
        } else {
            carA.resume()
        }
      }
      
      if (blocked && carA.setBlocked) {
          carA.setBlocked(true)
      }
    }
  }
  
  isCarInFront(carA, carB) {
    // Vector from A to B
    const vec = new THREE.Vector3().subVectors(carB.position, carA.position)
    const dist = vec.length()
    
    if (dist > this.minDistance) return false
    
    // Check angle to see if B is actually "ahead"
    // Dot product of A's forward vector and vector to B
    const forward = carA.getForwardVector()
    const dot = forward.dot(vec.normalize())
    
    // If dot > 0.8, it's roughly in front (within ~37 degrees)
    // Also need to check lateral distance (lane check)
    // If we are in the same lane, lateral distance should be small.
    // Project vec onto right vector?
    
    if (dot > 0.8) {
        return true
    }
    
    return false
  }
}
