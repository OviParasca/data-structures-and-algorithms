'use strict';

const QuickSort = require('../lib/quicksort.js');

describe('Test the Quick Sort whiteboard', () => {

  let quickSort = new QuickSort();

  it('Test Happy Path', () => {
    expect(quickSort.sort([2, 4, 1, 3, 7, 5, 9])).toEqual([1,2,3,4,5,7,9]);
  });

  it('Test with an array with a length of 0, and one of a length 1', () => {
    expect(quickSort.sort([])).toEqual([]);
    expect(quickSort.sort([2])).toEqual([2]);

    expect(quickSort.sort([]).length).toBe(0);
    expect(quickSort.sort([2]).length).toBe(1);
  });

  it('Test an already sorted array', () => {
    expect(quickSort.sort([1,2,3,4,5,7,9])).toEqual([1,2,3,4,5,7,9]);
  });

});
