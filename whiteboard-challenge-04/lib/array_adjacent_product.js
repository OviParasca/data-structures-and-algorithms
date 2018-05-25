'use strict'; 

class array_adjacent_product {

  LargestProduct(arr) {
    var highestAdjNums = 0;

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        var currentNum = arr[i][j];
      
        for (var k = -1; k < 2; k++) {
          if (typeof arr[i-1] !== 'undefined') {
            if (arr[i-1][j+(k)] * currentNum > highestAdjNums) {
              highestAdjNums = arr[i-1][j+(k)] * currentNum;
            }
          }

          var midLeft = arr[i][j-1] * currentNum;
          if (midLeft > highestAdjNums) {
            highestAdjNums = midLeft;
          }

          var midRight = arr[i][j+1] * currentNum;
          if (midRight > highestAdjNums) {
            highestAdjNums = midRight;
          }
        }

        for (var l = -1; l < 2; l++) {
          if (typeof arr[i+1] !== 'undefined') {
            if (arr[i+1][j+(l)] * currentNum > highestAdjNums) {
              highestAdjNums = arr[i+1][j+(l)] * currentNum;
            }
          }
        }
      }
    }  
    return highestAdjNums; 
  }
  
}

module.exports = array_adjacent_product;
