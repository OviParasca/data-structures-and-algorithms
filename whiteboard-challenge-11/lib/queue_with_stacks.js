'use strict';

const Stack = require('./stack.js');

class Queue extends Stack {

  enqueue(value) {
    this.push(value);
  }

  dequeue() {
    // This is a normal way to DeQueue
    if (this.length === 0) {
      return null;
    }
    let oldHead = this.head.data;
    this.head = this.head.next;
    this.length--;
    return oldHead;
  }

}

module.exports = Queue;
