'use strict';

export default function breadthFirstTraversal(tree) {

  let rootNode = [];
  rootNode.push(tree.root);
  let output = [];

  function _walk(arr) {
    let newNodes = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].value) {
          console.log('new value: ', arr[i].value)
          output.push(arr[i].value);
          newNodes.push(arr[i].left);
          newNodes.push(arr[i].right);
        }
    }
    if (!newNodes.every(isNull)) {
      _walk(newNodes);
    }
  }

  _walk(rootNode);
  return output;


  // helper functions
  function isNull(currentValue) {
    return currentValue === null;
  }
}
