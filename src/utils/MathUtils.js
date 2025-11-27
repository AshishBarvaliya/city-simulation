/**
 * Mathematical Utility Functions
 */

/**
 * Generate a random number between min and max
 */
export function randomRange(min, max) {
  return min + Math.random() * (max - min)
}

/**
 * Generate a random integer between min and max (inclusive)
 */
export function randomInt(min, max) {
  return Math.floor(randomRange(min, max + 1))
}

/**
 * Wrap a value within boundaries
 */
export function wrapValue(value, min, max) {
  const range = max - min
  if (value > max) return min + (value - max) % range
  if (value < min) return max - (min - value) % range
  return value
}

/**
 * Clamp a value between min and max
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/**
 * Calculate distance between two 2D points
 */
export function distance2D(x1, z1, x2, z2) {
  const dx = x2 - x1
  const dz = z2 - z1
  return Math.sqrt(dx * dx + dz * dz)
}

/**
 * Calculate distance between two 3D points
 */
export function distance3D(x1, y1, z1, x2, y2, z2) {
  const dx = x2 - x1
  const dy = y2 - y1
  const dz = z2 - z1
  return Math.sqrt(dx * dx + dy * dy + dz * dz)
}

/**
 * Linear interpolation
 */
export function lerp(a, b, t) {
  return a + (b - a) * t
}

/**
 * Check if a point is within a rectangular boundary
 */
export function isInBounds(x, z, minX, maxX, minZ, maxZ) {
  return x >= minX && x <= maxX && z >= minZ && z <= maxZ
}

/**
 * Convert degrees to radians
 */
export function degToRad(degrees) {
  return degrees * (Math.PI / 180)
}

/**
 * Convert radians to degrees
 */
export function radToDeg(radians) {
  return radians * (180 / Math.PI)
}
