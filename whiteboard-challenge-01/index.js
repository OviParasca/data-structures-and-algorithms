'use strict';

const ReverseArray = require('./lib/reverse_array.js');

let myArray = new ReverseArray();

console.log(myArray.reverseArray([1, 2, 3, 4, 5, 6]));    // 1st way to reverse an array
console.log(myArray.reverseArrayAlt([1, 2, 3, 4, 5, 6])); // 2nd way to reverse an array