'use strict';

const Queue = require('./lib/queue_with_stacks.js');

let myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

console.log(myQueue);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.head);

