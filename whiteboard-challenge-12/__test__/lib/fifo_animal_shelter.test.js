'use strict';

const AnimalShelter = require('../../lib/fifo_animal_shelter.js');


describe('Tests for the FIFO Animal Shelter project', () => {

  let myQueue = new AnimalShelter();

  it('Test the Enqueue for the Animal Shelter Enqueue, for the dog and cat length', () => {
    myQueue.enqueueAnimal('cat');
    myQueue.enqueueAnimal('dog');
    myQueue.enqueueAnimal('dog');
    myQueue.enqueueAnimal('cat');
    myQueue.enqueueAnimal('dog');

    expect(myQueue.dog.length).toBe(3);
    expect(myQueue.cat.length).toBe(2);
  });

  it('Test a Dequeue for the older dog', () => {
    myQueue.dequeueAnimal('dog');
    expect(myQueue.dog.length).toBe(2);;
  });

  it('Test a Dequeue for the older cat', () => {
    myQueue.dequeueAnimal('cat');
    expect(myQueue.cat.length).toBe(1);;
  });

});