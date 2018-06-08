'use strict';

const BinaryTree = require('../../lib/BinaryTree.js');
const Node = require('../../lib/Node.js');
const FizzBuzzTree = require('../../lib/fizzbuzztree.js');


describe('Tests for the Fizz Buzz Tree', () => {

  // create a new Binary Tree
  const one = new Node(1);
  const two = new Node(3);
  const three = new Node(6);
  const four = new Node(9);
  const five = new Node(10);
  const six = new Node(13);
  const seven = new Node(15);
  const eight = new Node(21);
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



  // Fizz Buzz Tree tests
  it('Test if the first node is the root node', () => {
    let fizzBuzzTree = new FizzBuzzTree();
    expect(fizzBuzzTree.fizzbuzztree(tree).root.value).toBe(1);
  });

  it('Check the preOrder sort if the %3, %5, and %15 are converted to the fizz, buzz, fizzbuzz', () => {
    let results = tree.preOrder();
    for (var i = 0; i < results.length; i++) {
      if (results[i] % 15 === 0 || results[i] % 5 === 0 || results[i] % 3 === 0) {
        expect().toThrow('a node returned the number instead the expected fizz/buzz/fizzbuzz');
      }
    }
  });

  it('Check is a specific node has the expected outcome', () => {
    expect(four.value).toBe('fizz');
    expect(six.right.value).toBe('fizzbuzz');
    expect(two.left.value).toBe(13);
  });

});
