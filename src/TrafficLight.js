import * as THREE from 'three'
import { BaseEntity } from './entities/BaseEntity.js'
import { CONFIG } from './config/config.js'
import { ENTITY_TYPES, TRAFFIC_LIGHT_STATES, CORNERS, TRAFFIC_APPROACHES } from './config/constants.js'
import { createCylinder, createBox, createCircle, createMesh, createLambertMaterial, createBasicMaterial } from './utils/GeometryFactory.js'

export class TrafficLight extends BaseEntity {
  constructor(corner = CORNERS.NE) {
    super(ENTITY_TYPES.TRAFFIC_LIGHT)
    
    this.corner = corner
    this.state = TRAFFIC_LIGHT_STATES.RED
    this.timer = 0
    
    const cfg = CONFIG.trafficLight
    
    // Create traffic light structure
    this.createStructure(cfg)
    
    // Position based on corner
    this.positionAtCorner()
    
    // Enable shadows
    this.enableShadows(true, false)
  }

  createStructure(cfg) {
    // 1. Vertical Pole
    const poleGeo = createCylinder(cfg.poleRadius, cfg.poleRadius, cfg.poleHeight)
    const poleMat = createLambertMaterial(cfg.colors.pole)
    const pole = createMesh(poleGeo, poleMat, true, true) // Enable shadows
    pole.position.y = cfg.poleHeight / 2
    this.add(pole)
    this.pole = pole // Store reference for debugging
    
    // 2. Mast Arm (Extends horizontally)
    // We build it pointing +X initially, then rotate the whole group
    const armGeo = createCylinder(cfg.armRadius, cfg.armRadius, cfg.armLength)
    const arm = createMesh(armGeo, poleMat, true, true) // Enable shadows
    arm.rotation.z = -Math.PI / 2 // Rotate to horizontal
    // Position: Start at pole top, extend +X
    arm.position.set(cfg.armLength / 2, cfg.poleHeight - 0.5, 0)
    this.add(arm)
    this.arm = arm // Store reference for debugging
    
    // 3. Signal Head (Hangs from end of arm)
    this.createSignalHead(cfg)
    
    // 4. Pedestrian Signals (Two per pole)
    this.createPedestrianSignals(cfg)
  }

  createSignalHead(cfg) {
    // Position at end of arm
    const signalX = cfg.armLength - 1.0
    const signalY = cfg.poleHeight - 1.5 // Hang down
    
    // Signal Box
    const boxGeo = createBox(cfg.signalBoxWidth, cfg.signalBoxHeight, cfg.signalBoxDepth)
    const boxMat = createLambertMaterial(cfg.colors.box)
    this.signalBox = createMesh(boxGeo, boxMat) // Save reference to rotate later
    this.signalBox.position.set(signalX, signalY, 0)
    this.add(this.signalBox)
    
    // Lights
    this.createLights(cfg, this.signalBox)
  }

  createLights(cfg, parentBox) {
    const lightGeo = createCircle(cfg.lightRadius, 16)
    const zOffset = cfg.signalBoxDepth / 2 + 0.01 // Slightly in front of box
    
    // Red light (top)
    this.redMat = createBasicMaterial(cfg.colors.redOff)
    const redLight = createMesh(lightGeo, this.redMat, false)
    redLight.position.set(0, 0.35, zOffset)
    parentBox.add(redLight)
    
    // Yellow light (middle)
    this.yellowMat = createBasicMaterial(cfg.colors.yellowOff)
    const yellowLight = createMesh(lightGeo, this.yellowMat, false)
    yellowLight.position.set(0, 0, zOffset)
    parentBox.add(yellowLight)
    
    // Green light (bottom)
    this.greenMat = createBasicMaterial(cfg.colors.greenOff)
    const greenLight = createMesh(lightGeo, this.greenMat, false)
    greenLight.position.set(0, -0.35, zOffset)
    parentBox.add(greenLight)
    
    // Visors (simple boxes above lights)
    const visorGeo = createBox(cfg.visorWidth, cfg.visorHeight, cfg.visorDepth)
    const visorMat = createLambertMaterial(cfg.colors.visor)
    
    const positions = [0.45, 0.1, -0.25]
    positions.forEach(y => {
      const visor = createMesh(visorGeo, visorMat, false)
      visor.position.set(0, y, zOffset + cfg.visorDepth/2)
      parentBox.add(visor)
    })
  }

  createPedestrianSignals(cfg) {
    // We need 2 signals per pole, facing the crosswalks
    // NE Pole: Faces West and South
    // NW Pole: Faces East and South
    // SW Pole: Faces East and North
    // SE Pole: Faces West and North
    
    const rotations = []
    
    switch (this.corner) {
      case CORNERS.NE:
        rotations.push(Math.PI / 2) // West
        rotations.push(Math.PI)     // South
        break
      case CORNERS.NW:
        rotations.push(-Math.PI / 2) // East
        rotations.push(Math.PI)      // South
        break
      case CORNERS.SW:
        rotations.push(-Math.PI / 2) // East
        rotations.push(0)            // North
        break
      case CORNERS.SE:
        rotations.push(Math.PI / 2)  // West
        rotations.push(0)            // North
        break
    }
    
    rotations.forEach(rot => {
      this.createSinglePedSignal(cfg, rot)
    })
  }

  createSinglePedSignal(cfg, worldRotationY) {
    // Small box on pole
    const boxGeo = createBox(0.3, 0.4, 0.3)
    const boxMat = createLambertMaterial(cfg.colors.box)
    const pedBox = createMesh(boxGeo, boxMat)
    pedBox.position.set(0, 2.5, 0)
    
    // We need to apply the rotation relative to the pole's rotation
    // But since we are adding it to 'this', which is already rotated,
    // we need to compensate.
    // Actually, let's just use the local rotation logic derived earlier.
    // But since 'this.rotation.y' varies, it's safer to calculate local rotation.
    
    // However, for simplicity, let's attach them to the pole (which is in local space)
    // and rotate them based on the corner logic we just derived.
    // Wait, the rotations array above assumes WORLD rotation (0=North, etc).
    // We need to convert to LOCAL rotation.
    
    // Let's do this in positionAtCorner instead where we know the pole rotation?
    // Or just inverse transform?
    // Let's keep it simple:
    // We add them to a group that is NOT rotated by the pole's rotation?
    // No, 'this' is the entity.
    
    // Let's just calculate the local rotation needed.
    // LocalRot = WorldRot - PoleRot
    
    // We'll set the rotation in positionAtCorner or just store the intended world rot
    pedBox.userData.worldRotation = worldRotationY
    this.add(pedBox)
    
    // Walk Light
    const lightGeo = createCircle(0.1, 16)
    const lightMat = createBasicMaterial(0xffffff)
    const light = createMesh(lightGeo, lightMat, false)
    light.position.set(0, 0, 0.16) // On +Z face
    pedBox.add(light)
    
    // Store for update
    if (!this.pedSignals) this.pedSignals = []
    this.pedSignals.push(pedBox)
  }

  positionAtCorner() {
    const offset = CONFIG.trafficLight.cornerOffset
    
    switch (this.corner) {
      case CORNERS.NE:
        // Traffic: Westbound (-X). Signal faces East (+X).
        // Arm extends South (+Z).
        this.position.set(offset, 0, -offset)
        this.rotation.y = Math.PI / 2 
        // Arm (+X) -> South (+Z).
        // Signal (+Z) -> East (+X).
        // Signal needs to face East.
        // Current Signal (+Z) faces East. Correct.
        this.signalBox.rotation.y = 0
        break
        
      case CORNERS.NW:
        // Traffic: Southbound (+Z). Signal faces North (-Z).
        // Arm extends East (+X).
        this.position.set(-offset, 0, -offset)
        this.rotation.y = 0
        // Arm (+X) -> East (+X).
        // Signal (+Z) -> South (+Z).
        // Signal needs to face North (-Z).
        this.signalBox.rotation.y = Math.PI
        break
        
      case CORNERS.SE:
        // Traffic: Northbound (-Z). Signal faces South (+Z).
        // Arm extends West (-X).
        this.position.set(offset, 0, offset)
        this.rotation.y = Math.PI
        // Arm (+X) -> West (-X).
        // Signal (+Z) -> North (-Z).
        // Signal needs to face South (+Z).
        this.signalBox.rotation.y = Math.PI
        break
        
      case CORNERS.SW:
        // Traffic: Eastbound (+X). Signal faces West (-X).
        // Arm extends North (-Z).
        this.position.set(-offset, 0, offset)
        this.rotation.y = -Math.PI / 2
        // Arm (+X) -> North (-Z).
        // Signal (+Z) -> West (-X).
        // Signal needs to face West.
        // Current Signal (+Z) faces West. Correct.
        this.signalBox.rotation.y = 0
        break
    }
    
    // Update Pedestrian Signals Rotation
    if (this.pedSignals) {
      this.pedSignals.forEach(pedBox => {
        // Local = World - Parent
        pedBox.rotation.y = pedBox.userData.worldRotation - this.rotation.y
      })
    }
  }

  update(delta, time) {
    this.timer += delta
    
    if (this.timer > CONFIG.trafficLight.cycleTime) {
      this.toggle()
      this.timer = 0
    }
  }

  toggle() {
    const cfg = CONFIG.trafficLight.colors
    
    if (this.state === TRAFFIC_LIGHT_STATES.RED) {
      this.state = TRAFFIC_LIGHT_STATES.GREEN
      this.redMat.color.setHex(cfg.redOff)
      this.yellowMat.color.setHex(cfg.yellowOff)
      this.greenMat.color.setHex(cfg.greenOn)
    } else {
      this.state = TRAFFIC_LIGHT_STATES.RED
      this.redMat.color.setHex(cfg.redOn)
      this.yellowMat.color.setHex(cfg.yellowOff)
      this.greenMat.color.setHex(cfg.greenOff)
    }
  }

  /**
   * Get the forward-facing direction vector of this signal
   * Used for validation to ensure signal faces incoming traffic
   */
  getForwardVector() {
    // Signal box faces +Z in local space after rotation
    const localForward = new THREE.Vector3(0, 0, 1)
    
    // Get world rotation
    const worldQuaternion = new THREE.Quaternion()
    this.signalBox.getWorldQuaternion(worldQuaternion)
    
    // Apply rotation to forward vector
    localForward.applyQuaternion(worldQuaternion)
    localForward.normalize()
    
    return localForward
  }

  /**
   * Get which lane direction this signal controls based on its corner
   */
  getControlledLaneDirection() {
    const approach = TRAFFIC_APPROACHES[this.corner]
    return approach ? approach.controls : null
  }

  /**
   * Get which direction this signal faces based on its corner
   */
  getFacingDirection() {
    const approach = TRAFFIC_APPROACHES[this.corner]
    return approach ? approach.faces : null
  }
}
