**Styling**

-   We use the `style="color: color;"` syntax when using HTML inline style declarations.
-   It's good practice to end inline style decorations with a `;`.
-   In an external CSS file, we can style an entire element by ID, Class or Element using the `{}` block.
-   Classes are reusable in HTML elements, ID's are specific.
-   For Classes, we define a specific CSS property in this way:

```html
<style>
    .red-text {
        color: red;
    }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
    <p>Click here to view more <a href="#">cat photos</a>.</p>
</main>
```

-   We can add multiple classes to an element but appending it to the previous, no commas.

**Fonts**

-   Font size is controlled by the `font-size` CSS property.
-   When importing external font families, place the external API in the `head`. Remember to always apply a _fallback_ font, after the imported font.
-   Font names with spaces in them need to be in quotes.

**Borders**

-   CSS borders have `style`, `color` and `width` properties.
-   `border-radius` can achieve rounded corners in CSS. This can be either in pixels or percentages.

**ID Attribute**

-   ID's are unique to an element.
-   ID's have a higher specificity (importance) than a class, so if both are applied to the same element and have conflicting styles, the ID style will be applied.

**Padding**

-   All HTML elements are essentially little rectangles.
-   Properties that control the space are `padding`, `border` and `margin`.
-   `padding` - controls the amount of space between the elements content and its `border`.
-   `margin` - controls the amount of space between an elements `border` and surrounding elements.
-   If you set an element's `margin` to a negative value, the element will grow larger.
-   You can use `padding-direction(top,bottom,left,right)` and `margin-direction(top,bottom,left,right)`
-   Easier to use: `margin: 40px 20px 20px 40px;` which is top, right, bottom, left. This is known as clockwise notation.

**Attribute Selectors**

-   `[attr=value]` can be used to match styles with a specific attribute value. For example:

```css
[type="radio"] {
    margin: 20px 0px 20px 0px;
}
```

**Unit Measurements**

-   Absolute measurements tie in with physical units of length i.e `in` and `mm`.
-   Relative units such as `em` or `rem` are relative to another length value.

**CSS Inheritance**

-   Every HTML has a `body` element and in CSS inheritance, every element in the body will _inherit_ the styles of the body if not declared otherwise.
-   If we have an element that has multiple classes, the overriding styles will come from the last declared class in the CSS or `<style>` tag, **not** the order it is declared in the element.
-   Browsers read CSS from top-to-bottom.
-   ID attributes will always take precedence over class declarations, no matter the order.
-   Inline styles override `<style>` and CSS files.
-   Override all other styles by using `!important`. These may be used when an imported CSS library accidentally overrides our own declared CSS styles.

**Colouring**

-   We can use hexadecimal units to declare colours for RGB selections. These use 6 digits.
-   We can also use abbreviated hex codes to 3 digits, reducing us to a total of 4000 colours.
-   Another way is to use RGB values such as `rgb(255,255,255)`.

**CSS Variables**

-   A method to change many CSS style properties at once by changing one value.
-   Syntax for a CSS variable is: `--penguin-skin: gray;` We then pass the variable name as a value to an attribute.
-   We do this using this syntax: `background: var(--penguin-skin);`
-   We can add a fallback value by appending it to the end of our variable value i.e. `background: var(--penguin-skin, black);`
-   We can inherit CSS variables if we place them in a `:root{}` block. This is a _psuedo-class_ selector that matches the root element. These variables are then available globally in scope.

**Fallbacks**

-   IE does not support CSS variables, so we have to take that into account and implement fallbacks.
-   For example, a spelling mistake for a variable could render every selector with that variable useless, hence the fallback.

**Media Query**

-   A media query measures a breakpoint. We can apply different styles at different breakpoints for a more responsive website.
-   We override global variables in this way:

```css
:root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
}

@media (max-width: 350px) {
    :root {
        /* Only change code below this line */
        --penguin-size: 200px;
        --penguin-skin: black;
        /* Only change code above this line */
    }
}
```
