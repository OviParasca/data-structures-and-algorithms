'use strict';

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
 
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    var middlePoint = Math.floor(arr.length / 2);
    var leftArr = splitArr(arr, 0, middlePoint);
    var rightArr = splitArr(arr, middlePoint, arr.length);
  
    // console.log(`left: ${leftArr}`);
    // console.log(`right: ${rightArr}`);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
 
function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
          result[result.length] = left[0];
          left = shiftArr(left);
        } else {
          result[result.length] = right[0];
          right = shiftArr(right);
        }        
    }
 
    while (left.length) {
      result[result.length] = left[0];
      left = shiftArr(left);
   }

    while (right.length) {
      result[result.length] = right[0];
      right = shiftArr(right);
    }
    console.log(result);
    return result;
}
 
// helper function
function splitArr(arr, startIdx, endIdx) {
  let newArr = [];
  for (var i = startIdx; i < endIdx; i++) {
    newArr[newArr.length] = arr[i];
  }
  return newArr;
}

function shiftArr(arr) {
  if (arr.length == 1) {
    return [];
  }

  let newArr = [];
  for (var i = 1; i < arr.length; i++) {
    newArr[newArr.length] = arr[i];
  }

  return newArr;
}

console.log(mergeSort(a));
