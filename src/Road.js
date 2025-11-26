import * as THREE from 'three'

export class Road extends THREE.Group {
  constructor(orientation = 'BOTH') {
    super()
    
    const size = 15
    const roadWidth = 15 // Match cell size for continuous roads
    
    // Main Asphalt - full size to prevent gaps
    const geometry = new THREE.PlaneGeometry(roadWidth, roadWidth)
    const material = new THREE.MeshLambertMaterial({ color: 0x333333 })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = -Math.PI / 2
    mesh.receiveShadow = true
    this.add(mesh)
    
    const yellowMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 })
    const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
    
    // Create dashed texture
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 512
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,64,512)
    ctx.fillStyle = '#ffffff'
    for(let i=0; i<8; i++) {
        ctx.fillRect(10, i * 64 + 16, 44, 32)
    }
    const dashedTex = new THREE.CanvasTexture(canvas)
    dashedTex.wrapS = THREE.RepeatWrapping
    dashedTex.wrapT = THREE.RepeatWrapping
    const dashedMat = new THREE.MeshBasicMaterial({ map: dashedTex, transparent: true })
    
    if (orientation === 'BOTH') {
      // Intersection - yellow center lines extend full length
      const nsLineGeo = new THREE.PlaneGeometry(0.3, size)
      const nsYellow1 = new THREE.Mesh(nsLineGeo, yellowMat)
      nsYellow1.rotation.x = -Math.PI / 2
      nsYellow1.position.set(-0.15, 0.01, 0)
      this.add(nsYellow1)
      
      const nsYellow2 = new THREE.Mesh(nsLineGeo, yellowMat)
      nsYellow2.rotation.x = -Math.PI / 2
      nsYellow2.position.set(0.15, 0.01, 0)
      this.add(nsYellow2)
      
      const ewLineGeo = new THREE.PlaneGeometry(size, 0.3)
      const ewYellow1 = new THREE.Mesh(ewLineGeo, yellowMat)
      ewYellow1.rotation.x = -Math.PI / 2
      ewYellow1.position.set(0, 0.01, -0.15)
      this.add(ewYellow1)
      
      const ewYellow2 = new THREE.Mesh(ewLineGeo, yellowMat)
      ewYellow2.rotation.x = -Math.PI / 2
      ewYellow2.position.set(0, 0.01, 0.15)
      this.add(ewYellow2)
      
    } else if (orientation === 'NS') {
      // North-South road - markings extend full length
      const lineGeo = new THREE.PlaneGeometry(0.2, size)
      const dashedGeo = new THREE.PlaneGeometry(0.15, size)
      
      // Center Double Yellow Lines
      const leftYellow = new THREE.Mesh(lineGeo, yellowMat)
      leftYellow.rotation.x = -Math.PI / 2
      leftYellow.position.set(-0.15, 0.01, 0)
      this.add(leftYellow)
      
      const rightYellow = new THREE.Mesh(lineGeo, yellowMat)
      rightYellow.rotation.x = -Math.PI / 2
      rightYellow.position.set(0.15, 0.01, 0)
      this.add(rightYellow)
      
      // Lane Dividers
      const leftDivider = new THREE.Mesh(dashedGeo, dashedMat)
      leftDivider.rotation.x = -Math.PI / 2
      leftDivider.position.set(-2, 0.01, 0)
      this.add(leftDivider)
      
      const rightDivider = new THREE.Mesh(dashedGeo, dashedMat)
      rightDivider.rotation.x = -Math.PI / 2
      rightDivider.position.set(2, 0.01, 0)
      this.add(rightDivider)
      
      // Edge white lines - extend full length
      const edgeGeo = new THREE.PlaneGeometry(0.15, size)
      const leftEdge = new THREE.Mesh(edgeGeo, whiteMat)
      leftEdge.rotation.x = -Math.PI / 2
      leftEdge.position.set(-roadWidth/2 + 0.1, 0.01, 0)
      this.add(leftEdge)
      
      const rightEdge = new THREE.Mesh(edgeGeo, whiteMat)
      rightEdge.rotation.x = -Math.PI / 2
      rightEdge.position.set(roadWidth/2 - 0.1, 0.01, 0)
      this.add(rightEdge)
      
    } else if (orientation === 'EW') {
      // East-West road - markings extend full length
      const lineGeo = new THREE.PlaneGeometry(size, 0.2)
      const dashedGeo = new THREE.PlaneGeometry(size, 0.15)
      
      // Center Double Yellow Lines
      const topYellow = new THREE.Mesh(lineGeo, yellowMat)
      topYellow.rotation.x = -Math.PI / 2
      topYellow.position.set(0, 0.01, -0.15)
      this.add(topYellow)
      
      const bottomYellow = new THREE.Mesh(lineGeo, yellowMat)
      bottomYellow.rotation.x = -Math.PI / 2
      bottomYellow.position.set(0, 0.01, 0.15)
      this.add(bottomYellow)
      
      // Lane Dividers
      const topDivider = new THREE.Mesh(dashedGeo, dashedMat.clone())
      topDivider.rotation.x = -Math.PI / 2
      topDivider.position.set(0, 0.01, -2)
      this.add(topDivider)
      
      const bottomDivider = new THREE.Mesh(dashedGeo, dashedMat.clone())
      bottomDivider.rotation.x = -Math.PI / 2
      bottomDivider.position.set(0, 0.01, 2)
      this.add(bottomDivider)
      
      // Edge white lines - extend full length
      const edgeGeo = new THREE.PlaneGeometry(size, 0.15)
      const topEdge = new THREE.Mesh(edgeGeo, whiteMat)
      topEdge.rotation.x = -Math.PI / 2
      topEdge.position.set(0, 0.01, -roadWidth/2 + 0.1)
      this.add(topEdge)
      
      const bottomEdge = new THREE.Mesh(edgeGeo, whiteMat)
      bottomEdge.rotation.x = -Math.PI / 2
      bottomEdge.position.set(0, 0.01, roadWidth/2 - 0.1)
      this.add(bottomEdge)
    }
    
    // Only add curbs, parkways, and sidewalks on regular roads, not intersections
    if (orientation !== 'BOTH') {
      // Curbs (raised edges)
      const curbMat = new THREE.MeshLambertMaterial({ color: 0x888888 })
      const curbHeight = 0.15
      
      if (orientation !== 'EW') {
        const curbGeo = new THREE.BoxGeometry(0.3, curbHeight, size)
        const leftCurb = new THREE.Mesh(curbGeo, curbMat)
        leftCurb.position.set(-roadWidth/2 - 0.15, curbHeight/2, 0)
        this.add(leftCurb)
        
        const rightCurb = new THREE.Mesh(curbGeo, curbMat)
        rightCurb.position.set(roadWidth/2 + 0.15, curbHeight/2, 0)
        this.add(rightCurb)
      }
      
      if (orientation !== 'NS') {
        const curbGeo = new THREE.BoxGeometry(size, curbHeight, 0.3)
        const topCurb = new THREE.Mesh(curbGeo, curbMat)
        topCurb.position.set(0, curbHeight/2, -roadWidth/2 - 0.15)
        this.add(topCurb)
        
        const bottomCurb = new THREE.Mesh(curbGeo, curbMat)
        bottomCurb.position.set(0, curbHeight/2, roadWidth/2 + 0.15)
        this.add(bottomCurb)
      }
      
      // Parkway (green strip between curb and sidewalk)
      const parkwayMat = new THREE.MeshLambertMaterial({ color: 0x3a7d2e })
      const parkwayWidth = 1
      
      if (orientation !== 'EW') {
        const parkwayGeo = new THREE.PlaneGeometry(parkwayWidth, size)
        const leftParkway = new THREE.Mesh(parkwayGeo, parkwayMat)
        leftParkway.rotation.x = -Math.PI / 2
        leftParkway.position.set(-roadWidth/2 - 0.3 - parkwayWidth/2, 0.16, 0)
        this.add(leftParkway)
        
        const rightParkway = new THREE.Mesh(parkwayGeo, parkwayMat)
        rightParkway.rotation.x = -Math.PI / 2
        rightParkway.position.set(roadWidth/2 + 0.3 + parkwayWidth/2, 0.16, 0)
        this.add(rightParkway)
      }
      
      if (orientation !== 'NS') {
        const parkwayGeo = new THREE.PlaneGeometry(size, parkwayWidth)
        const topParkway = new THREE.Mesh(parkwayGeo, parkwayMat)
        topParkway.rotation.x = -Math.PI / 2
        topParkway.position.set(0, 0.16, -roadWidth/2 - 0.3 - parkwayWidth/2)
        this.add(topParkway)
        
        const bottomParkway = new THREE.Mesh(parkwayGeo, parkwayMat)
        bottomParkway.rotation.x = -Math.PI / 2
        bottomParkway.position.set(0, 0.16, roadWidth/2 + 0.3 + parkwayWidth/2)
        this.add(bottomParkway)
      }
      
      // Sidewalks (narrower, after parkway)
      const sidewalkMat = new THREE.MeshLambertMaterial({ color: 0xaaaaaa })
      const sidewalkWidth = 1.2
      
      if (orientation !== 'EW') {
        const sidewalkGeo = new THREE.BoxGeometry(sidewalkWidth, 0.1, size)
        const leftWalk = new THREE.Mesh(sidewalkGeo, sidewalkMat)
        leftWalk.position.set(-roadWidth/2 - 0.3 - parkwayWidth - sidewalkWidth/2, 0.2, 0)
        leftWalk.receiveShadow = true
        this.add(leftWalk)
        
        const rightWalk = new THREE.Mesh(sidewalkGeo, sidewalkMat)
        rightWalk.position.set(roadWidth/2 + 0.3 + parkwayWidth + sidewalkWidth/2, 0.2, 0)
        rightWalk.receiveShadow = true
        this.add(rightWalk)
      }
      
      if (orientation !== 'NS') {
        const sidewalkGeo = new THREE.BoxGeometry(size, 0.1, sidewalkWidth)
        const topWalk = new THREE.Mesh(sidewalkGeo, sidewalkMat)
        topWalk.position.set(0, 0.2, -roadWidth/2 - 0.3 - parkwayWidth - sidewalkWidth/2)
        topWalk.receiveShadow = true
        this.add(topWalk)
        
        const bottomWalk = new THREE.Mesh(sidewalkGeo, sidewalkMat)
        bottomWalk.position.set(0, 0.2, roadWidth/2 + 0.3 + parkwayWidth + sidewalkWidth/2)
        bottomWalk.receiveShadow = true
        this.add(bottomWalk)
      }
    }
  }
}
