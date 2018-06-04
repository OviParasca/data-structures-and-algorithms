'use strict';

const Node = require('../linked-list/lib/node.js');


class Stack {

  push(value) {
    this.append(value)
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    var current = this.head;
    var previous = this.head;

    while (current.next) {
        previous = current;
        current = current.next;
    }
    
    this.length--;
    return previous;
  }

}

module.exports = Stack;
