'use strict';

// const BinaryTree = require('../../binary-tree/lib/BinaryTree.js');
// const Node = require('../../binary-tree/lib/Node.js');

class FindMaxValue {

  findMaximumValue(tree) {
    var maxValue = tree.root.value;

    let _walk = (node) => {
      maxValue = node.value > maxValue ? node.value : maxValue;
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    }
    _walk(tree.root);

    return maxValue;
  }

}

module.exports = FindMaxValue;
