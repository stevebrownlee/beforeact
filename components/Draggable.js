/**
 * Object with an init() factory function that returns a new object with
 * onclick method to be added to any component.
 *
 * Used for concatenative inheritance (a.k.a composition)
 */
const Draggable = Object.create(null, {
    init: {
        value: function (selector) {
            return Object.create(null, {
                draggable: {
                    enumerable: true,
                    value: true
                },
                ondragstart: {
                    enumerable: true,
                    value: function (e) {
                        if (selector === "id") {
                            e.dataTransfer.setData("text", e.target.id)
                        } else if (selector === "class") {
                            e.dataTransfer.setData("text", [...e.target.classList].join(" "))
                        }
                    }
                }
            })
        }
    }
})
