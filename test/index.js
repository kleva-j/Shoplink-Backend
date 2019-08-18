import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testing the app', () => {
  it('should test the app', (done) => {
    chai
      .request(app)
      .post('/api/v1/test')
      .end((req, res) => {
        const { method, message } = res.body;
        expect(res.status).to.equal(200);
        expect(method).to.equal('POST');
        expect(message).to.equal('I just made a POST request');
        done(req);
      });
  });
});
