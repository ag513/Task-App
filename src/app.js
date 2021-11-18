const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
//const port = process.env.PORT


// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('cannot access GET requests')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send("Site is under maintenance, we'll get back soon!")
// })

// Incoming request to JSON
app.use(express.json())


app.use(userRouter)
app.use(taskRouter)


module.exports = app