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
-
