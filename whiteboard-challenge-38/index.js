'use strict';

const Radix = require('./lib/radix.js');

let radixSort = new Radix();
var array = [22, 1, 2, 9, 3, 2, 5, 14, 66, 212, 709];
console.log(radixSort.sortLSD(array));
