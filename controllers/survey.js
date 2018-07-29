const mongoose = require("mongoose");
const Survey = mongoose.model("Survey");
const Recipient = mongoose.model("Recipient");

const sgMail = require("../services/Mailer");
const emailTemplate = require("../services/emailTemplate");

exports.postSurvey = async (req, res, next) => {
  // REFACTOR: don't show the list of the recipients in the email => use sendMultiple instead
  // or consider using a seperate Recipient model, => Promise.all to resolve sending every recipient
  const { title, body, subject, recipients } = req.body;
  const from = "test@tooly.com";
  const survey = new Survey({
    title,
    subject,
    body,
    _user: req.user.id,
    dateSent: Date.now()
  });

  const newRecipients = recipients.split(",").map(
    recipient =>
      new Recipient({
        email: recipient.trim(),
        _survey: survey._id
      })
  );
  const emails = newRecipients.map(recipient => ({
    from,
    to: recipient.email,
    subject,
    text: body,
    html: emailTemplate(body, recipient._id)
  }));

  try {
    await sgMail.send(emails);
    await survey.save();

    await Promise.all(newRecipients.map(recipient => recipient.save()));

    res.send(req.user);
  } catch (e) {
    res.status(422).send(e);
  }

  // const msg = {
  //   from: "test@tooly.com",
  //   to: newRecipients,
  //   subject,
  //   text: body,
  //   html: emailTemplate(body, survey._id)
  // };
  //
  // try {
  //   await survey.save();
  //
  //   await sgMail.send(msg);
  //
  //   res.send({ survey });
  // } catch (e) {
  //   res.status(422).send(e);
  // }
};

exports.getSurveys = async (req, res, next) => {
  try {
    const surveys = await Survey.findOne({ _user: req.user._id });

    res.send(surveys);
  } catch (e) {
    res.status(422).send(e);
  }
};

// REFACTOR: create another collection named 'Recipient' that stores all the rating, review, recipientEmail => change to model
// create recipient controllers and recipientRoutes
// consider generate signature for each recipient to avoid hard typing url in front end

exports.getRecipient = async (req, res, next) => {
  try {
    const recipients = await Survey.findOne(
      { "recipients._id": req.params.id },
      "recipients"
    );
    console.log(typeof recipients.recipients);
    res.send(recipients);
  } catch (e) {
    res.status(422).send(e);
  }
};
