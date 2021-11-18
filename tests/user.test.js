const request = require('supertest')
const app = require('../src/app')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../src/models/user')

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

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        "name": "Abhinav Gunishetty",
        "email": "vivek.abhi1@test.com",
        "password": "12345678"
    }).expect(201)

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    expect(response.body).toMatchObject({
        "user": {
            "name": "Abhinav Gunishetty",
            "email": "vivek.abhi1@test.com",
        },
        "token": user.tokens[0].token
    })

    expect(user.password).not.toBe('12345678')
})

test('should login user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('should not login user', async () => {
    await request(app).post('/users/login').send({
        email: 'userOne.email',
        password: 'userOne.password'
    }).expect(400)
})


test('should get user profile', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('should not get profile for unauth user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('should delete user profile', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})


test('should not delete profile for unauth user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})


test('should upload avatar', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/pic.jpg')
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('should updated valid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            "name": "AG"
        })
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user.name).toBe('AG')
})

test('should not update invalid fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            "Location": "AG"
        })
        .expect(400)
})