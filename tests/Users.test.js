const request = require('supertest')
const models = require('../models')

describe('Users Test', () => {
  beforeEach(() => {        
    app = require('../app')
  });

  afterEach(async () => {
      await app.close();
  });

  it('clean up database', done => {
    models.db.user.remove({}, (err, result) => {
      done()
    })
  })

  it('creates user', async (done) => {         
    const user = {
      name: "user-test"
    };
    const res = await request(app).post('/users/create')
    .send(user)
    models.db.user.find({}).then((result, err) => {
      expect(res.body.name).toBe( 'user-test');
      done()
    })
  })
})
