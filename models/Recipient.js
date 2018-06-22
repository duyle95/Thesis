const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientsSchema = new Schema({
  Email: {
    type: String,
    require: true
  },
  responded: {
    type: Boolean,
    default: false
  },
  rate: Number,
  review: String
});

module.exports = recipientsSchema;
