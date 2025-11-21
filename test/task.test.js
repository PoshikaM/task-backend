const request = require('supertest');
const express = require('express');
const taskRoutes = require('../routes/taskRoutes');
const db = require('../models');

const app = express();
app.use(express.json());
app.use('/tasks', taskRoutes);

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

afterAll(async () => {
  await db.sequelize.close();
});

describe('Tasks API Basic Tests', () => {
  let taskId;

  test('POST /tasks - create a new task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Test Task', description: 'Test Description' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test Task');
    taskId = res.body.id;
  });

  test('GET /tasks - get tasks and verify created task', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.find(task => task.id === taskId)).toBeDefined();
  });

  test('PATCH /tasks/:id - toggle task status', async () => {
    const res = await request(app).patch(`/tasks/${taskId}`);
    expect(res.statusCode).toBe(200);
    expect(typeof res.body.status).toBe('boolean');
  });

  test('DELETE /tasks/:id - delete task', async () => {
    const res = await request(app).delete(`/tasks/${taskId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Task deleted');
  });
});
