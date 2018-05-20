'use strict';


class ReverseArray {
    
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

  // alternate way to reverse an array, using forEach
  reverseArrayAlt(inputArray) {
    let outputArray = [];

    inputArray.reverse().forEach((element, index) => {
      outputArray[index] = element;
    });

    return outputArray;
  }

}

module.exports = ReverseArray;