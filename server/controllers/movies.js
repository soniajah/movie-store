var models = require('../models')
var mongoose = require('mongoose')

exports.filter = (req, res) => {
  var query = {}
  if (req.params.location != 'any') {
    query.location = req.params.location 
  }
  if (req.params.language != 'any') {
    query.language = req.params.language
  }
  models.db.movie.find(query)
  .then((result, err) => {
    if(err) console.log(err)
    res.send(result)
  })  
}

exports.get = (req, res) => {
  models.db.movie.findOne({_id: mongoose.Types.ObjectId(req.params.id)})
  .then((result, err) => {
    if(err) console.log(err)
    res.send(result)
  })  
}

exports.locations = (req, res) => {
  models.db.movie.find({})
  .then((result, err) => {
    if(err) console.log(err)
    var allLocations = result.map(movie => movie.location)
    var uniqueLocations = allLocations.filter((value, index, self) => self.indexOf(value) === index)
    res.send(uniqueLocations)
  })  
}

exports.languages = (req, res) => {
  models.db.movie.find({})
  .then((result, err) => {
    if(err) console.log(err)
    var allLanguages = result.map(movie => movie.language)
    var uniqueLanguages = allLanguages.filter((value, index, self) => self.indexOf(value) === index)
    res.send(uniqueLanguages)
  })  
}