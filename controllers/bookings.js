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
