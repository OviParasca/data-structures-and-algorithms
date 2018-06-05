'use strict';

const BinaryTree = require('./BinaryTree.js');
const Node = require('./Node.js');

class FizzBuzzTree {

  fizzbuzztree(BinaryTree) {
    let _walk = (node) => {
      node.value = node.value % 15 === 0 ? 'fizzbuzz' : node.value % 5 === 0 ? 'buzz' : node.value % 3 === 0 ? 'fizz' : node.value;
      // myString = node.value % 3 === 0 ? myString += 'fizz' : '';
      // myString = node.value % 5 === 0 ? myString += 'buzz' : myString;
      // if (myString.length > 0) {
      //   node.value = myString;
      //  myString = '';
      // }
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(BinaryTree.root);

    return BinaryTree;
  }

}

module.exports = FizzBuzzTree;
