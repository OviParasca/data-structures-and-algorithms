'use strict';

const BinaryTree = require('../../binary-tree/lib/BinaryTree.js');
const Node = require('../../binary-tree/lib/Node.js');
const Queue = require('../../queue/lib/queue.js');

class BreadthFirstTraversal {
  
  breadthFirstTraversal(tree) {
    let queue01 = new Queue;
    queue01.enqueue(tree.root);

    while (queue01.length > 0){
      var currentNode = queue01.head.value;
      if (currentNode.left !== null){
        queue01.enqueue(currentNode.left);
      }
      if (currentNode.right !== null){
        queue01.enqueue(currentNode.right);
      }
      console.log(queue01.head.value.value);
      queue01.dequeue();
    }
  }
  
}

module.exports = BreadthFirstTraversal;
