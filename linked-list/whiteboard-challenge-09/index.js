'use strict';

const LinkedList = require('../lib/linkedList.js');

var ll1 = new LinkedList();
ll1.append('a');
ll1.append('b');
ll1.append('c');

ll1.head.next.next.next = ll1.head.next;
console.log(`is linked list a loop: ${ll1.detectLoop()}`);