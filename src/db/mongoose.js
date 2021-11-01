const validator = require('validator')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate(pw) {
            if (pw.toLowerCase().includes('password')) {
                throw new Error('password cannot contain "password"')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//     name: ' Abhinav ',
//     email: 'ABHI@abhi.COM',
//     password: 'PassWord123'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

const Task = mongoose.model('Task', {
    desc: {
        type: String,
        trim: true,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,

    }
})


const task1 = new Task({
    desc: ' This is a task description ',
})

task1.save().then(() => {
    console.log(task1)
}).catch((error) => {
    console.log(error)
})