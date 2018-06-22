const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Survey = mongoose.model("Survey");

module.exports = app => {
  app.post("/api/surveys", async (req, res) => {
    const { title, body, subject, recipients, id } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: id,
      // _user: req.user.id
      dateSent: Date.now()
    });

    try {
      await survey.save();

      res.send({ message: "survey saved" });
    } catch (e) {
      res.status(422).send(e);
    }
  });
};
