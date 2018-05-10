const _result = Symbol()
const _private = new Map()
_private.set(_result, {})

const decorate = Object.create(null, {
    init: {
        value: function (obj) {
            this._ = obj
            return this
        }
    },
    with: {
        value: function (decoration) {
            this._ = Object.assign(this._, decoration)
            return this
        }
    },
    done: {
        value: function () {
            return this._
        }
    }
})

module.exports = decorate
