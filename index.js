'use strict';

const ArrayShift = require('./lib/array_shift.js');

let myArray = new ArrayShift();
console.log(`new array: ${myArray.insertShiftArray([2,4,6,8], 5)}`);

let myArray2 = new ArrayShift();
console.log(`\nnew array 2: ${myArray2.insertShiftArray([4,8,15,23,42], 16)}`);
