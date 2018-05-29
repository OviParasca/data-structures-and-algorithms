'use strict';

const Queue = require('./queue_with_stacks.js');

// let myQueue = new Queue();

// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);

// console.log(myQueue);
// console.log('hi');

// myQueue.dequeue();
// console.log(myQueue);


const Stack = require('./stack.js');

let myStack = new Stack();

myStack.push(2);
myStack.push(4);
myStack.push(6);
myStack.push(8);

console.log(myStack);

myStack.pop();
var currentNode = myStack.head;
for (var i = 0; i < myStack.length; i++) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}

console.log(myStack);

console.log(myStack.head.next.next.next.value);
