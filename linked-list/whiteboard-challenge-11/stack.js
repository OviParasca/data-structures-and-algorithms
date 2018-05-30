'use strict';

const LinkedList = require('../../linked-list/lib/linkedList.js');


class Stack extends LinkedList {

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
