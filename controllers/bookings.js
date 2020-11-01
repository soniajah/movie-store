var models = require('../models')

exports.create = (req, res) => {
  var booking = {}
  booking.userId = req.body.userId
  booking.movieId = req.body.movieId
  booking.date = new Date()
  new models.db.booking(booking).save((err, result) => {
    if (err) console.log(err);
    res.send(result)
  });  
}

exports.delete = (req, res) => {
  console.log(req.body) 
  models.db.booking.deleteOne({_id: req.body.bookingId}, (err, result) => {
    if(err) console.log(err)
    res.send(result)
  }) 
}
