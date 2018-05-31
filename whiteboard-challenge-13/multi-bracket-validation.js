'use strict';


class Validation {

  multiBracketValidation(input) {
    if (input.length === 0) {
      return false;
    }

    var myString = input;
    myString = myString.replace(/\D/g,'');
    console.log(`removed letters from string: ${myString}`);
    
    // {}(){} === true
    // ()[[Extra Characters]]	 === true
    // [({}] === FALSE

  }

}

module.export = Validation;
