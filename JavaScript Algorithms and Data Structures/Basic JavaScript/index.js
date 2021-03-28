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

// Chained Else/If Statements

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
}

testElseIf(7);

// Golf-Game

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
      return "Hole-in-one!";
  } else if (strokes <= par - 2) {
      return "Eagle"; 
  } else if (strokes == par - 1) {
      return "Birdie";
  } else if (strokes == par) {
      return "Par";
  } else if (strokes == par + 1) {
      return "Bogey";
  } else if (strokes == par + 2) {
      return "Double Bogey"
  } else if (strokes >= par + 3) {
      return "Go Home!";
  } else {
    return "Change Me";
  }
}

golfScore(5, 4);

// Switch Statement

function caseInSwitch(val) {
  var answer = "";

  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

caseInSwitch(1);

// Combined Switch Statement

function sequentialSizes(val) {
  var answer = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }
  return answer;
}

sequentialSizes(1);

// Counting Cards Game

var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--
      break;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
    
cc(2); cc(3); cc(7); cc('K'); cc('A');


// Using dot-notation on Objects
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;    

// Using objects instead of case/switch
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank",
    " ":undefined,
  };
  return lookup[val];
}

phoneticLookup("charlie");

// Checking if Property exists on object
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

// Complex Objects

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Dizzie Rascal",
    "title": "Bow E3",
    "release_year": 2019,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
  }
];


// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// JSON-type object updating
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
  function updateRecords(object, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && object[id].hasOwnProperty("tracks") !== true) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');      

// While Loops

var myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i)
  i--;
}

// For Looping
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Nested Arrays
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

// Do...While Loop
var myArray = [];
var i = 10;

  do {
    myArray.push(i);
    i++;
  } while (i < 5) {
}

// Recursion in JS

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n-1) + arr[n - 1];
  }
}

// Lookup Profile

// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
for (let x = 0; x < contacts.length; x++) {
  if (contacts[x].firstName === name) {
    if (contacts[x].hasOwnProperty(prop)) {
      return contacts[x][prop];
    } else {
      return "No such property";
    }
  }
}
return "No such contact";
}

lookUpProfile("Akira", "likes");

// Using Math functions
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// Calculating within range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

// Using parseInt()
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// Using a radix in ParseInt()
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

// Using a ternary operator

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

// Multiple ternary operators
function checkSign(num) {
  return (num == 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);

// Recursively counting down
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArr = countdown(n - 1);
    countArr.unshift(n);
    return countArr;
  }
}

console.log(countdown(5));

// Recursive range of numbers function
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}