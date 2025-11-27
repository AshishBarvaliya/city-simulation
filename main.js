import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { City } from './src/City.js'
import { CONFIG } from './src/config/config.js'

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
  controls.update()
  
  renderer.render(scene, camera)
}

animate()

// Resize Handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
