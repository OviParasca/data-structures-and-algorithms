'use strict';

 
class MergeSort {

  mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    var middlePoint = Math.floor(arr.length / 2);
    var leftArr = this.splitArr(arr, 0, middlePoint);
    var rightArr = this.splitArr(arr, middlePoint, arr.length);

    return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
  }
 
  merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
          result[result.length] = left[0];
          left = this.shiftArr(left);
        } else {
          result[result.length] = right[0];
          right = this.shiftArr(right);
        }        
    }
 
    while (left.length) {
      result[result.length] = left[0];
      left = this.shiftArr(left);
   }

    while (right.length) {
      result[result.length] = right[0];
      right = this.shiftArr(right);
    }
    return result;
  }
 
  // helper function
  splitArr(arr, startIdx, endIdx) {
    let newArr = [];
    for (var i = startIdx; i < endIdx; i++) {
      newArr[newArr.length] = arr[i];
    }
    return newArr;
  }

  shiftArr(arr) {
    if (arr.length == 1) {
      return [];
    }

    let newArr = [];
    for (var i = 1; i < arr.length; i++) {
      newArr[newArr.length] = arr[i];
    }

    return newArr;
  }

}
module.exports = MergeSort;

