/**
 * Intersection Configuration Data Structure
 * Stores detailed information about each intersection including lanes, signals, and timing
 */
import { TRAFFIC_APPROACHES } from '../config/constants.js'

export class IntersectionConfig {
  constructor(position, intersectionId) {
    this.intersectionId = intersectionId
    this.position = { x: position.x, y: position.y || 0, z: position.z }
    this.lanes = this.initializeLanes()
    this.signals = []
    this.pedestrianSignals = []
    this.timingPlan = {
      redDuration: 5,
      yellowDuration: 1,
      greenDuration: 5,
      cycleTime: 11,
    }
  }

  initializeLanes() {
    return [
      {
        direction: 'NORTHBOUND',
        incomingVector: { x: 0, z: -1 },
        outgoingVector: { x: 0, z: 1 },
      },
      {
        direction: 'SOUTHBOUND',
        incomingVector: { x: 0, z: 1 },
        outgoingVector: { x: 0, z: -1 },
      },
      {
        direction: 'EASTBOUND',
        incomingVector: { x: 1, z: 0 },
        outgoingVector: { x: -1, z: 0 },
      },
      {
        direction: 'WESTBOUND',
        incomingVector: { x: -1, z: 0 },
        outgoingVector: { x: 1, z: 0 },
      },
    ]
  }

  addSignal(corner, position, rotation, mastArm, validated = false) {
    const approach = TRAFFIC_APPROACHES[corner]
    
    this.signals.push({
      corner,
      position: { x: position.x, y: position.y, z: position.z },
      rotation: { x: rotation.x || 0, y: rotation.y, z: rotation.z || 0 },
      mastArm: {
        direction: mastArm.direction,
        length: mastArm.length,
      },
      controlsLane: approach.controls,
      facingDirection: approach.faces,
      validated,
    })
  }

  addPedestrianSignal(corner, position, rotation, facingDirection) {
    this.pedestrianSignals.push({
      corner,
      position: { x: position.x, y: position.y, z: position.z },
      rotation: { x: rotation.x || 0, y: rotation.y, z: rotation.z || 0 },
      facingDirection,
    })
  }

  toJSON() {
    return {
      intersectionId: this.intersectionId,
      position: this.position,
      lanes: this.lanes,
      signals: this.signals,
      pedestrianSignals: this.pedestrianSignals,
      timingPlan: this.timingPlan,
      validationStatus: {
        totalSignals: this.signals.length,
        validatedSignals: this.signals.filter(s => s.validated).length,
        validationRate: this.signals.filter(s => s.validated).length / this.signals.length,
      },
    }
  }

  print() {
    // Print disabled
  }
}
