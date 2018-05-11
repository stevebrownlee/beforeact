const decorator = () => {
    const _result = Symbol()
    const _private = new Map()
    _private.set(_result, {})

    const decorate = Object.create(null, {
        init: {
            value: function (obj) {
                _private.set(_private.get(_result), obj)
                return this
            }
        },
        with: {
            value: function (decoration) {
                _private.set(Object.assign(_private.get(_result), decoration))
                return this
            }
        },
        done: {
            value: function () {
                return _private.get(_result)
            }
        }
    })

    return decorate
}

module.exports = decorator
