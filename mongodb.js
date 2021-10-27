
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database')
    }

    const db = client.db(databaseName)


    db.collection('users').findOne({ _id: new ObjectID('617925d5db0b225962b6703c') }, (error, user) => {
        if (error) {
            console.log('Unable to add')
        }
        console.log(user)
    })

    db.collection('tasks').find({status:true}).toArray((error, tasks)=>{
        console.log(tasks)
    })
    db.collection('tasks').find({status:true}).count((error, count)=>{
        console.log(count)
    })



})
