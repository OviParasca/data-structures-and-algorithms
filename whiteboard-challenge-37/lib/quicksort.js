'use strict';


function quicksort(arr) {
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

  console.log(`left: ${left}`);
  console.log(`pivot: ${pivot}`);
  console.log(`right: ${right} \n`);

  return quicksort(left).concat(pivot, quicksort(right));
}


var testArr = [2, 4, 1, 3, 7, 5, 9];
console.log(quicksort(testArr));