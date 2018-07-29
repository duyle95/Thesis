const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientsSchema = new Schema({
  email: {
    type: String,
    require: true
  },
  responded: {
    type: Boolean,
    default: false
  },
  rating: {
    type: String,
    default: "0"
  },
  review: {
    type: String,
    default: ""
  },
  _survey: {
    type: Schema.Types.ObjectId,
    ref: "Survey"
  }
});

mongoose.model("Recipient", recipientsSchema);
