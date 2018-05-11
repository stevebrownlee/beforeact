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

module.exports = Highlighter
