const mongoose = require('mongoose');
const { Schema } = mongoose;
const AnswerSchema = require('./Answer');

const emailSchema = new Schema({
  toEmail: {
    type: String,
    require: true
  },
  responded: Boolean,
  answer: [AnswerSchema],
  _survey: {
    type: Schema.Types.ObjectId,
    ref: 'Survey'
  }
});

const Email = mongoose.model('Email', emailSchema);

module.exports = { Email };
