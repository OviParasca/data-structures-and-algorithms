'use strict';

const LinkedList = require('../../../linked-list/lib/linkedList.js');

class Queue extends LinkedList {

  enqueue(value) {
    this.append(value)
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
}

module.exports = Queue;
