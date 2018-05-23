// const config = require('./config/keys');
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, (err) => {
  console.log(err);
});

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Answering');
});

require('./routes/authRoutes')(app);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
