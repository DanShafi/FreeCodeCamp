**Variable Keywords**

-   Biggest issue with the `var` keyword is that you can actually overwrite variable declarations without an error i.e. `var a = "Apple"` and `var a = "Banana"` will be overwritten without any issue.
-   `let` replaces var to override this error-causing bug.
-   We can use `"use strict"` which enables Strict Mode, catching common coding mistakes and unsafe actions.
-   The `let` keyword scoping is only limited to the declared block, statement or expression whereas `var` can be declared globally or locally in an entire function.
-   `const` in ES6 are variables that are **read-only.** They are a constant value and once assigned, cannot be reassigned.
-   It is common practice to use uppercase variable identifiers for _immutable_ values i.e. `const FAVE_PET`.

**Object Mutation**

-   Using a `const` keyword does not make a variable immutable, we can still change the values. We just cannot **reassign** the variable identifier.
-   `const` does not always protect data from mutation. We can use `Object.freeze()` to prevent data mutation. Once this has been applied, we can no long mutate any values for this const.

**Functions**

-   ES6 allows us to create **arrow functions** - inline functions that don't require the name `function` and uses the _fat arrow_ to return a value without the need for a `return` keyword. For example:

```jsx
// Standard Function

function todayDate() {
    const dateNow = new Date();
    return dateNow;
}

// ES6 Arrow Function

const dateNow = () => new Date();
```

-   We can also write arrow functions with params. If a function has a single param, we can omit the parentheses like so: `const myFunc = item => item * 2;`
-   ES6 allows us for default param arguments, so that if an argument isn't passed by the user, it falls back to a default value defined in the function head.

    -   The _rest parameter_ in ES6 functions allow you to create functions that take in a variable number of arguments. The arguments are then stored in an **array** that can be accessed later. The syntax passed in is `(...args)`. An example is:

    ```jsx
    function howMany(...args) {
        return "You have passed " + args.length + " arguments.";
    }
    console.log(howMany(0, 1, 2));
    console.log(howMany("string", null, [1, 2, 3], {}));
    ```

-   The _spread operator_ works by **unpacking** an array as a variable. It takes in an array as an argument, spreads it so we can unpack values from it. The syntax is the same as the _rest operator_ but instead of using it as a function argument, we can assign it to any variable.

**Destructuring**

-   Destructuring means neatly assigning values directly from an object. For example, this syntax: `const { name, age } = user;` would allow us to use `user.name` and `user.age`. This is the same as using:

```jsx
const user = { name: "John Doe", age: 34 };

const name = user.name;
const age = user.age;
```

-   We can also use destructuring to assign variables from the object. For example, we can create a variable and it's value can be an object's key value. The syntax for this would be: `const { name: userName, age: userAge } = user;`. We have now assigned `userName` and `userAge` to that objects key value.
-   We can do the same for nested objects, instead the syntax will be: `const { johnDoe: { age, email }} = user;` and assigning them to variables will be: `const { johnDoe: { age: userAge, email: userEmail }} = user;`
-   For array destructuring, the variable we create represents the first index of the array and so on. If we want to reach a desired number in an array, we place commas to indicate the start index comma to the desired end index we want to evaluate. For example:

```jsx
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1,2

const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1,2,5
```

-   In this example below, we are destructing an array using the spread operator to omit the two first values in an array, copy the original array and then assign this to a new variable:

```jsx
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [, , ...arr] = list; // When making ...arr, we are creating a const variable.
    return arr;
}
const arr = removeFirstTwo(source);
```

**Literals**

-   A new ES6 feature is the _template literal_. It allows us to create complex strings such as multi-line and **string interpolation** to import values. For template literal strings, we use ```` backticks. This tells JS that we are going to use interpolation.
-   Instead of directly adding a variable using the concat operator, we can use string interpolation syntax `${var}` to directly reference a variable.
-   We can use template literals to create a list element `li` into an array of strings, like so:

```jsx
[
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>',
];
```

-   We can also use the object literal shorthand in ES6 to keep our code DRY. For example:

```jsx
const createPerson = (name, age, gender) => {
	return {
		name: name;
		age: age;
		gender: gender;
	}
};

// In ES6, we can use shorthand to make this shorter:

const createPerson = (name, age, gender) => {
    return ({ name, age, gender });
  };
```

**Class**

-   Unlike in Java or Ruby, the `class` keyword in ES6 is just syntax and is not a fully-fledged class implementation system. In ES5, we would create a `constructor` function and then instantiate object using the `new` keyword.
-   In ES6, we remove the function altogether, declare a class and add a constructor function using the keyword `constructor`. Example:

    ```jsx
    // ES5 Class

    var SpaceShuttle = function (targetPlanet) {
        this.targetPlanet = targetPlanet;
    };
    var zeus = new SpaceShuttle("Jupiter");

    // ES6 Class

    class SpaceShuttle {
        // using class
        constructor(targetPlanet) {
            // using constructor keyword
            this.targetPlanet = targetPlanet;
        }
    }
    const zeus = new SpaceShuttle("Jupiter");
    ```

-   By convention, we should use camelCase for class names.

**Objects**

-   Obtaining and setting values of a property in an object is called **getters & setters**.
-   A getter function allows us to get the value of an objects **private** variable without the user directly accessing the private variable.
-   A setter function are meant to modify the value of an objects private variable based on the value _passed in to the setter function_. This could be calculations or complete overwriting of the previous value completely.
-   It is convention to use `._variable` to declare that a variable is _private_. However, this practice itself **does not** make a variable private.

**Import/Export**

-   We can export and import **modules** in ES6 which allow us to use the functionality of a specific file in another file.
-   We can export modules like this:

    ```jsx
    export const add = (x, y) => {
        return x + y;
    };

    // Another way to achieve this

    const add = (x, y) => {
        return x + y;
    };

    export { add };
    ```

-   We can export multiple variables or functions by either using the `export` prefix to a function or variable or collect all the names of things we want to export at the end of the script.
-   Import works in the same way, although we append this to the top of the file. We import what variable we want and use the `from` keyword to reference the file we are calling i.e. `import { add, subtract } from './math_functions.js';`

**Promise**

-   A _promise_ is a **constructor function** so you need to use the `new` keyword to create one. It's function serves to either fulfil or reject a promise, asynchronously.
-   A promise takes a function as its argument with two params `resolve` and `reject`.
-   The syntax for a Promise is as such:

```jsx
const myPromise = new Promise((resolve, reject) => {});
```

-   A promise has three states: `pending`, `fulfilled` and `rejected`.

```jsx
// A Promise example

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

-   Promises are most useful when a process takes an unknown amount of time. We can use the `then` method which executes immediately after the promise has been executed. This can be the intended action required from the programme depending on the promise outcome.

```jsx
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then((result) => {
    console.log(result);
});
```

-   `catch` is used when a promise has been rejected. It too is also executed immediately after the promise has executed. The syntax for this is:

```jsx
myPromise.catch((error) => {});
```
