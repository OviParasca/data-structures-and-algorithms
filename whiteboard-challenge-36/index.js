'use strict';

const MergeSort = require('./lib/mergesort.js');

let mergeSort = new MergeSort();

var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];

console.log(mergeSort.mergeSort(array));
