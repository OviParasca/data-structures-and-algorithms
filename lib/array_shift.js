'use strict';

class ArrayShift {
    
    insertShiftArray(array, value) {
        const centerPoint = Math.ceil(array.length/2);
        const newArray = [];

        for (var i = 0; i < array.length; i++) {
            if (i === centerPoint) {
                newArray.push(value);
            }
            newArray.push(array[i]);
        }

        return newArray
    }
}

module.exports = ArrayShift;
