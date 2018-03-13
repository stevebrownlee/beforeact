/* eslint no-undef: "off" */
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
factory.render("#simple-components", Article)




const PatientProperties = div({},
    Object.keys(JuanRodriguezPatient)
          .map(key => {
              return section({}, `${key}: ${JuanRodriguezPatient[key]}`)
          })
)

const Juan = article({
    id: "juan",
    className: "patientDetails"
}, PatientProperties)

const Header = div({
    className: "patientHeader"
}, h1("Patients"))

const Page = article({ className: "container patientList"}, Header, Juan)

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
