import * as THREE from 'three'
import { BaseEntity } from './entities/BaseEntity.js'
import { CONFIG } from './config/config.js'
import { ENTITY_TYPES, DIRECTIONS, ROTATIONS } from './config/constants.js'
import { randomRange } from './utils/MathUtils.js'

export class Car extends BaseEntity {
  constructor(position, rotation) {
    super(ENTITY_TYPES.CAR)
    
    this.type = ['SEDAN', 'HATCHBACK', 'TRUCK'][Math.floor(Math.random() * 3)]
    this.color = new THREE.Color(Math.random(), Math.random(), Math.random())
    
    // Set random speed from config
    this.speed = randomRange(CONFIG.car.minSpeed, CONFIG.car.maxSpeed)
    
    // Determine initial direction based on rotation
    this.direction = this.getDirectionFromRotation(rotation || 0)
    
    this.createCar()
    
    if (position) this.position.copy(position)
    if (rotation) this.rotation.y = rotation
    
    // Enable shadows
    this.enableShadows(true, false)

    // Pathfinding properties
    this.path = []
    this.targetNode = null
    this.isTurning = false
    this.turnProgress = 0
    this.startRotation = 0
    this.targetRotation = 0
    this.turnDuration = 1.5 // Slower turn for better visualization
    this.isBlocked = false // Blocked by collision
    
    // Bezier curve points for turning
    this.turnStartPos = new THREE.Vector3()
    this.turnControlPos1 = new THREE.Vector3()
    this.turnControlPos2 = new THREE.Vector3()
    this.turnEndPos = new THREE.Vector3()
  }

  getDirectionFromRotation(rotation) {
    let r = rotation % (Math.PI * 2)
    if (r < 0) r += Math.PI * 2
    
    if (Math.abs(r - ROTATIONS.NORTH) < 0.1) return DIRECTIONS.NORTH
    if (Math.abs(r - ROTATIONS.SOUTH) < 0.1) return DIRECTIONS.SOUTH
    if (Math.abs(r - ROTATIONS.EAST) < 0.1 || Math.abs(r - (ROTATIONS.EAST + Math.PI*2)) < 0.1) return DIRECTIONS.EAST
    if (Math.abs(r - ROTATIONS.WEST) < 0.1) return DIRECTIONS.WEST
    
    return DIRECTIONS.NORTH
  }

  createCar() {
    const mainMat = new THREE.MeshLambertMaterial({ color: this.color })
    const glassMat = new THREE.MeshLambertMaterial({ color: 0x88ccff })
    const borderMat = new THREE.MeshLambertMaterial({ color: 0x111111 })
    const wheelMat = new THREE.MeshLambertMaterial({ color: 0x333333 })
    const lightWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffcc })
    const lightRedMat = new THREE.MeshBasicMaterial({ color: 0xff0000 })

    // Chassis
    const chassisGeo = new THREE.BoxGeometry(2, 0.5, 4)
    const chassis = new THREE.Mesh(chassisGeo, mainMat)
    chassis.position.y = 0.5
    chassis.castShadow = true
    this.add(chassis)

    // Cabin
    let cabinGeo, cabinZ, cabinY, cabinLength, cabinWidth, cabinHeight
    
    if (this.type === 'SEDAN') {
      cabinLength = 2
      cabinWidth = 1.8
      cabinHeight = 0.6
      cabinZ = 0
      cabinY = 1.05
    } else if (this.type === 'HATCHBACK') {
      cabinLength = 2.5
      cabinWidth = 1.8
      cabinHeight = 0.6
      cabinZ = -0.5
      cabinY = 1.05
    } else if (this.type === 'TRUCK') {
      cabinLength = 1.5
      cabinWidth = 1.9
      cabinHeight = 0.8
      cabinZ = 1
      cabinY = 1.15
      
      // Truck bed
      const bedGeo = new THREE.BoxGeometry(1.9, 0.4, 2)
      const bed = new THREE.Mesh(bedGeo, new THREE.MeshLambertMaterial({ color: 0x555555 }))
      bed.position.set(0, 0.9, -0.8)
      this.add(bed)
    }

    cabinGeo = new THREE.BoxGeometry(cabinWidth, cabinHeight, cabinLength)
    const cabin = new THREE.Mesh(cabinGeo, mainMat)
    cabin.position.set(0, cabinY, cabinZ)
    cabin.castShadow = true
    this.add(cabin)

    // Side Windows
    const sideWindowGeo = new THREE.BoxGeometry(cabinWidth + 0.02, cabinHeight - 0.2, cabinLength - 0.4)
    const sideWindowBorder = new THREE.Mesh(sideWindowGeo, borderMat)
    sideWindowBorder.position.set(0, cabinY, cabinZ)
    this.add(sideWindowBorder)

    const sideGlassGeo = new THREE.BoxGeometry(cabinWidth + 0.04, cabinHeight - 0.3, cabinLength - 0.5)
    const sideGlass = new THREE.Mesh(sideGlassGeo, glassMat)
    sideGlass.position.set(0, cabinY, cabinZ)
    this.add(sideGlass)

    // Windshield (Front)
    const frontWindowGeo = new THREE.BoxGeometry(cabinWidth - 0.2, cabinHeight - 0.2, 0.1)
    const frontWindowBorder = new THREE.Mesh(frontWindowGeo, borderMat)
    frontWindowBorder.position.set(0, cabinY, cabinZ + cabinLength/2 + 0.01)
    this.add(frontWindowBorder)

    const frontGlassGeo = new THREE.BoxGeometry(cabinWidth - 0.3, cabinHeight - 0.3, 0.1)
    const frontGlass = new THREE.Mesh(frontGlassGeo, glassMat)
    frontGlass.position.set(0, cabinY, cabinZ + cabinLength/2 + 0.02)
    this.add(frontGlass)

    // Rear Window
    if (this.type !== 'TRUCK') {
      const rearWindowGeo = new THREE.BoxGeometry(cabinWidth - 0.2, cabinHeight - 0.2, 0.1)
      const rearWindowBorder = new THREE.Mesh(rearWindowGeo, borderMat)
      rearWindowBorder.position.set(0, cabinY, cabinZ - cabinLength/2 - 0.01)
      this.add(rearWindowBorder)

      const rearGlassGeo = new THREE.BoxGeometry(cabinWidth - 0.3, cabinHeight - 0.3, 0.1)
      const rearGlass = new THREE.Mesh(rearGlassGeo, glassMat)
      rearGlass.position.set(0, cabinY, cabinZ - cabinLength/2 - 0.02)
      this.add(rearGlass)
    } else {
      // Truck rear window
      const rearWindowGeo = new THREE.BoxGeometry(cabinWidth - 0.2, cabinHeight - 0.3, 0.1)
      const rearWindowBorder = new THREE.Mesh(rearWindowGeo, borderMat)
      rearWindowBorder.position.set(0, cabinY + 0.1, cabinZ - cabinLength/2 - 0.01)
      this.add(rearWindowBorder)

      const rearGlassGeo = new THREE.BoxGeometry(cabinWidth - 0.3, cabinHeight - 0.4, 0.1)
      const rearGlass = new THREE.Mesh(rearGlassGeo, glassMat)
      rearGlass.position.set(0, cabinY + 0.1, cabinZ - cabinLength/2 - 0.02)
      this.add(rearGlass)
    }

    // Interior Details (Left-Hand Drive)
    // Driver is on the Left (+X in local space if facing +Z)
    
    // Steering Wheel
    const wheelColor = 0x111111
    const steeringWheelGeo = new THREE.TorusGeometry(0.15, 0.02, 8, 16)
    const steeringWheelMat = new THREE.MeshLambertMaterial({ color: wheelColor })
    const steeringWheel = new THREE.Mesh(steeringWheelGeo, steeringWheelMat)
    
    // Position: Left side (+X), Front of cabin (+Z), slightly down
    steeringWheel.position.set(0.45, cabinY - 0.1, cabinZ + cabinLength/2 - 0.4)
    steeringWheel.rotation.x = -Math.PI / 4 // Angled towards driver
    this.add(steeringWheel)
    
    // Driver Seat (Headrest/Back)
    const seatGeo = new THREE.BoxGeometry(0.5, 0.6, 0.1)
    const seatMat = new THREE.MeshLambertMaterial({ color: 0x333333 })
    const driverSeat = new THREE.Mesh(seatGeo, seatMat)
    driverSeat.position.set(0.45, cabinY - 0.1, cabinZ - 0.2)
    this.add(driverSeat)
    
    // Passenger Seat
    const passengerSeat = new THREE.Mesh(seatGeo, seatMat)
    passengerSeat.position.set(-0.45, cabinY - 0.1, cabinZ - 0.2)
    this.add(passengerSeat)

    // Wheels
    const wheelGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.3, 16)
    wheelGeo.rotateZ(Math.PI / 2)
    
    const wheelPositions = [
      [1, 0.35, 1.2],
      [-1, 0.35, 1.2],
      [1, 0.35, -1.2],
      [-1, 0.35, -1.2]
    ]
    
    wheelPositions.forEach(pos => {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat)
      wheel.position.set(...pos)
      wheel.castShadow = true
      this.add(wheel)
    })

    // Headlights
    const headLightGeo = new THREE.BoxGeometry(0.4, 0.2, 0.1)
    const hl1 = new THREE.Mesh(headLightGeo, lightWhiteMat)
    hl1.position.set(0.6, 0.6, 2.0)
    this.add(hl1)

    const hl2 = new THREE.Mesh(headLightGeo, lightWhiteMat)
    hl2.position.set(-0.6, 0.6, 2.0)
    this.add(hl2)

    // Taillights
    const tailLightGeo = new THREE.BoxGeometry(0.4, 0.2, 0.1)
    
    // Create emissive material for brake lights
    this.tailLightMat = new THREE.MeshLambertMaterial({ 
      color: 0xff0000,
      emissive: 0x550000,
      emissiveIntensity: 0.5
    })
    
    const tl1 = new THREE.Mesh(tailLightGeo, this.tailLightMat)
    tl1.position.set(0.6, 0.6, -2.0)
    this.add(tl1)

    const tl2 = new THREE.Mesh(tailLightGeo, this.tailLightMat)
    tl2.position.set(-0.6, 0.6, -2.0)
    this.add(tl2)
    
    this.brakeLights = [tl1, tl2]

    // Indicators (Turn Signals)
    this.indicatorMat = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    this.indicators = { left: [], right: [] }
    this.indicatorState = 'OFF' // 'LEFT', 'RIGHT', 'OFF'
    this.indicatorTimer = 0
    this.indicatorBlinkRate = 0.5 // Seconds per blink

    const indicatorGeo = new THREE.BoxGeometry(0.15, 0.15, 0.05)
    
    // Front Left
    const flInd = new THREE.Mesh(indicatorGeo, this.indicatorMat)
    flInd.position.set(0.9, 0.6, 1.95)
    flInd.visible = false
    this.add(flInd)
    this.indicators.left.push(flInd)
    
    // Front Right
    const frInd = new THREE.Mesh(indicatorGeo, this.indicatorMat)
    frInd.position.set(-0.9, 0.6, 1.95)
    frInd.visible = false
    this.add(frInd)
    this.indicators.right.push(frInd)
    
    // Rear Left
    const rlInd = new THREE.Mesh(indicatorGeo, this.indicatorMat)
    rlInd.position.set(0.9, 0.6, -1.95)
    rlInd.visible = false
    this.add(rlInd)
    this.indicators.left.push(rlInd)
    
    // Rear Right
    const rrInd = new THREE.Mesh(indicatorGeo, this.indicatorMat)
    rrInd.position.set(-0.9, 0.6, -1.95)
    rrInd.visible = false
    this.add(rrInd)
    this.indicators.right.push(rrInd)

    // Number Plates
    const plateGeo = new THREE.PlaneGeometry(0.6, 0.2)
    const plateMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    
    const plate1 = new THREE.Mesh(plateGeo, plateMat)
    plate1.position.set(0, 0.4, 2.01)
    this.add(plate1)

    const plate2 = new THREE.Mesh(plateGeo, plateMat)
    plate2.position.set(0, 0.4, -2.01)
    plate2.rotation.y = Math.PI
    this.add(plate2)
  }

  update(delta, time) {
    if (this.isStopped || this.isBlocked) {
      this.updateIndicators(delta)
      return
    }
    
    if (this.path.length > 0 || this.targetNode) {
      this.followPath(delta)
    } else {
      // Fallback if no path (shouldn't happen with new logic, but safe to keep)
      this.moveForward(delta)
      this.wrapPosition()
    }
    
    this.updateIndicators(delta)
  }

  setPath(path) {
    this.path = path
    if (this.path.length > 0) {
      this.targetNode = this.path.shift()
    }
  }

  followPath(delta) {
    if (!this.targetNode) return

    if (this.isTurning) {
      this.handleTurn(delta)
      return
    }

    // Move towards target node
    const targetX = this.targetNode.x
    const targetZ = this.targetNode.z
    
    const dx = targetX - this.position.x
    const dz = targetZ - this.position.z
    const distance = Math.sqrt(dx * dx + dz * dz)
    
    // Threshold to consider "arrived" at node
    // Must be large enough to account for lane offsets (up to ~6 units)
    // Using half road width is a safe bet
    const arrivalThreshold = CONFIG.city.roadWidth / 2
    
    if (distance < arrivalThreshold) {
      // Arrived at node
      if (this.path.length > 0) {
        // Get next node
        const nextNode = this.path.shift()
        
        // Determine if we need to turn
        const currentDir = this.direction
        const nextDir = this.getDirectionTo(nextNode)
        
        if (currentDir !== nextDir) {
          this.initiateTurn(nextDir, nextNode)
        } else {
          this.targetNode = nextNode
        }
      } else {
        // Reached destination
        this.onDestinationReached()
      }
    } else {
      // Move forward
      this.moveForward(delta)
    }
  }

  getDirectionTo(node) {
    const dx = node.x - this.position.x
    const dz = node.z - this.position.z
    
    if (Math.abs(dx) > Math.abs(dz)) {
      return dx > 0 ? DIRECTIONS.EAST : DIRECTIONS.WEST
    } else {
      return dz > 0 ? DIRECTIONS.SOUTH : DIRECTIONS.NORTH
    }
  }

  initiateTurn(newDirection, nextNode) {
    this.isTurning = true
    this.turnProgress = 0
    this.startRotation = this.rotation.y
    this.targetNode = nextNode // We are turning TOWARDS this node
    
    // Determine target rotation
    switch (newDirection) {
      case DIRECTIONS.NORTH: this.targetRotation = ROTATIONS.NORTH; break;
      case DIRECTIONS.SOUTH: this.targetRotation = ROTATIONS.SOUTH; break;
      case DIRECTIONS.EAST: this.targetRotation = ROTATIONS.EAST; break;
      case DIRECTIONS.WEST: this.targetRotation = ROTATIONS.WEST; break;
    }
    
    // Handle wrap-around rotation
    let diff = this.targetRotation - this.startRotation
    if (diff > Math.PI) diff -= Math.PI * 2
    if (diff < -Math.PI) diff += Math.PI * 2
    this.targetRotation = this.startRotation + diff
    
    // Calculate Bezier Curve Points
    this.turnStartPos.copy(this.position)
    
    // Determine Turn Direction (Left/Right)
    const turnDir = this.getTurnDirection(this.direction, newDirection)
    
    // Calculate End Position (Target Lane on New Road)
    // LEFT Turn -> OUTER Lane (5.625) - wide sweep to far side of road
    // RIGHT Turn -> INNER Lane (1.875) - tight turn to near side
    // We use constants to ensure alignment
    const laneOffset = turnDir === 'LEFT' ? 5.625 : 1.875
    
    // Intersection center
    const cx = nextNode.x
    const cz = nextNode.z
    
    // Calculate End Pos based on New Direction
    // We need to be "past" the intersection center in the new direction
    // plus the lane offset perpendicular to it.
    
    // Distance to move past center to complete turn
    // LEFT turns go DEEPER into intersection (wider arc to reach far side)
    // RIGHT turns EXIT EARLIER (tighter arc, already near correct lane)
    const exitDistance = turnDir === 'LEFT' ? 
        CONFIG.city.roadWidth / 2 + 4 :  // ~11.5 units for left turns
        CONFIG.city.roadWidth / 2 - 1    // ~6.5 units for right turns
    
    this.turnEndPos.set(cx, 0, cz)
    
    // CORRECTED OFFSETS for Right-Hand Traffic
    if (newDirection === DIRECTIONS.NORTH) {
        this.turnEndPos.z -= exitDistance // Moving North
        this.turnEndPos.x += laneOffset   // Right side is +X (East)
    } else if (newDirection === DIRECTIONS.SOUTH) {
        this.turnEndPos.z += exitDistance // Moving South
        this.turnEndPos.x -= laneOffset   // Right side is -X (West)
    } else if (newDirection === DIRECTIONS.EAST) {
        this.turnEndPos.x += exitDistance // Moving East
        this.turnEndPos.z += laneOffset   // Right side is +Z (South)
    } else if (newDirection === DIRECTIONS.WEST) {
        this.turnEndPos.x -= exitDistance // Moving West
        this.turnEndPos.z -= laneOffset   // Right side is -Z (North)
    }
    
    // Calculate Cubic Bezier Control Points
    // P0: Start
    // P1: Start + Forward * (Dist/2)
    // P2: End - Forward(New) * (Dist/2)
    // P3: End
    
    // We need a "corner distance" to project the control points.
    // Ideally, they should meet at the corner, but for a smooth curve, 
    // we project them about 60% of the way to the corner.
    // Or simpler: Project them straight out from start and straight back from end.
    // The intersection of these lines is the corner.
    // Distance to corner:
    let distToCorner = 0
    if (this.direction === DIRECTIONS.NORTH || this.direction === DIRECTIONS.SOUTH) {
        distToCorner = Math.abs(this.turnStartPos.z - cz)
    } else {
        distToCorner = Math.abs(this.turnStartPos.x - cx)
    }
    
    // Use a fraction of the distance to corner for control points
    // LEFT turns need WIDER curves to reach the far side of the road
    // RIGHT turns need TIGHTER curves for immediate lane change
    const controlDistFactor = turnDir === 'LEFT' ? 0.75 : 0.4
    const controlDist = distToCorner * controlDistFactor
    
    // Control Point 1: Start + Forward * controlDist
    const forward = this.getForwardVector()
    this.turnControlPos1.copy(this.turnStartPos).add(forward.multiplyScalar(controlDist))
    
    // Control Point 2: End - Forward(New) * controlDist
    // We need forward vector of new direction
    const newForward = new THREE.Vector3(0, 0, 1)
    if (newDirection === DIRECTIONS.NORTH) newForward.set(0, 0, -1)
    if (newDirection === DIRECTIONS.SOUTH) newForward.set(0, 0, 1)
    if (newDirection === DIRECTIONS.EAST) newForward.set(1, 0, 0)
    if (newDirection === DIRECTIONS.WEST) newForward.set(-1, 0, 0)
    
    this.turnControlPos2.copy(this.turnEndPos).sub(newForward.multiplyScalar(controlDist))
    
    // Calculate Turn Duration based on Arc Length
    // Estimate arc length as distance between start and end (linear) * factor
    // Or just Manhattan distance?
    // Bezier arc length is complex, but dist(start, control) + dist(control, end) is a safe upper bound.
    // Let's use chord length * 1.5 for cubic
    const dist = this.turnStartPos.distanceTo(this.turnEndPos) * 1.5
    this.turnDuration = dist / this.speed
    
    // Set indicator
    this.setTurnSignal(turnDir)
    
    this.direction = newDirection
  }

  getTurnDirection(from, to) {
    // Determine if turning left or right
    // NORTH(0) -> EAST(1) = RIGHT, NORTH -> WEST(3) = LEFT
    // SOUTH(2) -> WEST(3) = RIGHT, SOUTH -> EAST(1) = LEFT
    // EAST(1) -> SOUTH(2) = RIGHT, EAST -> NORTH(0) = LEFT
    // WEST(3) -> NORTH(0) = RIGHT, WEST -> SOUTH(2) = LEFT
    
    if (from === DIRECTIONS.NORTH) return to === DIRECTIONS.EAST ? 'RIGHT' : 'LEFT'
    if (from === DIRECTIONS.SOUTH) return to === DIRECTIONS.WEST ? 'RIGHT' : 'LEFT'
    if (from === DIRECTIONS.EAST) return to === DIRECTIONS.SOUTH ? 'RIGHT' : 'LEFT'
    if (from === DIRECTIONS.WEST) return to === DIRECTIONS.NORTH ? 'RIGHT' : 'LEFT'
    return 'STRAIGHT'
  }

  handleTurn(delta) {
    this.turnProgress += delta / this.turnDuration
    
    if (this.turnProgress >= 1) {
      this.turnProgress = 1
      this.isTurning = false
      this.rotation.y = this.targetRotation
      this.position.copy(this.turnEndPos) // Snap to end
      this.setTurnSignal('OFF')
    } else {
      const t = this.turnProgress
      
      // Cubic Bezier: B(t) = (1-t)^3*P0 + 3(1-t)^2*t*P1 + 3(1-t)t^2*P2 + t^3*P3
      const u = 1 - t
      const tt = t * t
      const uu = u * u
      const uuu = uu * u
      const ttt = tt * t
      
      const p0 = this.turnStartPos
      const p1 = this.turnControlPos1
      const p2 = this.turnControlPos2
      const p3 = this.turnEndPos
      
      this.position.x = uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x
      this.position.z = uuu * p0.z + 3 * uu * t * p1.z + 3 * u * tt * p2.z + ttt * p3.z
      
      // Calculate tangent for rotation
      // T(t) = -3u^2*P0 + 3(u^2 - 2ut)*P1 + 3(2ut - t^2)*P2 + 3t^2*P3
      // Simplified: T(t) = 3u^2(P1-P0) + 6ut(P2-P1) + 3t^2(P3-P2)
      
      const tx = 3 * uu * (p1.x - p0.x) + 6 * u * t * (p2.x - p1.x) + 3 * tt * (p3.x - p2.x)
      const tz = 3 * uu * (p1.z - p0.z) + 6 * u * t * (p2.z - p1.z) + 3 * tt * (p3.z - p2.z)
      
      this.rotation.y = Math.atan2(tx, tz)
    }
  }

  onDestinationReached() {
    // Request new path from SpawnManager
    // We don't have direct access to SpawnManager instance here.
    // But we can emit an event or call a method if we had the reference.
    // We don't have the reference.
    
    // Alternative: Stop and wait for a "Director" to give new orders?
    // Or, since this is a simulation, we can hack it:
    // We need the grid and pathfinder.
    // They are in SpawnManager.
    
    // Let's make the car "inactive" but with a flag "needsPath".
    // And have SpawnManager check for cars needing paths?
    // Or better: Pass a callback to the car when spawning?
    
    if (this.onReachDestination) {
        this.onReachDestination(this)
    } else {
        this.stop()
        // Fade out and remove?
        this.active = false
    }
  }

  stop() {
    if (this.isStopped) return
    this.isStopped = true
    this.setBrakeLights(true)
    
    // Randomly activate turn signals when stopped to demonstrate functionality
    // since cars don't actually turn yet
    const rand = Math.random()
    if (rand < 0.3) {
      this.setTurnSignal('LEFT')
    } else if (rand < 0.6) {
      this.setTurnSignal('RIGHT')
    } else {
      this.setTurnSignal('OFF')
    }
  }

  resume() {
    if (!this.isStopped) return
    this.isStopped = false
    this.setBrakeLights(false)
    this.setTurnSignal('OFF')
  }
  
  setBlocked(blocked) {
    this.isBlocked = blocked
    if (blocked) {
        this.setBrakeLights(true)
    } else if (!this.isStopped) {
        this.setBrakeLights(false)
    }
  }
  
  setBrakeLights(on) {
    if (this.tailLightMat) {
      this.tailLightMat.emissive.setHex(on ? 0xff0000 : 0x550000)
      this.tailLightMat.emissiveIntensity = on ? 2.0 : 0.5
    }
  }
  
  setTurnSignal(direction) {
    this.indicatorState = direction
    // Reset visibility when turning off
    if (direction === 'OFF') {
      this.indicators.left.forEach(i => i.visible = false)
      this.indicators.right.forEach(i => i.visible = false)
    }
  }
  
  updateIndicators(delta) {
    if (this.indicatorState === 'OFF') return
    
    this.indicatorTimer += delta
    if (this.indicatorTimer >= this.indicatorBlinkRate) {
      this.indicatorTimer = 0
      const isVisible = !this.indicators[this.indicatorState.toLowerCase()][0].visible
      
      if (this.indicatorState === 'LEFT') {
        this.indicators.left.forEach(i => i.visible = isVisible)
        this.indicators.right.forEach(i => i.visible = false)
      } else if (this.indicatorState === 'RIGHT') {
        this.indicators.right.forEach(i => i.visible = isVisible)
        this.indicators.left.forEach(i => i.visible = false)
      }
    }
  }

  getForwardVector() {
    const forward = new THREE.Vector3(0, 0, 1)
    forward.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotation.y)
    return forward
  }
}
