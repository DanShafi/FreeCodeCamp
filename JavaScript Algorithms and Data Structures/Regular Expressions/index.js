// Using .test() method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Multi-pattern match
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);