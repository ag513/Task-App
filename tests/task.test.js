const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const { userOne, userTwo, userOneId, setUpDB } = require('./fixtures/db')

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
    expect(task.completed).toBe(false)
})

test('should fetch users tasks', async () => {
    const response = await request(app)
        .get('tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    expect(response.body.length).toBe(1)
})