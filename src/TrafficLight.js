import * as THREE from 'three'
import { BaseEntity } from './entities/BaseEntity.js'
import { CONFIG } from './config/config.js'
import { ENTITY_TYPES, TRAFFIC_LIGHT_STATES, CORNERS } from './config/constants.js'
import { createCylinder, createBox, createCircle, createMesh, createLambertMaterial, createBasicMaterial } from './utils/GeometryFactory.js'

export class TrafficLight extends BaseEntity {
  constructor(corner = CORNERS.NE) {
    super(ENTITY_TYPES.TRAFFIC_LIGHT)
    
    this.corner = corner
    this.state = TRAFFIC_LIGHT_STATES.RED
    this.timer = 0
    this.externalControl = false // If true, don't run internal update logic
    
    // Arrays to hold material references for toggling
    this.redMats = []
    this.yellowMats = []
    this.greenMats = []
    
    const cfg = CONFIG.trafficLight
    
    // Create traffic light structure
    this.createStructure(cfg)
    
    // Enable shadows
    this.enableShadows(true, false)
  }

  createStructure(cfg) {
    // 1. Vertical Pole
    const poleGeo = createCylinder(cfg.poleRadius, cfg.poleRadius, cfg.poleHeight)
    const poleMat = createLambertMaterial(cfg.colors.pole)
    const pole = createMesh(poleGeo, poleMat, true, true)
    pole.position.y = cfg.poleHeight / 2
    this.add(pole)
    this.pole = pole
    
    // 2. Configure based on corner
    // We need to determine:
    // - Mast Arm direction and rotation (Far-side signal)
    // - Post Mount rotation (Near-side signal)
    
    let armRotationY = 0
    let mastSignalRotationY = 0
    let postSignalRotationY = 0
    
    const offset = cfg.cornerOffset
    
    switch (this.corner) {
      case CORNERS.NE:
        // Position: NE Corner (+X, -Z)
        this.position.set(offset, 0, -offset)
        
        // Role 1: Far-side for Northbound (coming from South).
        // Mast Arm should extend WEST (over Northbound lanes).
        // Signal should face SOUTH.
        armRotationY = Math.PI / 2 // Arm points +X by default. Rotate 90deg -> -Z? No.
        // Let's standardize: Arm geometry extends +X.
        // To point WEST (-X), we need rotation Math.PI.
        armRotationY = Math.PI
        // Signal on arm needs to face SOUTH (+Z).
        // Arm is rotated PI. Local +Z is World -Z.
        // We need World +Z. So Local -Z.
        // Signal box faces +Z by default. Rotate PI to face -Z (Local).
        mastSignalRotationY = Math.PI
        
        // Role 2: Near-side for Westbound (coming from East).
        // Post Mount should face EAST (+X).
        // Pole is not rotated (we rotate components or the group).
        // Let's rotate the whole group? No, position is set.
        // Let's rotate components.
        postSignalRotationY = Math.PI / 2 // Face +X (East)
        break
        
      case CORNERS.NW:
        // Position: NW Corner (-X, -Z)
        this.position.set(-offset, 0, -offset)
        
        // Role 1: Far-side for Westbound (coming from East).
        // Mast Arm should extend SOUTH (over Westbound lanes).
        // Signal should face EAST (+X).
        // Arm extends +X. Rotate -90deg (-PI/2) -> South (+Z).
        armRotationY = -Math.PI / 2
        // Signal on arm needs to face EAST (+X).
        // Arm rotated -PI/2. Local +X is World +Z. Local -Z is World +X.
        // Signal box faces +Z. Rotate PI to face -Z (Local) -> World +X.
        mastSignalRotationY = Math.PI
        
        // Role 2: Near-side for Southbound (coming from North).
        // Post Mount should face NORTH (-Z).
        postSignalRotationY = Math.PI // Face -Z (North? No, South is +Z. North is -Z. Wait.)
        // Default box faces +Z. Rotate PI -> -Z.
        postSignalRotationY = Math.PI
        break
        
      case CORNERS.SE:
        // Position: SE Corner (+X, +Z)
        this.position.set(offset, 0, offset)
        
        // Role 1: Far-side for Eastbound (coming from West).
        // Mast Arm should extend NORTH (over Eastbound lanes).
        // Signal should face WEST (-X).
        // Arm extends +X. Rotate 90deg (PI/2) -> North (-Z).
        armRotationY = Math.PI / 2
        // Signal on arm needs to face WEST (-X).
        // Arm rotated PI/2. Local -Z is World -X.
        // Signal box faces +Z. Rotate PI -> -Z (Local) -> World -X.
        mastSignalRotationY = Math.PI
        
        // Role 2: Near-side for Northbound (coming from South).
        // Post Mount should face SOUTH (+Z).
        postSignalRotationY = 0 // Face +Z
        break
        
      case CORNERS.SW:
        // Position: SW Corner (-X, +Z)
        this.position.set(-offset, 0, offset)
        
        // Role 1: Far-side for Southbound (coming from North).
        // Mast Arm should extend EAST (over Southbound lanes).
        // Signal should face NORTH (-Z).
        // Arm extends +X. No rotation needed -> East (+X).
        armRotationY = 0
        // Signal on arm needs to face NORTH (-Z).
        // Arm rotated 0. Local -Z is World -Z.
        // Signal box faces +Z. Rotate PI -> -Z (Local).
        mastSignalRotationY = Math.PI
        
        // Role 2: Near-side for Eastbound (coming from West).
        // Post Mount should face WEST (-X).
        postSignalRotationY = -Math.PI / 2 // Face -X
        break
    }
    
    // 3. Create Mast Arm
    const armGeo = createCylinder(cfg.armRadius, cfg.armRadius, cfg.armLength)
    const arm = createMesh(armGeo, poleMat, true, true)
    arm.rotation.z = -Math.PI / 2 // Horizontal
    arm.rotation.y = armRotationY // Direction
    arm.position.set(0, cfg.poleHeight - 0.5, 0)
    // Shift arm so it starts at pole
    // The cylinder center is at (0,0,0). We rotated Z -90. Now Y axis is along X.
    // We need to shift it by length/2 along its local Y (which is World X before Y-rotation).
    // Actually, let's put it in a container to make rotation easier.
    
    const armContainer = new THREE.Group()
    armContainer.position.set(0, cfg.poleHeight - 0.5, 0)
    armContainer.rotation.y = armRotationY
    this.add(armContainer)
    
    // The arm mesh itself, offset so it extends from 0
    const armMesh = createMesh(armGeo, poleMat, true, true)
    armMesh.rotation.z = -Math.PI / 2
    armMesh.position.x = cfg.armLength / 2
    armContainer.add(armMesh)
    
    // 4. Create Mast Arm Signal (Far-side)
    this.mastSignal = this.createSignalHead(cfg, armContainer, cfg.armLength - 1.0, -1.0, 0, mastSignalRotationY, true)
    
    // 5. Create Post Mount Signal (Near-side)
    this.postSignal = this.createSignalHead(cfg, this, 0, cfg.poleHeight / 2, 0, postSignalRotationY, false)
    
    // 6. Pedestrian Signals
    this.createPedestrianSignals(cfg)
  }

  createSignalHead(cfg, parent, x, y, z, rotationY, isPrimary) {
    // Signal Box
    const boxGeo = createBox(cfg.signalBoxWidth, cfg.signalBoxHeight, cfg.signalBoxDepth)
    const boxMat = createLambertMaterial(cfg.colors.box)
    const signalBox = createMesh(boxGeo, boxMat)
    
    signalBox.position.set(x, y, z)
    signalBox.rotation.y = rotationY
    parent.add(signalBox)
    
    // Lights
    this.createLights(cfg, signalBox, isPrimary)
    
    return signalBox
  }

  createLights(cfg, parentBox, isPrimary) {
    const lightGeo = createCircle(cfg.lightRadius, 16)
    const zOffset = cfg.signalBoxDepth / 2 + 0.01 // Slightly in front of box
    
    // Red light (top)
    const redMat = createBasicMaterial(cfg.colors.redOff)
    const redLight = createMesh(lightGeo, redMat, false)
    redLight.position.set(0, 0.35, zOffset)
    parentBox.add(redLight)
    
    // Yellow light (middle)
    const yellowMat = createBasicMaterial(cfg.colors.yellowOff)
    const yellowLight = createMesh(lightGeo, yellowMat, false)
    yellowLight.position.set(0, 0, zOffset)
    parentBox.add(yellowLight)
    
    // Green light (bottom)
    const greenMat = createBasicMaterial(cfg.colors.greenOff)
    const greenLight = createMesh(lightGeo, greenMat, false)
    greenLight.position.set(0, -0.35, zOffset)
    parentBox.add(greenLight)
    
    // Store materials based on group
    if (isPrimary) {
      if (!this.primaryMats) this.primaryMats = { red: [], yellow: [], green: [] }
      this.primaryMats.red.push(redMat)
      this.primaryMats.yellow.push(yellowMat)
      this.primaryMats.green.push(greenMat)
    } else {
      if (!this.secondaryMats) this.secondaryMats = { red: [], yellow: [], green: [] }
      this.secondaryMats.red.push(redMat)
      this.secondaryMats.yellow.push(yellowMat)
      this.secondaryMats.green.push(greenMat)
    }
    
    // Visors
    const visorGeo = createBox(cfg.visorWidth, cfg.visorHeight, cfg.visorDepth)
    const visorMat = createLambertMaterial(cfg.colors.visor)
    
    const positions = [0.45, 0.1, -0.25]
    positions.forEach(y => {
      const visor = createMesh(visorGeo, visorMat, false)
      visor.position.set(0, y, zOffset + cfg.visorDepth/2)
      parentBox.add(visor)
    })
  }

  update(delta, time) {
    // Skip internal logic if externally controlled
    if (this.externalControl) return
    
    this.timer += delta
    const cycleTime = CONFIG.trafficLight.cycleTime
    
    // Update Pedestrian Signals
    if (this.pedSignals) {
      const timeLeft = cycleTime - this.timer
      
      this.pedSignals.forEach((ped, index) => {
        // Index 0: Perpendicular to Primary (Sync with Secondary)
        // Index 1: Parallel to Primary (Sync with Primary)
        // Wait, let's check orientations in createPedestrianSignals.
        // NE: 0=South (Primary faces South). So 0 is Parallel.
        //     1=West (Secondary faces East). So 1 is Parallel to Secondary.
        // Let's assume:
        // Even index (0): Parallel to Primary (Mast)
        // Odd index (1): Parallel to Secondary (Post)
        
        // If Primary is GREEN -> Parallel Ped (0) is WALK.
        // If Primary is RED -> Parallel Ped (0) is DONT_WALK.
        
        const isPrimaryPed = (index === 0)
        const primaryIsGreen = (this.state === TRAFFIC_LIGHT_STATES.GREEN)
        
        let shouldWalk = false
        if (isPrimaryPed) {
          shouldWalk = primaryIsGreen
        } else {
          shouldWalk = !primaryIsGreen // Secondary is Green when Primary is Red
        }
        
        if (shouldWalk) {
           // Walk Phase
           // If nearing end of cycle, show countdown?
           // Actually, Walk is usually during Green.
           // Flashing Don't Walk (Countdown) is during Yellow or end of Green.
           // For simplicity: Walk during first 80% of Green. Countdown last 20%.
           
           if (timeLeft < 3) {
             ped.setState('COUNTDOWN', timeLeft)
           } else {
             ped.setState('WALK', 0)
           }
        } else {
          ped.setState('DONT_WALK', 0)
        }
      })
    }
    
    if (this.timer > cycleTime) {
      this.toggle()
      this.timer = 0
    }
  }

  toggle() {
    const cfg = CONFIG.trafficLight.colors
    
    // Toggle State
    if (this.state === TRAFFIC_LIGHT_STATES.RED) {
      this.state = TRAFFIC_LIGHT_STATES.GREEN
    } else {
      this.state = TRAFFIC_LIGHT_STATES.RED
    }
    
    // Update Primary Lights (Follows State)
    this.updateLightGroup(this.primaryMats, this.state, cfg)
    
    // Update Secondary Lights (Inverse State)
    const inverseState = (this.state === TRAFFIC_LIGHT_STATES.RED) ? TRAFFIC_LIGHT_STATES.GREEN : TRAFFIC_LIGHT_STATES.RED
    this.updateLightGroup(this.secondaryMats, inverseState, cfg)
  }
  
  updateLightGroup(mats, state, cfg) {
    if (!mats) return
    
    if (state === TRAFFIC_LIGHT_STATES.GREEN) {
      mats.red.forEach(m => m.color.setHex(cfg.redOff))
      mats.yellow.forEach(m => m.color.setHex(cfg.yellowOff))
      mats.green.forEach(m => m.color.setHex(cfg.greenOn))
    } else {
      mats.red.forEach(m => m.color.setHex(cfg.redOn))
      mats.yellow.forEach(m => m.color.setHex(cfg.yellowOff))
      mats.green.forEach(m => m.color.setHex(cfg.greenOff))
    }
  }
  
  /**
   * Set the state of a specific light group (for external controller)
   */
  setLightGroupState(group, state) {
    const cfg = CONFIG.trafficLight.colors
    const mats = group === 'primary' ? this.primaryMats : this.secondaryMats
    
    if (!mats) return
    
    if (state === TRAFFIC_LIGHT_STATES.GREEN) {
      mats.red.forEach(m => m.color.setHex(cfg.redOff))
      mats.yellow.forEach(m => m.color.setHex(cfg.yellowOff))
      mats.green.forEach(m => m.color.setHex(cfg.greenOn))
    } else if (state === TRAFFIC_LIGHT_STATES.YELLOW) {
      mats.red.forEach(m => m.color.setHex(cfg.redOff))
      mats.yellow.forEach(m => m.color.setHex(cfg.yellowOn))
      mats.green.forEach(m => m.color.setHex(cfg.greenOff))
    } else { // RED
      mats.red.forEach(m => m.color.setHex(cfg.redOn))
      mats.yellow.forEach(m => m.color.setHex(cfg.yellowOff))
      mats.green.forEach(m => m.color.setHex(cfg.greenOff))
    }
  }

  /**
   * Get the forward-facing direction vector of the MAST ARM signal
   * Used for validation
   */
  getForwardVector() {
    // This is a bit more complex now as we have two signals.
    // We'll return the direction of the MAST ARM signal as it's the primary one.
    
    // Re-calculate based on corner logic (since we didn't store the mesh reference in a way to easily query world rot)
    // Or we can just derive it from the corner.
    
    const vec = new THREE.Vector3()
    
    switch (this.corner) {
      case CORNERS.NE: return new THREE.Vector3(0, 0, 1) // Faces South (+Z)
      case CORNERS.NW: return new THREE.Vector3(1, 0, 0) // Faces East (+X)
      case CORNERS.SE: return new THREE.Vector3(-1, 0, 0) // Faces West (-X)
      case CORNERS.SW: return new THREE.Vector3(0, 0, -1) // Faces North (-Z)
    }
    
    return new THREE.Vector3(0, 0, 1)
  }

  /**
   * Get which direction this signal faces based on its corner
   */
  getFacingDirection() {
    return this.getForwardVector()
  }

  createPedestrianSignals(cfg) {
    this.pedSignals = []
    
    // Define orientations based on corner
    // NE Pole: Faces South (for SE peds) and West (for NW peds)
    // NW Pole: Faces South (for SW peds) and East (for NE peds)
    // SE Pole: Faces North (for NE peds) and West (for SW peds)
    // SW Pole: Faces North (for NW peds) and East (for SE peds)
    
    const orientations = []
    
    switch (this.corner) {
      case CORNERS.NE:
        orientations.push({ rot: Math.PI, label: 'South' }) // Faces South (Local +Z is South? No. Local +Z is World -Z for NE? Wait.)
        // Let's stick to World Rotations for clarity, then convert to local.
        // Or just use the fact that we are adding to 'this' which has a rotation.
        // But 'this' rotation varies by corner.
        // NE Pole (at +X, -Z) is rotated Y=0? No, let's check constructor.
        // NE: position set, but rotation NOT set on 'this' (the group).
        // Components are rotated.
        // So 'this' has rotation (0,0,0).
        // So we can use World Rotations directly.
        
        orientations.push(0) // Faces South (+Z) -> Rotation 0? 
        // Default box faces +Z. So Rotation 0 = Faces +Z (South). Correct.
        
        orientations.push(-Math.PI / 2) // Faces West (-X).
        break
        
      case CORNERS.NW:
        orientations.push(0) // Faces South (+Z)
        orientations.push(Math.PI / 2) // Faces East (+X)
        break
        
      case CORNERS.SE:
        orientations.push(Math.PI) // Faces North (-Z)
        orientations.push(-Math.PI / 2) // Faces West (-X)
        break
        
      case CORNERS.SW:
        orientations.push(Math.PI) // Faces North (-Z)
        orientations.push(Math.PI / 2) // Faces East (+X)
        break
    }
    
    orientations.forEach(rot => {
      const pedSignal = new PedestrianSignal(rot)
      pedSignal.mesh.position.y = 2.5 // Lower than traffic lights
      this.add(pedSignal.mesh)
      this.pedSignals.push(pedSignal)
    })
  }
}

/**
 * Pedestrian Signal Class
 * Handles the visual representation of Walk/Don't Walk/Countdown
 */
class PedestrianSignal {
  constructor(rotationY) {
    this.state = 'DONT_WALK'
    this.countdown = 0
    
    // Create mesh
    this.mesh = this.createMesh()
    this.mesh.rotation.y = rotationY
    
    // Create canvas for texture
    this.canvas = document.createElement('canvas')
    this.canvas.width = 128
    this.canvas.height = 256
    this.ctx = this.canvas.getContext('2d')
    
    this.texture = new THREE.CanvasTexture(this.canvas)
    this.material.map = this.texture
    
    this.updateTexture()
  }
  
  createMesh() {
    const boxGeo = createBox(0.4, 0.6, 0.3)
    this.material = new THREE.MeshBasicMaterial({ color: 0xffffff }) // Texture will color it
    // We need a multi-material or UV mapping.
    // Simple box with texture on front face.
    // Let's use an array of materials.
    const darkMat = new THREE.MeshLambertMaterial({ color: 0x111111 })
    const faceMat = new THREE.MeshBasicMaterial({ map: null }) // Will set map later
    
    const materials = [
      darkMat, // Right
      darkMat, // Left
      darkMat, // Top
      darkMat, // Bottom
      faceMat, // Front (+Z)
      darkMat, // Back
    ]
    
    const mesh = new THREE.Mesh(boxGeo, materials)
    this.material = faceMat // Keep ref to update texture
    return mesh
  }
  
  setState(state, countdown) {
    if (this.state !== state || this.countdown !== countdown) {
      this.state = state
      this.countdown = countdown
      this.updateTexture()
    }
  }
  
  updateTexture() {
    const ctx = this.ctx
    const w = 128
    const h = 256
    
    // Background
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, w, h)
    
    // Top Section (Don't Walk / Countdown)
    // Height 128
    if (this.state === 'DONT_WALK') {
      // Orange Hand
      ctx.fillStyle = '#ff3300'
      this.drawHand(ctx, w/2, 64, 40)
    } else if (this.state === 'COUNTDOWN') {
      // Orange Countdown
      ctx.fillStyle = '#ff3300'
      ctx.font = 'bold 80px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(Math.ceil(this.countdown).toString(), w/2, 64)
    }
    
    // Bottom Section (Walk)
    // Height 128 (y=128 to 256)
    if (this.state === 'WALK') {
      // White Walking Person
      ctx.fillStyle = '#ffffff'
      this.drawPerson(ctx, w/2, 192, 40)
    }
    
    this.texture.needsUpdate = true
  }
  
  drawHand(ctx, x, y, size) {
    // Simple hand symbol (stop palm)
    ctx.beginPath()
    ctx.rect(x - size/2, y - size/2, size, size)
    ctx.fill()
  }
  
  drawPerson(ctx, x, y, size) {
    // Simple walking person
    ctx.beginPath()
    ctx.arc(x, y - size/2, size/4, 0, Math.PI * 2) // Head
    ctx.fill()
    
    ctx.beginPath()
    ctx.moveTo(x, y - size/4)
    ctx.lineTo(x, y + size/4) // Body
    ctx.lineWidth = size/5
    ctx.strokeStyle = '#ffffff'
    ctx.stroke()
    
    // Legs
    ctx.beginPath()
    ctx.moveTo(x, y + size/4)
    ctx.lineTo(x - size/3, y + size)
    ctx.moveTo(x, y + size/4)
    ctx.lineTo(x + size/3, y + size)
    ctx.stroke()
  }
}
