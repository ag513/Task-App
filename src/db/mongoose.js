const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// const me = new User({
//     name: 'Abhinav',
//     age: 'Abhi'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

const Task = mongoose.model('Task', {
    desc: {
        type: String
    },
    completed: {
        type: Boolean
    }
})


const task1 = new Task({
    desc: 'This is a task description',
    completed: false
})

task1.save().then(() => {
    console.log(task1)
}).catch((error) => {
    console.log(error)
})