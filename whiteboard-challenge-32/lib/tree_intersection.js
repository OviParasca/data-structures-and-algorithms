'use strict';


class BreadthFirstTraversal {

  breadthFirstTraversal(tree) {
    let rootNode = [];
    rootNode.push(tree.root);
    let output = [];


    return this.walk(rootNode, output);
  }

  // helper functions
  walk(arr, outputArr) {
    let newNodes = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          outputArr.push(arr[i].value);
          newNodes.push(arr[i].left);
          newNodes.push(arr[i].right);
        }
    }

    if (newNodes.every(this.isNull) === false) {
      this.walk(newNodes, outputArr);
    }
    return outputArr;
  }

  isNull(currentValue) {
    return currentValue === null;
  }

  findDups(arr1, arr2) {
    let outputArr = [];

    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          outputArr[outputArr.length] = arr1[i];
          break;
        }
      }
    }

    return outputArr;
  }
}

module.exports = BreadthFirstTraversal;
