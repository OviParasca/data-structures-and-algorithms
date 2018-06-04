'use strict';

const Queue = require('./lib/queue_with_stacks.js');
const Stack = require('./lib/stack.js');

// let myQueue = new Queue();

// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);

// console.log(myQueue);
// console.log('hi');

// myQueue.dequeue();
// console.log(myQueue);



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

