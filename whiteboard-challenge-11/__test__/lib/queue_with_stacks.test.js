'use strict';

const Queue = require('../../lib/queue_with_stacks.js');


describe('Test the Queue with Stacks code', () => {

  let myQueue = new Queue();


  // Enqueue tests

  it('Enqueue(value) 4 values and check the length afterwards', () => {
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(51);

    expect(myQueue.length).toBe(4);
  });

  it('Check the tail value if it matches what we expected', () => {
    let currentNode = myQueue.head;
    for (var i = 0; i < myQueue.length; i++) {
      if (i === myQueue.length-1) {
        expect(currentNode.value).toBe(51);
      } else {
        currentNode = currentNode.next;
      }
    }
  });



  // Dequeue tests
  it('Dequeue() the head and test the new head', () => {
    myQueue.dequeue();

    console.log(myQueue.head);
    expect(myQueue.head.value).toBe(51);
  });

  it('Dequeue() all the values to test going beyond 0 length', () => {
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();

    expect(myQueue.length).toBe(0);
    expect(myQueue.head).toBe(null);
  });


  // it('', () => {

  // });

  // it('', () => {

  // });


});

