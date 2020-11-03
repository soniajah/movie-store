var models = require('../models')

exports.index = (req, res) => {
  res.send("ok")
}

exports.initialize = async () => {
  await models.initialize.users()
  await models.initialize.movies()
  console.log('completed creating users and movies in the DB')  
}