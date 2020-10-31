var models = require('../models')

exports.create = (req, res) => {
  var user = {}
  user.name = req.body.name
  user.password = req.body.password
  new models.db.user(user),save((err, result) => {
    if(err) console.log(err)
    res.send(result)
  })  
}