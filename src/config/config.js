/**
 * Central Configuration for City Simulation
 * All simulation parameters in one place for easy customization
 */

export const CONFIG = {
  // City Settings
  city: {
    gridSize: 15, // Reduced from 21 for better performance
    cellSize: 15,
    roadWidth: 15,
  },

  // Building Settings
  building: {
    minTiers: 1,
    maxTiers: 3,
    minHeight: 5,
    maxHeight: 15,
    baseSizeMin: 6,
    baseSizeMax: 10,
    tierSizeReduction: { min: 0.7, max: 0.9 },
    balconyProbability: 0.5,
    waterTankProbability: 0.7,
    maxACUnits: 3,
    entranceWidth: 2,
    entranceHeight: 1.5,
    entranceDepth: 1,
  },

  // Road Settings
  road: {
    asphaltColor: 0x333333,
    laneMarkingColor: 0xffff00,
    edgeMarkingColor: 0xffffff,
    crosswalkColor: 0xffffff,
    sidewalkColor: 0xaaaaaa,
    lawnColor: 0x228822,
    sidewalkWidth: 0.6,
    laneMarkingWidth: 0.15,
    laneMarkingLength: 2,
    laneMarkingGap: 1,
    crosswalkStripeWidth: 0.4,
    crosswalkStripeGap: 0.3,
  },

  // Car Settings
  car: {
    types: ['SEDAN', 'HATCHBACK', 'TRUCK'],
    spawnCount: 20, // Reduced from 60 for testing edge spawning
    minSpeed: 4,
    maxSpeed: 8,
    chassisHeight: 0.5,
    wheelRadius: 0.35,
    wheelWidth: 0.3,
    // Type-specific dimensions
    sedan: {
      cabinLength: 2,
      cabinWidth: 1.8,
      cabinHeight: 0.6,
      cabinZ: 0,
      cabinY: 1.05,
    },
    hatchback: {
      cabinLength: 2.5,
      cabinWidth: 1.8,
      cabinHeight: 0.6,
      cabinZ: -0.5,
      cabinY: 1.05,
    },
    truck: {
      cabinLength: 1.5,
      cabinWidth: 1.9,
      cabinHeight: 0.8,
      cabinZ: 1,
      cabinY: 1.15,
      bedWidth: 1.9,
      bedHeight: 0.4,
      bedLength: 2,
    },
  },

  // Pedestrian Settings
  pedestrian: {
    spawnCount: 6, // Reduced from 12 for better performance
    minSpeed: 1.5,
    maxSpeed: 2.5,
    headSize: 0.25,
    torsoWidth: 0.35,
    torsoHeight: 0.5,
    torsoDepth: 0.2,
    armWidth: 0.1,
    armLength: 0.45,
    legWidth: 0.12,
    legLength: 0.5,
    sidewalkOffset: 9.4, // Match visual geometry (road/2 + curb + parkway/2 + sidewalk/2)
    animationSpeed: 10,
  },

  // Traffic Light Settings
  trafficLight: {
    poleHeight: 6,
    poleRadius: 0.2, // Increased from 0.15 for better visibility
    armLength: 6, // Length of mast arm extending over road
    armRadius: 0.15, // Increased from 0.12 for better visibility
    signalBoxWidth: 0.5,
    signalBoxHeight: 1.2,
    signalBoxDepth: 0.5,
    visorWidth: 0.4,
    visorHeight: 0.1,
    visorDepth: 0.4,
    lightRadius: 0.15,
    cornerOffset: 9, // Distance from center of intersection (roadWidth/2 + sidewalk margin)
    colors: {
      pole: 0x666666, // Changed to lighter grey for better visibility
      box: 0xffcc00,  // Yellow signal housing
      visor: 0x111111, // Black visors
      redOn: 0xff0000,
      redOff: 0x330000,
      yellowOn: 0xffcc00,
      yellowOff: 0x332200,
      greenOn: 0x00ff00,
      greenOff: 0x003300,
    },
    cycleTime: 5, // Seconds per state
  },

  // Tree Settings
  tree: {
    trunkRadius: 0.15,
    trunkHeight: 2,
    foliageRadius: 1.2,
    trunkColor: 0x8B4513,
    foliageColor: 0x228B22,
    countPerLawn: { min: 1, max: 2 }, // Reduced from 2-5 for better performance
  },

  // Scene Settings
  scene: {
    backgroundColor: 0x87CEEB,
    fogEnabled: false,
    fogColor: 0x87CEEB,
    fogNear: 10,
    fogFar: 50,

  },

  // Lighting Settings
  lighting: {
    ambient: {
      color: 0xffffff,
      intensity: 0.6,
    },
    directional: {
      color: 0xffffff,
      intensity: 0.8,
      position: { x: 20, y: 20, z: 20 },
      shadowMapSize: 1024, // Reduced from 2048 for better performance
    },
  },

  // Simulation Settings
  simulation: {
    maxBoundary: 112.5, // 15 * 15 / 2 (updated for smaller grid)
    enableShadows: false, // Disabled shadows for better performance
  },

  // Material Settings
  materials: {
    glass: {
      color: 0x88ccff,
      opacity: 0.6,
      transparent: true,
    },
    skin: {
      color: 0xffccaa,
    },
  },
}
