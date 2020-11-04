const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  password: {
    type: String,
    required: [true, 'Created date is required']
  }
})

const User = mongoose.model('user', userSchema, 'user')

module.exports.User = User