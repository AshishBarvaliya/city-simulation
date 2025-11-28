/**
 * Signal Validator System
 * Validates traffic signal placement and orientation according to MUTCD standards
 */
import * as THREE from 'three'
import { TRAFFIC_APPROACHES, VALIDATION } from '../config/constants.js'

export class SignalValidator {
  constructor() {
    this.validationResults = []
  }

  /**
   * Master validation method
   */
  isValid(trafficLight, intersection, cityGrid = null) {
    const results = {
      signal: trafficLight,
      corner: trafficLight.corner,
      checks: {},
      valid: true,
      errors: [],
    }

    // Check alignment
    const alignmentCheck = this.validateSignalAlignment(trafficLight)
    results.checks.alignment = alignmentCheck
    if (!alignmentCheck.valid) {
      results.valid = false
      results.errors.push(alignmentCheck.error)
    }

    // Check elevation
    const elevationCheck = this.validateElevation(trafficLight)
    results.checks.elevation = elevationCheck
    if (!elevationCheck.valid) {
      results.valid = false
      results.errors.push(elevationCheck.error)
    }

    // Check not facing away from road
    const directionCheck = this.validateFacingRoad(trafficLight)
    results.checks.direction = directionCheck
    if (!directionCheck.valid) {
      results.valid = false
      results.errors.push(directionCheck.error)
    }

    this.validationResults.push(results)
    return results
  }

  /**
   * Validate signal alignment with incoming traffic within ±5°
   */
  validateSignalAlignment(trafficLight) {
    const approach = TRAFFIC_APPROACHES[trafficLight.corner]
    const expectedDirection = approach.incoming
    
    // Get signal's forward vector
    const forwardVector = trafficLight.getForwardVector()
    
    // Calculate angle between expected and actual
    const expectedVec = new THREE.Vector3(expectedDirection.x, 0, expectedDirection.z)
    const actualVec = new THREE.Vector3(forwardVector.x, 0, forwardVector.z)
    
    // Normalize
    expectedVec.normalize()
    actualVec.normalize()
    
    // Calculate angle in degrees
    const angleDiff = Math.acos(expectedVec.dot(actualVec)) * (180 / Math.PI)
    
    const tolerance = VALIDATION.ALIGNMENT_TOLERANCE_DEGREES
    const valid = angleDiff <= tolerance
    
    return {
      valid,
      angleDiff: angleDiff.toFixed(2),
      tolerance,
      error: valid ? null : `Signal alignment off by ${angleDiff.toFixed(2)}° (tolerance: ±${tolerance}°)`,
    }
  }

  /**
   * Validate signal is at correct elevation
   */
  validateElevation(trafficLight) {
    const signalBox = trafficLight.mastSignal || trafficLight.signalBox
    if (!signalBox) {
      return {
        valid: false,
        elevation: 'N/A',
        range: 'N/A',
        error: 'Could not find signal box for elevation check'
      }
    }
    
    const signalElevation = signalBox.getWorldPosition(new THREE.Vector3()).y
    
    const valid = signalElevation >= VALIDATION.MIN_SIGNAL_ELEVATION && 
                  signalElevation <= VALIDATION.MAX_SIGNAL_ELEVATION
    
    return {
      valid,
      elevation: signalElevation.toFixed(2),
      range: `${VALIDATION.MIN_SIGNAL_ELEVATION}-${VALIDATION.MAX_SIGNAL_ELEVATION}`,
      error: valid ? null : `Signal elevation ${signalElevation.toFixed(2)}m outside valid range`,
    }
  }

  /**
   * Validate signal is facing the road (not away)
   */
  validateFacingRoad(trafficLight) {
    const forwardVector = trafficLight.getForwardVector()
    const approach = TRAFFIC_APPROACHES[trafficLight.corner]
    
    // Check if signal faces roughly toward the intersection center (0, 0)
    // by checking if it's facing the expected incoming direction
    const expectedX = approach.incoming.x
    const expectedZ = approach.incoming.z
    
    // The forward vector should be opposite to the incoming traffic
    // (signal faces against traffic flow)
    const facingCorrectDirection = 
      (expectedX !== 0 && Math.sign(forwardVector.x) === -Math.sign(expectedX)) ||
      (expectedZ !== 0 && Math.sign(forwardVector.z) === -Math.sign(expectedZ))
    
    return {
      valid: facingCorrectDirection,
      forwardVector: `(${forwardVector.x.toFixed(2)}, ${forwardVector.z.toFixed(2)})`,
      expectedOpposite: `(${-expectedX}, ${-expectedZ})`,
      error: facingCorrectDirection ? null : 'Signal not facing incoming traffic',
    }
  }

  /**
   * Get validation summary
   */
  getSummary() {
    const total = this.validationResults.length
    const valid = this.validationResults.filter(r => r.valid).length
    const invalid = total - valid
    
    return {
      total,
      valid,
      invalid,
      validationRate: (valid / total * 100).toFixed(1) + '%',
    }
  }

  /**
   * Print validation report
   */
  printReport() {
    console.log(`\n╔════════════════════════════════════════╗`)
    console.log(`║  SIGNAL VALIDATION REPORT              ║`)
    console.log(`╚════════════════════════════════════════╝`)
    
    const summary = this.getSummary()
    console.log(`\n📊 Summary:`)
    console.log(`   Total Signals: ${summary.total}`)
    console.log(`   ✅ Valid: ${summary.valid}`)
    console.log(`   ❌ Invalid: ${summary.invalid}`)
    console.log(`   Validation Rate: ${summary.validationRate}`)
    
    const invalidSignals = this.validationResults.filter(r => !r.valid)
    if (invalidSignals.length > 0) {
      console.log(`\n⚠️  Invalid Signals:`)
      invalidSignals.forEach((result, i) => {
        console.log(`\n   ${i + 1}. Corner: ${result.corner}`)
        result.errors.forEach(error => {
          console.log(`      ❌ ${error}`)
        })
      })
    } else {
      console.log(`\n✅ All signals passed validation!`)
    }
    console.log(`\n${'─'.repeat(50)}\n`)
  }
}
