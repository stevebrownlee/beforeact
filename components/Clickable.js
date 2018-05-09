/**
 * Object with an init() factory function that returns a new object with
 * onclick method to be added to any component.
 *
 * Used for concatenative inheritance (a.k.a composition)
 */
const Clickable = Object.create(null, {
    init: {
        value: function (fn) {
            return Object.create(null, {
                onclick: {
                    value: fn,
                    enumerable: true
                }
            })
        }
    }
})
