# Beforeact

This repository is the end goal for VanillaJS education before students are introduced to React. It only implements a mechanism for building nested DOM elements with attributes. No state management... yet.

## Setup

1. Clone repo
1. Start `http-server` - or equivalent - in repo directory
1. Open the URL in the browser, et voilà

## Building HTMLElement Templates

Look in the `Elements.js` file and you'll see some initial templates created for you.

```js
const div = (...props) => factory.build("div", ...props)
```

Once that is initialized, you can use the `div()` function to create an actual `<div>` [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)-based component with some attributes.

```js
const SimpleContainer = div({ id="simpleContainer" })
```

Then you can render that component inside an existing DOM element that you put in your `index.html` file.

> index.html

```html
<body>
    <div id="content"></div>
    <script src="components/ComponentFactory.js"></script>
    <script src="components/Elements.js"></script>
    <script src="app.js"></script>
</body>
```

> app.js

```js
const SimpleContainer = div({ id="simpleContainer" })

factory.render("#content", SimpleContainer)
```

When you inspect the DOM, you will see the following structure.

```html
<div id="content">
    <div id="simpleContainer">
    </div>
</div>
```

### Adding Content

You can pass a second argument to `div()` to specify any text that you want in the element.

> app.js

```js
const SimpleContainer = div(
    { id="simpleContainer" },
    "It is not the man who has too little that is poor, but the one who hankers after more."
)

factory.render("#content", SimpleContainer)
```

That code will generate this DOM structure.

```html
<div id="content">
    <div id="simpleContainer">
        It is not the man who has too little that is poor, but the one who hankers after more.
    </div>
</div>
```

### Nesting Components

Let's make our simple example a tad more complex. I want to create an article component that contains a `<head>` element, which itself contains an `<h1>` element. As a sibling to `<head>`, I want a `<section>` element that contains a quote.

This is the final DOM structure that I want.

```html
<article class="article">
    <header class="article__header">
        <h1>Letters from a Stoic</h1>
    </header>
    <section class="article__section">
        It is not the man who has too little that is poor, but the one who hankers after more.
    </section>
</article>
```

Given this end goal, there are four components.

1. The containing article
1. The head component
1. The h1 component
1. The section component

Let's build each one individually.

```js
const Title = h1("Letters from a Stoic")

/*
If the second argument is an HTMLElement, it will
be appended as a child of the containing element
*/
const ArticleHeader = header(
    { className: "article__header" },
    Title
)

// This component has no children
const ArticleQuote = section(
    { className: "article__section" },
    "It is not the man who has too little that is poor, but the one who hankers after more."
)

// I can specify as many children as I want
const Article = article(
    { className: "article" },
    ArticleHeader,
    ArticleQuote
)
```

Then I can render it.

```js
factory.render("#content", Article)
```
