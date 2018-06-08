'use strict';

const BinaryTree = require('../../../binary-tree/lib/BinaryTree.js');
const Node = require('../../../binary-tree/lib/Node.js');
const MaxValTree = require('../../lib/find-maximum-value-binary-tree.js');


describe('Tests for the Find the Max Value in a tree', () => {

  // create a new Binary Tree
  const one = new Node(1);
  const two = new Node(3);
  const three = new Node(5);
  const four = new Node(9);
  const five = new Node(10);
  const six = new Node(12);
  const seven = new Node(15);
  const eight = new Node(20);
  const nine = new Node(30);

  const tree = new BinaryTree(one);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  two.left = six;
  six.right = seven;
  seven.left = eight;
  seven.right = nine;


  it ('Testing for the correct max value', () => {
    let maxValTree = new MaxValTree;
    expect(maxValTree.findMaximumValue(tree)).toBe(30);
  });

  it ('Test to make sure the root value is correct', () => {
    expect(tree.root.value).toBe(1);
  });

  it ('Test the proper max value against what the Find Max Value class returns', () => {
    let maxValTree = new MaxValTree;
    expect(maxValTree.findMaximumValue(tree)).toBe(seven.right.value);
  });


});
