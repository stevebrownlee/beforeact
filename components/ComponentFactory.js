const ComponentFactory = () => { /* eslint no-unused-vars: "off" */
    return Object.create(null, {
        "build": {
            value: function (type, attributes, ...children) {
                let element = document.createElement(type)

                /*
                    If `attributes` is just a string, it's a simple element with no
                    properties - just some text content
                */
                if (typeof attributes === "string") {
                    element.textContent = attributes
                    return element
                } else if (typeof attributes === "object") {
                    element = Object.assign(element, attributes)
                }

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
