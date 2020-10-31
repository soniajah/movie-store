var models = require('../models')

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