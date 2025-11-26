import * as THREE from 'three'

export class Pedestrian extends THREE.Group {
  constructor(x = 0, z = 0, rotation = 0) {
    super()
    
    // Materials
    const skinMat = new THREE.MeshLambertMaterial({ color: 0xffccaa })
    const shirtMat = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
    const pantsMat = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
    
    // Head
    const headGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25)
    this.head = new THREE.Mesh(headGeo, skinMat)
    this.head.position.y = 1.65
    this.head.castShadow = true
    this.add(this.head)
    
    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.35, 0.5, 0.2)
    this.torso = new THREE.Mesh(torsoGeo, shirtMat)
    this.torso.position.y = 1.25
    this.torso.castShadow = true
    this.add(this.torso)
    
    // Arms
    const armGeo = new THREE.BoxGeometry(0.1, 0.45, 0.1)
    
    this.leftArm = new THREE.Group()
    const laMesh = new THREE.Mesh(armGeo, shirtMat)
    laMesh.position.y = -0.2
    this.leftArm.add(laMesh)
    this.leftArm.position.set(0.23, 1.45, 0)
    this.add(this.leftArm)
    
    this.rightArm = new THREE.Group()
    const raMesh = new THREE.Mesh(armGeo, shirtMat)
    raMesh.position.y = -0.2
    this.rightArm.add(raMesh)
    this.rightArm.position.set(-0.23, 1.45, 0)
    this.add(this.rightArm)
    
    // Legs
    const legGeo = new THREE.BoxGeometry(0.12, 0.5, 0.12)
    
    this.leftLeg = new THREE.Group()
    const llMesh = new THREE.Mesh(legGeo, pantsMat)
    llMesh.position.y = -0.25
    this.leftLeg.add(llMesh)
    this.leftLeg.position.set(0.1, 1.0, 0)
    this.add(this.leftLeg)
    
    this.rightLeg = new THREE.Group()
    const rlMesh = new THREE.Mesh(legGeo, pantsMat)
    rlMesh.position.y = -0.25
    this.rightLeg.add(rlMesh)
    this.rightLeg.position.set(-0.1, 1.0, 0)
    this.add(this.rightLeg)
    
    // Set position and rotation
    this.position.set(x, 0, z)
    this.rotation.y = rotation
    
    this.speed = 1.5 + Math.random()
    this.sidewalkOffset = 7.5 + 0.3 + 0.5 + 0.6 // Store for boundary checking
  }

  update(delta, time) {
    // Move forward along sidewalk
    this.translateZ(this.speed * delta)
    
    // Walking Animation
    const speedFactor = 10
    this.leftArm.rotation.x = Math.sin(time * speedFactor) * 0.5
    this.rightArm.rotation.x = Math.cos(time * speedFactor) * 0.5
    this.leftLeg.rotation.x = Math.cos(time * speedFactor) * 0.5
    this.rightLeg.rotation.x = Math.sin(time * speedFactor) * 0.5
    
    // Stay on sidewalk - wrap around at boundaries
    const maxBound = 100
    if (this.position.x > maxBound) this.position.x = -maxBound
    if (this.position.x < -maxBound) this.position.x = maxBound
    if (this.position.z > maxBound) this.position.z = -maxBound
    if (this.position.z < -maxBound) this.position.z = maxBound
  }
}
