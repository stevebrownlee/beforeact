/* eslint no-undef: "off" */
const Title = h1("Letters from a Stoic")

/**
 * Object with an init() factory function that returns a new object with
 * onmouseout and onmouseover (enumerable) methods to be added to any
 * component.
 *
 * Used for concatenative inheritance (a.k.a composition)
 */
const Highlighter = Object.create(null, {
    init: {
        value: function (highlightClass) {

            // Return an object with mouse event handlers to add/remove CSS class
            return Object.create(null, {
                onmouseout: {
                    value: function () {
                        this.classList.remove(highlightClass)
                    },
                    enumerable: true
                },
                onmouseover: {
                    value: function () {
                        this.classList.add(highlightClass)
                    },
                    enumerable: true
                }
            })
        }
    }
})

/*
* If the second argument is an HTMLElement, it will
* be appended as a child of the containing element
*
* This example uses composition to include mouse event handlers
*/
const ArticleHeader = header(
    Object.assign({ className: "article__header" }, Highlighter.init("highlight--goldenrod")),
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
 * one for each key on the JuanRodriguezPatient object.
 */
const PatientProperties = div({},
    Object.keys(JuanRodriguezPatient)
          .map(key => {
              return section({}, `${key}: ${JuanRodriguezPatient[key]}`)
          })
)

/**
 * Build an <article> component, and specify the PatientProperties
 * component as it's child
 */
const Juan = article({
    id: "juan",
    className: "patientDetails"
}, PatientProperties)


/**
 * Build a <div> component with an <h1> element as its child
 */
const Header = div({
    className: "patientHeader"
}, h1("Patients"))

/**
 * Build a Page component and specify two children:
 *    1. Header
 *    2. Juan
 *
 * They will be siblings to each other
 */
const Page = article({ className: "container patientList"}, Header, Juan)


/**
 * Render the Page component to a specific DOM element
 */
factory.render("#array-components", Page)



// Render an inline-defined component
factory.render("#inline-dom",
    article({ className: "article"},
        section({ className: "title"},
            h1("Music")
        ),
        section({ className: "list"},
            p("Sharp Dressed Man"),
            p("Sir Duke"),
            p("Jesus Just Left Chicago")
        )
    )
)
