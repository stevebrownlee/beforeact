const { factory, div, article, section, p, h1, header } = require("./components")
const { decorate, clickable, draggable, droppable, highlighter } = require("./decorators")
const juan = require("./data/juan")

// Simple component with text content
const Title = h1("Letters from a Stoic")

/*
* If the second argument is an HTMLElement, it will
* be appended as a child of the containing element
*
*/
const NonInteractiveHeader = header(
    // Props for the <header> component
    { className: "article__header", id: "articleHeader" },

    // Title component will be a child component
    Title
)

/*
* This example uses composition to include mouse event handlers
*/
const ArticleHeader = header(
    decorate().init({ className: "article__header", id: "articleHeader" })
            .with(highlighter.init("highlight--goldenrod"))
            .with(clickable.init(function () { console.log(this.textContent) } ))
            .with(draggable.init("class"))
            .done(),
    Title
)

/**
 * This component has no children, just text content
 *
 * Directly defining mouse event handlers instead of composing
 */
const ArticleQuote = section(
    // Props for the <section> component
    {
        className: "article__section",
        onmouseover: function () {
            this.classList.add("highlight--smoke")
        },
        onmouseout: function () {
            this.classList.remove("highlight--smoke")
        }
    },
    "It is not the man who has too little that is poor, but the one who hankers after more."
)

/*
    I can specify as many children as I want for a component
*/
const Article = article(
    // Props for the <article> component
    { className: "article" },

    // Two children components
    ArticleHeader,
    ArticleQuote
)

/*
    The `render()` method on the component factory takes two arguments
        1. The existing target DOM component in which the new component
           will be rendered.
        2. The component to be rendered
*/
factory.render("#simple-components", Article)



/**
 * Build a component that has multiple <section> child components,
 * one for each key on the `juan` object.
 */
const PatientProperties = div(
    // Props for the <div> component. No specific props, so empty object.
    {},

    // Render each property of `juan` as a child <section> component
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
    /*
        Decorate the base props object with the `droppable` decoration
        so that any draggable element can be dropped in it
    */
    decorate().init({ id: "juan", className: "patientDetails" })
            .with(droppable.init())
            .done()
    ,

    // The <div> we defined above will be a child of this <article>
    PatientProperties
)


/**
 * Build a <div> component with an <h1> element as its child
 */
const Header = div(
    { className: "patientHeader" },  // Props of <div>
    h1("Patients")  // Child <h1> element of <div>
)

/**
 * Build a Page component and specify two children:
 *    1. Header
 *    2. Juan
 *
 * They will be siblings to each other
 */
const Patient = article(
    { className: "container patientList" },  // Props of <article>
    Header, Juan   // Two child components
)


/**
 * Render the Patient component to a specific DOM element
 */
factory.render("#array-components", Patient)






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
