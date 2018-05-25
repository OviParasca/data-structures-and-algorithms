'use strict';

const LinkedList = require('../../../lib/linkedList.js');

describe('Test the loop detection', () => {

  var ll1 = new LinkedList();

  let loadLinkedList = () => {
    ll1.append('a');
    ll1.append('b');
    ll1.append('c');
  };
  loadLinkedList();
  
  it('Test for the length of the Linked List', () => {
    expect(ll1.length).toEqual(3);
  });

  it('Test the Linked List WITHOUT a loop', () => {
    expect(ll1.detectLoop()).toEqual(false);
  });
  
  it('Test the Linked List WITH loop', () => {
    ll1.removeAllNodes();
    loadLinkedList();
    ll1.head.next.next.next = ll1.head.next;

    expect(ll1.detectLoop()).toEqual(true);
  });

});