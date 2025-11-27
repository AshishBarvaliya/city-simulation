import * as THREE from 'three'
import { BaseEntity } from './entities/BaseEntity.js'
import { CONFIG } from './config/config.js'
import { ENTITY_TYPES } from './config/constants.js'
import { randomRange, randomInt } from './utils/MathUtils.js'
import { randomColorHSL, darkenColor } from './utils/ColorUtils.js'
import { createBox, createCylinder, createMesh, createLambertMaterial, createWindowTexture } from './utils/GeometryFactory.js'

export class Building extends BaseEntity {
  constructor(buildingType = null) {
    super(ENTITY_TYPES.BUILDING)
    
    // Randomly select building type if not specified (1-6)
    // Using weighted probabilities: Type 1=25%, Type 2=20%, Type 3=5%, Type 4=15%, Type 5=5%, Type 6=30%
    this.buildingType = buildingType || this.selectWeightedBuildingType()
    
    this.createBuilding()
    
    // Enable shadows
    this.enableShadows(true, true)
  }

  selectWeightedBuildingType() {
    const rand = Math.random() * 100
    
    if (rand < 35) return 1        // 0-35: Type 1 (35%)
    if (rand < 45) return 2        // 35-45: Type 2 (10%)
    if (rand < 50) return 3        // 45-50: Type 3 (5%)
    if (rand < 55) return 4        // 50-55: Type 4 (5%)
    if (rand < 70) return 5        // 55-70: Type 5 (15%)
    return 6                       // 70-100: Type 6 (30%)
  }

  createBuilding() {
    switch (this.buildingType) {
      case 1:
        this.createClassicBuilding()
        break
      case 2:
        this.createTwistedTower()
        break
      case 3:
        this.createClockTower()
        break
      case 4:
        this.createModernSkyscraper()
        break
      case 5:
        this.createTownhouse()
        break
      case 6:
        this.createBrownstone()
        break
      default:
        this.createClassicBuilding()
    }
  }

  // TYPE 1: Classic building with quoins and awnings
  createClassicBuilding() {
    const cfg = CONFIG.building
    
    // Simple rectangular building - 5 to 10 floors
    const width = randomRange(cfg.baseSizeMin, cfg.baseSizeMax)
    const depth = randomRange(cfg.baseSizeMin, cfg.baseSizeMax)
    const floors = randomInt(5, 10)
    const floorHeight = 3
    const totalHeight = floors * floorHeight
    
    // Random building color
    const buildingColor = randomColorHSL(0, 360, 40, 60, 50, 70)
    const trimColor = 0xeeeeee // Light trim/accent color
    
    // Main building body
    this.createMainBody(width, depth, totalHeight, buildingColor)
    
    // Add architectural details
    this.addCornerQuoins(width, depth, totalHeight, trimColor)
    this.addFloorBands(width, depth, floors, floorHeight, trimColor)
    this.addWindows(width, depth, floors, floorHeight)
    this.addEntrance(width, depth, trimColor)
    this.addAwnings(width, depth)
    
    // Add decorative roof
    this.addClassicRoof(width, depth, totalHeight, trimColor)
  }

  addClassicRoof(width, depth, height, trimColor) {
    // Roof parapet/crown
    const parapetHeight = 0.8
    const parapetMat = createLambertMaterial(trimColor)
    const parapet = createMesh(createBox(width + 0.3, parapetHeight, depth + 0.3), parapetMat)
    parapet.position.y = height + parapetHeight / 2
    this.add(parapet)
    
    // Corner decorative elements
    const cornerSize = 0.5
    const cornerMat = createLambertMaterial(trimColor)
    const corners = [
      { x: width / 2 + 0.2, z: depth / 2 + 0.2 },
      { x: -width / 2 - 0.2, z: depth / 2 + 0.2 },
      { x: width / 2 + 0.2, z: -depth / 2 - 0.2 },
      { x: -width / 2 - 0.2, z: -depth / 2 - 0.2 },
    ]
    
    corners.forEach(pos => {
      const corner = createMesh(createBox(cornerSize, 1, cornerSize), cornerMat)
      corner.position.set(pos.x, height + 1, pos.z)
      this.add(corner)
    })
    
    // Rooftop antenna (50% chance)
    if (Math.random() > 0.5) {
      const poleMat = createLambertMaterial(0x666666)
      const poleHeight = 2
      const pole = createMesh(createCylinder(0.05, 0.05, poleHeight), poleMat)
      pole.position.y = height + parapetHeight + poleHeight / 2
      this.add(pole)
      
      // Antenna crossbars
      const barMat = createLambertMaterial(0x888888)
      const bar1 = createMesh(createBox(1.5, 0.05, 0.05), barMat)
      bar1.position.y = height + parapetHeight + poleHeight - 0.3
      this.add(bar1)
      
      const bar2 = createMesh(createBox(1, 0.05, 0.05), barMat)
      bar2.position.y = height + parapetHeight + poleHeight - 0.6
      this.add(bar2)
    }
  }

  // TYPE 2: Modern twisted tower
  createTwistedTower() {
    const baseSize = 8
    const floors = randomInt(20, 30) // Reduced from 30-50 for performance
    const floorHeight = 0.6 // Increased height per floor to maintain visual height
    const totalHeight = floors * floorHeight
    const maxRotation = Math.PI / 2 // 90 degree twist
    
    // Glass/modern colors
    const glassColor = randomColorHSL(180, 220, 40, 60, 40, 60)
    const trimColor = 0xdddddd
    
    // Create each floor with rotation (fewer floors = better performance)
    for (let i = 0; i < floors; i++) {
      const y = i * floorHeight
      const rotation = (i / floors) * maxRotation
      const scale = 1 - Math.abs(i - floors / 2) / floors * 0.3 // Pinch in middle
      
      this.addTowerFloor(baseSize * scale, floorHeight, y, rotation, glassColor, trimColor)
    }
    
    // Add modern roof crown
    this.addModernRoof(baseSize * 0.7, totalHeight, maxRotation, glassColor, trimColor)
  }

  addModernRoof(size, height, rotation, glassColor, trimColor) {
    // Top crown/spire
    const crownHeight = 2
    const crownMat = createLambertMaterial(trimColor)
    
    // Tapered crown
    for (let i = 0; i < 5; i++) {
      const y = height + i * 0.4
      const scale = 1 - i * 0.15
      const crown = createMesh(createBox(size * scale, 0.3, size * scale), crownMat)
      crown.position.y = y
      crown.rotation.y = rotation + i * 0.1
      this.add(crown)
    }
    
    // Spire on top
    const spireHeight = 1.5
    const spireMat = createLambertMaterial(0xaaaaaa)
    const spire = createMesh(createCylinder(0.1, 0.3, spireHeight), spireMat)
    spire.position.y = height + crownHeight + spireHeight / 2
    this.add(spire)
    
    // Decorative lights at top
    const lightMat = createLambertMaterial(0xff0000)
    const light = createMesh(createBox(0.2, 0.2, 0.2), lightMat)
    light.position.y = height + crownHeight + spireHeight
    this.add(light)
  }

  addTowerFloor(size, height, y, rotation, glassColor, trimColor) {
    // Floor plate
    const floorGeo = createBox(size, height * 0.8, size)
    const floorMat = createLambertMaterial(glassColor)
    const floor = createMesh(floorGeo, floorMat, true, true)
    floor.position.y = y + height / 2
    floor.rotation.y = rotation
    this.add(floor)
    
    // Horizontal trim band
    const bandGeo = createBox(size + 0.1, height * 0.2, size + 0.1)
    const bandMat = createLambertMaterial(trimColor)
    const band = createMesh(bandGeo, bandMat, true, true)
    band.position.y = y + height
    band.rotation.y = rotation
    this.add(band)
  }

  createMainBody(width, depth, height, color) {
    const geometry = createBox(width, height, depth)
    const material = createLambertMaterial(color)
    const body = createMesh(geometry, material, true, true)
    body.position.y = height / 2
    this.add(body)
  }

  addCornerQuoins(width, depth, height, color) {
    // Decorative corner stones
    const quoinWidth = 0.3
    const quoinDepth = 0.5
    const quoinHeight = 0.6
    const quoinMat = createLambertMaterial(color)
    
    const numQuoins = Math.floor(height / quoinHeight) - 1
    
    for (let i = 0; i < numQuoins; i++) {
      const y = quoinHeight / 2 + i * quoinHeight
      const offset = (i % 2) * 0.15 // Alternating pattern
      
      // Four corners
      const corners = [
        { x: width / 2 + quoinWidth / 2 - offset, z: depth / 2 },
        { x: -width / 2 - quoinWidth / 2 + offset, z: depth / 2 },
        { x: width / 2 + quoinWidth / 2 - offset, z: -depth / 2 },
        { x: -width / 2 - quoinWidth / 2 + offset, z: -depth / 2 },
      ]
      
      corners.forEach(pos => {
        const quoin = createMesh(createBox(quoinWidth, quoinHeight, quoinDepth), quoinMat)
        quoin.position.set(pos.x, y, pos.z)
        this.add(quoin)
      })
    }
  }

  addFloorBands(width, depth, floors, floorHeight, color) {
    // Horizontal bands between floors
    const bandHeight = 0.2
    const bandMat = createLambertMaterial(color)
    
    for (let i = 1; i < floors; i++) {
      const y = i * floorHeight
      const band = createMesh(createBox(width + 0.1, bandHeight, depth + 0.1), bandMat)
      band.position.y = y
      this.add(band)
    }
  }

  addWindows(width, depth, floors, floorHeight) {
    const windowWidth = 0.8
    const windowHeight = 1.5
    const windowDepth = 0.15
    const windowMat = createLambertMaterial(0x88ccff)
    const frameMat = createLambertMaterial(0xffffff)
    
    const windowsPerSide = Math.floor(width / 2)
    
    for (let floor = 0; floor < floors; floor++) {
      const y = floor * floorHeight + floorHeight / 2
      
      // Front and back windows
      for (let i = 0; i < windowsPerSide; i++) {
        const x = (i - windowsPerSide / 2 + 0.5) * 2
        
        // Front
        this.addSingleWindow(x, y, depth / 2 + windowDepth / 2, windowWidth, windowHeight, windowDepth, windowMat, frameMat)
        // Back
        this.addSingleWindow(x, y, -depth / 2 - windowDepth / 2, windowWidth, windowHeight, windowDepth, windowMat, frameMat)
      }
      
      // Side windows
      const sideWindows = Math.floor(depth / 2)
      for (let i = 0; i < sideWindows; i++) {
        const z = (i - sideWindows / 2 + 0.5) * 2
        
        // Right side
        this.addSingleWindow(width / 2 + windowDepth / 2, y, z, windowDepth, windowHeight, windowWidth, windowMat, frameMat)
        // Left side
        this.addSingleWindow(-width / 2 - windowDepth / 2, y, z, windowDepth, windowHeight, windowWidth, windowMat, frameMat)
      }
    }
  }

  addSingleWindow(x, y, z, w, h, d, glassMat, frameMat) {
    // Window frame
    const frame = createMesh(createBox(w + 0.1, h + 0.1, d + 0.05), frameMat)
    frame.position.set(x, y, z)
    this.add(frame)
    
    // Glass
    const glass = createMesh(createBox(w, h, d), glassMat)
    glass.position.set(x, y, z)
    this.add(glass)
  }

  addEntrance(width, depth, trimColor) {
    const doorWidth = 1.2
    const doorHeight = 2
    const doorDepth = 0.2
    
    // Door
    const doorMat = createLambertMaterial(0x4a3728)
    const door = createMesh(createBox(doorWidth, doorHeight, doorDepth), doorMat)
    door.position.set(0, doorHeight / 2, depth / 2 + doorDepth / 2)
    this.add(door)
    
    // Door frame
    const frameMat = createLambertMaterial(trimColor)
    const frame = createMesh(createBox(doorWidth + 0.2, doorHeight + 0.2, doorDepth + 0.1), frameMat)
    frame.position.set(0, doorHeight / 2, depth / 2 + doorDepth / 2)
    this.add(frame)
    
    // Entrance stairs
    const stairWidth = 2
    const stairDepth = 1
    const stairHeight = 0.3
    const stairMat = createLambertMaterial(0xcccccc)
    
    for (let i = 0; i < 3; i++) {
      const stair = createMesh(createBox(stairWidth, stairHeight, stairDepth - i * 0.2), stairMat)
      stair.position.set(0, stairHeight / 2 + i * stairHeight, depth / 2 + stairDepth / 2 + 0.5 - i * 0.3)
      this.add(stair)
    }
  }

  addAwnings(width, depth) {
    // Awnings above ground floor windows
    const awningMat = createLambertMaterial(0xffcc00)
    const awningWidth = 1
    const awningDepth = 0.6
    const awningHeight = 0.1
    
    const numAwnings = Math.floor(width / 2) - 1
    
    for (let i = 0; i < numAwnings; i++) {
      const x = (i - numAwnings / 2 + 0.5) * 2.5
      if (Math.abs(x) > 1.5) { // Skip center (door area)
        const awning = createMesh(createBox(awningWidth, awningHeight, awningDepth), awningMat)
        awning.position.set(x, 2.3, depth / 2 + awningDepth / 2)
        this.add(awning)
      }
    }
  }

  // TYPE 3: Clock Tower
  createClockTower() {
    const baseSize = 7
    const towerColor = randomColorHSL(200, 220, 30, 50, 50, 70)
    const accentColor = 0xdddddd
    const clockColor = 0xffd700 // Gold
    
    let currentY = 0
    
    // Base section (tall main tower)
    const baseHeight = 25
    this.addTowerSection(baseSize, baseHeight, currentY, towerColor, accentColor, true)
    currentY += baseHeight
    
    // Clock section (wider with clock faces)
    const clockSectionHeight = 5
    const clockSectionSize = baseSize + 1.5
    this.addClockSection(clockSectionSize, clockSectionHeight, currentY, towerColor, clockColor)
    currentY += clockSectionHeight
    
    // Upper decorative tier
    const tier1Height = 3
    const tier1Size = baseSize - 0.5
    this.addTowerSection(tier1Size, tier1Height, currentY, towerColor, accentColor, false)
    currentY += tier1Height
    
    // Second tier
    const tier2Height = 2.5
    const tier2Size = baseSize - 1.5
    this.addTowerSection(tier2Size, tier2Height, currentY, towerColor, accentColor, false)
    currentY += tier2Height
    
    // Roof/spire section
    this.addClockTowerRoof(baseSize - 2, currentY, accentColor)
  }

  addTowerSection(size, height, y, color, accentColor, hasWindows) {
    // Main body
    const bodyMat = createLambertMaterial(color)
    const body = createMesh(createBox(size, height, size), bodyMat, true, true)
    body.position.y = y + height / 2
    this.add(body)
    
    // Corner pillars
    const pillarSize = 0.4
    const pillarMat = createLambertMaterial(accentColor)
    const corners = [
      { x: size / 2, z: size / 2 },
      { x: -size / 2, z: size / 2 },
      { x: size / 2, z: -size / 2 },
      { x: -size / 2, z: -size / 2 },
    ]
    
    corners.forEach(pos => {
      const pillar = createMesh(createBox(pillarSize, height, pillarSize), pillarMat, true, true)
      pillar.position.set(pos.x, y + height / 2, pos.z)
      this.add(pillar)
    })
    
    // Windows if specified
    if (hasWindows) {
      const windowsPerFloor = 2
      const floors = Math.floor(height / 3)
      
      for (let floor = 0; floor < floors; floor++) {
        const floorY = y + floor * 3 + 1.5
        
        for (let i = 0; i < windowsPerFloor; i++) {
          const offset = (i - 0.5) * 2
          
          // Front and back windows
          this.addTowerWindow(offset, floorY, size / 2 + 0.1, 0.6, 1.2, 0.1)
          this.addTowerWindow(offset, floorY, -size / 2 - 0.1, 0.6, 1.2, 0.1)
        }
      }
    }
    
    // Top trim band
    const bandMat = createLambertMaterial(accentColor)
    const band = createMesh(createBox(size + 0.2, 0.3, size + 0.2), bandMat, true, true)
    band.position.y = y + height
    this.add(band)
  }

  addTowerWindow(x, y, z, w, h, d) {
    const frameMat = createLambertMaterial(0xffffff)
    const glassMat = createLambertMaterial(0x88ccff)
    
    const frame = createMesh(createBox(w + 0.1, h + 0.1, d), frameMat)
    frame.position.set(x, y, z)
    this.add(frame)
    
    const glass = createMesh(createBox(w, h, d), glassMat)
    glass.position.set(x, y, z)
    this.add(glass)
  }

  addClockSection(size, height, y, color, clockColor) {
    // Main body
    const bodyMat = createLambertMaterial(color)
    const body = createMesh(createBox(size, height, size), bodyMat, true, true)
    body.position.y = y + height / 2
    this.add(body)
    
    // Clock faces on all 4 sides
    const clockSize = 3
    const clockDepth = 0.2
    const clockY = y + height / 2
    
    // Front
    this.addClockFace(0, clockY, size / 2 + clockDepth / 2, clockSize, clockColor, 0)
    // Back
    this.addClockFace(0, clockY, -size / 2 - clockDepth / 2, clockSize, clockColor, Math.PI)
    // Right
    this.addClockFace(size / 2 + clockDepth / 2, clockY, 0, clockSize, clockColor, Math.PI / 2)
    // Left
    this.addClockFace(-size / 2 - clockDepth / 2, clockY, 0, clockSize, clockColor, -Math.PI / 2)
  }

  addClockFace(x, y, z, size, color, rotation) {
    // Clock face background
    const faceMat = createLambertMaterial(color)
    const face = createMesh(createBox(size, size, 0.15), faceMat)
    face.position.set(x, y, z)
    if (rotation !== 0) face.rotation.y = rotation
    this.add(face)
    
    // Clock border/frame
    const frameMat = createLambertMaterial(0x8b4513)
    const frameThickness = 0.2
    const frame = createMesh(createBox(size + frameThickness, size + frameThickness, 0.1), frameMat)
    frame.position.set(x, y, z)
    if (rotation !== 0) frame.rotation.y = rotation
    this.add(frame)
    
    // Center circle
    const centerMat = createLambertMaterial(0x333333)
    const center = createMesh(createCylinder(0.2, 0.2, 0.1), centerMat)
    center.rotation.x = Math.PI / 2
    center.position.set(x, y, z)
    if (rotation !== 0) center.rotation.y = rotation
    this.add(center)
  }

  addClockTowerRoof(size, y, color) {
    // Pyramidal roof
    const roofHeight = 4
    const roofLayers = 8
    
    for (let i = 0; i < roofLayers; i++) {
      const layerY = y + i * (roofHeight / roofLayers)
      const layerSize = size * (1 - i / roofLayers)
      const layerMat = createLambertMaterial(i % 2 === 0 ? color : 0x999999)
      const layer = createMesh(createBox(layerSize, roofHeight / roofLayers, layerSize), layerMat)
      layer.position.y = layerY
      this.add(layer)
    }
    
    // Spire on top
    const spireHeight = 3
    const spireMat = createLambertMaterial(0xffd700)
    const spire = createMesh(createCylinder(0.1, 0.3, spireHeight), spireMat)
    spire.position.y = y + roofHeight + spireHeight / 2
    this.add(spire)
    
    // Decorative ball on spire
    const ball = createMesh(createCylinder(0.3, 0.3, 0.4), spireMat)
    ball.position.y = y + roofHeight + spireHeight
    this.add(ball)
  }

  // TYPE 4: Modern Skyscraper with wide base and slanted top
  createModernSkyscraper() {
    const baseColor = randomColorHSL(0, 360, 30, 50, 60, 80)
    const glassColor = randomColorHSL(180, 220, 40, 60, 50, 70)
    const accentColor = 0xe0e0e0
    
    let currentY = 0
    
    // Wide ornate base (podium)
    const baseWidth = 10
    const baseDepth = 10
    const baseHeight = 8
    this.addSkyscraperBase(baseWidth, baseDepth, baseHeight, currentY, baseColor, accentColor)
    currentY += baseHeight
    
    // Transition section
    const transitionHeight = 3
    const transitionSize = 7
    this.addTransitionSection(transitionSize, transitionHeight, currentY, baseColor, accentColor)
    currentY += transitionHeight
    
    // Main tower (tall and narrow)
    const towerWidth = 6
    const towerDepth = 6
    const towerHeight = 30
    this.addTowerBody(towerWidth, towerDepth, towerHeight, currentY, glassColor, accentColor)
    currentY += towerHeight
    
    // Slanted top
    this.addSlantedTop(towerWidth, towerDepth, currentY, glassColor, accentColor)
  }

  addSkyscraperBase(width, depth, height, y, color, accentColor) {
    // Main base body
    const baseMat = createLambertMaterial(color)
    const base = createMesh(createBox(width, height, depth), baseMat, true, true)
    base.position.y = y + height / 2
    this.add(base)
    
    // Large windows on base (3 floors)
    const floors = 3
    const floorHeight = height / floors
    
    for (let floor = 0; floor < floors; floor++) {
      const floorY = y + floor * floorHeight + floorHeight / 2
      
      // Front and back - 4 large windows each
      for (let i = 0; i < 4; i++) {
        const x = (i - 1.5) * 2.2
        
        // Front
        this.addLargeWindow(x, floorY, depth / 2 + 0.15, 1.8, floorHeight * 0.8, 0.15)
        // Back
        this.addLargeWindow(x, floorY, -depth / 2 - 0.15, 1.8, floorHeight * 0.8, 0.15)
      }
      
      // Sides - 4 large windows each
      for (let i = 0; i < 4; i++) {
        const z = (i - 1.5) * 2.2
        
        // Right
        this.addLargeWindow(width / 2 + 0.15, floorY, z, 0.15, floorHeight * 0.8, 1.8)
        // Left
        this.addLargeWindow(-width / 2 - 0.15, floorY, z, 0.15, floorHeight * 0.8, 1.8)
      }
      
      // Floor separator band
      if (floor < floors - 1) {
        const bandMat = createLambertMaterial(accentColor)
        const band = createMesh(createBox(width + 0.2, 0.2, depth + 0.2), bandMat, true, true)
        band.position.y = y + (floor + 1) * floorHeight
        this.add(band)
      }
    }
    
    // Decorative columns at corners
    const columnMat = createLambertMaterial(accentColor)
    const corners = [
      { x: width / 2 - 0.3, z: depth / 2 - 0.3 },
      { x: -width / 2 + 0.3, z: depth / 2 - 0.3 },
      { x: width / 2 - 0.3, z: -depth / 2 + 0.3 },
      { x: -width / 2 + 0.3, z: -depth / 2 + 0.3 },
    ]
    
    corners.forEach(pos => {
      const column = createMesh(createBox(0.5, height, 0.5), columnMat, true, true)
      column.position.set(pos.x, y + height / 2, pos.z)
      this.add(column)
    })
  }

  addLargeWindow(x, y, z, w, h, d) {
    const glassMat = createLambertMaterial(0x88ccff)
    const frameMat = createLambertMaterial(0xffffff)
    
    // Frame
    const frame = createMesh(createBox(w + 0.15, h + 0.15, d + 0.05), frameMat)
    frame.position.set(x, y, z)
    this.add(frame)
    
    // Glass
    const glass = createMesh(createBox(w, h, d), glassMat)
    glass.position.set(x, y, z)
    this.add(glass)
  }

  addTransitionSection(size, height, y, color, accentColor) {
    // Transition from wide base to narrow tower
    const mat = createLambertMaterial(color)
    const section = createMesh(createBox(size, height, size), mat, true, true)
    section.position.y = y + height / 2
    this.add(section)
    
    // Decorative band
    const bandMat = createLambertMaterial(accentColor)
    const band = createMesh(createBox(size + 0.3, 0.3, size + 0.3), bandMat, true, true)
    band.position.y = y + height
    this.add(band)
  }

  addTowerBody(width, depth, height, y, glassColor, accentColor) {
    // Main glass tower with grid pattern
    const glassMat = createLambertMaterial(glassColor)
    const tower = createMesh(createBox(width, height, depth), glassMat, true, true)
    tower.position.y = y + height / 2
    this.add(tower)
    
    // Vertical accent strips
    const stripMat = createLambertMaterial(accentColor)
    const numStrips = 3
    
    for (let i = 0; i < numStrips; i++) {
      const x = (i - 1) * 2
      
      // Front strips
      const stripFront = createMesh(createBox(0.15, height, 0.1), stripMat, true, true)
      stripFront.position.set(x, y + height / 2, depth / 2 + 0.05)
      this.add(stripFront)
      
      // Back strips
      const stripBack = createMesh(createBox(0.15, height, 0.1), stripMat, true, true)
      stripBack.position.set(x, y + height / 2, -depth / 2 - 0.05)
      this.add(stripBack)
    }
    
    // Horizontal bands every few floors
    const numBands = 10
    for (let i = 1; i < numBands; i++) {
      const bandY = y + (i / numBands) * height
      const band = createMesh(createBox(width + 0.1, 0.15, depth + 0.1), stripMat, true, true)
      band.position.y = bandY
      this.add(band)
    }
  }

  addSlantedTop(width, depth, y, glassColor, accentColor) {
    // Create slanted top by stacking progressively offset boxes
    const layers = 8
    const layerHeight = 0.5
    const slantAngle = 0.3 // How much to offset each layer
    
    for (let i = 0; i < layers; i++) {
      const layerY = y + i * layerHeight
      const offset = i * slantAngle
      const layerWidth = width * (1 - i / (layers * 2))
      const layerDepth = depth * (1 - i / (layers * 2))
      
      const mat = createLambertMaterial(i % 2 === 0 ? glassColor : accentColor)
      const layer = createMesh(createBox(layerWidth, layerHeight, layerDepth), mat, true, true)
      layer.position.set(offset, layerY, 0)
      this.add(layer)
    }
    
    // Top cap
    const capHeight = 1
    const capMat = createLambertMaterial(accentColor)
    const cap = createMesh(createBox(width * 0.4, capHeight, depth * 0.4), capMat, true, true)
    cap.position.set(layers * slantAngle, y + layers * layerHeight + capHeight / 2, 0)
    this.add(cap)
  }

  // TYPE 5: European Townhouse with peaked roof
  createTownhouse() {
    const width = 6
    const depth = 5
    const floors = 4
    const floorHeight = 3
    const totalHeight = floors * floorHeight
    
    // Gray building color
    const buildingColor = 0x999999
    const roofColor = 0x333333
    const windowGlow = 0xff8800 // Orange glow
    const doorColor = 0x8b4513 // Brown wood
    
    // Main building body
    const bodyMat = createLambertMaterial(buildingColor)
    const body = createMesh(createBox(width, totalHeight, depth), bodyMat, true, true)
    body.position.y = totalHeight / 2
    this.add(body)
    
    // Add windows (2 per floor, glowing orange)
    for (let floor = 1; floor < floors; floor++) {
      const y = floor * floorHeight + floorHeight / 2
      
      // Two large windows per floor
      this.addGlowingWindow(-1.5, y, depth / 2 + 0.15, 2, 2.2, 0.15, windowGlow)
      this.addGlowingWindow(1.5, y, depth / 2 + 0.15, 2, 2.2, 0.15, windowGlow)
      
      // Back windows
      this.addGlowingWindow(-1.5, y, -depth / 2 - 0.15, 2, 2.2, 0.15, windowGlow)
      this.addGlowingWindow(1.5, y, -depth / 2 - 0.15, 2, 2.2, 0.15, windowGlow)
      
      // Small side balconies
      if (floor > 0 && floor < floors - 1) {
        this.addBalcony(width / 2 + 0.3, y - 0.5, 0)
        this.addBalcony(-width / 2 - 0.3, y - 0.5, 0)
      }
    }
    
    // Small windows near roof
    const topY = totalHeight - 1
    this.addSmallWindow(-2, topY, depth / 2 + 0.1, 0.8, 0.6)
    this.addSmallWindow(0, topY, depth / 2 + 0.1, 0.8, 0.6)
    this.addSmallWindow(2, topY, depth / 2 + 0.1, 0.8, 0.6)
    
    // Ground floor door
    const doorWidth = 1.5
    const doorHeight = 2.5
    const doorMat = createLambertMaterial(doorColor)
    const door = createMesh(createBox(doorWidth, doorHeight, 0.2), doorMat)
    door.position.set(0, doorHeight / 2, depth / 2 + 0.1)
    this.add(door)
    
    // Door panels (vertical lines)
    const panelMat = createLambertMaterial(0x654321)
    for (let i = 0; i < 3; i++) {
      const panel = createMesh(createBox(0.1, doorHeight * 0.9, 0.05), panelMat)
      panel.position.set((i - 1) * 0.4, doorHeight / 2, depth / 2 + 0.15)
      this.add(panel)
    }
    
    // Small windows beside door
    this.addSmallWindow(-2.5, 1.5, depth / 2 + 0.1, 0.6, 0.8)
    this.addSmallWindow(2.5, 1.5, depth / 2 + 0.1, 0.6, 0.8)
    
    // Triangular peaked roof
    this.addPeakedRoof(width, depth, totalHeight, roofColor)
  }

  addGlowingWindow(x, y, z, w, h, d, glowColor) {
    // Dark frame
    const frameMat = createLambertMaterial(0x4a4a4a)
    const frame = createMesh(createBox(w + 0.2, h + 0.2, d), frameMat)
    frame.position.set(x, y, z)
    this.add(frame)
    
    // Glowing orange interior
    const glowMat = createLambertMaterial(glowColor)
    const glow = createMesh(createBox(w, h, d - 0.05), glowMat)
    glow.position.set(x, y, z)
    this.add(glow)
    
    // Window panes (cross pattern)
    const paneMat = createLambertMaterial(0x2a2a2a)
    
    // Vertical divider
    const vPane = createMesh(createBox(0.1, h, d + 0.05), paneMat)
    vPane.position.set(x, y, z)
    this.add(vPane)
    
    // Horizontal divider
    const hPane = createMesh(createBox(w, 0.1, d + 0.05), paneMat)
    hPane.position.set(x, y, z)
    this.add(hPane)
  }

  addSmallWindow(x, y, z, w, h) {
    const frameMat = createLambertMaterial(0x4a4a4a)
    const frame = createMesh(createBox(w, h, 0.1), frameMat)
    frame.position.set(x, y, z)
    this.add(frame)
  }

  addBalcony(x, y, z) {
    const balconyMat = createLambertMaterial(0x654321)
    const balcony = createMesh(createBox(0.4, 0.3, 1), balconyMat)
    balcony.position.set(x, y, z)
    this.add(balcony)
  }

  addPeakedRoof(width, depth, height, color) {
    // Create triangular peaked roof using multiple layers
    const roofHeight = 4
    const roofLayers = 12
    const roofMat = createLambertMaterial(color)
    
    for (let i = 0; i < roofLayers; i++) {
      const layerY = height + (i / roofLayers) * roofHeight
      const layerWidth = width * (1 - i / roofLayers)
      const layerHeight = roofHeight / roofLayers
      
      const layer = createMesh(createBox(layerWidth, layerHeight, depth + 0.5), roofMat, true, true)
      layer.position.y = layerY
      this.add(layer)
    }
  }

  // TYPE 6: Brownstone/Rowhouse
  createBrownstone() {
    const width = 7
    const depth = 6
    const floors = 4
    const floorHeight = 3
    const totalHeight = floors * floorHeight
    
    // Brownstone colors (tan/beige)
    const stoneColor = randomColorHSL(20, 40, 40, 60, 50, 70)
    const trimColor = 0x8b7355
    const windowColor = 0xffffff
    const doorColor = 0x2a2a2a
    
    // Main building body with horizontal siding
    this.addHorizontalSiding(width, depth, totalHeight, stoneColor, trimColor)
    
    // Corner quoins
    this.addBrownstoneQuoins(width, depth, totalHeight, trimColor)
    
    // Windows (3 per floor)
    for (let floor = 1; floor < floors; floor++) {
      const y = floor * floorHeight + floorHeight / 2
      
      // Three windows per floor
      for (let i = 0; i < 3; i++) {
        const x = (i - 1) * 2
        this.addBrownstoneWindow(x, y, depth / 2 + 0.15, 1.2, 1.8, windowColor, floor === 1)
      }
    }
    
    // Top floor smaller windows
    const topY = totalHeight - 1
    for (let i = 0; i < 3; i++) {
      const x = (i - 1) * 2
      this.addBrownstoneWindow(x, topY, depth / 2 + 0.15, 1, 1.2, windowColor, false)
    }
    
    // Arched entrance door
    this.addArchedEntrance(0, 1.5, depth / 2 + 0.2, doorColor, trimColor)
    
    // Basement windows
    this.addBasementWindows(width, depth, doorColor)
    
    // Entrance stairs with railings
    this.addEntranceStairs(width, depth, trimColor)
    
    // Decorative cornice at top
    this.addCornice(width, depth, totalHeight, trimColor)
    
    // Flat roof with parapet
    this.addFlatRoof(width, depth, totalHeight, trimColor)
  }

  addHorizontalSiding(width, depth, height, color, trimColor) {
    // Main body
    const bodyMat = createLambertMaterial(color)
    const body = createMesh(createBox(width, height, depth), bodyMat, true, true)
    body.position.y = height / 2
    this.add(body)
    
    // Horizontal siding lines (reduced for performance)
    const sidingMat = createLambertMaterial(trimColor)
    const numLines = Math.floor(height / 0.8) // Reduced from 0.4 spacing
    
    for (let i = 0; i < numLines; i++) {
      const y = i * 0.8
      const line = createMesh(createBox(width + 0.05, 0.05, depth + 0.05), sidingMat, true, true)
      line.position.y = y
      this.add(line)
    }
  }

  addBrownstoneQuoins(width, depth, height, color) {
    const quoinMat = createLambertMaterial(color)
    const quoinWidth = 0.4
    const quoinHeight = 0.5
    const numQuoins = Math.floor(height / quoinHeight)
    
    for (let i = 0; i < numQuoins; i++) {
      const y = i * quoinHeight + quoinHeight / 2
      const offset = (i % 2) * 0.2
      
      // Four corners
      const corners = [
        { x: width / 2 + quoinWidth / 2 - offset, z: depth / 2 },
        { x: -width / 2 - quoinWidth / 2 + offset, z: depth / 2 },
        { x: width / 2 + quoinWidth / 2 - offset, z: -depth / 2 },
        { x: -width / 2 - quoinWidth / 2 + offset, z: -depth / 2 },
      ]
      
      corners.forEach(pos => {
        const quoin = createMesh(createBox(quoinWidth, quoinHeight, 0.6), quoinMat)
        quoin.position.set(pos.x, y, pos.z)
        this.add(quoin)
      })
    }
  }

  addBrownstoneWindow(x, y, z, w, h, color, hasArch) {
    // Window frame
    const frameMat = createLambertMaterial(color)
    const frame = createMesh(createBox(w + 0.15, h + 0.15, 0.15), frameMat)
    frame.position.set(x, y, z)
    this.add(frame)
    
    // Glass
    const glassMat = createLambertMaterial(0x88ccff)
    const glass = createMesh(createBox(w, h, 0.1), glassMat)
    glass.position.set(x, y, z)
    this.add(glass)
    
    // Arched top for first floor windows
    if (hasArch) {
      const archMat = createLambertMaterial(color)
      const arch = createMesh(createBox(w + 0.15, 0.3, 0.2), archMat)
      arch.position.set(x, y + h / 2 + 0.15, z)
      this.add(arch)
    }
  }

  addArchedEntrance(x, y, z, doorColor, archColor) {
    // Arched frame
    const archMat = createLambertMaterial(archColor)
    const arch = createMesh(createBox(2, 2.5, 0.3), archMat)
    arch.position.set(x, y, z)
    this.add(arch)
    
    // Door
    const doorMat = createLambertMaterial(doorColor)
    const door = createMesh(createBox(1.5, 2, 0.2), doorMat)
    door.position.set(x, y, z + 0.1)
    this.add(door)
  }

  addBasementWindows(width, depth, color) {
    // Two small basement windows
    const windowMat = createLambertMaterial(color)
    
    const window1 = createMesh(createBox(1, 0.6, 0.1), windowMat)
    window1.position.set(-1.5, 0.4, depth / 2 + 0.1)
    this.add(window1)
    
    const window2 = createMesh(createBox(1, 0.6, 0.1), windowMat)
    window2.position.set(1.5, 0.4, depth / 2 + 0.1)
    this.add(window2)
  }

  addEntranceStairs(width, depth, color) {
    const stairMat = createLambertMaterial(color)
    const stairWidth = 3
    const stairDepth = 1.5
    const stairHeight = 0.3
    
    // 4 steps
    for (let i = 0; i < 4; i++) {
      const stair = createMesh(createBox(stairWidth, stairHeight, stairDepth - i * 0.2), stairMat)
      stair.position.set(0, stairHeight / 2 + i * stairHeight, depth / 2 + stairDepth / 2 + 0.3 - i * 0.25)
      this.add(stair)
    }
    
    // Railings
    const railMat = createLambertMaterial(0x333333)
    const railHeight = 1
    
    // Left railing
    const leftRail = createMesh(createBox(0.1, railHeight, stairDepth), railMat)
    leftRail.position.set(-stairWidth / 2, railHeight / 2 + stairHeight * 2, depth / 2 + stairDepth / 2)
    this.add(leftRail)
    
    // Right railing
    const rightRail = createMesh(createBox(0.1, railHeight, stairDepth), railMat)
    rightRail.position.set(stairWidth / 2, railHeight / 2 + stairHeight * 2, depth / 2 + stairDepth / 2)
    this.add(rightRail)
  }

  addCornice(width, depth, height, color) {
    // Decorative cornice at top
    const corniceMat = createLambertMaterial(color)
    
    // Main cornice band
    const cornice = createMesh(createBox(width + 0.4, 0.5, depth + 0.4), corniceMat, true, true)
    cornice.position.y = height - 0.3
    this.add(cornice)
    
    // Decorative brackets
    const numBrackets = 5
    for (let i = 0; i < numBrackets; i++) {
      const x = (i - 2) * 1.5
      const bracket = createMesh(createBox(0.3, 0.4, 0.4), corniceMat)
      bracket.position.set(x, height - 0.5, depth / 2 + 0.3)
      this.add(bracket)
    }
  }

  addFlatRoof(width, depth, height, color) {
    // Flat roof with parapet
    const parapetMat = createLambertMaterial(color)
    const parapetHeight = 0.6
    
    const parapet = createMesh(createBox(width + 0.5, parapetHeight, depth + 0.5), parapetMat, true, true)
    parapet.position.y = height + parapetHeight / 2
    this.add(parapet)
  }
}

