const mongoose = require("mongoose");
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model("Survey", surveySchema);
