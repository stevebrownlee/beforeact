const ComponentFactory = () => { /* eslint no-unused-vars: "off" */
    return Object.create(null, {
        "build": {
            value: function (type, attributes, ...children) {
                const element = Object.assign(document.createElement(type), attributes)

                /*
                    If `attributes` is just a string, it's a simple element with no
                    properties - just some text content
                */
                if (typeof attributes === 'string') {
                    element.textContent = attributes
                    return element
                }
                /**
                  Using the spread operator turns all arguments after the 2nd
                  into an iterable collection, whether nothing was passed in...

                  div({ className: "list" })

                  ...or text content

                  section({ className: "title" }, "<h1>Movie Application</h1>")

                  ...or an HTML element

                  article({}, Patient)

                  ...or comma-separated, sibling HTML elements

                  article({}, Patient, MedicalHistory)

                  ...or an array of elements

                  p({ className: "list musicList"}, [Song1, Song2, Song3])
                 */
                if (children.length) {
                    children.forEach(child => {
                        // One HTMLElement was passed in
                        if (child instanceof window.Element) {
                            element.appendChild(child)

                        // An array of elements was passed in
                        } else if (Array.isArray(child)) {
                            child.forEach(c => element.appendChild(c))

                        // String value was passed in, set text content
                        } else {
                            element.textContent = child
                        }
                    })
                }

                return element
            }
        },
        "render": {
            value: (container, element) => {
                const fragment = document.createDocumentFragment()
                fragment.appendChild(element)
                document.querySelector(container).appendChild(fragment)
            }
        }
    })
}
