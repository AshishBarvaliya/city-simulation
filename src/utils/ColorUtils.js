/**
 * Color Utility Functions
 */
import * as THREE from 'three'

/**
 * Generate a random color
 */
export function randomColor() {
  return new THREE.Color(Math.random(), Math.random(), Math.random())
}

/**
 * Generate a random color with HSL constraints
 */
export function randomColorHSL(hueMin = 0, hueMax = 360, satMin = 0, satMax = 100, lightMin = 0, lightMax = 100) {
  const h = hueMin + Math.random() * (hueMax - hueMin)
  const s = satMin + Math.random() * (satMax - satMin)
  const l = lightMin + Math.random() * (lightMax - lightMin)
  return new THREE.Color(`hsl(${h}, ${s}%, ${l}%)`)
}

/**
 * Generate a random grayscale color
 */
export function randomGrayscale(min = 0, max = 1) {
  const value = min + Math.random() * (max - min)
  return new THREE.Color(value, value, value)
}

/**
 * Create a color from hex
 */
export function colorFromHex(hex) {
  return new THREE.Color(hex)
}

/**
 * Lighten a color by a factor
 */
export function lightenColor(color, factor) {
  return color.clone().multiplyScalar(1 + factor)
}

/**
 * Darken a color by a factor
 */
export function darkenColor(color, factor) {
  return color.clone().multiplyScalar(1 - factor)
}

/**
 * Generate a color palette (array of colors)
 */
export function generatePalette(count, baseHue = null) {
  const palette = []
  const hue = baseHue !== null ? baseHue : Math.random() * 360
  
  for (let i = 0; i < count; i++) {
    const h = (hue + (i * 360 / count)) % 360
    const s = 30 + Math.random() * 40
    const l = 40 + Math.random() * 30
    palette.push(new THREE.Color(`hsl(${h}, ${s}%, ${l}%)`))
  }
  
  return palette
}

/**
 * Get a random color from a predefined palette
 */
export function randomFromPalette(palette) {
  return palette[Math.floor(Math.random() * palette.length)].clone()
}
