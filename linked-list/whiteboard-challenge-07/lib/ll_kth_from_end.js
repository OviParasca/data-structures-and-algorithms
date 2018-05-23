'use strict';

const LinkedList = require('../../lib/linkedList.js');

class ll_kth_from_end extends LinkedList {

  constructor() {
    super();
  }
    
  // find the Kth node from the end of the Linked List
  findKthNodeFromEnd(k) {
    var tempLL = this;
    var index = tempLL.length-1;
    var current = tempLL.head;
    var previous = null;

    if (k === tempLL.length-1) {
      return current; // Big O of O(1)
    } else {
      while (current) { // Big O of O(n)
        if (k === index) {
            return current;
        }
        var next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        index--;
      }
    }
  }

  // find the middle node in a Linked List
  findTheMiddleNode() {
    var tempLL = this;
    var middlePoint = Math.floor(tempLL.length/2);
    var currentNode = tempLL.head;
    
    for (var i = 0; i < tempLL.length; i++) {
      if (i === middlePoint) {
        return currentNode;
        break;
      }
      if (currentNode.next) {
        currentNode = currentNode.next;
      }
    }
  }
}

module.exports = ll_kth_from_end;