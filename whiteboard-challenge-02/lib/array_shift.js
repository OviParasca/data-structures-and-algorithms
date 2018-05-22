'use strict';

class ArrayShift {
    
insertShiftArray(array, value) {
    var centerPoint = -(~~~(array.length/2));
    const newArray = [];
    let index = 0;

    if (this.isWholeNum(array.length/2)) {
      centerPoint = ~~(array.length/2);
    }

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
    const centerPoint = ~~(array.length/2);
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

  isWholeNum(n) {
    return n % 1 === 0;
 }

}

module.exports = ArrayShift;
