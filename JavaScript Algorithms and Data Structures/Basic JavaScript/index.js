// Using escape sequences
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenation operator on strings
var myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';

// Bracket notation on strings

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; 

// Last character in a string
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1]; 

// Using .push()
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["Dog",3]);

// Using Params and Args in functions
function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
  }
  
  functionWithArgs(5,6);


//Using scoping in functions
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

myOutfit();

// Using return statement
function timesFive(num) {
  return num*5;
}

timesFive(5);

// Creating a Queue in JavaScript

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift(item);
}

var testArr = [1,2,3,4,5];

// Testing
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Using if-statement in a function

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

// Strict-equality function
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// && Operator

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25 ) {
    return "Yes";
  }
  return "No";
}

testLogicalAnd(10);