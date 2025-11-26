import * as THREE from 'three'

export class Building extends THREE.Group {
  constructor() {
    super()
    
    this.createSkyscraper()
  }

  createSkyscraper() {
    // Randomize building properties
    const tiers = Math.floor(Math.random() * 3) + 1 // 1 to 3 tiers
    let currentWidth = 8
    let currentDepth = 8
    let currentY = 0
    
    // Base color
    const hue = Math.random() * 360
    const baseColor = new THREE.Color(`hsl(${hue}, 30%, 60%)`)
    
    // Window Texture Generation
    const windowTexture = this.createWindowTexture()

    for (let i = 0; i < tiers; i++) {
        const height = Math.random() * 10 + 5
        
        const geometry = new THREE.BoxGeometry(currentWidth, height, currentDepth)
        
        // Materials: Sides have windows, Top/Bottom are plain
        const wallMaterial = new THREE.MeshLambertMaterial({ 
            color: baseColor,
            map: windowTexture
        })
        const roofMaterial = new THREE.MeshLambertMaterial({ color: baseColor.clone().multiplyScalar(0.8) })
        
        const materials = [
            wallMaterial, // px
            wallMaterial, // nx
            roofMaterial, // py
            roofMaterial, // ny
            wallMaterial, // pz
            wallMaterial  // nz
        ]
        
        const mesh = new THREE.Mesh(geometry, materials)
        mesh.position.y = currentY + height / 2
        mesh.castShadow = true
        mesh.receiveShadow = true
        this.add(mesh)
        
        // Add details to this tier
        if (Math.random() > 0.5) this.addBalconies(currentWidth, currentDepth, height, currentY)
        
        currentY += height
        
        // Reduce size for next tier
        currentWidth *= 0.7 + Math.random() * 0.2
        currentDepth *= 0.7 + Math.random() * 0.2
    }
    
    // Roof details
    this.addRoofDetails(currentWidth, currentDepth, currentY)
    
    // Entrance
    this.addEntrance()
  }
  
  createWindowTexture() {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')
      
      // Background (Wall)
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, 64, 64)
      
      // Windows
      ctx.fillStyle = '#223344' // Dark blueish window
      if (Math.random() > 0.5) {
          // Style 1: Grid
          ctx.fillRect(4, 4, 26, 26)
          ctx.fillRect(34, 4, 26, 26)
          ctx.fillRect(4, 34, 26, 26)
          ctx.fillRect(34, 34, 26, 26)
      } else {
          // Style 2: Horizontal strips
          ctx.fillRect(0, 10, 64, 44)
      }
      
      const texture = new THREE.CanvasTexture(canvas)
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set(1, 1)
      return texture
  }

  addBalconies(width, depth, height, startY) {
      const balconyGeo = new THREE.BoxGeometry(1, 0.5, 0.5)
      const balconyMat = new THREE.MeshLambertMaterial({ color: 0x333333 })
      
      const floors = Math.floor(height / 2)
      for (let f = 1; f < floors; f++) {
          const y = startY + f * 2
          
          // Front balconies
          for (let x = -width/2 + 1; x < width/2; x+=2) {
               const b = new THREE.Mesh(balconyGeo, balconyMat)
               b.position.set(x, y, depth/2 + 0.25)
               this.add(b)
          }
      }
  }

  addRoofDetails(width, depth, y) {
      // Water tank
      if (Math.random() > 0.3) {
          const tankGeo = new THREE.CylinderGeometry(1, 1, 2)
          const tankMat = new THREE.MeshLambertMaterial({ color: 0x888888 })
          const tank = new THREE.Mesh(tankGeo, tankMat)
          tank.position.set(0, y + 1, 0)
          tank.castShadow = true
          this.add(tank)
      }
      
      // AC Units
      const acGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8)
      const acMat = new THREE.MeshLambertMaterial({ color: 0xaaaaaa })
      const numACs = Math.floor(Math.random() * 3)
      for(let i=0; i<numACs; i++) {
          const ac = new THREE.Mesh(acGeo, acMat)
          ac.position.set((Math.random()-0.5)*width*0.8, y + 0.4, (Math.random()-0.5)*depth*0.8)
          ac.castShadow = true
          this.add(ac)
      }
  }

  addEntrance() {
      // Simple awning or entrance block
      const entranceGeo = new THREE.BoxGeometry(2, 1.5, 1)
      const entranceMat = new THREE.MeshLambertMaterial({ color: 0x111111 })
      const entrance = new THREE.Mesh(entranceGeo, entranceMat)
      entrance.position.set(0, 0.75, 4) // Assuming base width is around 8, so 4 is front
      this.add(entrance)
  }
}
