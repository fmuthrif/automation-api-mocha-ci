require('dotenv').config();
const supertest = require('supertest');
const api = supertest(process.env.BASE_URL);

const getListUser = (path) => api.get(path)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${process.env.TOKEN}`)

module.exports = {
    getListUser
}