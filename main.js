import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { City } from './src/City.js'

// Scene Setup
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x87CEEB) // Sky blue
scene.fog = new THREE.Fog(0x87CEEB, 10, 50)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(10, 10, 10)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

// Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
dirLight.position.set(20, 20, 20)
dirLight.castShadow = true
dirLight.shadow.mapSize.width = 2048
dirLight.shadow.mapSize.height = 2048
scene.add(dirLight)

// City
const city = new City(20) // Size of the city grid
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
