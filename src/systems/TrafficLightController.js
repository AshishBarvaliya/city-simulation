/**
 * Traffic Light Controller
 * Phase-based controller for 4-way intersection with turn lanes
 */
import { TRAFFIC_LIGHT_STATES } from '../config/constants.js'

// Phase definitions
export const PHASES = {
  NS_STRAIGHT_RIGHT: 'NS_STRAIGHT_RIGHT', // North/South straight + right turn
  NS_LEFT: 'NS_LEFT',                      // North/South left turn only
  EW_STRAIGHT_RIGHT: 'EW_STRAIGHT_RIGHT', // East/West straight + right turn
  EW_LEFT: 'EW_LEFT',                      // East/West left turn only
  ALL_RED: 'ALL_RED'                       // Safety clearance interval
}

// Controller states
const STATE = {
  ACTIVE: 'ACTIVE',    // Phase is running
  CLEARING: 'CLEARING' // All-red clearance interval
}

export class TrafficLightController {
  constructor(intersection) {
    this.intersection = intersection
    this.currentPhase = PHASES.NS_STRAIGHT_RIGHT
    this.state = STATE.ACTIVE
    this.timer = 0
    this.active = true // Required for EntityManager
    this.entityType = 'CONTROLLER' // For tracking
    
    // Configurable durations (in seconds)
    this.phaseDurations = {
      [PHASES.NS_STRAIGHT_RIGHT]: 20,
      [PHASES.NS_LEFT]: 10,
      [PHASES.EW_STRAIGHT_RIGHT]: 20,
      [PHASES.EW_LEFT]: 10,
      [PHASES.ALL_RED]: 2
    }
    
    // Phase sequence
    this.phaseSequence = [
      PHASES.NS_STRAIGHT_RIGHT,
      PHASES.NS_LEFT,
      PHASES.EW_STRAIGHT_RIGHT,
      PHASES.EW_LEFT
    ]
    
    this.currentPhaseIndex = 0
    
    // Light references (to be set externally)
    this.lights = {
      north: null,    // NE pole primary (faces South, controls Northbound)
      south: null,    // SW pole primary (faces North, controls Southbound)
      east: null,     // SE pole primary (faces West, controls Eastbound)
      west: null      // NW pole primary (faces East, controls Westbound)
    }
  }
  
  /**
   * Set light references
   */
  setLights(north, south, east, west) {
    this.lights.north = north
    this.lights.south = south
    this.lights.east = east
    this.lights.west = west
    
    // Initialize with first phase now that lights are set
    this.setPhaseLights()
  }
  
  /**
   * Update controller (call every frame)
   */
  update(delta) {
    this.timer += delta
    
    const currentDuration = this.state === STATE.CLEARING 
      ? this.phaseDurations[PHASES.ALL_RED]
      : this.phaseDurations[this.currentPhase]
    
    if (this.timer >= currentDuration) {
      this.timer = 0
      this.advancePhase()
    }
  }
  
  /**
   * Advance to next phase
   */
  advancePhase() {
    if (this.state === STATE.ACTIVE) {
      // Go to clearing state
      this.state = STATE.CLEARING
      this.setAllRed()
    } else {
      // Go to next phase
      this.state = STATE.ACTIVE
      this.currentPhaseIndex = (this.currentPhaseIndex + 1) % this.phaseSequence.length
      this.currentPhase = this.phaseSequence[this.currentPhaseIndex]
      this.setPhaseLights()
    }
  }
  
  /**
   * Set all lights to red (safety clearance)
   */
  setAllRed() {
    if (!this.lights.north) return
    
    // Set all signals to red
    this.setSignalState(this.lights.north, 'primary', TRAFFIC_LIGHT_STATES.RED)
    this.setSignalState(this.lights.north, 'secondary', TRAFFIC_LIGHT_STATES.RED)
    this.setSignalState(this.lights.south, 'primary', TRAFFIC_LIGHT_STATES.RED)
    this.setSignalState(this.lights.south, 'secondary', TRAFFIC_LIGHT_STATES.RED)
    this.setSignalState(this.lights.east, 'primary', TRAFFIC_LIGHT_STATES.RED)
    this.setSignalState(this.lights.east, 'secondary', TRAFFIC_LIGHT_STATES.RED)
    this.setSignalState(this.lights.west, 'primary', TRAFFIC_LIGHT_STATES.RED)
    this.setSignalState(this.lights.west, 'secondary', TRAFFIC_LIGHT_STATES.RED)
  }
  
  /**
   * Set lights for current phase
   */
  setPhaseLights() {
    if (!this.lights.north) return
    
    // First set all to red
    this.setAllRed()
    
    switch (this.currentPhase) {
      case PHASES.NS_STRAIGHT_RIGHT:
        // Northbound: Green (straight + right on primary)
        // Southbound: Green (straight + right on primary)
        // Eastbound: Red
        // Westbound: Red
        this.setSignalState(this.lights.north, 'primary', TRAFFIC_LIGHT_STATES.GREEN)
        this.setSignalState(this.lights.south, 'primary', TRAFFIC_LIGHT_STATES.GREEN)
        break
        
      case PHASES.NS_LEFT:
        // Northbound: Green (left turn - secondary signal? Or use primary with arrow)
        // Southbound: Green (left turn)
        // Eastbound: Red
        // Westbound: Red
        // For simplicity, we'll use the primary signal for left turns
        // In a real system, you'd have separate left-turn arrows
        this.setSignalState(this.lights.north, 'primary', TRAFFIC_LIGHT_STATES.GREEN)
        this.setSignalState(this.lights.south, 'primary', TRAFFIC_LIGHT_STATES.GREEN)
        break
        
      case PHASES.EW_STRAIGHT_RIGHT:
        // Northbound: Red
        // Southbound: Red
        // Eastbound: Green (straight + right)
        // Westbound: Green (straight + right)
        this.setSignalState(this.lights.east, 'primary', TRAFFIC_LIGHT_STATES.GREEN)
        this.setSignalState(this.lights.west, 'primary', TRAFFIC_LIGHT_STATES.GREEN)
        break
        
      case PHASES.EW_LEFT:
        // Northbound: Red
        // Southbound: Red
        // Eastbound: Green (left turn)
        // Westbound: Green (left turn)
        this.setSignalState(this.lights.east, 'primary', TRAFFIC_LIGHT_STATES.GREEN)
        this.setSignalState(this.lights.west, 'primary', TRAFFIC_LIGHT_STATES.GREEN)
        break
    }
  }
  
  /**
   * Set a specific signal state
   */
  setSignalState(light, group, state) {
    if (!light) return
    
    // Call the TrafficLight's method to set state
    if (light.setLightGroupState) {
      light.setLightGroupState(group, state)
    }
  }
  
  /**
   * Get current phase info
   */
  getPhaseInfo() {
    return {
      phase: this.currentPhase,
      state: this.state,
      timeRemaining: this.state === STATE.CLEARING
        ? this.phaseDurations[PHASES.ALL_RED] - this.timer
        : this.phaseDurations[this.currentPhase] - this.timer,
      duration: this.state === STATE.CLEARING
        ? this.phaseDurations[PHASES.ALL_RED]
        : this.phaseDurations[this.currentPhase]
    }
  }
  
  /**
   * Set phase duration
   */
  setPhaseDuration(phase, duration) {
    if (this.phaseDurations[phase] !== undefined) {
      this.phaseDurations[phase] = duration
    }
  }
}
