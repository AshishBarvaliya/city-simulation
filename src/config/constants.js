/**
 * Constants and Enums for City Simulation
 * Immutable values used throughout the application
 */

// Entity Types
export const ENTITY_TYPES = {
  CAR: 'CAR',
  PEDESTRIAN: 'PEDESTRIAN',
  TRAFFIC_LIGHT: 'TRAFFIC_LIGHT',
  BUILDING: 'BUILDING',
  ROAD: 'ROAD',
  TREE: 'TREE',
  LAWN: 'LAWN',
}

// Car Types
export const CAR_TYPES = {
  SEDAN: 'SEDAN',
  SUV: 'SUV',
  DELIVERY_TRUCK: 'DELIVERY_TRUCK',
  BOX_TRUCK: 'BOX_TRUCK',
  TANKER: 'TANKER',
  SCHOOL_BUS: 'SCHOOL_BUS',
}

// Traffic Light States
export const TRAFFIC_LIGHT_STATES = {
  RED: 'RED',
  YELLOW: 'YELLOW',
  GREEN: 'GREEN',
}

// Corner Positions
export const CORNERS = {
  NE: 'NE',
  NW: 'NW',
  SE: 'SE',
  SW: 'SW',
}

// Directions
export const DIRECTIONS = {
  NORTH: 'NORTH',
  SOUTH: 'SOUTH',
  EAST: 'EAST',
  WEST: 'WEST',
}

// Direction Vectors
export const DIRECTION_VECTORS = {
  NORTH: { x: 0, z: -1 },
  SOUTH: { x: 0, z: 1 },
  EAST: { x: 1, z: 0 },
  WEST: { x: -1, z: 0 },
}

// Road Orientations
export const ROAD_ORIENTATIONS = {
  HORIZONTAL: 'EW',
  VERTICAL: 'NS',
  BOTH: 'BOTH',
}

// Grid Cell Types
export const CELL_TYPES = {
  ROAD: 'ROAD',
  BUILDING: 'BUILDING',
  INTERSECTION: 'INTERSECTION',
}

// Rotation Values (in radians)
export const ROTATIONS = {
  NORTH: 0,
  EAST: -Math.PI / 2,
  SOUTH: Math.PI,
  WEST: Math.PI / 2,
}

// Traffic Approaches (Corner to Lane Control Mapping)
export const TRAFFIC_APPROACHES = {
  NE: { controls: 'WESTBOUND', faces: 'EAST', incoming: { x: -1, z: 0 } },
  NW: { controls: 'SOUTHBOUND', faces: 'NORTH', incoming: { x: 0, z: 1 } },
  SW: { controls: 'EASTBOUND', faces: 'WEST', incoming: { x: 1, z: 0 } },
  SE: { controls: 'NORTHBOUND', faces: 'SOUTH', incoming: { x: 0, z: -1 } },
}

// Validation Constants
export const VALIDATION = {
  ALIGNMENT_TOLERANCE_DEGREES: 5,
  MIN_SIGNAL_ELEVATION: 4.0,
  MAX_SIGNAL_ELEVATION: 7.0,
  FAR_SIDE_OFFSET: 5.0,
}
