'use strict';

const ArrayShift = require('./lib/array_shift.js');

let myArray = new ArrayShift();
console.log(`new array 1: ${myArray.insertShiftArray([2, 4, 6, 8], 5)}`);
console.log(`new array 2: ${myArray.insertShiftArray([4, 8, 15, 23, 42], 16)}`);

console.log(`remove middle element from array: ${myArray.removeShiftArray([1, 2, 3, 4, 5])}`)