
const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database')
    }

    const db = client.db(databaseName)


    // db.collection('users').findOne({ _id: new ObjectId('617925d5db0b225962b6703c') }, (error, user) => {
    //     if (error) {
    //         console.log('Unable to add')
    //     }
    //     console.log(user)
    // })

    // db.collection('tasks').find({status:true}).toArray((error, tasks)=>{
    //     console.log(tasks)
    // })
    // db.collection('tasks').find({status:true}).count((error, count)=>{
    //     console.log(count)
    // })

    db.collection('users').updateOne({
        _id: new ObjectId('61792532d7677aba67d3ab59')
    }, {
        // $set: {
        //     name: 'AG'
        // }
        $inc: {
            age: 20
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    })

    db.collection('tasks').updateMany({
        status: true
    }, {
        $set: {
            status: false
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})
