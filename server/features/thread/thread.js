const mongoose = require('mongoose');
const reply =  require('../reply/reply.js');

const Thread = new mongoose.Schema({
  title: {type: String},
  dateCreated: {type: Date, default: Date.now},
  author: {type: String},
  content: [],
  replies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}],
  game: {type: String},
  user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]

})

module.exports = mongoose.model('Thread', Thread)
