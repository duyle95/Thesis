const mongoose = require("mongoose");

const Recipient = mongoose.model("Recipient");

exports.postRecipientAnswer = async (req, res, next) => {
  const { rating, review, recipientId } = req.body;

  try {
    const recipient = await Recipient.findById(recipientId);
    console.log(recipient);
    recipient.rating = rating;
    recipient.review = review;
    recipient.responded = true;

    await recipient.save();

    res.send("Thanks for answering");
  } catch (e) {
    res.status(500).send(e);
  }
};
