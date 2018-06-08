'use strict';

class TowersOfHanoi {

  constructor() {
     this.steps = 0;
  };

  hanoi (disc, start, buffer, dest) {
    if (disc > 0) {
      this.hanoi(disc -1, start, dest, buffer);
      console.log('Move disc ' + disc + ' from ' + start + ' to ' + dest);
      this.steps++;
      this.hanoi(disc -1, buffer, start, dest);
    }
  };

}

module.exports = TowersOfHanoi;
