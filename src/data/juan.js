// NEXT STEP: Put this in factory function
// NEXT STEP: Introduce generator function for unique id/key


// Advanced object creation with control over enumerable properties
const JuanRodriguezPatient = Object.create({}, { /* eslint no-unused-vars: "off" */
    firstName: {
        value: "Juan",
        enumerable: true
    },
    lastName: {
        value: "Rodriguez",
        enumerable: true
    },
    dob: {
        value: "12/13/1985",
        enumerable: true
    },
    address: {
        value: "127.0.0.1",
        enumerable: true
    },
    gender: {
        value: "M",
        enumerable: true
    },
    fullName: {
        value: function () {
            return `${this.firstName} ${this.lastName}`
        }
    },
    age: {
        value: function () {
            const dob = new Date(this.dob)
            const yearBirth = dob.getFullYear()
            const now = new Date()
            const yearNow = now.getFullYear()

            return yearNow - yearBirth
        }
    }
})