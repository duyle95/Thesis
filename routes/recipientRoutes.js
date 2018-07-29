const mongoose = require("mongoose");
const recipient = require("../controllers/recipient");

module.exports = app => {
  // app.get("/api/recipient/:id", recipient.getRecipient);
  app.post("/api/recipient/edit", recipient.postRecipientAnswer);
};
