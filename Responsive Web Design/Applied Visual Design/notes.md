**Text**

-   `text-align: justify;` aligns all lines of text except the last line to meet the left and right edges of the line box.
-   Use `<strong>` tags to make text bold. Wrap around certain words or whole `<p>`
-   `u` underlines text.
-   `em` emphasises text.
-   `text-transform` property can change appearance of text in CSS.

**Box-Shadow**

-   `box-shadow` applies one or more shadows to an element.
-   These are the property values for box-shadow:
    -   `offset-x` - how far to push the shadow horizontally from element.
    -   `offset-y` - how far to push the shadow vertically from element.
    -   `blur-radius`, `spread-radius` and `color` in that order.
-   You can create multiple box shadows using commas as separate properties.

```css
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
```

**Psuedo-Classes**

-   A psuedo class is a keyword that can be added to selectors in order to select a **specific** state of the element.
-   `::before` allows us to add something before the element.
-   `::after` allows us to add something after the element.
-   In the order for the two above to work, they must have a defined `content` property. When using `::before` or `::after`, we set this to an empty string `"".`

**CSS Box-Model**

-   CSS treats each HTML element as its own box.
-   Default layout of elements is called 'normal flow', but CSS `position` can change this flow.
-   `relative` allows you to move it _relative_ to its current position in the **normal flow**. This means move it **away** from where it's normally placed.
-   Relative change does not remove it from the normal flow. Other elements still behave as if the item is in its default position.
-   We can use offsets such as `top`, `bottom`, `left` and `right`. When we declare this, the item will move the **opposite \*\***of the offset.
-   `absolute` locks in the element in place relative to its parent. This **removes** the element from the normal flow.
-   `fixed` is a type of absolute. A fixed position won't move when the user scrolls.

```css
/* An example of affixing a fixed-sticky top navbar */

#navbar {
    position: fixed;
    top: 0;
    left: 0;
}
```

-   `float` are removed from the normal flow of the document and either push to the left or right to their containing parent element.
-   `z-index` can specify the order of how elements are stacked on top of another. They must be an integer. The higher the number, the higher in the stack they will be i.e. most forward.
-   `margin: auto` can usually center an element horizontally.

**Colour**

-   We can use `hsl(240, 100%, 50%)` which stands for hue, saturation and light.
-   `linear-gradient()` function allows us to create colour transitions. The general syntax for this is: `background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);`
-   We can specify this gradient direction using a degree i.e. `90deg`, `45deg` etc.

```css
/* Very nice background effect */

div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
}
```

-   `background` supports the `url()` function. We can reference a weblink to an image and use that as a background property.

**Transform**

-   The `transform` property along with its `scale()` function can change the scale of an element.
-   `transform: skewX()` and `skewY()` allow you to manipulate the skew of elements horizontally or vertically.

**Animation**

-   `@keyframes` control what happens during an animation.
-   In total there are eight animation properties in total.
-   `animation-name` sets the name of the animation which the `@keyframes` references.
-   `animation-duration` is self-explanatory.

```css
#anim {
    animation-name: colorful;
    animation-duration: 3s;
}

@keyframes colorful {
    0% {
        background-color: blue;
    }
    100% {
        background-color: yellow;
    }
}
```

-   `animation-fill-mode: forwards;` specifies the style applied to an element when the animation has finished. This stops it from resetting.
-   `animation-iteration-count` allows you to control how many times you would like the animation to run. You can use `infinite`.
-   `animation-timing-function` controls how quickly an animated element changes over the duration of an animation. Keywords include `ease-out`, `ease-in` etc.
-   Bezier curves use `cubic-bezier` function. These curves live on a 1x1 coordinate and use the X and Y-axis, with anchor points. Example: `animation-duration: 1s;`
-
