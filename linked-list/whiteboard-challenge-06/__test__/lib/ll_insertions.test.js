'use strict';

const LinkedList = require('../../../lib/linkedList.js');

describe('', () => {

  let ll = new LinkedList();


  // test the Append(value)
  it('testing adding a value to the head', () => {
    ll.append(1);
    expect(ll.head.value).toBe(1);
  });

  it('testing adding a new value after the head', () => {
    ll.append(23);
    expect(ll.head.next.value).toBe(23);
  });

  it('testing the Linked List length after appending 2 new nodes', () => {
    expect(ll.length).toBe(2);
  });


  // test the insertBefore(val, newVal)
  it('testing the insertBefore()', () => {
    ll.insertBefore(23, 3);
    expect(ll.head.next.value).toBe(3);
  });

  it('testing the insertBefore() at the head', () => {
    ll.insertBefore(6, 1);
    expect(ll.head.value).toBe(6);
  });

  it('testing the Linked List length after inserting 2 new nodes', () => {
    expect(ll.length).toBe(3);
  });


  // test the insertAfter(val, newVal)
  it('testing the insertAfter()', () => {
    ll.insertAfter(4, 3);
    expect(ll.head.next.next.next.value).toBe(4);
  });

  it('testing the insertAfter() after the head node', () => {
    ll.insertAfter(5, 6);
    expect(ll.head.next.value).toBe(5);
  });

  it('test for the new/final length of the Linked List', () => {
    expect(ll.length).toBe(3);
  });





});