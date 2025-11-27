/**
 * Geometry Factory - Reusable geometry and material creation
 */
import * as THREE from 'three'

/**
 * Create a standard box geometry
 */
export function createBox(width, height, depth) {
  return new THREE.BoxGeometry(width, height, depth)
}

/**
 * Create a standard cylinder geometry
 */
export function createCylinder(radiusTop, radiusBottom, height, radialSegments = 16) {
  return new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments)
}

/**
 * Create a standard sphere geometry
 */
export function createSphere(radius, widthSegments = 16, heightSegments = 16) {
  return new THREE.SphereGeometry(radius, widthSegments, heightSegments)
}

/**
 * Create a plane geometry
 */
export function createPlane(width, height) {
  return new THREE.PlaneGeometry(width, height)
}

/**
 * Create a circle geometry
 */
export function createCircle(radius, segments = 16) {
  return new THREE.CircleGeometry(radius, segments)
}

/**
 * Create a Lambert material
 */
export function createLambertMaterial(color, options = {}) {
  return new THREE.MeshLambertMaterial({
    color,
    ...options,
  })
}

/**
 * Create a Basic material
 */
export function createBasicMaterial(color, options = {}) {
  return new THREE.MeshBasicMaterial({
    color,
    ...options,
  })
}

/**
 * Create a Standard material
 */
export function createStandardMaterial(color, options = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    ...options,
  })
}

/**
 * Create a mesh with shadow casting enabled
 */
export function createMesh(geometry, material, castShadow = true, receiveShadow = false) {
  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = castShadow
  mesh.receiveShadow = receiveShadow
  return mesh
}

/**
 * Create a window texture for buildings
 */
export function createWindowTexture(style = 'grid') {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext('2d')
  
  // Background (Wall)
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, 64, 64)
  
  // Windows
  ctx.fillStyle = '#223344' // Dark blueish window
  
  if (style === 'grid') {
    // Grid style windows
    ctx.fillRect(4, 4, 26, 26)
    ctx.fillRect(34, 4, 26, 26)
    ctx.fillRect(4, 34, 26, 26)
    ctx.fillRect(34, 34, 26, 26)
  } else if (style === 'horizontal') {
    // Horizontal strips
    ctx.fillRect(0, 10, 64, 44)
  } else if (style === 'vertical') {
    // Vertical strips
    ctx.fillRect(10, 0, 44, 64)
  }
  
  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 1)
  return texture
}

/**
 * Create a group with position and rotation
 */
export function createGroup(x = 0, y = 0, z = 0, rotationY = 0) {
  const group = new THREE.Group()
  group.position.set(x, y, z)
  group.rotation.y = rotationY
  return group
}
