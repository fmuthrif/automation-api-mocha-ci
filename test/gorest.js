require('dotenv').config();
const supertest = require('supertest');
const api = supertest(process.env.BASE_URL);

const getListUser = (path, token) => api.get(path)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`)

module.exports = {
    getListUser
}