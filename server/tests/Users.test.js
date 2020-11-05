const request = require('supertest')

describe('Users Test', () => {
  beforeAll(() => {
    models = require('../models')
  })
  beforeEach(() => {        
    app = require('../app')
  });

  afterEach(async () => {
      await app.close();
  });

  afterAll(() => {
    models.db.disconnect()
  })

  it('clean up database', done => {
    models.db.user.remove({}, (err, result) => {
      done()
    })
  })

  it('creates user', async (done) => {         
    const user = {
      name: "user-test"
    };
    const res = await request(app).post('/user/create')
    .send(user)
    models.db.user.find({}).then((result, err) => {
      expect(res.body.name).toBe( 'user-test');
      done()
    })
  })
})
