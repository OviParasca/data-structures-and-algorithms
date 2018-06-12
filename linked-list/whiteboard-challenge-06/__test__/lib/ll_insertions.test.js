'use strict';

const LinkedList = require('../../../lib/linkedList.js');

describe('', () => {

  let ll = new LinkedList();
  ll.append(0);
  ll.append(23);
  ll.append(3);
  ll.append(48);

  // test the Append(value)
  it('testing adding a value to the head', () => {
    expect(ll.head.value).toBe(0);
  });

  it('testing adding a new value after the head', () => {
    expect(ll.head.next.value).toBe(23);
  });

  it('testing the Linked List length after appending 2 new nodes', () => {
    expect(ll.length).toBe(4);
  });


  // test the insertBefore(val, newVal)
  it('testing the insertBefore()', () => {
    ll.insertBefore(23, 8);
    expect(ll.head.next.value).toBe(8);
  });

  it('testing the insertBefore() at the head', () => {
    ll.insertBefore(0, 6);
    expect(ll.head.value).toBe(6);
  });

  it('testing the Linked List length after inserting 2 new nodes', () => {
    expect(ll.length).toBe(6);
  });


  // test the insertAfter(val, newVal)
  it('testing the insertAfter()', () => {
    ll.insertAfter(3, 4);
    expect(ll.head.next.next.next.next.next.value).toBe(4);
  });

  it('testing the insertAfter() after the head node', () => {
    ll.insertAfter(6, 18);
    expect(ll.head.next.value).toBe(18);
  });

  it('test for the new/final length of the Linked List', () => {
    expect(ll.length).toBe(8);
  });

});
