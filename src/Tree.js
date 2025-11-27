import * as THREE from 'three'
import { randomInt } from './utils/MathUtils.js'
import { createCylinder, createSphere, createMesh, createLambertMaterial } from './utils/GeometryFactory.js'

export class Tree extends THREE.Group {
  constructor(treeType = null) {
    super()
    
    // Randomly select tree type if not specified (1-3)
    this.treeType = treeType || randomInt(1, 3)
    
    this.createTree()
  }

  createTree() {
    switch (this.treeType) {
      case 1:
        this.createOakTree()
        break
      case 2:
        this.createCherryBlossomTree()
        break
      case 3:
        this.createPineTree()
        break
      default:
        this.createOakTree()
    }
  }

  // TYPE 1: Oak Tree (green, branching)
  createOakTree() {
    const trunkColor = 0x654321
    const foliageColor = 0x228B22
    
    // Main trunk
    this.addTrunk(0, 0, 0, 0.3, 3, trunkColor)
    
    // Main branches
    this.addBranch(0, 2.5, 0, 0.15, 1.5, Math.PI / 4, 0, trunkColor)
    this.addBranch(0, 2.5, 0, 0.15, 1.5, -Math.PI / 4, Math.PI / 2, trunkColor)
    this.addBranch(0, 2.5, 0, 0.15, 1.5, Math.PI / 4, Math.PI, trunkColor)
    this.addBranch(0, 2.5, 0, 0.15, 1.5, -Math.PI / 4, -Math.PI / 2, trunkColor)
    
    // Secondary branches
    this.addBranch(0, 2, 0, 0.1, 1, Math.PI / 3, Math.PI / 4, trunkColor)
    this.addBranch(0, 2, 0, 0.1, 1, Math.PI / 3, -Math.PI / 4, trunkColor)
    
    // Foliage clusters
    this.addFoliageCluster(0, 3.5, 0, 1.5, foliageColor)
    this.addFoliageCluster(1, 3.2, 0, 1, foliageColor)
    this.addFoliageCluster(-1, 3.2, 0, 1, foliageColor)
    this.addFoliageCluster(0, 3.2, 1, 1, foliageColor)
    this.addFoliageCluster(0, 3.2, -1, 1, foliageColor)
    this.addFoliageCluster(0.7, 2.8, 0.7, 0.8, foliageColor)
    this.addFoliageCluster(-0.7, 2.8, 0.7, 0.8, foliageColor)
    this.addFoliageCluster(0.7, 2.8, -0.7, 0.8, foliageColor)
    this.addFoliageCluster(-0.7, 2.8, -0.7, 0.8, foliageColor)
  }

  // TYPE 2: Cherry Blossom Tree (pink/purple, flowering)
  createCherryBlossomTree() {
    const trunkColor = 0x4a3728
    const foliageColor = 0xff69b4 // Pink
    
    // Main trunk (slightly curved)
    this.addTrunk(0, 0, 0, 0.25, 2.5, trunkColor)
    
    // Spreading branches
    this.addBranch(0, 2, 0, 0.12, 1.8, Math.PI / 3, 0, trunkColor)
    this.addBranch(0, 2, 0, 0.12, 1.8, Math.PI / 3, Math.PI / 3, trunkColor)
    this.addBranch(0, 2, 0, 0.12, 1.8, Math.PI / 3, 2 * Math.PI / 3, trunkColor)
    this.addBranch(0, 2, 0, 0.12, 1.8, Math.PI / 3, Math.PI, trunkColor)
    this.addBranch(0, 2, 0, 0.12, 1.8, Math.PI / 3, -2 * Math.PI / 3, trunkColor)
    this.addBranch(0, 2, 0, 0.12, 1.8, Math.PI / 3, -Math.PI / 3, trunkColor)
    
    // Dense flowering foliage
    this.addFoliageCluster(0, 3, 0, 1.2, foliageColor)
    this.addFoliageCluster(1.2, 2.8, 0, 0.9, foliageColor)
    this.addFoliageCluster(-1.2, 2.8, 0, 0.9, foliageColor)
    this.addFoliageCluster(0, 2.8, 1.2, 0.9, foliageColor)
    this.addFoliageCluster(0, 2.8, -1.2, 0.9, foliageColor)
    this.addFoliageCluster(0.8, 2.5, 0.8, 0.7, foliageColor)
    this.addFoliageCluster(-0.8, 2.5, 0.8, 0.7, foliageColor)
    this.addFoliageCluster(0.8, 2.5, -0.8, 0.7, foliageColor)
    this.addFoliageCluster(-0.8, 2.5, -0.8, 0.7, foliageColor)
    
    // Ground foliage (fallen petals effect)
    const groundMat = createLambertMaterial(0x90EE90)
    const ground = createMesh(createSphere(0.8, 8, 8), groundMat)
    ground.scale.y = 0.3
    ground.position.y = 0.1
    this.add(ground)
  }

  // TYPE 3: Pine/Conifer Tree (dark green, conical)
  createPineTree() {
    const trunkColor = 0x4a3020
    const foliageColor = 0x0d5c0d // Dark green
    
    // Tall straight trunk
    this.addTrunk(0, 0, 0, 0.2, 4, trunkColor)
    
    // Conical layers of foliage
    const layers = 6
    for (let i = 0; i < layers; i++) {
      const y = 1.5 + i * 0.6
      const size = 1.5 - i * 0.2
      this.addFoliageCluster(0, y, 0, size, foliageColor)
    }
    
    // Add some branch detail
    for (let i = 0; i < 4; i++) {
      const y = 2 + i * 0.7
      const angle = (i * Math.PI / 2) + Math.PI / 4
      this.addBranch(0, y, 0, 0.08, 0.6, Math.PI / 2.5, angle, trunkColor)
    }
  }

  addTrunk(x, y, z, radius, height, color) {
    const trunkMat = createLambertMaterial(color)
    const trunk = createMesh(createCylinder(radius, radius + 0.05, height, 8), trunkMat)
    trunk.position.set(x, y + height / 2, z)
    this.add(trunk)
  }

  addBranch(x, y, z, radius, length, angleX, angleY, color) {
    const branchMat = createLambertMaterial(color)
    const branch = createMesh(createCylinder(radius, radius * 0.5, length, 6), branchMat)
    
    // Position and rotate branch
    branch.position.set(x, y, z)
    branch.rotation.z = angleX
    branch.rotation.y = angleY
    
    // Offset to start from trunk
    const offset = new THREE.Vector3(0, length / 2, 0)
    offset.applyEuler(new THREE.Euler(0, angleY, angleX))
    branch.position.add(offset)
    
    this.add(branch)
  }

  addFoliageCluster(x, y, z, size, color) {
    const foliageMat = createLambertMaterial(color)
    const foliage = createMesh(createSphere(size, 8, 8), foliageMat)
    foliage.position.set(x, y, z)
    this.add(foliage)
  }
}
