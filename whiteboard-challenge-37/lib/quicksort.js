'use strict';


class QuickSort {

  sort(arr) {
    if (arr.length == 0) {
      return [];
    }

    var left = [];
    var right = [];
    var pivot = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left[left.length] = arr[i];
      } else {
        right[right.length] = arr[i];
      }
    }

    return this.sort(left).concat(pivot, this.sort(right));
  }
}

module.exports = QuickSort;
