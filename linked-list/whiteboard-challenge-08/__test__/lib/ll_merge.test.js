'use strict';

const LinkedList = require('../../../lib/linkedList.js'); 

describe('Linked List Merge Tests', () => {

  var ll1 = new LinkedList();
  var ll2 = new LinkedList();
  var ll3 = new LinkedList();

  let loadLinkedList = () => {
    ll1.append('a');
    ll1.append('b');
    ll1.append('c');

    ll2.append('1');
    ll2.append('2');
    ll2.append('3');

    ll3.mergeLists(ll1, ll2);
  };
  loadLinkedList();

  it('Test the length of the new zip-merged Linked List', () => {
    var ll3Length = ll1.length + ll2.length;
    expect(ll3.length).toEqual(ll3Length);
  });

  it('Test the odd nodes in the zip-merged Linked List match the 1st Linked List', () => {
    var currentNode = ll3.head;
    var ll1Node = ll1.head;

    for (var i = 0; i < ll3.length; i++) {
      if (i % 2 == 0) {
        expect(currentNode.value).toEqual(ll1Node.value);
        ll1Node = ll1Node.next;
      }
      currentNode = currentNode.next;
    }
  });

  it('Test the odd nodes in the zip-merged Linked List match the 2nd Linked List', () => {
    var currentNode = ll3.head;
    var ll2Node = ll2.head;

    for (var i = 0; i < ll3.length; i++) {
      if (i % 2 == 1) {
        expect(currentNode.value).toEqual(ll2Node.value);
        ll2Node = ll2Node.next;
      }
      currentNode = currentNode.next;
    }
  });

});