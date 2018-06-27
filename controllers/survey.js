const mongoose = require("mongoose");
const Survey = mongoose.model("Survey");

exports.postSurvey = async (req, res, next) => {
  const { title, body, subject, recipients } = req.body;
  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(",").map(email => ({ email: email.trim() })),
    _user: req.user._id,
    dateSent: Date.now()
  });

  try {
    await survey.save();

    res.send({ survey });
  } catch (e) {
    res.status(422).send(e);
  }
};

exports.getSurveys = async (req, res, next) => {
  try {
    const surveys = await Survey.find({ _user: req.user._id });

    res.send(surveys);
  } catch (e) {
    res.status(422).send(e);
  }
};
