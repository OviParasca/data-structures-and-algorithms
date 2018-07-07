'use strict';

const Merge = require('../lib/mergesort.js');

describe('Tests for Merge Sort - Whiteboard Challenge 36', () => {

  let mergeSort = new Merge();


  it('Test Happy Path :)', () => {
    var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    expect(mergeSort.mergeSort(array)).toEqual([ 3, 9, 34, 198, 200, 203, 746, 764, 984 ]);
  });

  it('Test empty array and length of 1', () => {
    expect(mergeSort.mergeSort([])).toEqual([]);
    expect(mergeSort.mergeSort([]).length).toBe(0);
    expect(mergeSort.mergeSort([2])).toEqual([2]);
    expect(mergeSort.mergeSort([2]).length).toBe(1);

  });

  it('Test an already sorted array', () => {
    expect(mergeSort.mergeSort([ 3, 9, 34, 198, 200, 203, 746, 764, 984 ])).toEqual([ 3, 9, 34, 198, 200, 203, 746, 764, 984 ]);
  });

});