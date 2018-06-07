'use strict';

const Hanoi = require('../../lib/towers-of-hanoi.js');

describe('Tests for Towers Of Hanoi', () => {

  it ('Count the number of steps required to meet the results for 3 discs', () => {
    let toh = new Hanoi;
    toh.hanoi(3, 'start', 'buffer', 'dest');
    expect(toh.steps).toBe(7);
  });

  it ('Count the number of steps required to meet the results for 2 discs', () => {
    let toh = new Hanoi;
    toh.hanoi(2, 'start', 'buffer', 'dest');
    expect(toh.steps).toBe(3);
  });

  it ('Count the number of steps required to meet the results for 7 discs', () => {
    let toh = new Hanoi;
    toh.hanoi(7, 'start', 'buffer', 'dest');
    expect(toh.steps).toBe(127);
  });

});