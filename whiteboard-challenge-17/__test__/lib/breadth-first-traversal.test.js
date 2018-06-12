'use strict';

const BinaryTree = require('../../../binary-tree/lib/BinaryTree.js');
const Node = require('../../../binary-tree/lib/Node.js');

describe('Tests for the Breadth First Traversal', () => {

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

  it('check if the root node is correct', () => {
    expect(one.left.value).toBe(3);
  });

  it('check if the specific node value is correct', () => {
    expect(one.right.value).toBe(5);
  });

  it('check if the specific node value is correct', () => {
    expect(seven.right.value).toBe(30);
  });

});
