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

// Using character classes
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

// Using the - character
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi
let result = quoteSample.match(alphabetRegex);

// Using both number and letter ranges
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

// Match characters not specified
let quoteSample = "3 blind mice.";
let myRegex = /[^3aeiou]/gi; 
let result = quoteSample.match(myRegex); 

// Using the + sign
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

// Using lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);