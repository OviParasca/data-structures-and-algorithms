'use strict';

const AnimalShelter = require('./lib/fifo_animal_shelter.js');

let myQueue = new AnimalShelter();

myQueue.enqueueAnimal('cat');
myQueue.enqueueAnimal('dog');
myQueue.enqueueAnimal('dog');
myQueue.enqueueAnimal('cat');

console.log(myQueue);
myQueue.dequeueAnimal('dog');
console.log(myQueue);


