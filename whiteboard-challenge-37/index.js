'use strict';

const QuickSort = require('./lib/quicksort.js');

let quickSort = new QuickSort();

var testArr = [2, 4, 1, 3, 7, 5, 9];

console.log(quickSort.sort(testArr));
