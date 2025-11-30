import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { City } from './src/City.js'
import { CONFIG } from './src/config/config.js'
import { UIManager } from './src/managers/UIManager.js'

// Scene Setup
const scene = new THREE.Scene()
scene.background = new THREE.Color(CONFIG.scene.backgroundColor)
if (CONFIG.scene.fogEnabled) {
  scene.fog = new THREE.Fog(
    CONFIG.scene.fogColor,
    CONFIG.scene.fogNear,
    CONFIG.scene.fogFar
  )
}

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(40, 20, 20)
camera.lookAt(10, 10, 0)

const renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  powerPreference: 'high-performance' // Use high-performance GPU
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit pixel ratio for performance
renderer.shadowMap.enabled = CONFIG.simulation.enableShadows
document.body.appendChild(renderer.domElement)

// Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.maxDistance = 150 // Limit zoom out distance
controls.minDistance = 10 // Limit zoom in distance

// Raycaster for car selection
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
let selectedCar = null
let isFollowMode = false

// UI Manager
const uiManager = new UIManager()

// Lighting
const ambientLight = new THREE.AmbientLight(
  CONFIG.lighting.ambient.color,
  CONFIG.lighting.ambient.intensity
)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(
  CONFIG.lighting.directional.color,
  CONFIG.lighting.directional.intensity
)
dirLight.position.set(
  CONFIG.lighting.directional.position.x,
  CONFIG.lighting.directional.position.y,
  CONFIG.lighting.directional.position.z
)
dirLight.castShadow = CONFIG.simulation.enableShadows
dirLight.shadow.mapSize.width = CONFIG.lighting.directional.shadowMapSize
dirLight.shadow.mapSize.height = CONFIG.lighting.directional.shadowMapSize
scene.add(dirLight)

// City
const city = new City(CONFIG.city.gridSize)
scene.add(city)

// Animation Loop
const clock = new THREE.Clock()

function animate() {
  requestAnimationFrame(animate)
  
  const delta = clock.getDelta()
  const time = clock.getElapsedTime()

  city.update(delta, time)
  
  // Update camera if in follow mode
  if (isFollowMode && selectedCar && selectedCar.active) {
    updateFollowCamera()
    
    // Update UI
    uiManager.show()
    const nextTurn = selectedCar.getNextTurnDirection()
    uiManager.setDirection(nextTurn)
  } else {
    controls.update()
    uiManager.hide()
  }
  
  renderer.render(scene, camera)
}

animate()

// Camera follow logic
function updateFollowCamera() {
  if (!selectedCar || !selectedCar.active) {
    exitFollowMode()
    return
  }
  
  // Get car's position and forward direction
  const carPos = selectedCar.position.clone()
  const carForward = selectedCar.getForwardVector()
  
  // Camera offset: behind and above the car
  const cameraDistance = 8 // Distance behind car
  const cameraHeight = 4 // Height above car
  
  // Position camera behind the car
  const cameraOffset = carForward.clone().multiplyScalar(-cameraDistance)
  cameraOffset.y = cameraHeight
  
  const targetCameraPos = carPos.clone().add(cameraOffset)
  
  // Smooth camera movement (lerp)
  camera.position.lerp(targetCameraPos, 0.1)
  
  // Look at a point slightly ahead of the car
  const lookAtPoint = carPos.clone().add(carForward.multiplyScalar(5))
  lookAtPoint.y += 1
  
  camera.lookAt(lookAtPoint)
}

function exitFollowMode() {
  isFollowMode = false
  selectedCar = null
  controls.enabled = true
  uiManager.hide()
}

// Mouse click handler for car selection
function onMouseClick(event) {
  // Calculate mouse position in normalized device coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  
  // Update the raycaster
  raycaster.setFromCamera(mouse, camera)
  
  // Get all cars
  const cars = city.entityManager.getByType('CAR')
  const carMeshes = cars.filter(c => c.active).map(c => c.children).flat()
  
  // Check for intersections
  const intersects = raycaster.intersectObjects(carMeshes, true)
  
  if (intersects.length > 0) {
    // Find the car object (parent of the mesh)
    let clickedCar = intersects[0].object
    while (clickedCar.parent && clickedCar.parent.type !== 'Scene' && !clickedCar.parent.isCity) {
      clickedCar = clickedCar.parent
      if (clickedCar.type === 'CAR' || cars.includes(clickedCar)) {
        selectedCar = clickedCar
        isFollowMode = true
        controls.enabled = false
        console.log('Following car:', selectedCar)
        return
      }
    }
  } else {
    // Clicked on empty space, exit follow mode
    if (isFollowMode) {
      exitFollowMode()
    }
  }
}

// Keyboard handler for exiting follow mode
function onKeyDown(event) {
  if (event.key === 'Escape' && isFollowMode) {
    exitFollowMode()
    console.log('Exited follow mode')
  }
}

// Event listeners
window.addEventListener('click', onMouseClick)
window.addEventListener('keydown', onKeyDown)

// Resize Handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
