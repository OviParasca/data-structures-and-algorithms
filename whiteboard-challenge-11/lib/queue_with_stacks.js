'use strict';

const Node = require('../../linked-list/lib/node.js');
const Stack = require('./stack.js');

class Queue extends Stack {
  
  enqueue(value) {
    this.push(value);
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    let oldHead = this.head.data;
    this.head = this.head.next;
    this.length--;

    return oldHead;
  }

  serialize() {
    return JSON.stringify(this);
  }

  deserialize(obj) {
    return JSON.parse(obj);
  }

}

module.exports = Queue;

