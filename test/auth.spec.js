import request from 'supertest';
import { expect } from 'chai';
import 'dotenv/config'

describe('AUTHENTICATION', () => {
    it('login with valid credentials', async() => {
        const res = await request(process.env.BASE_URL)
        .post('user/login')
        .send({email: process.env.EMAIL, password: process.env.PASSWORD})
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Auth success');
    });
 
});