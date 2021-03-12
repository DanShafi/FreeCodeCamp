**Flex Items**

-   `display: flex` allows you to use flex properties by turning it into a flex container. This allows you to align any **children** into rows or columns.
-   `flex-direction` property attaches itself to the parent item and you can set it to row or column. We can use other options such as `flex-direction` and `row-reverse`.
-   `justify-content` allows us to align elements or fill in space remaining in the container when using flex. There are several options for this:
    1. `center` - aligns all flex items to center of flex container.
    2. `flex-start` - aligns items to start of the flex container. For a row this is to the left and for column this is to the top.
    3. `flex-end` - aligns items to the end of the flex container.
    4. `space-between` aligns items to centre of the main axis with extra space place between items.
    5. `space-around` aligns items to the main axis with a half space on either end.
    6. `space-evenly` - distributes items evenly with space.
-   `align-items` is similar to `justify-content` but instead of the main axis, `align-items` aligns to the cross-axis. For a row for example, CSS will push the items in the entire row up and down within the container. Similar to `justify-content`, the different values include `stretch` (stretching items to fill the flex container) and `baseline` aligns items to their baselines.
-   `flex-wrap` will wrap items and move them into new row or columns.
-   `flex-shrink` allows an item to shrink if the flex container is too small. This takes numeric values. If one item has a flex-shrink of 1 and the other has a value of 3 in the same container, the value of 3 will shrink 3x as much as the 1.
-   `flex-grow` is the opposite.
-   `flex-basis` property specifies the initial size of the item before adjustments can be made with `flex-shrink` and `flex-grow`. `flex-basis` uses the same size properties i.e. px,em,% but `auto` will be based on content.
-   The shorthand for all of the above is as followed: `flex: flex-grow flex-shrink flex-basis`.
-   `order` tells CSS which order the flex items appear in the container.
-   `align-self` allows you to adjust each item's alignments individually.

**CSS Grid**

-   Use `display: grid` to convert any HTML element into a grid.
-   `grid-template-columns` will add columns. For example `grid-template-columns: 50px 50px` will give your grid two columns that are 50px wide.
-   Use `grid-template-rows` to manually adjust the rows in the same way for the columns.
-   CSS grid units such as `fr` set the column or row to a fraction of the space. `auto` will adjust automatically and `%` adjusts the column or row to the percent width. For example: `grid-template-columns: auto 50px 10% 2fr 1fr;`
-   `grid-column-gap` creates an empty space in between the columns.
-   `gird-row-gap` does the same as the above.
-   `grid-gap` is shorthand - it will use the first value to set the row gap and second for column.
-   `grid-column` allows us to control the number of items an item will consume. Example `grid-column: 1 / 3`.
-   `grid-row` allows us to do the same.
-   `justify-self` aligns contents to either the `start`, `center` or `end` of the cell.
-   We can use the `repeat()` function to create ongoing rows or columns rather than manually inserting them i.e. `grid-template-rows: repeat(100, 50px);`
-   We can limit item size using the `minmax()` function. It's used to limit the size of items when the grid container changes i.e. `grid-template-columns: 100px minmax(50px, 200px);`
-   The `repeat` function also comes with an `auto-fill` option.

**Area Templates**

-   You can group cells of your grid together using `grid-template-areas`. Depending on how you've written the code (as below), it will group cells into specific areas. You can use a `.` to designate an empty property.

```css
grid-template-areas:
    "header header header"
    "advert content content"
    "footer footer footer";
```

-   To do the above, you need to give each element a reference using the `grid-area` property i.e.

```css
.item1 {
    grid-area: header;
}
```

-   If your grid does not have areas to reference, you can create one as such: `item1 { grid-area: 1/1/2/4; }.`
-
