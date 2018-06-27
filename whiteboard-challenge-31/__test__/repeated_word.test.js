'use strict';

const HashMap = require('../lib/repeated_word.js');

describe('Tests for Repeated Word for Whiteboard 31', () => {
  let Hash = new HashMap();
  
  it('Test if the correct word is found as a duplicate, and check for exact word count', () => {
    let longWord = 'but It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only';
    const myHashTable = {};
    let dup = '';
    let words = longWord.toLowerCase().split(/[ ,.]+/);
    let index = 0;

    while (dup.length < 1) {
      myHashTable[Hash.hashCode(words[index])] ? dup = words[index] : (myHashTable[Hash.hashCode(words[index])] = words[index]);
      index++;
      if (index === words.length) {
        break;
      }
    }

    expect(words.length).toBe(121);
    expect(dup).toBe('it');
  });


  it('Test if there was no duplicate found', () => {
    let longWord = 'there are no duplicates in thie long string. Better luck next time!';
    const myHashTable = {};
    let dup = '';
    let words = longWord.toLowerCase().split(/[ ,.]+/);
    let index = 0;

    while (dup.length < 1) {
      myHashTable[Hash.hashCode(words[index])] ? dup = words[index] : (myHashTable[Hash.hashCode(words[index])] = words[index]);
      index++;
      if (index === words.length) {
        break;
      }
    }

    expect(dup).toBe('');
  });



  it('Test if the repeated words are typos', () => {
    let longWord = 'ther there it\s it is i testin tesin ';
    const myHashTable = {};
    let dup = '';
    let words = longWord.toLowerCase().split(/[ ,.]+/);
    let index = 0;

    while (dup.length < 1) {
      myHashTable[Hash.hashCode(words[index])] ? dup = words[index] : (myHashTable[Hash.hashCode(words[index])] = words[index]);
      index++;
      if (index === words.length) {
        break;
      }
    }

    expect(dup).toBe('');
  });

});