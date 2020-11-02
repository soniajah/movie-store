var models = require('../models')

exports.create = (req, res) => {
  var booking = {}
  booking.userId = req.body.userId
  booking.movieId = req.body.movieId
  booking.date = new Date()
  models.db.booking.find({userId: req.body.userId, movieId: req.body.movieId}, (err, result) => {
    if(err) console.log(err)
    if(result && result.length > 0) {
      res.send(409)
    }
    else {
      new models.db.booking(booking).save((err, result) => {
        if (err) console.log(err);
        res.send(result)
      });
    }

  })    
}

exports.delete = (req, res) => {
  models.db.booking.find({movieId: req.body.movieId, userId: req.body.userId}, (err, bookings) => {
    if(bookings && bookings.length == 1) {
      models.db.booking.deleteOne({_id: bookings[0]._id}, (err, result) => {
        if(err) console.log(err)
        res.send(result)
      })
    }
    else {
      res.send(500)
    }    
  }) 
}

exports.search = (req, res) => {
  models.db.booking.findOne({movieId: req.params.movieid, userId: req.params.userid}, (err, result) => {
    if(err) console.log(err)
    res.send(result)
  }) 
}

exports.getUserBookings = (req, res) => {
  models.db.booking.find({userId: req.params.userid}, (err, result) => {
    if(err) console.log(err)
    var ArrayOfBookedMovieIds = result.map((booking) => {return booking.movieId})
    res.send(ArrayOfBookedMovieIds)
  }) 
}