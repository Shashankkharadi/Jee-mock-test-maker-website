const mongoose = require('mongoose');

const MockTestSchema = new mongoose.Schema({
  userId: String,
  exam: String,
  subject: String,
  questions: [Object],
  score: Number,
  duration: Number,
});

module.exports = mongoose.models.MockTest || mongoose.model('MockTest', MockTestSchema);
