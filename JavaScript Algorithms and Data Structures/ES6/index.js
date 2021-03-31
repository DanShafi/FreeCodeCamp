// Using Let instead of Var
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk()

// Scoping using ES6 let
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  // Using const and uppercase identifiers
  function printManyTimes(str) {

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }

  }
  printManyTimes("freeCodeCamp");

  // Mutating const values
  const s = [5, 7, 2];
function editInPlace() {

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

// Using Object.freeze() method
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
  
    Object.freeze(MATH_CONSTANTS);
  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  // Arrow Functions
  const magic = () => new Date();

  // Default param arguments
const increment = (number, value = 1) => number + value;

// Rest param
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

// Using Spread Operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
console.log(arr2);

// Edit
