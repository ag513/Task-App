
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database')
    }

    const db = client.db(databaseName)
    db.collection('users').insertOne({
        _id:id,
        name:'Shetty',
        age:25
    },(error,result)=>{
        if(error){
            return console.log('unable to add user')
        }
        console.log(result.insertedId)
    })

    // db.collection('users').insertMany([
    //     {
    //         name:'Abhinav',
    //         age:26
    //     },
    //     {
    //         name:'Gunishetty',
    //         age:27
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         console.log('Unable to add')
    //     }
    //     console.log(result.insertedIds)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         desc: 'THis is task1',
    //         status: true
    //     },
    //     {
    //         desc: 'THis is task2',
    //         status: false
    //     },
    //     {
    //         desc: 'THis is task3',
    //         status: true
    //     },

    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to add')
    //     }
    //     console.log(result.insertedIds)
    // })





})
