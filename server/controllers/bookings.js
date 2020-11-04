var models = require('../models')
var mongoose = require('mongoose')

exports.create = (req, res) => {
  var booking = {}
  booking.userId = mongoose.Types.ObjectId(req.body.userId)
  booking.movieId = mongoose.Types.ObjectId(req.body.movieId)
  booking.date = new Date()
  console.log(booking)
  models.db.booking.find({userId: booking.userId, movieId: booking.movieId}, (err, result) => {
    console.log(result)
    if(err) console.log(err)
    if(result && result.length > 0) {
      res.sendStatus(409)
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
  console.log(req.params)
  models.db.booking.find({userId: mongoose.Types.ObjectId(req.params.userid)}, (err, result) => {
    if(err) console.log(err)
    var ArrayOfBookedMovieIds = result.map((booking) => {return booking.movieId})
    console.log(ArrayOfBookedMovieIds)
    res.send(ArrayOfBookedMovieIds)
  }) 
}