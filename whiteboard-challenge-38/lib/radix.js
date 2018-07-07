'use strict';

class RadixSort {

  sortLSD(array) {
    var counter = [[]];
    var dev = 1;
    var maxDigitSymbols = this.getLongestDigit(array);

    for (var i = 0; i < maxDigitSymbols; i++, dev *= 10) {
        for (var j = 0; j < array.length; j++) {
            var bucket = parseInt((array[j] % (dev*10)) / dev);
            if (counter[bucket] == null ) {
                counter[bucket] = [];
            }
            counter[bucket].push(array[j]);
        }
        
        var pos = 0;
        for (var j = 0; j < counter.length; j++) {
            var value = null;
            if (counter[j] != null ) {
                while ((value = counter[j].shift()) != null ) {
                    array[pos++] = value;
                }
            }
        }
    }
    return array;
  };

  getLongestDigit(array) {
    let maxDigitSymbols = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].toString().length > maxDigitSymbols) {
          maxDigitSymbols = array[i].toString().length;
        }
    }
    return maxDigitSymbols;
  };

}

module.exports = RadixSort;
