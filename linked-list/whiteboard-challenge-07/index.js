'use strict';

const LinkedList = require('./lib/ll_kth_from_end.js');

let ll = new LinkedList();

ll.append('New Head Node');
ll.append('2nd Node');
ll.append('3rd Node');
ll.append('4th Node');
ll.append('Last Node');

console.log(ll.findTheMiddleNode().value);
// console.log(ll.findKthNodeFromEnd(0).value);
ll.removeAllNodes();
console.log(ll.length);