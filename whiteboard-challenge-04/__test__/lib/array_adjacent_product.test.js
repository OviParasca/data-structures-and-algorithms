'use strict';

const arrayAdjProduct = require('../../lib/array_adjacent_product.js');

describe('Largest Adjacent Numbers in an 2D Array', () => {

  var adjProduct = new arrayAdjProduct();
  var my2DArray = [[1, 2, 3], [4, 5, 6], [7, 8, 1]];

  it('Test if the 2D array is a square (1x1, 2x2, 3x3, etc)', () => {
    var my2DLength = 0;
    for (var i = 0; i < my2DArray.length; i++) {
      for (var j = 0; j < my2DArray[i].length; j++) {
        my2DLength++;
      }
    }
    expect(Math.sqrt(my2DLength)).toEqual(3);
  });

  it('Test if the 2D array largest adjacent number is correct', () => {
    expect(adjProduct.LargestProduct(my2DArray)).toEqual(56);
  });

  it('Test if all the elements in the 2D array are numbers', () => {
    for (var i = 0; i < my2DArray.length; i++) {
      for (var j = 0; j < my2DArray[i].length; j++) {
        expect(typeof my2DArray[i][j]).toEqual('number');
      }
    }
  });

});