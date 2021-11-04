require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('6182a21a5461aa958933d53c').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})