require('../src/db/mongoose')
const User = require('../src/models/user')

// 6180233f36d45286ef4e49e5

User.findByIdAndUpdate('61817c28604eeb705fe36bf3', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})