import * as THREE from 'three'
import { Building } from './Building.js'
import { Road } from './Road.js'
import { Car } from './Car.js'
import { Pedestrian } from './Pedestrian.js'
import { TrafficLight } from './TrafficLight.js'

export class City extends THREE.Group {
  constructor(size) {
    super()
    this.size = size
    this.objects = []
    this.cars = []
    this.pedestrians = []
    this.trafficLights = []
    
    this.generateCity()
  }

  generateCity() {
    // Simple grid generation with wider spacing
    // 0 = Building, 1 = Road
    const grid = []
    for (let x = 0; x < this.size; x++) {
      const row = []
      for (let z = 0; z < this.size; z++) {
        // Roads on every 3rd cell to create wider blocks
        if (x % 3 === 0 || z % 3 === 0) {
          row.push(1) // Road
        } else {
          row.push(0) // Building
        }
      }
      grid.push(row)
    }

    const cellSize = 15 // Increased from 10 for more space

    for (let x = 0; x < this.size; x++) {
      for (let z = 0; z < this.size; z++) {
        const type = grid[x][z]
        const posX = (x - this.size / 2) * cellSize
        const posZ = (z - this.size / 2) * cellSize

        if (type === 0) {
          const building = new Building()
          building.position.set(posX, 0, posZ)
          this.add(building)
          this.objects.push(building)
          
          // Add lawn around building
          this.addLawn(posX, posZ, cellSize)
          
          // Add trees around building
          this.addTrees(posX, posZ, cellSize)
        } else if (type === 1) {
          // Determine road orientation
          let orientation = 'BOTH' // Default for intersections
          if (x % 3 === 0 && z % 3 !== 0) {
            orientation = 'NS' // North-South road
          } else if (x % 3 !== 0 && z % 3 === 0) {
            orientation = 'EW' // East-West road
          }
          
          const road = new Road(orientation)
          road.position.set(posX, 0.05, posZ)
          this.add(road)
          
          // Add crosswalks and traffic lights at intersections
          if (x % 3 === 0 && z % 3 === 0) {
             // Add 4 traffic lights (one at each corner)
             const corners = ['NE', 'NW', 'SE', 'SW']
             corners.forEach(corner => {
                 const light = new TrafficLight(corner)
                 light.position.x += posX
                 light.position.z += posZ
                 this.add(light)
                 this.trafficLights.push(light)
             })
             
             // Add crosswalk markings
             this.addCrosswalk(posX, posZ)
          }
        }
      }
    }
    
    // Ground plane
    const groundGeo = new THREE.PlaneGeometry(this.size * cellSize, this.size * cellSize)
    const groundMat = new THREE.MeshLambertMaterial({ color: 0x228b22 }) // Green grass
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.1
    ground.receiveShadow = true
    this.add(ground)
    
    // Spawn some cars
    this.spawnCars(grid, cellSize)
    
    // Spawn pedestrians
    this.spawnPedestrians()
  }
  
  addLawn(x, z, cellSize) {
      // Add a green lawn area around the building
      const lawnSize = cellSize * 0.9
      const lawnGeo = new THREE.PlaneGeometry(lawnSize, lawnSize)
      const lawnMat = new THREE.MeshLambertMaterial({ color: 0x2d5016 }) // Darker green for lawn
      const lawn = new THREE.Mesh(lawnGeo, lawnMat)
      lawn.rotation.x = -Math.PI / 2
      lawn.position.set(x, 0.01, z)
      lawn.receiveShadow = true
      this.add(lawn)
  }
  
  addTrees(x, z, cellSize) {
      // Add 2-4 trees around the building
      const numTrees = Math.floor(Math.random() * 3) + 2
      const offset = cellSize * 0.35
      
      for (let i = 0; i < numTrees; i++) {
          const tree = this.createTree()
          const angle = (i / numTrees) * Math.PI * 2
          const distance = offset + Math.random() * 2
          tree.position.set(
              x + Math.cos(angle) * distance,
              0,
              z + Math.sin(angle) * distance
          )
          this.add(tree)
      }
  }
  
  createTree() {
      const tree = new THREE.Group()
      
      // Trunk
      const trunkGeo = new THREE.CylinderGeometry(0.2, 0.3, 2)
      const trunkMat = new THREE.MeshLambertMaterial({ color: 0x4a3728 })
      const trunk = new THREE.Mesh(trunkGeo, trunkMat)
      trunk.position.y = 1
      trunk.castShadow = true
      tree.add(trunk)
      
      // Foliage (simple cone or sphere)
      const foliageGeo = new THREE.SphereGeometry(1.2, 8, 8)
      const foliageMat = new THREE.MeshLambertMaterial({ color: 0x2d5016 })
      const foliage = new THREE.Mesh(foliageGeo, foliageMat)
      foliage.position.y = 2.5
      foliage.castShadow = true
      foliage.receiveShadow = true
      tree.add(foliage)
      
      return tree
  }
  
  spawnCars(grid, cellSize) {
      const roadTiles = []
      for (let x = 0; x < this.size; x++) {
          for (let z = 0; z < this.size; z++) {
              if (grid[x][z] === 1) {
                  const posX = (x - this.size / 2) * cellSize
                  const posZ = (z - this.size / 2) * cellSize
                  
                  if (x % 3 === 0) { // NS Road
                      roadTiles.push({ x: posX, z: posZ, dir: 'NS' })
                  }
                  if (z % 3 === 0) { // EW Road
                      roadTiles.push({ x: posX, z: posZ, dir: 'EW' })
                  }
              }
          }
      }

      for(let i=0; i<60; i++) {
          const tile = roadTiles[Math.floor(Math.random() * roadTiles.length)]
          
          // In the US, cars drive on the RIGHT side
          // For NS roads: northbound traffic (moving -Z) stays on the RIGHT (west side, -X)
          //               southbound traffic (moving +Z) stays on the RIGHT (east side, +X)
          // For EW roads: eastbound traffic (moving +X) stays on the RIGHT (south side, +Z)
          //               westbound traffic (moving -X) stays on the RIGHT (north side, -Z)
          
          let pos = new THREE.Vector3(tile.x, 0, tile.z)
          let rot = 0
          const laneOffset = Math.random() > 0.5 ? 1.25 : 3.75 // Inner or outer lane
          
          if (tile.dir === 'NS') {
              // Pick direction: northbound or southbound
              const goingNorth = Math.random() > 0.5
              
              if (goingNorth) {
                  // Northbound (moving -Z): drive on RIGHT side = west side (-X)
                  pos.x += -laneOffset
                  rot = Math.PI // Face north (-Z direction)
              } else {
                  // Southbound (moving +Z): drive on RIGHT side = east side (+X)
                  pos.x += laneOffset
                  rot = 0 // Face south (+Z direction)
              }
              pos.z += (Math.random() - 0.5) * cellSize
              
          } else { // EW
              // Pick direction: eastbound or westbound
              const goingEast = Math.random() > 0.5
              
              if (goingEast) {
                  // Eastbound (moving +X): drive on RIGHT side = south side (+Z)
                  pos.z += laneOffset
                  rot = Math.PI / 2 // Face east (+X direction)
              } else {
                  // Westbound (moving -X): drive on RIGHT side = north side (-Z)
                  pos.z += -laneOffset
                  rot = -Math.PI / 2 // Face west (-X direction)
              }
              pos.x += (Math.random() - 0.5) * cellSize
          }

          const car = new Car(pos, rot)
          this.add(car)
          this.cars.push(car)
      }
  }

  spawnPedestrians() {
      // Spawn pedestrians on sidewalks along roads
      const cellSize = 15
      const sidewalkOffset = 7.5 + 0.3 + 0.5 + 0.6 // roadHalfWidth + curb + parkway/2 + sidewalk/2
      
      for(let i=0; i<40; i++) {
          // Pick a random road tile
          const x = Math.floor(Math.random() * this.size)
          const z = Math.floor(Math.random() * this.size)
          
          // Check if it's a road (every 3rd cell)
          if (x % 3 === 0 || z % 3 === 0) {
              const posX = (x - this.size / 2) * cellSize
              const posZ = (z - this.size / 2) * cellSize
              
              let pedX, pedZ, rotation
              
              // Determine which type of road and place on sidewalk
              if (x % 3 === 0 && z % 3 !== 0) {
                  // NS road - place on east or west sidewalk
                  const side = Math.random() > 0.5 ? 1 : -1
                  pedX = posX + side * sidewalkOffset
                  pedZ = posZ + (Math.random() - 0.5) * cellSize
                  rotation = side > 0 ? Math.PI : 0 // Face direction of travel
              } else if (z % 3 === 0 && x % 3 !== 0) {
                  // EW road - place on north or south sidewalk
                  const side = Math.random() > 0.5 ? 1 : -1
                  pedX = posX + (Math.random() - 0.5) * cellSize
                  pedZ = posZ + side * sidewalkOffset
                  rotation = side > 0 ? Math.PI / 2 : -Math.PI / 2
              } else {
                  // Intersection - skip or place on corner
                  continue
              }
              
              const ped = new Pedestrian(pedX, pedZ, rotation)
              this.add(ped)
              this.pedestrians.push(ped)
          }
      }
  }

  addCrosswalk(x, z) {
      // Create striped crosswalk markings on all 4 sides of intersection
      // Dimensions match the sidewalk width (1.2 units)
      const stripeMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
      const sidewalkWidth = 1.6 // Match the sidewalk width from Road.js
      const stripeWidth = 0.1
      const stripeSpacing = 0.5
      const numStripes = 30 // Calculate stripes to fit width
      const roadHalfWidth = 9.5 // Half of 15 (road width)
      
      // North crosswalk (top edge) - crosses from west to east
      for (let i = 0; i < numStripes; i++) {
          const stripe = new THREE.Mesh(
              new THREE.PlaneGeometry(stripeWidth, sidewalkWidth),
              stripeMat
          )
          stripe.rotation.x = -Math.PI / 2
          stripe.position.set(
              x - (numStripes * stripeSpacing) / 2 + i * stripeSpacing,
              0.07,
              z - roadHalfWidth
          )
          this.add(stripe)
      }
      
      // South crosswalk (bottom edge) - crosses from west to east
      for (let i = 0; i < numStripes; i++) {
          const stripe = new THREE.Mesh(
              new THREE.PlaneGeometry(stripeWidth, sidewalkWidth),
              stripeMat
          )
          stripe.rotation.x = -Math.PI / 2
          stripe.position.set(
              x - (numStripes * stripeSpacing) / 2 + i * stripeSpacing,
              0.07,
              z + roadHalfWidth
          )
          this.add(stripe)
      }
      
      // East crosswalk (right edge) - crosses from north to south
      for (let i = 0; i < numStripes; i++) {
          const stripe = new THREE.Mesh(
              new THREE.PlaneGeometry(sidewalkWidth, stripeWidth),
              stripeMat
          )
          stripe.rotation.x = -Math.PI / 2
          stripe.position.set(
              x + roadHalfWidth,
              0.07,
              z - (numStripes * stripeSpacing) / 2 + i * stripeSpacing
          )
          this.add(stripe)
      }
      
      // West crosswalk (left edge) - crosses from north to south
      for (let i = 0; i < numStripes; i++) {
          const stripe = new THREE.Mesh(
              new THREE.PlaneGeometry(sidewalkWidth, stripeWidth),
              stripeMat
          )
          stripe.rotation.x = -Math.PI / 2
          stripe.position.set(
              x - roadHalfWidth,
              0.07,
              z - (numStripes * stripeSpacing) / 2 + i * stripeSpacing
          )
          this.add(stripe)
      }
  }

  update(delta, time) {
    this.cars.forEach(car => car.update(delta, time))
    this.pedestrians.forEach(ped => ped.update(delta, time))
    this.trafficLights.forEach(light => light.update(delta, time))
  }
}
