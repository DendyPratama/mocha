const assert = require('chai').expect;
const page = require('../page/TestRegisterPage.js');

describe('Positif Case', () => {
    it('Test Register', async() => {
        const response = await page.postRegister()
        .send({
            email:"eve.holt@reqres.in",
            password:"pistol",

    })
        assert(response.status).to.equal(200);
        var Register = response.body;
        console.log(Register);
    });
});