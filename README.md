# Let's Create a Magic Holiday Card!

Today we want to learn more about how we can build a magical holiday card using **HTML**, **CSS** and **JavaScript**.
Since we only have a limited time frame to build the card, there are already some stylings that we have prepared. The basic structure of the HTML is also there and all the logic we need for our magic is there too. ✨

Nevertheless, there will be enough options for you to customize your magical card. :)

## Guide

Starting off with the blank project, let's explain the structure and what we're about to build.

```
├── README.md // you're here
├── images // the images we're going to pick from, unless you want to upload your own. that image should also go here.
│   ├── picture.jpg
│   ├── picture.jpg
│   ├── picture.jpg
│   ├── ...
├── index.html // our landing page
├── style.css // all your stylings go into this file
├── index.js // you can ignore this for now
│   // ignore all of these files and folders
├── package-lock.json
├── package.json
├── sandbox.config.json
└── .where-the-magic-is
```

### Semantic HTML

#### Explainer

- [Semantics](https://developer.mozilla.org/en-US/docs/Glossary/semantics)
- [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
- [order of headlines](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#accessibility_concerns)
- [paragraphs in general](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

we want to use [landmarks](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main#landmark) like [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main#landmark) as descriptively as possible. since the card is going to be our core functionality, this will be part of our main tag.

- HTML is short for `HyperText Markup Language`.
- It is giving content on websites `meaning and structure`. You can imagine HTML as the skeleton
  or the most basic building block of the Web.

Let's analyze the word for more
clarification:

- `Hypertext`: Refers to the ability of HTML to create links that link one webpage to another. (Either on a single website or in between different websites.) This is a fundamental aspect of the web and the idea behind the "world wide" interconnection.
- `Markup Language`: Refers to a syntax that uses specific element to structure or format a document. You have already learned about a markup language, which is called "Markdown". While Markdown has a very simple syntax and is primarily used for formatting, HTML is more complex and its primarily used to structure a document.

- `HTML element`: every piece of content in a HTML document is placed inside of an HTML element
- `HTML tags`: the elements are written in form of HTML tags, meaning surrounded by `<>` and
  `</>`
- `HTML attributes`: some HTML elements need additional information in order to work properly. This information is given by HTML attributes
- `local attributes`: There are attributes that are specific to some HTML elements, for example `src`, which only makes sense if a resource is supposed to be embedded into the webpage (e.g. images or videos)
- `global attributes`: There are also attributes that can be added to any kind of element. (e.g. `class`, `id`, `style`, `hidden`)

#### The Benefits of Writing Semantic HTMl Are:

- `Accessibility`: Screenreaders can function much better with semantic HTML, which can help e.g. visually impaired users to navigate the webpage and have a better user experience
- `SEO`: It's relevant for search engines to evaluate the importance and the context of the different parts of a web page
- `Readability`: It's easier for other developers to understand your code. And also for yourself in the future!

#### Coding

Write the base structure for your magic holiday card:

```html
<main>
  <section>
    <h1>Happy Holidays!</h1>
    <h2>Liebe Sophia,</h2>
    <p>
      ich wünsche dir eine wunderbare Reise und unvergessliche Erlebnisse.
      Erhole dich gut und komm mit vielen schönen Erinnerungen zurück!
    </p>
    <p>
      Mögen deine Ferien genau das sein, was du brauchst – eine perfekte
      Mischung aus Entspannung, Abenteuer und Glücksmomenten.
    </p>
    <p>
      Alles Liebe, <br />
      Mareike
    </p>
  </section>
</main>
```

### Style Fonts with own Classes

#### Explainer

CSS means Cascading Stylesheets. While HTML defines the structure and semantics of your content, we use CSS for design and layout.

- `Selector`: A CSS selector is used to specify the elements to which CSS rules apply.
- `Property`: Name for a particular property to which a value is attributed.
- `Value`: The value we assign to a property.
- `Declaration`: Each pair of property and value is a declaration.

We only show `.class` selectors.
If the participants want to overwrite styles, they should either edit the class or write add a new one, but keep them in order of how they want the styles to be applied.

#### Coding

Recommended stylings are:

```css
.headline {
  font-family: "Allison", Geneva, Verdana, sans-serif;
  color: blue;
  font-size: 72px;
}
```

-> add headline class to HTML

### Split into two Sections

We need the predefined classes `.card`, `.front` and `.back` to be added to their respective tags in order to apply our global styles:

- `.card` gives padding, sets the size of the card and is what will be flipped
- `.front` applies basic styling and positions the front of the magic holiday card
- `.back` gets rotated and flipped to the back

```html
<main class="card">
  <section class="front">
    <h1 class="headline">Happy Holidays!</h1>
  </section>
  <section class="back">
    <h2>Liebe Sophia,</h2>
    <p>
      ich wünsche dir eine wunderbare Reise und unvergessliche Erlebnisse.
      Erhole dich gut und komm mit vielen schönen Erinnerungen zurück!
    </p>
    <p>
      Mögen deine Ferien genau das sein, was du brauchst – eine perfekte
      Mischung aus Entspannung, Abenteuer und Glücksmomenten.
    </p>
    <p>
      Alles Liebe, <br />
      Mareike
    </p>
  </section>
</main>
```

> 💡 This _hides_ the back of the card. this might be surprising but is what we want.

### Make the Turn

#### Explainer and Coding

Click around and show that nothing happens.

We need to add the turning in CSS. In combination with the magic JS, the card "turns" now.

```css
.flipcard {
  transform: rotateY(180deg);
}
```

### Add Static Image from `/images`

Add image to the end of the `.front` section. show that the order of the tags makes a significant difference.

Use one of the prepared images in `/images`.

```html
<img
  class="postcardimage"
  src="./images/snowscape-2.jpg"
  alt="magic holiday image"
/>
```

> 💡 `.postcardimage` is a prepared global class that makes the image cover the front of the card. sets `object-fit: cover`.

This is a good chance to update the color of the `.headline` and add:

```css
background-color: white;
padding-bottom: 10px;
```

You can change the style of writing and maybe also the font size:

```css
.card {
  font-family: "Handlee";
  font-size: 32px;
}
```

### Add Sparkle Effect

Last but not least, we also want to add a sparkle effect to the front side of our card. We will do this by adding a canvas element to the first section of our card.

```html
<canvas></canvas>
```

And we need to add call the function that initializes and updates the sparkle effect inside of our canvas element. We need to hand over to values: the amount of stars we want to be created and the color they should have.

```js
setupCanvas(100, "peachpuff");
```

### Keep styling

- change colors
- change images
  - upload own images to codesandbox
  - use random url `https://source.unsplash.com/random?christmas`, tell them to keep in mind that this is an external resource.
- change text shadow
- update texts, add more paragraphs
- add small image to back?

In the end, your magic holiday card could look like this:

```html
    <main class="card">
      <section class="front">
        <h1 class="headline">Happy Holidays!</h1>
        <canvas></canvas>
        <img
          class="postcardimage"
          src="./images/snowscape-2.jpg"
          alt="magic holiday image"
        />
      </section>
      <section class="back">
        <h2 class="title">Liebe Sophia,</h2>
        <p>
          ich wünsche dir eine wunderbare Reise und unvergessliche Erlebnisse.
          Erhole dich gut und komm mit vielen schönen Erinnerungen zurück!
        </p>
        <p>
          Mögen deine Ferien genau das sein, was du brauchst – eine perfekte
          Mischung aus Entspannung, Abenteuer und Glücksmomenten.
        </p>
        <p>
          Alles Liebe, <br />
          Mareike
        </p>
      </section>
    </main>
  </body>
```

## Credits

- candy-cane.jpg - Photo by <a href="https://unsplash.com/@fluffmedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Deidre Schlabs</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- candy-heart.jpg - Photo by <a href="https://unsplash.com/@lilartsy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">lilartsy</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- chamaeleon.jpg - Photo by <a href="https://unsplash.com/@bamin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pierre Bamin</a> on <a href="https://unsplash.com/photos/bearded-dragon-on-wood-FHtYFibgLq0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- cookies.jpg - Photo by <a href="https://unsplash.com/@chaseycasey?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Casey Chae</a> on <a href="https://unsplash.com/photos/brown-cookies-on-white-ceramic-plate-3DrCZblTGoQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- cozy.jpg - Photo by <a href="https://unsplash.com/@katishna?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Katie Azi</a> on <a href="https://unsplash.com/photos/white-ceramic-mug-with-brown-and-white-liquid-inside-AHIS5FUW0gk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- fireworks.jpg - Photo by <a href="https://unsplash.com/@erwanhesry?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Erwan Hesry</a> on <a href="https://unsplash.com/photos/fireworks-illustration-WPTHZkA-M4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- presents.jpg - Photo by <a href="https://unsplash.com/@tinavanhove?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tina Vanhove</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- snowscape-1.jpg - Photo by <a href="https://unsplash.com/@drosie?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Donnie Rosie</a> on <a href="https://unsplash.com/photos/trees-covered-with-snow-during-daytime-O7L3MrlSAHA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- snowscape-2.jpg - Photo by <a href="https://unsplash.com/@dnevozhai?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Denys Nevozhai</a> on <a href="https://unsplash.com/photos/low-angle-photo-of-snow-field-duo-xV0TU7s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- sparkler.jpg - Photo by <a href="https://unsplash.com/@goian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ian Schneider</a> on <a href="https://unsplash.com/photos/person-holding-fire-cracker-shallow-focus-photography-PAykYb-8Er8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- sparkles.jpg - Photo by <a href="https://unsplash.com/@besluk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Luke Besley</a> on <a href="https://unsplash.com/photos/water-droplets-on-brown-surface-Mdz-EpieP3A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- trees.jpg - Photo by <a href="https://unsplash.com/@jyrki?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jyrki Nieminen</a> on <a href="https://unsplash.com/photos/snow-covered-tall-trees-during-daytime-Oo6oR1G-zv8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
