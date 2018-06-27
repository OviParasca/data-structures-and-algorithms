'use strict';

const HashMap = require('./lib/repeated_word.js');


let Hash = new HashMap();
let longWord = 'but It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only';

const myHashTable = {};
let dup = '';
let words = longWord.toLowerCase().split(/[ ,.]+/);
let index = 0;

while (dup.length < 1) {
  myHashTable[Hash.hashCode(words[index])] ? dup = words[index] : (myHashTable[Hash.hashCode(words[index])] = words[index]);
  index++;

  // base case (break out if we reach the end and no dups were found)
  if (index === words.length) {
    break;
  }
}

console.log(dup);
