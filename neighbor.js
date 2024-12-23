'use strict';
 
var S2 = require('s2-geometry').S2;
 
var lat = 26.9095205;
var lng = 80.9379873;
var level = 15;
  
// Convert from Lat / Lng
var key = S2.latLngToKey(lat, lng, level);
console.log('s2key');
console.log(key);
  
// Convert between Hilbert Curve Quadtree Key and S2 Cell Id
var id = S2.keyToId(key);
console.log('id');
console.log(id);
 
var key = S2.idToKey(id);
console.log('key');
console.log(key);
 
// Convert between Quadkey and Id

var latlng = S2.keyToLatLng(key);
console.log('latlng');
console.log(latlng);
var latlng = S2.idToLatLng(id);
console.log('latlng');
console.log(latlng);
 
// Neighbors

var neighbors = S2.latLngToNeighborKeys(lat, lng, level);
console.log('neighbors');
console.log(neighbors);
// [ keyLeft, keyDown, keyRight, keyUp ]
 
 
 
//
// Previous, Next, and Step
//
var nextKey = S2.nextKey(key);
console.log('nextKey');
console.log(nextKey);
var prevKey = S2.prevKey(key);
console.log('prevKey');
console.log(prevKey);

 
var backTenKeys = S2.stepKey(key, -10);
console.log('backTenKeys');
console.log(backTenKeys);