const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema({
  rate: Number,
  review: String
});

module.exports = answerSchema;
