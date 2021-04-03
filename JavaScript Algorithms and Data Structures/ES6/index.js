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

// Destructuring to grab values
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

  const { today, tomorrow } = HIGH_TEMPERATURES;
  
// Destructuring to assign variables
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
    
  const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;


// Destructuring on a Nested object
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  const { today: { low: lowToday, high: highToday}} = LOCAL_FORECAST;

  
  // Destructuring on an Array to omit the first two values:
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [,, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

// Using Template Literal in a function
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };

  function makeList(arr) {
    const failureItems = [];

    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

// Using Object Literal
const createPerson = (name, age, gender) => {
return ({ name, age, gender });
};

// Declarative function syntax
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };

  bicycle.setGear(3);
  console.log(bicycle.gear);

// Using ES6 class and constructor method
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


// Exporting Modules 
const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
const lowercaseString = (string) => {
return string.toLowerCase()
}
  
export { uppercaseString, lowercaseString };

// Importing Modules
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");

// Importing entire file exports
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


