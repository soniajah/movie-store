const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Name is required']
  },
  language: {
    type: String,
    required: [true, 'language is required']
  },
  location: {
    type: String,
    required: [true, 'location is required']
  },
  plot: {
    type: String,
    required: [true, 'plot is required']
  },
  poster: {
    type: String
  },
  soundEffects: {
    type: [String]
  },
  stills: {
    type: [String]
  },
  imdbId: {
    type: String
  },
  listingType: {
    type: String
  },
  imbdRating: {
    Number
  }
})

const Movie = mongoose.model('movie', movieSchema, 'movie')

module.exports.Movie = Movie