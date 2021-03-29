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
