const Survey = require("../models/Survey");

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

    res.send({ survey, user: req.user });
  } catch (e) {
    res.status(422).send(e);
  }
};
