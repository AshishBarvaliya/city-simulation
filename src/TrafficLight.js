import * as THREE from 'three'

export class TrafficLight extends THREE.Group {
  constructor(corner = 'NE') {
    super()
    
    this.corner = corner
    
    // Tall vertical pole
    const poleGeo = new THREE.CylinderGeometry(0.15, 0.15, 6)
    const poleMat = new THREE.MeshLambertMaterial({ color: 0x444444 })
    const pole = new THREE.Mesh(poleGeo, poleMat)
    pole.position.y = 3
    pole.castShadow = true
    this.add(pole)
    
    // Determine arm direction based on corner
    // Arm should extend TOWARD the intersection center
    const armLength = 8
    let armDirection = 1 // 1 = positive X, -1 = negative X
    
    // For NE and SE corners (positive X), arm extends toward center (negative X)
    // For NW and SW corners (negative X), arm extends toward center (positive X)
    if (corner === 'NE' || corner === 'SE') {
      armDirection = -1 // Extend toward center (negative X)
    } else {
      armDirection = 1 // Extend toward center (positive X)
    }
    
    // Horizontal arm extending over the road toward intersection
    const armGeo = new THREE.CylinderGeometry(0.12, 0.12, armLength)
    const arm = new THREE.Mesh(armGeo, poleMat)
    arm.rotation.z = Math.PI / 2
    arm.position.set(armDirection * armLength/2, 6, 0)
    arm.castShadow = true
    this.add(arm)
    
    // Signal box position at the end of the arm
    const signalX = armDirection * (armLength - 0.5)
    
    // Signal box housing hanging from the end of the arm (over the road)
    const boxGeo = new THREE.BoxGeometry(0.4, 0.9, 0.3)
    const boxMat = new THREE.MeshLambertMaterial({ color: 0x222222 })
    const signalBox = new THREE.Mesh(boxGeo, boxMat)
    signalBox.position.set(signalX, 5.5, 0)
    signalBox.castShadow = true
    this.add(signalBox)
    
    // Visor/hood over lights
    const visorGeo = new THREE.BoxGeometry(0.45, 0.15, 0.35)
    const visorMat = new THREE.MeshLambertMaterial({ color: 0x333333 })
    
    const topVisor = new THREE.Mesh(visorGeo, visorMat)
    topVisor.position.set(signalX, 5.95, 0.15)
    this.add(topVisor)
    
    const midVisor = new THREE.Mesh(visorGeo, visorMat)
    midVisor.position.set(signalX, 5.5, 0.15)
    this.add(midVisor)
    
    const bottomVisor = new THREE.Mesh(visorGeo, visorMat)
    bottomVisor.position.set(signalX, 5.05, 0.15)
    this.add(bottomVisor)
    
    // Traffic lights (3 lights: red, yellow, green)
    const lightGeo = new THREE.CircleGeometry(0.12, 16)
    
    // Red light (top)
    this.redMat = new THREE.MeshBasicMaterial({ color: 0x550000 })
    const redLight = new THREE.Mesh(lightGeo, this.redMat)
    redLight.position.set(signalX, 5.75, 0.16)
    this.add(redLight)
    
    // Yellow light (middle)
    this.yellowMat = new THREE.MeshBasicMaterial({ color: 0x554400 })
    const yellowLight = new THREE.Mesh(lightGeo, this.yellowMat)
    yellowLight.position.set(signalX, 5.5, 0.16)
    this.add(yellowLight)
    
    // Green light (bottom)
    this.greenMat = new THREE.MeshBasicMaterial({ color: 0x005500 })
    const greenLight = new THREE.Mesh(lightGeo, this.greenMat)
    greenLight.position.set(signalX, 5.25, 0.16)
    this.add(greenLight)
    
    this.state = 'RED'
    this.timer = 0
    
    // Position based on corner
    this.positionAtCorner()
  }
  
  positionAtCorner() {
    // Position lights to face oncoming traffic (right-side driving)
    const offset = 8
    const armExtension = 4 // How far the arm extends into the intersection
    
    switch(this.corner) {
      case 'NE':
        // Faces traffic coming from the south (moving north on right side = west lanes)
        this.position.set(offset, 0, -offset)
        this.rotation.y = Math.PI // Face south to see northbound traffic
        break
      case 'NW':
        // Faces traffic coming from the east (moving west on right side = north lanes)
        this.position.set(-offset, 0, -offset)
        this.rotation.y = Math.PI / 2 // Face east to see westbound traffic
        break
      case 'SE':
        // Faces traffic coming from the west (moving east on right side = south lanes)
        this.position.set(offset, 0, offset)
        this.rotation.y = -Math.PI / 2 // Face west to see eastbound traffic
        break
      case 'SW':
        // Faces traffic coming from the north (moving south on right side = east lanes)
        this.position.set(-offset, 0, offset)
        this.rotation.y = 0 // Face north to see southbound traffic
        break
    }
  }

  update(delta, time) {
    this.timer += delta
    if (this.timer > 5) { // Switch every 5 seconds
        this.toggle()
        this.timer = 0
    }
  }
  
  toggle() {
      if (this.state === 'RED') {
          this.state = 'GREEN'
          this.redMat.color.setHex(0x550000)
          this.yellowMat.color.setHex(0x554400)
          this.greenMat.color.setHex(0x00ff00)
      } else {
          this.state = 'RED'
          this.redMat.color.setHex(0xff0000)
          this.yellowMat.color.setHex(0x554400)
          this.greenMat.color.setHex(0x005500)
      }
  }
}
