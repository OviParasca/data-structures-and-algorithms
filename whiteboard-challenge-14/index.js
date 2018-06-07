'use strict';

const Hanoi = require('./lib/towers-of-hanoi.js');

let toh = new Hanoi;

toh.hanoi(3, 'start', 'buffer', 'dest');
console.log(toh.steps);