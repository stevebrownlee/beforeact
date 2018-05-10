/**
 * Object with an init() factory function that returns a new object with
 * onclick method to be added to any component.
 *
 * Used for concatenative inheritance (a.k.a composition)
 */
const Droppable = Object.create(null, {
    init: {
        value: function (fn) {
            return Object.create(null, {
                ondrop: {
                    enumerable: true,
                    value: e => {
                        e.preventDefault()
                        const data = e.dataTransfer.getData("text")
                        const source = document.getElementById(data) || document.getElementsByClassName(data)[0]
                        e.target.appendChild(source)
                    }
                },
                ondragover: {
                    enumerable: true,
                    value: e => e.preventDefault()
                }
            })
        }
    }
})
