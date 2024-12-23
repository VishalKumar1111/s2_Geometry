const S2 = require('s2-geometry').S2;

// Define latitude and longitude
const latitude = 26.9093745;  // Example: San Francisco
const longitude = 80.9379559;


const level = 15; // Level of detail (higher level = smaller cell)
const cellId = S2.latLngToKey(latitude, longitude, level);

console.log(`S2 Cell ID: ${cellId}`);
