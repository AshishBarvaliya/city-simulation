import * as THREE from 'three'
import { BaseEntity } from './entities/BaseEntity.js'
import { CONFIG } from './config/config.js'
import { ENTITY_TYPES, DIRECTIONS, DIRECTION_VECTORS, ROTATIONS } from './config/constants.js'
import { randomRange, randomInt } from './utils/MathUtils.js'
import { randomColor } from './utils/ColorUtils.js'
import { createBox, createMesh, createLambertMaterial } from './utils/GeometryFactory.js'

export class Pedestrian extends BaseEntity {
  constructor(x = 0, z = 0, rotation = 0) {
    super(ENTITY_TYPES.PEDESTRIAN)
    
    const cfg = CONFIG.pedestrian
    
    // Random speed
    this.speed = randomRange(cfg.minSpeed, cfg.maxSpeed)
    this.sidewalkOffset = cfg.sidewalkOffset
    
    // Determine initial direction based on rotation
    this.direction = this.getDirectionFromRotation(rotation)
    
    // Materials
    const skinMat = createLambertMaterial(CONFIG.materials.skin.color)
    const shirtMat = createLambertMaterial(randomColor())
    const pantsMat = createLambertMaterial(randomColor())
    
    // Create body parts
    this.createHead(skinMat)
    this.createTorso(shirtMat)
    this.createArms(shirtMat)
    this.createLegs(pantsMat)
    
    // Set position and rotation
    this.position.set(x, 0, z)
    this.rotation.y = rotation
    
    // Enable shadows
    this.enableShadows(true, false)
  }

  getDirectionFromRotation(rotation) {
    // Normalize rotation to 0-2PI
    let r = rotation % (Math.PI * 2)
    if (r < 0) r += Math.PI * 2
    
    // Approximate direction
    if (Math.abs(r - ROTATIONS.NORTH) < 0.1) return DIRECTIONS.NORTH
    if (Math.abs(r - ROTATIONS.SOUTH) < 0.1) return DIRECTIONS.SOUTH
    if (Math.abs(r - ROTATIONS.EAST) < 0.1 || Math.abs(r - (ROTATIONS.EAST + Math.PI*2)) < 0.1) return DIRECTIONS.EAST
    if (Math.abs(r - ROTATIONS.WEST) < 0.1) return DIRECTIONS.WEST
    
    return DIRECTIONS.NORTH // Default
  }

  createHead(material) {
    const cfg = CONFIG.pedestrian
    const headGeo = createBox(cfg.headSize, cfg.headSize, cfg.headSize)
    this.head = createMesh(headGeo, material)
    this.head.position.y = 1.65
    this.add(this.head)
  }

  createTorso(material) {
    const cfg = CONFIG.pedestrian
    const torsoGeo = createBox(cfg.torsoWidth, cfg.torsoHeight, cfg.torsoDepth)
    this.torso = createMesh(torsoGeo, material)
    this.torso.position.y = 1.25
    this.add(this.torso)
  }

  createArms(material) {
    const cfg = CONFIG.pedestrian
    const armGeo = createBox(cfg.armWidth, cfg.armLength, cfg.armWidth)
    
    // Left arm
    this.leftArm = new THREE.Group()
    const laMesh = createMesh(armGeo, material)
    laMesh.position.y = -0.2
    this.leftArm.add(laMesh)
    this.leftArm.position.set(0.23, 1.45, 0)
    this.add(this.leftArm)
    
    // Right arm
    this.rightArm = new THREE.Group()
    const raMesh = createMesh(armGeo, material)
    raMesh.position.y = -0.2
    this.rightArm.add(raMesh)
    this.rightArm.position.set(-0.23, 1.45, 0)
    this.add(this.rightArm)
  }

  createLegs(material) {
    const cfg = CONFIG.pedestrian
    const legGeo = createBox(cfg.legWidth, cfg.legLength, cfg.legWidth)
    
    // Left leg
    this.leftLeg = new THREE.Group()
    const llMesh = createMesh(legGeo, material)
    llMesh.position.y = -0.25
    this.leftLeg.add(llMesh)
    this.leftLeg.position.set(0.1, 1.0, 0)
    this.add(this.leftLeg)
    
    // Right leg
    this.rightLeg = new THREE.Group()
    const rlMesh = createMesh(legGeo, material)
    rlMesh.position.y = -0.25
    this.rightLeg.add(rlMesh)
    this.rightLeg.position.set(-0.1, 1.0, 0)
    this.add(this.rightLeg)
  }

  update(delta, time) {
    // Move forward
    this.moveForward(delta)
    
    // Check for intersections and turn
    this.checkIntersection()
    
    // Walking animation
    this.animateWalking(time)
    
    // Wrap around boundaries
    this.wrapPosition()
  }

  checkIntersection() {
    // Grid spacing is 3 cells * 15 units = 45 units
    const roadSpacing = CONFIG.city.cellSize * 3
    const offset = this.sidewalkOffset
    
    // Calculate nearest intersection center
    // Roads are at 0, 45, 90, etc. (relative to center)
    // But our coordinates are centered, so we need to adjust logic
    // Actually, roads are at x % 45 === 0
    
    // Find nearest road center
    const nearestRoadX = Math.round(this.position.x / roadSpacing) * roadSpacing
    const nearestRoadZ = Math.round(this.position.z / roadSpacing) * roadSpacing
    
    // Check if we are close to a "decision point" (intersection of walkable paths)
    // Walkable paths are at RoadCenter +/- offset
    
    // Are we near an X-road? (Current X is close to RoadX +/- offset)
    const distToRoadX = Math.abs(this.position.x - nearestRoadX)
    const nearXLine = Math.abs(distToRoadX - offset) < 0.5
    
    // Are we near a Z-road? (Current Z is close to RoadZ +/- offset)
    const distToRoadZ = Math.abs(this.position.z - nearestRoadZ)
    const nearZLine = Math.abs(distToRoadZ - offset) < 0.5
    
    // If we are near BOTH, we are at an intersection corner
    if (nearXLine && nearZLine) {
      // Only decide once per intersection (debounce)
      if (this.justTurned) return
      
      this.decideTurn(nearestRoadX, nearestRoadZ, offset)
      this.justTurned = true
      
      // Snap to exact corner position to prevent drift
      // But only snap the coordinate we are NOT moving along to keep movement smooth
      // Actually, snap both to be safe, but be careful not to teleport too far
      
      // Determine which corner we are at
      const cornerX = nearestRoadX + (this.position.x > nearestRoadX ? offset : -offset)
      const cornerZ = nearestRoadZ + (this.position.z > nearestRoadZ ? offset : -offset)
      
      // Snap perpendicular coordinate
      if (this.direction === DIRECTIONS.NORTH || this.direction === DIRECTIONS.SOUTH) {
        this.position.x = cornerX
      } else {
        this.position.z = cornerZ
      }
      
    } else {
      this.justTurned = false
    }
  }

  decideTurn(roadX, roadZ, offset) {
    // Available directions at a corner:
    // 1. Continue straight (cross the street)
    // 2. Turn left (stay on sidewalk)
    // 3. Turn right (stay on sidewalk)
    // 4. Turn around (rare)
    
    // Simple random logic:
    // 50% chance to continue straight
    // 25% chance to turn left
    // 25% chance to turn right
    
    const rand = Math.random()
    
    if (rand < 0.5) {
      // Continue straight - no change
      return
    }
    
    // Turn
    const turnLeft = rand < 0.75
    
    if (this.direction === DIRECTIONS.NORTH) {
      this.setDirection(turnLeft ? DIRECTIONS.WEST : DIRECTIONS.EAST)
    } else if (this.direction === DIRECTIONS.SOUTH) {
      this.setDirection(turnLeft ? DIRECTIONS.EAST : DIRECTIONS.WEST)
    } else if (this.direction === DIRECTIONS.EAST) {
      this.setDirection(turnLeft ? DIRECTIONS.NORTH : DIRECTIONS.SOUTH)
    } else if (this.direction === DIRECTIONS.WEST) {
      this.setDirection(turnLeft ? DIRECTIONS.SOUTH : DIRECTIONS.NORTH)
    }
  }

  setDirection(newDir) {
    this.direction = newDir
    
    switch (newDir) {
      case DIRECTIONS.NORTH:
        this.rotation.y = ROTATIONS.NORTH
        break
      case DIRECTIONS.SOUTH:
        this.rotation.y = ROTATIONS.SOUTH
        break
      case DIRECTIONS.EAST:
        this.rotation.y = ROTATIONS.EAST
        break
      case DIRECTIONS.WEST:
        this.rotation.y = ROTATIONS.WEST
        break
    }
  }

  animateWalking(time) {
    const speedFactor = CONFIG.pedestrian.animationSpeed
    
    // Swing arms and legs
    this.leftArm.rotation.x = Math.sin(time * speedFactor) * 0.5
    this.rightArm.rotation.x = Math.cos(time * speedFactor) * 0.5
    this.leftLeg.rotation.x = Math.cos(time * speedFactor) * 0.5
    this.rightLeg.rotation.x = Math.sin(time * speedFactor) * 0.5
  }
}
