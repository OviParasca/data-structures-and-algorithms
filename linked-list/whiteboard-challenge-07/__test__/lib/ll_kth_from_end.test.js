'use strict';

const LinkedList = require('../../../lib/linkedList.js');

describe('ll_kth_from_end Tests', () => {

  let ll = new LinkedList();

  let loadLinkedList = () => {
    ll.append('Head Node');
    ll.append('2nd Node');
    ll.append('3rd Node');
    ll.append('4th Node');
    ll.append('Last Node');
  };
  loadLinkedList();

  it('Testing to find the middle node in the Linked list', () => {
    expect(ll.findTheMiddleNode().value).toEqual('3rd Node');
  });
  
  it('Testing to make sure our Linked List is properly populated and has the correct amount of nodes', () => {
    expect(ll.length).toEqual(5);
  });

  it('Testing to find the last (kth) node in the Linked List, starting backwards', () => {
    expect(ll.findKthNodeFromEnd(0).value).toEqual('Last Node');
  });

  it('Testing to find the first (kth) node in the Linked List, starting backwards', () => {
    expect(ll.findKthNodeFromEnd(ll.length-1).value).toEqual('Head Node');
  });

});