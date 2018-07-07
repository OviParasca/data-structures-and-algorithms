'use strict';

const Radix = require('../lib/radix.js');

describe('Tests for Radix Sort', () => {

  let radixSort = new Radix();

  it('Test the array with a length of 0', () => {
    expect(radixSort.sortLSD([])).toEqual([]);
    expect(radixSort.sortLSD([]).length).toBe(0);
  });

  it('Test Happy Path :)', () => {
    var array = [22,1,2,9,3,2,5,14,66,212,709];
    expect(radixSort.sortLSD(array)).toEqual([1,2,2,3,5,9,14,22,66,212,709]);
  });

  it('Test an already sorted array', () => {
    var array = [1,2,2,3,5,9,14,22,66,212,709];
    expect(radixSort.sortLSD(array)).toEqual([1,2,2,3,5,9,14,22,66,212,709]);
  })

});