'use strict';

class ArrayShift {
    
insertShiftArray(array, value) {
    const centerPoint = Math.ceil(array.length/2);
    const newArray = [];
    let index = 0;

    for (var i = 0; i < array.length; i++) {
      if (i === centerPoint) {
       newArray[index] = value;
       index++;
      } 
    
      newArray[index] = array[i];
      index++;
    }

    return newArray;
  }

  removeShiftArray(array) {
    const centerPoint = Math.floor(array.length/2);
    const newArray = [];
    let index = 0;

    for (var i = 0; i < array.length; i++) {
      if (i !== centerPoint) {
        newArray[index] = array[i];
        index++;
      }
    }
    return newArray;
  }

}

module.exports = ArrayShift;
