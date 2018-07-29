require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

require("./services/passport");
require("./models/Survey");
require("./models/User");
require("./models/Recipient");

const app = express();
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGO_URI,
  err => {
    console.log(err);
  }
);

app.use(bodyParser.json());
app.use(cors());

app.use(passport.initialize());
// check if we need app.use(passport.session()) and the code above
require("./routes/authRoutes")(app);
require("./routes/surveyRoutes")(app);
require("./routes/recipientRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // the order here is important, if express doesn't find the file,
  // it will move on and give back the index.html file

  // express will serve up production assets like main.js, main.css
  app.use(express.static("client/build"));
  // express will serve up index.html file if it doesn't recognize
  // the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Listening on port " + port);
});
