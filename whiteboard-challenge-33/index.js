'use strict';

const HashMap = require('../HashMap/lib/HashMap.js');
const LeftJoin = require('./lib/left_join.js');

let hashMap = new HashMap();
let leftJoin = new LeftJoin();

let synonyms = {
  'fond' : 'enamored',
  'wrath' : 'anger',
  'diligent' : 'employed',
  'outfit' : 'garb',
  'guide' : 'usher'
}
const synonymTable = {};

let antonyms = {
  'fond' : 'averse',
  'wrath' : 'delight',
  'diligent' : 'idle',
  'guide' : 'follow',
  'flow' : 'jam'
}
const antonymTable = {};



// convert the 2 objects into hashmaps
Object.keys(synonyms).forEach(function(key) {
  synonymTable[hashMap.hashCode(key)] = {[key] : synonyms[key]};
});

Object.keys(antonyms).forEach(function(key) {
  antonymTable[hashMap.hashCode(key)] = {[key] : antonyms[key]};
});

console.log(synonymTable);
console.log(synonymTable[3148863]['fond']);
console.log(antonymTable);


// pass in 2 hash maps, and merge left (JOIN-LEFT)
// make sure to pass in the left table you want to merge into as the first argument
console.log(leftJoin.mergeLeft(synonymTable, antonymTable));


module.exports = {synonymTable, antonymTable};
