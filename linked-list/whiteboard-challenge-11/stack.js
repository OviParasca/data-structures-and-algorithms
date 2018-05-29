'use strict';

const LinkedList = require('../lib/linkedList.js');

class Stack extends LinkedList {

  push(value) {
    this.append(value)
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    var currentNode = this.head;
    let prevNode = currentNode;

    while(currentNode) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        prevNode = currentNode;
        currentNode = undefined;
        this.length--;
      }
    }
    return prevNode;
  }

}

module.exports = Stack;
