var models = require('../models')

exports.create = (req, res) => {
  var user = {}
  user.name = req.body.name
  user.password = req.body.password
  new models.db.user(user).save((err, result) => {
    if(err) console.log(err)
    console.log(result)
    res.send(result)
  })  
}

exports.random = (req, res) => { 
  models.db.user.find({})
  .then((result, err) => {
    if(err) console.log(err)
    res.send(result[0]._id)
  })  
}