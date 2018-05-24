'use strict';

const linkedList = require('../lib/linkedList.js');

var ll1 = new linkedList();
var ll2 = new linkedList();
var ll3 = new linkedList();

// Linked List 1
ll1.append('a');
ll1.append('b');
ll1.append('c');

// Linked List 2
ll2.append('1');
ll2.append('2');
ll2.append('3');

// Testing the zipper-merge of the Linked Lists in 1
ll3.mergeLists(ll1, ll2);
