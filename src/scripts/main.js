const { factory, div, article, section, p, h1, header } = require("./components")
const { decorate, clickable, draggable, droppable, highlighter } = require("./decorators")
const juan = require("./data/juan")

/* eslint no-undef: "off" */
const Title = h1("Letters from a Stoic")


/*
* If the second argument is an HTMLElement, it will
* be appended as a child of the containing element
*
* This example uses composition to include mouse event handlers
*/
const ArticleHeader = header(
    decorate.init({ className: "article__header", id: "articleHeader" })
            .with(highlighter.init("highlight--goldenrod"))
            .with(clickable.init(() => console.log("Hi")))
            .with(draggable.init("class"))
            .done(),
    Title
)

/**
 * This component has no children
 *
 * Directly defining mouse event handlers instead of composing
 */
const ArticleQuote = section(
    Object.assign({
        className: "article__section",
        onmouseover: function () {
            this.classList.add("highlight--smoke")
        },
        onmouseout: function () {
            this.classList.remove("highlight--smoke")
        }
    }),
    "It is not the man who has too little that is poor, but the one who hankers after more."
)

// I can specify as many children as I want for a component
const Article = article(
    { className: "article" },
    ArticleHeader,
    ArticleQuote
)
factory.render("#simple-components", Article)



/**
 * Build a component that has multiple <section> child components,
 * one for each key on the `juan` object.
 */
const PatientProperties = div({},
    Object.keys(juan)
          .map(key => {
              return section({}, `${key}: ${juan[key]}`)
          })
)

/**
 * Build an <article> component, and specify the PatientProperties
 * component as it's child
 */
const Juan = article(
    decorate.init({ id: "juan", className: "patientDetails" })
            .with(droppable.init())
            .done()
    ,
    PatientProperties
)


/**
 * Build a <div> component with an <h1> element as its child
 */
const Header = div(
    { className: "patientHeader" },
    h1("Patients")
)

/**
 * Build a Page component and specify two children:
 *    1. Header
 *    2. Juan
 *
 * They will be siblings to each other
 */
const Page = article(
    { className: "container patientList" },
    Header,
    Juan
)


/**
 * Render the Page component to a specific DOM element
 */
factory.render("#array-components", Page)



// Render an inline-defined component
factory.render("#inline-dom",
    article({ className: "article article--musicCollection"},
        header({ className: "title"},
            h1("Music")
        ),
        section({ className: "list"},
            p("Sharp Dressed Man"),
            p("Sir Duke"),
            p("Jesus Just Left Chicago")
        )
    )
)
