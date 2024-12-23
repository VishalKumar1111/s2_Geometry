// const S2 = require('s2-geometry').S2;

// console.log("=== Google S2 Geometry Library Example ===");

// // Example Coordinates
// const latitude = 37.7749; // San Francisco
// const longitude = -122.4194;

// // 1. Generate S2 Cell ID
// const cellLevel = 10; // S2 Cell level (0 to 30; higher means smaller cells)
// const cellId = S2.latLngToKey(latitude, longitude, cellLevel);
// console.log(`S2 Cell ID (Level ${cellLevel}):`, cellId);

// // 2. Decode S2 Cell ID to Latitude and Longitude
// const decodedLatLng = S2.keyToLatLng(cellId);
// console.log('Decoded Latitude and Longitude:', decodedLatLng);

// // 3. Get Neighboring Cells
// const neighbors = S2.getNeighbors(cellId);
// console.log('Neighboring Cell IDs:', neighbors);

// // 4. Calculate Distance Between Two Points
// const pointA = { lat: 37.7749, lng: -122.4194 }; // San Francisco
// const pointB = { lat: 34.0522, lng: -118.2437 }; // Los Angeles
// const distance = S2.latLngToDistance(pointA.lat, pointA.lng, pointB.lat, pointB.lng);
// console.log('Distance between San Francisco and Los Angeles (in meters):', distance);

// // 5. Working with Points and Coverings (Custom Area Coverage)
// // Define a polygon as a list of latitude-longitude pairs
// const polygon = [
//   [37.7749, -122.4194], // San Francisco
//   [34.0522, -118.2437], // Los Angeles
//   [36.7783, -119.4179], // Fresno
// ];

// // Convert each polygon point into S2 Cell IDs
// const polygonCells = polygon.map(([lat, lng]) => S2.latLngToKey(lat, lng, 10));
// console.log('S2 Cells Covering Polygon:', polygonCells);

// // 6. Find the S2 Cell Level Information
// const cellInfo = S2.keyToId(cellId);
// console.log('Cell ID Numeric Information:', cellInfo);

// console.log("=== End of S2 Geometry Example ===");






'use strict';
 
var S2 = require('s2-geometry').S2;
 
var lat = 40.2574448;
var lng = -111.7089464;
var level = 15;
 
 
 
//
// Convert from Lat / Lng
//
var key = S2.latLngToKey(lat, lng, level);
// '4/032212303102210'
 
 
 
//
// Convert between Hilbert Curve Quadtree Key and S2 Cell Id
//
var id = S2.keyToId(key);
// '9749618446378729472'
 
var key = S2.idToKey(id);
// '9749618446378729472'
 
 
//
// Convert between Quadkey and Id
//
var latlng = S2.keyToLatLng(key);
var latlng = S2.idToLatLng(id);
 
 
 
//
// Neighbors
//
var neighbors = S2.latLngToNeighborKeys(lat, lng, level);
// [ keyLeft, keyDown, keyRight, keyUp ]
 
 
 
//
// Previous, Next, and Step
//
var nextKey = S2.nextKey(key);
var prevKey = S2.prevKey(key);
 
var backTenKeys = S2.stepKey(key, -10);







var key = S2.latLngToKey(40.2574448, -111.7089464, 15);   // '4/032212303102210'
var id = S2.keyToId(key);                                 // '9749618446378729472'
 
var nextKey = S2.nextKey(key);
var nextId = S2.keyToId(nextKey);
 
var prevKey = S2.prevKey(key);
var prevId = S2.keyToId(prevKey);
 
var backTenKeys = S2.stepKey(key, -10);
 
// See it
console.log(prevKey);                                 // '4/032212303102203'
console.log(key);                                     // '4/032212303102210'
console.log(nextKey);                                 // '4/032212303102211'
console.log(nextId);