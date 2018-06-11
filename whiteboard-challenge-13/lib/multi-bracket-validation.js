'use strict';


class Validation {

  multiBracketValidation(input) {
    if (input === undefined || input.length === 0) {
      return false;
    }

    var myString = input;
    myString = myString.replace(/^[{}[]()]+$/, '');
    console.log(`removed letters from string: ${myString}`);

    // {}(){} === true
    // ()[[Extra Characters]]	 === true
    // [({}] === FALSE
    console.log(this.getReverseSymbol('['));

  }

  // helper function to return the proper reverse symbol
  getReverseSymbol(symbol) {
    switch(symbol) {
      case '{':
        return '}';
      case '(':
        return ')';
      case '[':
        return ']';
      default:
        return null;
    }
  }

}

module.exports = Validation;
