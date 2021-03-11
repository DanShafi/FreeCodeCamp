**Visually Impaired Accessibility**

-   `alt` attribute on an `img` tag is used to describe the content of the image and provides a text-alternative.
-   Use appropriate heading tags to give _semantic meaning_. Start from h1 and work down the tags.

**Screen-Reader Friendly**

-   There should only be one `main` per page. This allows assistive tech to 'jump to main content'.
-   `article` is a new HTML5 element that adds semantic meaning to markup. It is a sectioning element.
-   `section` is used for grouping thematically related content.
-   `header` adds semantic meaning and improves accessibility. It wraps intro information. Also assists with the `main` by telling assistive tech where to jump to.
-   `nav` wraps around the main navigation links in your page.
-   `audio` gives semantic meaning when it wraps around sound or audio streams. `audio` also supports the `controls` attribute showing default buttons supported by keyboard.

```html
<audio id="meowClip" controls>
    <source src="audio/meow.mp3" type="audio/mpeg" />
    <source src="audio/meow.ogg" type="audio/ogg" />
</audio>
```

-   `figure` along with `figcaption` visually wraps representations along with a caption i.e. an image, diagram etc.

```html
<figure>
    <img
        src="roundhouseDestruction.jpeg"
        alt="Photo of Camper Cat executing a roundhouse kick"
    />
    <br />
    <figcaption>
        Master Camper Cat demonstrates proper form of a roundhouse kick.
    </figcaption>
</figure>
```

**Form Field Accessibility**

-   `label` tag wraps text for a specific form control. This ties meaning to the item and makes the form more readable.
-   Value of the `for` must be the same as the `id`.
-   `fieldset` surrounds the entire group of radio buttons. It uses a `legend` tag to provide a description for the grouping which is read by screen readers.
-
