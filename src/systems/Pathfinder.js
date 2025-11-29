/**
 * Pathfinder System
 * Implements A* algorithm for city grid navigation
 */
import { CONFIG } from '../config/config.js'

export class Pathfinder {
  constructor(gridSize) {
    this.gridSize = gridSize
  }

  /**
   * Find a path between two points on the grid
   * @param {Object} start - {x, z} grid coordinates
   * @param {Object} end - {x, z} grid coordinates
   * @returns {Array} Array of {x, z} grid coordinates representing the path
   */
  findPath(start, end) {
    // A* Algorithm
    const openSet = [start]
    const cameFrom = new Map()
    
    // gScore: cost from start to node
    const gScore = new Map()
    gScore.set(this.key(start), 0)
    
    // fScore: estimated total cost (g + h)
    const fScore = new Map()
    fScore.set(this.key(start), this.heuristic(start, end))
    
    while (openSet.length > 0) {
      // Get node with lowest fScore
      let current = this.getLowestFScore(openSet, fScore)
      
      if (current.x === end.x && current.z === end.z) {
        return this.reconstructPath(cameFrom, current)
      }
      
      // Remove current from openSet
      openSet.splice(openSet.indexOf(current), 1)
      
      // Check neighbors
      const neighbors = this.getNeighbors(current)
      for (const neighbor of neighbors) {
        // Distance between neighbors is always 1 (or 3 if we jump intersections, but let's say 1 unit of movement)
        // Actually, since we move along roads, the cost is the distance.
        // Let's use Manhattan distance for cost.
        const tentativeGScore = gScore.get(this.key(current)) + this.dist(current, neighbor)
        
        const neighborKey = this.key(neighbor)
        if (!gScore.has(neighborKey) || tentativeGScore < gScore.get(neighborKey)) {
          // This path is better
          cameFrom.set(neighborKey, current)
          gScore.set(neighborKey, tentativeGScore)
          fScore.set(neighborKey, tentativeGScore + this.heuristic(neighbor, end))
          
          if (!this.isInSet(openSet, neighbor)) {
            openSet.push(neighbor)
          }
        }
      }
    }
    
    return null // No path found
  }
  
  /**
   * Get valid neighbors (adjacent road cells)
   */
  getNeighbors(node) {
    const neighbors = []
    const directions = [
      { x: 0, z: -1 }, // North
      { x: 0, z: 1 },  // South
      { x: -1, z: 0 }, // West
      { x: 1, z: 0 }   // East
    ]
    
    for (const dir of directions) {
      const nextX = node.x + dir.x
      const nextZ = node.z + dir.z
      
      // Check bounds
      if (nextX >= 0 && nextX < this.gridSize && nextZ >= 0 && nextZ < this.gridSize) {
        // Check if it's a road
        // Roads are at indices divisible by 3
        const isRoadX = nextX % 3 === 0
        const isRoadZ = nextZ % 3 === 0
        
        if (isRoadX || isRoadZ) {
          neighbors.push({ x: nextX, z: nextZ })
        }
      }
    }
    
    return neighbors
  }
  
  /**
   * Heuristic function (Manhattan distance)
   */
  heuristic(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.z - b.z)
  }
  
  /**
   * Distance between two adjacent nodes
   */
  dist(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.z - b.z)
  }
  
  /**
   * Reconstruct path from cameFrom map
   */
  reconstructPath(cameFrom, current) {
    const totalPath = [current]
    let currKey = this.key(current)
    
    while (cameFrom.has(currKey)) {
      current = cameFrom.get(currKey)
      currKey = this.key(current)
      totalPath.unshift(current)
    }
    
    return totalPath
  }
  
  /**
   * Helper to get node with lowest fScore
   */
  getLowestFScore(nodes, fScore) {
    let lowest = nodes[0]
    let lowestScore = fScore.get(this.key(lowest)) || Infinity
    
    for (let i = 1; i < nodes.length; i++) {
      const score = fScore.get(this.key(nodes[i])) || Infinity
      if (score < lowestScore) {
        lowest = nodes[i]
        lowestScore = score
      }
    }
    
    return lowest
  }
  
  /**
   * Helper to check if node is in set
   */
  isInSet(set, node) {
    return set.some(n => n.x === node.x && n.z === node.z)
  }
  
  /**
   * Generate unique key for node
   */
  key(node) {
    return `${node.x},${node.z}`
  }
  
  /**
   * Simplify path to only include turning points (intersections)
   * This reduces the number of waypoints the car needs to check
   */
  simplifyPath(path) {
    if (!path || path.length < 3) return path
    
    const simplified = [path[0]]
    let lastDirection = { 
      x: path[1].x - path[0].x, 
      z: path[1].z - path[0].z 
    }
    
    for (let i = 1; i < path.length - 1; i++) {
      const current = path[i]
      const next = path[i+1]
      const direction = {
        x: next.x - current.x,
        z: next.z - current.z
      }
      
      // If direction changes, add the turning point (current node)
      if (direction.x !== lastDirection.x || direction.z !== lastDirection.z) {
        simplified.push(current)
        lastDirection = direction
      }
    }
    
    simplified.push(path[path.length - 1])
    return simplified
  }
}
