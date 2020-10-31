const request = require('supertest')
const app = require('../app')

const models = require('../models')

const moviesForTest = [
  {
    "location": "USA",
    "language": "ENGLISH",
    "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "title": "USA-ENGLISH-MOVIE-TITLE",
    "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._",
    "soundEffects": ["RX6", "SDDS"],
    "stills": ["https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
              "https://m.media-amazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
              "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._"],
    "imdbId": "tt01111161",
    "listingType": "NOW_SHOWING",
    "imbdRating": "7.2"
  },
  {
    "location": "DENMARK",
    "language": "DANISH",
    "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "title": "DENMARK-DANISH-MOVIE-TITLE",
    "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._",
    "soundEffects": ["RX6", "SDDS"],
    "stills": ["https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
              "https://m.media-amazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
              "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._"],
    "imdbId": "tt01111161",
    "listingType": "NOW_SHOWING",
    "imbdRating": "7.2"
  },
  {
    "location": "DENMARK",
    "language": "ENGLISH",
    "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "title": "DENMARK-ENGLISH-MOVIE-TITLE",
    "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._",
    "soundEffects": ["RX6", "SDDS"],
    "stills": ["https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
              "https://m.media-amazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
              "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._"],
    "imdbId": "tt01111161",
    "listingType": "NOW_SHOWING",
    "imbdRating": "7.2"
  },
  {
    "location": "USA",
    "language": "SPANISH",
    "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "title": "USA-SPANISH-MOVIE-TITLE",
    "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._",
    "soundEffects": ["RX6", "SDDS"],
    "stills": ["https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
              "https://m.media-amazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
              "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._"],
    "imdbId": "tt01111161",
    "listingType": "NOW_SHOWING",
    "imbdRating": "7.2"
  },

]


describe('Sample Test', () => {

  it('clean up database', done => {
    models.db.movie.remove({}, (err, result) => {
      done()
    })
  })

  it('create data sets', done => {
    var count = 0;
    moviesForTest.forEach(movie => {
      new models.db.movie(movie).save((err, result) => {
        if (err) console.log(err)
        count++
        if (count == moviesForTest.length) {
          done()
        }
      })
    })
  })

  it('filter movies with any location and any language', async () => {
    const res = await request(app)
    .get('/movies/any/any')
    .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(4)
  })

  it('filter movies with any location and ENGLISH language', async () => {
    const res = await request(app)
    .get('/movies/any/ENGLISH')
    .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(2)
  })

  it('filter movies with USA location and ENGLISH language', async () => {
    const res = await request(app)
    .get('/movies/USA/ENGLISH')
    .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(1)
  })
})
