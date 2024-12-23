const S2 = require('s2-geometry').S2;
var key = S2.latLngToKey(26.9095205,80.9379873, 15);   // '4/032212303102210'
var id = S2.keyToId(key);                                 // '9749618446378729472'
 
var nextKey = S2.nextKey(key);
var nextId = S2.keyToId(nextKey);
 
var prevKey = S2.prevKey(key);
var prevId = S2.keyToId(prevKey);
 
var backTenKeys = S2.stepKey(key, -10);
 
console.log(prevKey);                                 // '4/032212303102203'
console.log(prevId);
console.log(key);                                     // '4/032212303102210'
console.log(nextKey); 
console.log(key);                                // '4/032212303102211'
console.log(nextId);




const decoded = S2.keyToLatLng('1/303030222302120');

console.log(`Decoded coordinates: Latitude = ${decoded.lat}, Longitude = ${decoded.lng}`);
