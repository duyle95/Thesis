const recipient = require("../controllers/recipient");

module.exports = app => {
  app.get("/api/recipient/:id", recipient.getRecipient);
};
