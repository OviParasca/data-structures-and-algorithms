'use strict';

const arrayBinarySearch = require('../../lib/array_binary_search.js'); 

describe('ArrayBinarySearch', () => {

  let testArray = new arrayBinarySearch();


  it('Testing the Binary Search with a valid element in the array', () => {
    expect(testArray.binarySearch([4,8,15,16,23,42,43], 23)).toEqual(23);
  });

  it('Testing the Binary Search with an invalid element in the array', () => {
    expect(testArray.binarySearch([4,8,15,16,23,42,43], 12)).toEqual(-1);
  });

  it('testing if we only have 1 element in the array', () => {
    expect(testArray.binarySearch([123], 12)).toEqual(-1);
  });

  it('testing my helper function', () => {
    let sliceArray = [1,2,3,4,5];
    expect(testArray.sliceArray(sliceArray, Math.ceil(sliceArray.length/2), sliceArray.length)).toEqual([4,5]);
  });

});