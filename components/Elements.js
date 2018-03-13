/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */
const factory = ComponentFactory()

const div = (...props) => factory.build("div", ...props)
const article = (...props) => factory.build("article", ...props)
const section = (...props) => factory.build("section", ...props)
const p = (...props) => factory.build("p", ...props)
const h1 = (...props) => factory.build("h1", ...props)
const header = (...props) => factory.build("header", ...props)
