const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.endpoint);
const postRegister = () => api.post('/api/register')
// const postRegister = () => api.get('/api/users')

 module.exports = {
    postRegister
} 