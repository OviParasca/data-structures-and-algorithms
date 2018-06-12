'use strict';

const BinaryTree = require('../../binary-tree/lib/BinaryTree.js');
const Node = require('../../binary-tree/lib/Node.js');

class FizzBuzzTree {

  fizzbuzztree(BinaryTree) {
    let _walk = (node) => {
      node.value = node.value % 15 === 0 ? 'fizzbuzz' : node.value % 5 === 0 ? 'buzz' : node.value % 3 === 0 ? 'fizz' : node.value;
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(BinaryTree.root);

    return BinaryTree;
  }

}

module.exports = FizzBuzzTree;
