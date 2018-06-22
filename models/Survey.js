const mongoose = require("mongoose");
const { Schema } = mongoose;
const recipientsSchema = require("./Recipient");

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
  lastResponded: Date,
  recipients: [recipientsSchema]
});

mongoose.model("Survey", surveySchema);
