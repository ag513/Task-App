const express = require('express');
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3001


// Incoming request to JSON 
app.use(express.json())



app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})


app.listen(port, () => {
    console.log('server is active on ' + port)
})