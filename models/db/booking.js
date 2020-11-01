const mongoose = require('mongoose')
const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: [true, 'userId is required'],
    ref: 'user'
  },
  movieId: {
    type: mongoose.Types.ObjectId,
    required: [true, 'movieId is required'],
    ref: 'movie'
  },
  date: {
    type: Date
  }
})

const booking = mongoose.model('booking', bookingSchema, 'booking')

module.exports.booking = booking