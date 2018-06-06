'use strict';

const Node = require('../../linked-list/lib/node.js');

class Stack {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);

    // This happens if the list is empty
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

    return this;
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
    previous.next = null;

    this.length--;
    return previous;
  }

}

module.exports = Stack;
