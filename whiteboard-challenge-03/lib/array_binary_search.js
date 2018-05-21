'use strict';

class ArrayBinarySearch {

    binarySearch(arr, val) {
        var half = Math.floor(arr.length / 2);

        if (arr.length === 1) {
            if (arr[0] === val) {
                return val;
            } else {
                return -1;
            }
        } else if (arr[half] === val) {
            return val;
        } else if (val > arr[half]) {
            return this.binarySearch(this.sliceArray(arr, half, arr.length), val);
        } else {
            return this.binarySearch(this.sliceArray(arr, 0, half), val);
        }
    };

    sliceArray(array, startingPoint, endingPoint) {
        const newArray = [];
        var newStartingPoint = 0;

        for (var i = startingPoint; i < endingPoint; i++) {
            newArray[newStartingPoint] = array[i];
            newStartingPoint++;
        }

        return newArray;
    };

}

module.exports = ArrayBinarySearch;