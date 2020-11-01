const mongoose = require('mongoose');
var connectionString = (process.env.JEST_WORKER_ID !== undefined)? "mongodb://localhost:27017/movies-test" : "mongodb://localhost:27017/movies-test"
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

exports.movie = require('./movie').Movie
exports.user = require('./user').User
exports.booking = require('./booking').booking

exports.disconnect = function() {
  mongoose.disconnect()
}