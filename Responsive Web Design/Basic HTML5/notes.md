**Accessibility**

-   Comments in HTML begin with `<!--` and end with `-->`
-   HTML5 introduces the following descriptive tags: `main, header, footer, nav, video, article, section`.
-   Descriptive HMTL tags also help with SEO and accessibility.
-   `main` helps search engines and devs find the main content.

**Imaging and Linking**

-   `<img src="https://www.freecatphotoapp.com/your-image.jpg">` - example of an image tag.
-   A `a` anchor tag links to external content. They also need a `href`. `<a href="https://freecodecamp.org">this links to freecodecamp.org</a>.`
-   To link internally, you need to assign the href to `#element-name` and then attribute that `id` to the element.
-   You can use `#` to add a dead link to an element which you can change later.

**Lists**

-   Unordered lists start with `<ul>` followed by a number of `<li>` elements. This creates a _bulleted list._
-   An ordered list starts with `<ol`

**Input**

-   The `input` element allows us to ask for input from the user.
-   We can do this by creating a `<input type ="text">`. This element is self closing.
-   A `placeholder` can be placed in between `input` elements.

**Web Forms**

-   We use the `form` element and can specify an `action` attribute that submits data to a server using nothing but HTML.

```html
<form action="/url-where-you-want-to-submit-form-data">
    <input />
</form>
```

-   We can add a `submit` button to our form. This button will send data to the form action URL in your `form` element. This will be a `<button>` element.
-   For example: `<button type="submit">Submit</button>`
-   We can use the `required` attribute within our `input` element to prevent a submission without a specific field being completed. `<input type="text" required>.`

**Form Buttons**

-   We can use _radio buttons_ for multiple choice questions where we want a single answer.
-   Radio buttons are a type of `input`. Each button can be nested within its own `label` element which we can nest an `input` element in. All related radio buttons should share the same `name` attribute to create a radio button group.
-   Best practice to set a `for` attribute on a label that matches the value of the `id` attribute of the `input` element. This is for accessibility and assistive tech.

```html
<label for="indoor">
    <input id="indoor" type="radio" name="indoor-outdoor" />Indoor
</label>
```

-   Forms use checkboxes that may have more than one answer.
-   Checkboxes are a type of `input`.
-   Similar to radio buttons, these can also be wrapped and nested in a `label` element, which will associate all checkboxes together.

```html
<label for="loving">
    <input id="loving" type="checkbox" name="personality" />Loving
</label>
```

-   We use the `value` attribute because when we submit data to the server, radio and checkboxes report their values from this attribute. When submitted, the server will read this formula `name=value`. If we don't add a value, the server will just read the default value of `on` if an input type was selected which is not useful.
-   Use the `checked` attribute to check a checkbox or radio button by default.

**General HTML**

-   `div` element or "division element" is a general purpose container for other elements.
-   Every HTML document needs to be declared using the `DOCTYPE` attribute which tells the browser which version of HTML it needs to run. We then nest `<html>` elements and wrap all the content in this.

```html
<!DOCTYPE html>
<html>
    <h1>Hello World!</h1>
</html>
```

-   Other elements for the `<html>` document includes `head, body, link, meta, title, style`. The latter four tend to go into the head as a metadata.
