// const config = require('./config/keys');
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, err => {
  console.log(err);
});

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Answering");
});

require("./routes/authRoutes")(app);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
