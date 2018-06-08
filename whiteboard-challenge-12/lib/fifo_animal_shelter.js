'use strict';

class AnimalShelter {

  constructor() {
    this.dog = [];
    this.cat = [];
  }

  enqueueAnimal(value) {
    if (value === 'cat') {
      this.cat[this.cat.length] = value;
    } else if (value === 'dog') {
      this.dog[this.dog.length] = value;
    }
  }

  dequeueAnimal(pref) {
    if (pref === 'dog') {
      for (var i = 1; i < this.dog.length; i++) {
        this.dog[i-1] = this.dog[i];
      }
      this.dog.length--;
    }

    if (pref === 'cat') {
      for (var i = 1; i < this.cat.length; i++) {
        this.cat[i-1] = this.cat[i];
      }
      this.cat.length--;
    }
  }

}

module.exports = AnimalShelter;
