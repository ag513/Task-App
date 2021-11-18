const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    "_id": userOneId,
    "name": "Abhinav",
    "email": "a@a.com",
    "password": "12345678",
    "tokens": [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    "_id": userTwoId,
    "name": "Gunishetty",
    "email": "g@g.com",
    "password": "12345678",
    "tokens": [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}


const TaskOne = {
    "_id": new mongoose.Types.ObjectId(),
    "desc": "task1 desc",
    "completed": false,
    owner: userOne._id
}

const TaskTwo = {
    "_id": new mongoose.Types.ObjectId(),
    "desc": "task2 desc",
    "completed": true,
    owner: userTwo._id
}

const TaskThree = {
    "_id": new mongoose.Types.ObjectId(),
    "desc": "task3 desc",
    "completed": false,
    owner: userTwo._id
}

const setUpDB = async () => {
    await User.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(TaskOne).save()
    await new Task(TaskTwo).save()
    await new Task(TaskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    setUpDB
}