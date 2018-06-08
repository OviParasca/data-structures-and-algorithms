'use strict';

const AnimalShelter = require('../../lib/fifo_animal_shelter.js');


describe('Tests for the FIFO Animal Shelter project', () => {

  let myQueue = new AnimalShelter();

  let loadAnimalShelter = () => {
    // populate the queue
    myQueue.enqueueAnimal('cat');
    myQueue.enqueueAnimal('dog');
    myQueue.enqueueAnimal('dog');
    myQueue.enqueueAnimal('cat');
    myQueue.enqueueAnimal('dog');
  };

  // Enqueue tests
  it('Test initial length for each dog/cat queue', () => {
    expect(myQueue.dog.length).toBe(0);
    expect(myQueue.cat.length).toBe(0);
  });



  it('Test the length of the dog array', () => {
    loadAnimalShelter();
    expect(myQueue.dog.length).toBe(3);
  });

  it('Test the length of the car array', () => {
    expect(myQueue.cat.length).toBe(2);
  });


  // Dequeue tests
  it('Test a Dequeue for the older dog', () => {
    myQueue.dequeueAnimal('dog');
    expect(myQueue.dog.length).toBe(2);;
  });

  it('Test a Dequeue for the older cat', () => {
    myQueue.dequeueAnimal('cat');
    expect(myQueue.cat.length).toBe(1);;
  });

  it('Test a Dequeue to dequeue all the cats, going beyond the bounds', () => {
    myQueue.dequeueAnimal('cat');
    myQueue.dequeueAnimal('cat');
    myQueue.dequeueAnimal('cat');
    expect(myQueue.cat.length).toBe(0);;
  });

});