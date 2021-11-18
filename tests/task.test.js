const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const { userOne, userOneId, setUpDB } = require('./fixtures/db')

beforeEach(setUpDB)
test('should create a task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            "desc": 'From testing'
        })
        .expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
})