'use strict';

const Stack = require('./stack.js');

class Queue extends Stack {

  enqueue(value) {
    this.push(value);
  }

  dequeue() {
    // This is a normal way to DeQueue (not using the Pop() from a stack)
    // if (this.length === 0) {
    //   return null;
    // }
    // let oldHead = this.head.data;
    // this.head = this.head.next;
    // this.length--;
    // return oldHead;


    let oldHead = this.head;
    let currentNode = this.head;
    let next, prev = null;

    // reverse the stack (as to pop off the head, instead of the tail)
    while (currentNode) {
      next = currentNode.next; 
      currentNode.next = prev; 
      prev = currentNode; 
      currentNode = next; 
    }
    this.pop(); // remove the tail (old head)
    this.head = prev;
    currentNode = this.head; // reset the current node back to the current head
    next, prev = null;

    // reverse the stack back to it's normal order
    while (currentNode) {
      next = currentNode.next; 
      currentNode.next = prev; 
      prev = currentNode; 
      currentNode = next; 
    }
    this.head = prev;

    // console.log(this.head);

    if (this.length > 0) {
      return oldHead;
    } else {
      this.head = null;
      return null;
    }
  }

}

module.exports = Queue;
