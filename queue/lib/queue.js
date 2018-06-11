'use strict';

const Node = require('../../linked-list/lib/node.js');


class Queue {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  enqueue(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.length = 1;

      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;

    return this;(value);
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