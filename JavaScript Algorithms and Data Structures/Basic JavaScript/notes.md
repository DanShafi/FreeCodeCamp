**General Syntax**

-   We use `//` to make an inline comment and `/* */` to create a multi-line comment.

**Variables**

-   Eight different data types include:
    1. `undefined`
    2. `null`
    3. `boolean`
    4. `string`
    5. `symbol`
    6. `bigint`
    7. `number`
    8. `object`
-   Unlike Java, JavaScript is **dynamically typed** i.e variable types are checked during run-time and don't need to be explicitly typed.
-   Variables are similar to x & y variables in Maths. It allows computers to store and manipulate data by pointing a reference to the data.
-   Variables in JS can start with numbers, letters `$` and `_` but cannot container spaces or start with a number.
-   If you create variables that rely on the result of a calculation to produce a value, this calculation will occur first prior to assignment.
-   Declared variables have an initial value of `undefined`.
-   Variables are case sensitive meaning `myVar`, `myVAR` and `MYVAR` are all three different and independent variables.
-   Booleans are either true or false. They represent binary 0 or 1.

**Arithmetic Operations**

-   Incrementing can be done using the `++` operator. `i++` is the equivalent of `i = i + 1`.
-   We can intialise a floating-point value to a variable dynamically.
-   The `%` operator gives the remainder of the division of two numbers. Tip: The remainder operator is often incorrectly referred to as a the modulus operator, it is similar but does not work properly with negative number

**Operators**

-   `+=` conducts a mathematical operation and resassignment of a variable in one step.
-   `-=` does the same thing but for subtraction.
-   `*=` is the same for multiplication.
-   `/=` for division.
-

**Strings**

-   `" "` is a _string literal_. It is a series of zero or more characters in single or double quotes.
-   Use `\` to escape literal quotes in strings.
-   We can use single quotes if we plan to use double quotes in our string literal.
-   A list of string escape sequences:

```jsx
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
```

-   The `+` operator for a `string` value is a _concatenation operator._ You can join strings using this method.
-   We can use `+=` to concatenate a string onto the end of an existing string variable.
-   Find the length of a string using the `.length` property.
-   `string` in JS are **immutable**. We cannot use bracket notation or another method to change a declared string in a variable, only re-assign it.
-   Bracket notation is a way to get a character at a specific index in a string.
-   Use `[var.length - 1]` to find the last character in a string or to work your way back.

**Arrays**

-   JS arrays can store different data types in one array.
-   `[["Bulls", 23], ["White Sox", 45]]` - an example of a multidimensional array.
-   We can use the same array index
-   We can use bracket notation to modify array indexes, unlike strings, arrays **are** mutable.
-   Use the `push()` function to append data to the **end of an array**.
-   `pop()` will **delete** the value at the end of the array.
-   `shift()` lets you remove the first element in an array.
-   `unshift()` **adds** an element to the beginning of the array.

**Functions**

-   Call or invoke a function by using its name followed by parentheses i.e. `functionName();`
-   _Parameters_ are variables that act as placeholders for the values are to be input to a function when called. When values are called, this params are then known as **arguments**.
-   Variables declared in a function have **\*local scope**.\*
-   You can have local and global variables with the same name, however **the local variable takes precedence the global** if you do this.
-   We use a `return` statement to send a value **back** out of a function.
-   If a function outputs an `undefined` and you're expecting a value, it's most likely because there is no `return` statement.

**Conditional Logic**

-   `if` statements make decisions and logic in code. `if` tells JS to execute the code under certain conditions. These conditions are `boolean` values. When the condition is `true`, the statement executes, when `false` it does not.
-   We use the `==` equality operator which returns `true` if both values are equivalent and `false` when not.
-   JS evaluates equalities using **type coercion** i.e. converts each data type to one another to evaluate if they are the same i.e. `1` and `"1"`.
-   `===` also known as **strict equality** does not perform type coercion. It will only evaluate the same data type and value to true.
-   `!=` is the opposite of the equality operator. It means its **not equal**, returning `false`.
-   `!==` strictly inequality operator is the logical opposite, meaning strictly not equal.
-   `>` greater than operator. `>=` is greater or equal then.
-   `<` less than operator. `<=` less than or equal then.
-   `&&` returns true if **both** operands are true.
-   The logical `||`operator returns true if either operand is true.
-
