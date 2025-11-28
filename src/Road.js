import * as THREE from 'three'
import { BaseEntity } from './entities/BaseEntity.js'
import { CONFIG } from './config/config.js'
import { ENTITY_TYPES, ROAD_ORIENTATIONS } from './config/constants.js'
import { createPlane, createBox, createMesh, createLambertMaterial, createBasicMaterial } from './utils/GeometryFactory.js'

export class Road extends BaseEntity {
  constructor(orientation = ROAD_ORIENTATIONS.BOTH) {
    super(ENTITY_TYPES.ROAD)
    
    this.orientation = orientation
    const cfg = CONFIG.road
    const citySize = CONFIG.city.cellSize
    
    // Main asphalt surface
    this.createAsphalt(citySize, cfg)
    
    // Road markings
    this.createRoadMarkings(citySize, cfg, orientation)
    
    // Curbs, parkways, and sidewalks (not for intersections)
    if (orientation !== ROAD_ORIENTATIONS.BOTH) {
      this.createCurbs(citySize, cfg, orientation)
      this.createParkways(citySize, cfg, orientation)
      this.createSidewalks(citySize, cfg, orientation)
    }
  }

  createAsphalt(size, cfg) {
    const geometry = createPlane(size, size)
    const material = createLambertMaterial(cfg.asphaltColor)
    const mesh = createMesh(geometry, material, false, true)
    mesh.rotation.x = -Math.PI / 2
    this.add(mesh)
  }

  createRoadMarkings(size, cfg, orientation) {
    const yellowMat = createBasicMaterial(cfg.laneMarkingColor)
    const whiteMat = createBasicMaterial(cfg.edgeMarkingColor)
    const dashedMat = this.createDashedMaterial()
    
    if (orientation === ROAD_ORIENTATIONS.BOTH) {
      this.createIntersectionMarkings(size, yellowMat)
    } else if (orientation === ROAD_ORIENTATIONS.VERTICAL) {
      this.createVerticalRoadMarkings(size, yellowMat, whiteMat, dashedMat, cfg)
    } else if (orientation === ROAD_ORIENTATIONS.HORIZONTAL) {
      this.createHorizontalRoadMarkings(size, yellowMat, whiteMat, dashedMat, cfg)
    }
  }

  createDashedMaterial() {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 512
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, 64, 512)
    ctx.fillStyle = '#ffffff'
    
    for (let i = 0; i < 8; i++) {
      ctx.fillRect(10, i * 64 + 16, 44, 32)
    }
    
    const dashedTex = new THREE.CanvasTexture(canvas)
    dashedTex.wrapS = THREE.RepeatWrapping
    dashedTex.wrapT = THREE.RepeatWrapping
    
    return createBasicMaterial(0xffffff, { map: dashedTex, transparent: true })
  }

  createIntersectionMarkings(size, yellowMat) {
    // No yellow lines in the intersection box
    
    // North-South yellow lines (Removed)
    /*
    const nsLineGeo = createPlane(0.3, size)
    const nsYellow1 = createMesh(nsLineGeo, yellowMat, false)
    nsYellow1.rotation.x = -Math.PI / 2
    nsYellow1.position.set(-0.15, 0.01, 0)
    this.add(nsYellow1)
    
    const nsYellow2 = createMesh(nsLineGeo, yellowMat, false)
    nsYellow2.rotation.x = -Math.PI / 2
    nsYellow2.position.set(0.15, 0.01, 0)
    this.add(nsYellow2)
    */
    
    // East-West yellow lines (Removed)
    /*
    const ewLineGeo = createPlane(size, 0.3)
    const ewYellow1 = createMesh(ewLineGeo, yellowMat, false)
    ewYellow1.rotation.x = -Math.PI / 2
    ewYellow1.position.set(0, 0.01, -0.15)
    this.add(ewYellow1)
    
    const ewYellow2 = createMesh(ewLineGeo, yellowMat, false)
    ewYellow2.rotation.x = -Math.PI / 2
    ewYellow2.position.set(0, 0.01, 0.15)
    this.add(ewYellow2)
    */
  }

  createVerticalRoadMarkings(size, yellowMat, whiteMat, dashedMat, cfg) {
    const roadWidth = CONFIG.city.roadWidth
    const lineGeo = createPlane(0.2, size)
    const dashedGeo = createPlane(0.15, size)
    
    // Center double yellow lines
    const leftYellow = createMesh(lineGeo, yellowMat, false)
    leftYellow.rotation.x = -Math.PI / 2
    leftYellow.position.set(-0.15, 0.01, 0)
    this.add(leftYellow)
    
    const rightYellow = createMesh(lineGeo, yellowMat, false)
    rightYellow.rotation.x = -Math.PI / 2
    rightYellow.position.set(0.15, 0.01, 0)
    this.add(rightYellow)
    
    // Lane dividers (dashed white lines)
    // Road width is 15. Half is 7.5.
    // Lanes are approx 3.75 wide.
    // Dividers should be at +/- 3.75
    const leftDivider = createMesh(dashedGeo, dashedMat, false)
    leftDivider.rotation.x = -Math.PI / 2
    leftDivider.position.set(-3.75, 0.01, 0)
    this.add(leftDivider)
    
    const rightDivider = createMesh(dashedGeo, dashedMat, false)
    rightDivider.rotation.x = -Math.PI / 2
    rightDivider.position.set(3.75, 0.01, 0)
    this.add(rightDivider)
    
    // Edge white lines
    const edgeGeo = createPlane(0.15, size)
    const leftEdge = createMesh(edgeGeo, whiteMat, false)
    leftEdge.rotation.x = -Math.PI / 2
    leftEdge.position.set(-roadWidth / 2 + 0.1, 0.01, 0)
    this.add(leftEdge)
    
    const rightEdge = createMesh(edgeGeo, whiteMat, false)
    rightEdge.rotation.x = -Math.PI / 2
    rightEdge.position.set(roadWidth / 2 - 0.1, 0.01, 0)
    this.add(rightEdge)
  }

  createHorizontalRoadMarkings(size, yellowMat, whiteMat, dashedMat, cfg) {
    const roadWidth = CONFIG.city.roadWidth
    const lineGeo = createPlane(size, 0.2)
    const dashedGeo = createPlane(size, 0.15)
    
    // Center double yellow lines
    const topYellow = createMesh(lineGeo, yellowMat, false)
    topYellow.rotation.x = -Math.PI / 2
    topYellow.position.set(0, 0.01, -0.15)
    this.add(topYellow)
    
    const bottomYellow = createMesh(lineGeo, yellowMat, false)
    bottomYellow.rotation.x = -Math.PI / 2
    bottomYellow.position.set(0, 0.01, 0.15)
    this.add(bottomYellow)
    
    // Lane dividers
    const topDivider = createMesh(dashedGeo, dashedMat.clone(), false)
    topDivider.rotation.x = -Math.PI / 2
    topDivider.position.set(0, 0.01, -3.75)
    this.add(topDivider)
    
    const bottomDivider = createMesh(dashedGeo, dashedMat.clone(), false)
    bottomDivider.rotation.x = -Math.PI / 2
    bottomDivider.position.set(0, 0.01, 3.75)
    this.add(bottomDivider)
    
    // Edge white lines
    const edgeGeo = createPlane(size, 0.15)
    const topEdge = createMesh(edgeGeo, whiteMat, false)
    topEdge.rotation.x = -Math.PI / 2
    topEdge.position.set(0, 0.01, -roadWidth / 2 + 0.1)
    this.add(topEdge)
    
    const bottomEdge = createMesh(edgeGeo, whiteMat, false)
    bottomEdge.rotation.x = -Math.PI / 2
    bottomEdge.position.set(0, 0.01, roadWidth / 2 - 0.1)
    this.add(bottomEdge)
  }

  createCurbs(size, cfg, orientation) {
    const roadWidth = CONFIG.city.roadWidth
    const curbMat = createLambertMaterial(0x888888)
    const curbHeight = 0.15
    
    if (orientation !== ROAD_ORIENTATIONS.HORIZONTAL) {
      const curbGeo = createBox(0.3, curbHeight, size)
      const leftCurb = createMesh(curbGeo, curbMat, false)
      leftCurb.position.set(-roadWidth / 2 - 0.15, curbHeight / 2, 0)
      this.add(leftCurb)
      
      const rightCurb = createMesh(curbGeo, curbMat, false)
      rightCurb.position.set(roadWidth / 2 + 0.15, curbHeight / 2, 0)
      this.add(rightCurb)
    }
    
    if (orientation !== ROAD_ORIENTATIONS.VERTICAL) {
      const curbGeo = createBox(size, curbHeight, 0.3)
      const topCurb = createMesh(curbGeo, curbMat, false)
      topCurb.position.set(0, curbHeight / 2, -roadWidth / 2 - 0.15)
      this.add(topCurb)
      
      const bottomCurb = createMesh(curbGeo, curbMat, false)
      bottomCurb.position.set(0, curbHeight / 2, roadWidth / 2 + 0.15)
      this.add(bottomCurb)
    }
  }

  createParkways(size, cfg, orientation) {
    const roadWidth = CONFIG.city.roadWidth
    const parkwayMat = createLambertMaterial(0x3a7d2e)
    const parkwayWidth = 1
    
    if (orientation !== ROAD_ORIENTATIONS.HORIZONTAL) {
      const parkwayGeo = createPlane(parkwayWidth, size)
      const leftParkway = createMesh(parkwayGeo, parkwayMat, false)
      leftParkway.rotation.x = -Math.PI / 2
      leftParkway.position.set(-roadWidth / 2 - 0.3 - parkwayWidth / 2, 0.16, 0)
      this.add(leftParkway)
      
      const rightParkway = createMesh(parkwayGeo, parkwayMat, false)
      rightParkway.rotation.x = -Math.PI / 2
      rightParkway.position.set(roadWidth / 2 + 0.3 + parkwayWidth / 2, 0.16, 0)
      this.add(rightParkway)
    }
    
    if (orientation !== ROAD_ORIENTATIONS.VERTICAL) {
      const parkwayGeo = createPlane(size, parkwayWidth)
      const topParkway = createMesh(parkwayGeo, parkwayMat, false)
      topParkway.rotation.x = -Math.PI / 2
      topParkway.position.set(0, 0.16, -roadWidth / 2 - 0.3 - parkwayWidth / 2)
      this.add(topParkway)
      
      const bottomParkway = createMesh(parkwayGeo, parkwayMat, false)
      bottomParkway.rotation.x = -Math.PI / 2
      bottomParkway.position.set(0, 0.16, roadWidth / 2 + 0.3 + parkwayWidth / 2)
      this.add(bottomParkway)
    }
  }

  createSidewalks(size, cfg, orientation) {
    const roadWidth = CONFIG.city.roadWidth
    const sidewalkMat = createLambertMaterial(cfg.sidewalkColor)
    const sidewalkWidth = 1.2
    const parkwayWidth = 1
    
    if (orientation !== ROAD_ORIENTATIONS.HORIZONTAL) {
      const sidewalkGeo = createBox(sidewalkWidth, 0.1, size)
      const leftWalk = createMesh(sidewalkGeo, sidewalkMat, false, true)
      leftWalk.position.set(-roadWidth / 2 - 0.3 - parkwayWidth - sidewalkWidth / 2, 0.2, 0)
      this.add(leftWalk)
      
      const rightWalk = createMesh(sidewalkGeo, sidewalkMat, false, true)
      rightWalk.position.set(roadWidth / 2 + 0.3 + parkwayWidth + sidewalkWidth / 2, 0.2, 0)
      this.add(rightWalk)
    }
    
    if (orientation !== ROAD_ORIENTATIONS.VERTICAL) {
      const sidewalkGeo = createBox(size, 0.1, sidewalkWidth)
      const topWalk = createMesh(sidewalkGeo, sidewalkMat, false, true)
      topWalk.position.set(0, 0.2, -roadWidth / 2 - 0.3 - parkwayWidth - sidewalkWidth / 2)
      this.add(topWalk)
      
      const bottomWalk = createMesh(sidewalkGeo, sidewalkMat, false, true)
      bottomWalk.position.set(0, 0.2, roadWidth / 2 + 0.3 + parkwayWidth + sidewalkWidth / 2)
      this.add(bottomWalk)
    }
  }

  addApproachArrows(direction) {
    // direction: The direction towards the intersection from this road segment.
    // e.g. 'NORTH' means the intersection is to the North of this road.
    
    const roadWidth = CONFIG.city.roadWidth
    const laneWidth = 3.75
    const arrowSize = 2.0
    
    // Create materials
    const straightLeftMat = this.createArrowMaterial('STRAIGHT_LEFT')
    const straightRightMat = this.createArrowMaterial('STRAIGHT_RIGHT')
    
    const arrowGeo = createPlane(arrowSize, arrowSize * 2)
    
    // Determine positions based on direction
    // We assume this road is adjacent to the intersection.
    // We need to place arrows on the lanes that are heading TOWARDS the direction.
    
    let lanes = []
    
    if (direction === 'NORTH') {
      // Intersection is North (-Z).
      // Traffic heading North is on the Right side (East side, +X).
      // Inner Lane (Left): x = +3.75/2 = +1.875
      // Outer Lane (Right): x = +3.75 + 3.75/2 = +5.625
      // Rotation: Facing North (-Z). Default plane is XY. Rotate X-90 -> XZ.
      // Texture Up is -Z? We need to check texture orientation.
      // Usually texture Y+ is "Up".
      // If we map it to a plane on ground:
      // We want "Up" to point North (-Z).
      
      lanes = [
        { x: 1.875, z: -2, mat: straightLeftMat }, // Inner
        { x: 5.625, z: -2, mat: straightRightMat }  // Outer
      ]
      
      lanes.forEach(l => {
        const mesh = createMesh(arrowGeo, l.mat, false, true)
        mesh.rotation.x = -Math.PI / 2
        mesh.rotation.z = 0 // Points North (-Z) if texture is standard
        mesh.position.set(l.x, 0.02, l.z)
        this.add(mesh)
      })
      
    } else if (direction === 'SOUTH') {
      // Intersection is South (+Z).
      // Traffic heading South is on the Left side (West side, -X).
      // Inner Lane: x = -1.875
      // Outer Lane: x = -5.625
      
      lanes = [
        { x: -1.875, z: 2, mat: straightLeftMat }, // Inner
        { x: -5.625, z: 2, mat: straightRightMat }  // Outer
      ]
      
      lanes.forEach(l => {
        const mesh = createMesh(arrowGeo, l.mat, false, true)
        mesh.rotation.x = -Math.PI / 2
        mesh.rotation.z = Math.PI // Points South (+Z)
        mesh.position.set(l.x, 0.02, l.z)
        this.add(mesh)
      })
      
    } else if (direction === 'EAST') {
      // Intersection is East (+X).
      // Traffic heading East is on the South side (+Z).
      // Inner Lane: z = +1.875
      // Outer Lane: z = +5.625
      
      lanes = [
        { x: 2, z: 1.875, mat: straightLeftMat }, // Inner
        { x: 2, z: 5.625, mat: straightRightMat }  // Outer
      ]
      
      lanes.forEach(l => {
        const mesh = createMesh(arrowGeo, l.mat, false, true)
        mesh.rotation.x = -Math.PI / 2
        mesh.rotation.z = -Math.PI / 2 // Points East (+X)
        mesh.position.set(l.x, 0.02, l.z)
        this.add(mesh)
      })
      
    } else if (direction === 'WEST') {
      // Intersection is West (-X).
      // Traffic heading West is on the North side (-Z).
      // Inner Lane: z = -1.875
      // Outer Lane: z = -5.625
      
      lanes = [
        { x: -2, z: -1.875, mat: straightLeftMat }, // Inner
        { x: -2, z: -5.625, mat: straightRightMat }  // Outer
      ]
      
      lanes.forEach(l => {
        const mesh = createMesh(arrowGeo, l.mat, false, true)
        mesh.rotation.x = -Math.PI / 2
        mesh.rotation.z = Math.PI / 2 // Points West (-X)
        mesh.position.set(l.x, 0.02, l.z)
        this.add(mesh)
      })
    }
  }

  createArrowMaterial(type) {
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 256
    const ctx = canvas.getContext('2d')
    
    // Clear
    ctx.clearRect(0, 0, 128, 256)
    
    // Draw Arrow
    ctx.fillStyle = '#ffffff'
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 10
    
    const cx = 64
    const cy = 128
    
    // Stem
    ctx.beginPath()
    ctx.moveTo(cx, 240)
    ctx.lineTo(cx, 80)
    ctx.stroke()
    
    // Arrowhead (Straight)
    ctx.beginPath()
    ctx.moveTo(cx, 80)
    ctx.lineTo(cx - 30, 110)
    ctx.lineTo(cx + 30, 110)
    ctx.fill()
    
    if (type === 'STRAIGHT_LEFT') {
      // Left Turn Branch
      ctx.beginPath()
      ctx.moveTo(cx, 160)
      ctx.quadraticCurveTo(cx, 120, 20, 120) // Curve to left
      ctx.stroke()
      
      // Left Arrowhead
      ctx.beginPath()
      ctx.moveTo(20, 120)
      ctx.lineTo(40, 100)
      ctx.lineTo(40, 140)
      ctx.fill()
    } else if (type === 'STRAIGHT_RIGHT') {
      // Right Turn Branch
      ctx.beginPath()
      ctx.moveTo(cx, 160)
      ctx.quadraticCurveTo(cx, 120, 108, 120) // Curve to right
      ctx.stroke()
      
      // Right Arrowhead
      ctx.beginPath()
      ctx.moveTo(108, 120)
      ctx.lineTo(88, 100)
      ctx.lineTo(88, 140)
      ctx.fill()
    }
    
    const tex = new THREE.CanvasTexture(canvas)
    return createBasicMaterial(0xffffff, { map: tex, transparent: true })
  }
}
