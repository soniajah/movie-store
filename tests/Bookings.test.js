const request = require('supertest')

describe('Bookings Test', () => {
  beforeAll((done) => {
    models = require('../models')
    const moviesForTest = require('./movies.json')
    models.db.movie.remove({}, (err, result) => {
      createMovies(moviesForTest)
    })
    models.db.user.remove({}, (err, result) => {
      createUser({name: "user-test"})
    })  
    done();
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
    models.db.booking.remove({}, (err, result) => {
      done()
    })
  })
  
  it('creates booking of movie by a user', (done) => {  
    models.db.movie.find({}).then((movies, err) => {  
      models.db.user.find({}).then(async (users, err) => { 
        const booking = {
          userId: users[0]._id,
          movieId: movies[0]._id
        };
        const res = await request(app).post('/booking/create')
        .send(booking)
        models.db.booking.find({}).then((result, err) => {
          expect(result.length).toBe(1);
          done()
        })
      })
    })
  })
})

function createMovies(moviesForTest) {
  moviesForTest.forEach(movie => {
    new models.db.movie(movie).save((err, result) => {
      if (err) console.log(err)      
    })
  })
}

function createUser(user) {
  new models.db.user(user).save((err, result) => {
    if (err) console.log(err)    
  })
}
