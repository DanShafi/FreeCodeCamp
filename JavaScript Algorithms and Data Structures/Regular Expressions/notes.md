**General**

-   Regex is used to match parts of strings. We create the patterns to help us do the matching.

**Characters**

-   We can use `alternation` or the `OR` operator: `|` to match different possibilities. For example, we can use the regex `/yes|no/` to look for both the `yes` and `no` string match. We can continue placing the `|` if we want more matches.
-   We can use the `.` dot character or **wildcard** character which will enable us to match any **one** character in a pre-determined word. This is to look for items that may be misspelled. The syntax is `/keywor./` - this will look for any words that have the letters `keywor` in them.
-   We can also use the `-` character to include number ranges. Note, the range will also count from the starting index you express. We can combine this with letters to i.e. `/[a-z0-9]/`.
-   We can use the `^` in our regex to create a set of chars that we do not want to match. This is called _negated character sets._
-   We can use the `+` sign within our regex which matches characters that occur more than one time.
-   The `*` sign helps us match characters that occur zero or more times. It will return any values that follow a similar pattern but only display up to the pattern defined.
-   We can use the `?` character to change a search to lazy matching. Unlike a _greedy match_ whereby regex will return the longest possible match part of a string, a lazy match returns whatever satisfies the regex first.

**Methods**

-   JS uses different ways to use regexes, one way is through the `.test()` method. This takes in a argument of the string and returns `true` or `false` if the pattern finds something.
-   We can use the `.match()` method to extract exact matches in a string. This would return the actual string rather than just a true or false like the `.test()` method.

**Flags**

-   If we want to match all examples of case matching in strings i.e upper and lowercase, we can use a **flag**. For this instance, we can use the `i` flag which ignores case. The syntax is: `/match/i`.
-   We can use the `g` flag to search for or extract a pattern more than once.
-   We can use multiple flags on our regex for example `/keyword/gi`.

**Classes**

-   Character classes allow us to have flexibility in our search. We define characters in `[` and `]` brackets. For example, if we want to match `bag`,`big` and `bug` but not `bog`, we can use the regex `/b[aiu]g/`. This will look for all b and g ending words that _only_ have either a,i,u in them.
-   Instead of defining each character of the alphabet, you can use the `-` character in your bracketed regex to use a range for example `[a-f]` which will only match characters from a to f in the alphabet.
-
