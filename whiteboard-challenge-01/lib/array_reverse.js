'use strict';

class ArrayReverse {
    
  // reverse an Array using For Loop
  reverseArray(inputArray) {
    let outputArray = [];
    let index = 0;

    for (var i = inputArray.length-1; i >= 0; i--) {
      outputArray[index] = inputArray[i];
      index++;
    }

    return outputArray;
  }

}

module.exports = ArrayReverse;