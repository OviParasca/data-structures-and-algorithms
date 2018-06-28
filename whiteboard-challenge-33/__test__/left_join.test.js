'use strict';

const LeftJoin = require('../lib/left_join.js');
const Index = require('../index.js');

describe('Tests for whiteboard 33, Left JOIN of 2 hash tables', () => {

  it('test if the synonym & antonym tables are hashed', () => {
    Object.keys(Index.synonymTable).forEach(function(key) {
      expect(typeof parseInt(key)).toBe('number');
    });

    Object.keys(Index.antonymTable).forEach(function(key) {
      expect(typeof parseInt(key)).toBe('number');
    });
  });

  it('test if the synonym & antonym tables values are objects', () => {
    Object.keys(Index.synonymTable).forEach(function(key) {
      Object.keys(Index.synonymTable[key]).forEach(function(_) {
        expect(typeof Index.synonymTable[key]).toBe('object');
      });
    });

    Object.keys(Index.antonymTable).forEach(function(key) {
      Object.keys(Index.antonymTable[key]).forEach(function(_) {
        expect(typeof Index.antonymTable[key]).toBe('object');
      });
    });
  });

  it('test to see if each value has 2 values for each key', () => {
    let leftJoin = new LeftJoin();
    let outputDict = leftJoin.mergeLeft(Index.synonymTable, Index.antonymTable);
    
    Object.keys(outputDict).forEach(function(key) {
      Object.keys(outputDict[key]).forEach(function(_) {
        expect(outputDict[key].length).toBe(2);
      });
    });
  });

});