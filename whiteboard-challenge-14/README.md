# Towers of Hanoi
[![Build Status](https://travis-ci.com/OviParasca/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/OviParasca/data-structures-and-algorithms)

## Challenge
<!-- Description of the challenge -->
* The Towers of Hanoi is a mathematical puzzle where you have 3 towers and N disks of different sizes.
* The puzzle starts with the disks sorted (i.e. smaller disks sits on top of larger disks) on the left-most tower, and the objective of the puzzle is to move the disks to the right-most tower with the following restrictions:
   * Only one disk can be moved at a given time.
   * A disk is moved from the top of a tower to the top of another tower.
   * A disk can’t be placed on top of a smaller disk.
* On your main file, create…
   * C#: a function called void TowersOfHanoi(int n)
   * JavaScript: a function called towersOfHanoi(n)
   * Python: a function called towers_of_hanoi(n)
   * where n represents the number of disks.

## Solution
<!-- Embedded whiteboard image -->
![whiteboard image](assets/towers-of-hanoi.jpg)

To run tests, install Jest and run navigating to the directory and running ```npm test```