/**
 * World Grid
 * A global registry for the city grid state.
 * Tracks what is placed at each grid cell, including height and area.
 */
import * as THREE from 'three'

export class WorldGrid {
  constructor(size, cellSize) {
    this.size = size // Grid dimensions (e.g., 15x15)
    this.cellSize = cellSize // World units per cell (e.g., 15)
    this.grid = []
    
    this.initGrid()
  }

  initGrid() {
    for (let x = 0; x < this.size; x++) {
      const row = []
      for (let z = 0; z < this.size; z++) {
        row.push({
          type: 'EMPTY',
          entity: null,
          height: 0,
          area: 0, // Footprint area
          bounds: null // THREE.Box3
        })
      }
      this.grid.push(row)
    }
  }

  /**
   * Register an entity at a specific grid coordinate
   * @param {number} gridX - Grid X coordinate
   * @param {number} gridZ - Grid Z coordinate
   * @param {string} type - Entity type (BUILDING, ROAD, etc.)
   * @param {Object} entity - The entity instance
   * @param {THREE.Box3} bounds - World bounding box
   */
  register(gridX, gridZ, type, entity, bounds) {
    if (!this.isValid(gridX, gridZ)) return

    const cell = this.grid[gridX][gridZ]
    cell.type = type
    cell.entity = entity
    cell.bounds = bounds
    
    if (bounds) {
      const size = new THREE.Vector3()
      bounds.getSize(size)
      cell.height = size.y
      cell.area = size.x * size.z
    }
  }

  /**
   * Get cell data at grid coordinates
   */
  getCell(gridX, gridZ) {
    if (!this.isValid(gridX, gridZ)) return null
    return this.grid[gridX][gridZ]
  }

  /**
   * Get cell data from world coordinates
   */
  getCellFromWorldPos(worldX, worldZ) {
    const gridX = Math.floor(worldX / this.cellSize + this.size / 2)
    const gridZ = Math.floor(worldZ / this.cellSize + this.size / 2)
    return this.getCell(gridX, gridZ)
  }

  /**
   * Check if a world position intersects with any building
   * @param {THREE.Vector3} position - World position to check
   * @param {number} radius - Optional radius for checking proximity
   */
  isBuildingAt(position, radius = 0) {
    // 1. Check the specific cell
    const cell = this.getCellFromWorldPos(position.x, position.z)
    if (cell && cell.type === 'BUILDING') {
      // Check precise bounds if available
      if (cell.bounds) {
        // Expand bounds by radius if needed
        if (radius > 0) {
          const expanded = cell.bounds.clone().expandByScalar(radius)
          return expanded.containsPoint(position)
        }
        return cell.bounds.containsPoint(position)
      }
      return true // Fallback if no bounds but marked as building
    }
    
    // 2. If radius > 0, we might need to check neighbors
    // For simplicity, we assume objects are largely contained in their cells
    // or the bounds check above handles it if we checked the right cell.
    // A more robust check would query all nearby cells.
    
    return false
  }

  /**
   * Check if grid coordinates are within bounds
   */
  isValid(x, z) {
    return x >= 0 && x < this.size && z >= 0 && z < this.size
  }

  /**
   * Get the entire grid for debugging or visualization
   */
  getGrid() {
    return this.grid
  }
}
