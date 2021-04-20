// Using .test() method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Multi-pattern match
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// Using the i flag
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

// Using the .match() method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/
let result = extractStr.match(codingRegex);

// Using multiple flags
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

// Using a wildcard character
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

