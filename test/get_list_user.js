require('dotenv').config();
const chai = require('chai');
const assert = require('chai').expect;
chai.use(require('chai-json-schema'));

const gorest = require("../test/gorest.js");
const testCase = require("../test/test_case.json");

let
    pathGetListUser = '/public/v2/users';

describe(`@GET ${testCase.getListUser.description}`, async () => {
    describe(`@GET ${testCase.getListUser.description} - Positive Case`, async () => {
        it(testCase.getListUser.positive.validData, async () => {
            const response = await gorest.getListUser(pathGetListUser);
            assert(response.status).to.equal(200);
            assert(response.body).to.be.an('array').that.is.not.empty;
            response.body.forEach(user => {
                assert(user).to.have.all.keys('id', 'name', 'email', 'gender', 'status');
            });
        });
    });
    describe(`@GET ${testCase.getListUser.description} - Negative Case`, async () => {
        it.only(testCase.getListUser.negative.emptyAuth, async () => {
            const response = await gorest.getListUser(pathGetListUser).unset('Authorization');
            assert(response.status).to.equal(401);
            assert(response.body.message).to.equal('Authentication failed');
        });
    });
});