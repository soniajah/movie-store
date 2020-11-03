var models = require('../models')
var moviesForTest = require('../data/movies.json')

exports.users = () => {
  return new Promise((resolve, reject) => {
    models.db.user.find({})
    .then((result, err) => {
      if(result && result.length > 0) {
        resolve('done')
      }
      else {
        var user = {}
        user.name = 'test-user'
        user.password = 'test'
        new models.db.user(user).save((err, result) => {
          if(err) console.log(err)
          console.log('created a user')
          resolve('done')
        })  
      }
    })
  })  
}

exports.movies = () => {
  return new Promise((resolve, reject) => {
    models.db.movie.find({})
    .then((result, err) => {
      if(result && result.length > 0) {
        resolve('done')
      }
      else {      
        moviesForTest.forEach(movie => {
          new models.db.movie(movie).save((err, result) => {
            if (err) console.log(err)
            console.log('created a movie')                     
          })
        })
        resolve('done')
      }
    })
  })
}