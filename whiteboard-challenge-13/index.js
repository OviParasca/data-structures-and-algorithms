'use strict';

const validation = require('./lib/multi-bracket-validation.js');

let myMBV = new validation();

myMBV.multiBracketValidation('{asd}(dasd)asd[dddd]');
