'use strict'; 

const arrayAdjProduct = require('./lib/array_adjacent_product.js');

var arrAdjProd = new arrayAdjProduct();
var my2DArray = [[1, 2, 3], [4, 5, 6], [7, 8, 1]];

console.log(arrAdjProd.LargestProduct(my2DArray));
