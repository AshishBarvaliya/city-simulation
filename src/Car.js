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
    const tl1 = new THREE.Mesh(tailLightGeo, lightRedMat)
    tl1.position.set(0.6, 0.6, -2.0)
    this.add(tl1)

    const tl2 = new THREE.Mesh(tailLightGeo, lightRedMat)
    tl2.position.set(-0.6, 0.6, -2.0)
    this.add(tl2)

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
    if (this.isStopped) return
    this.moveForward(delta)
    this.wrapPosition()
  }

  stop() {
    this.isStopped = true
  }

  resume() {
    this.isStopped = false
  }

  getForwardVector() {
    const forward = new THREE.Vector3(0, 0, 1)
    forward.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotation.y)
    return forward
  }
}
