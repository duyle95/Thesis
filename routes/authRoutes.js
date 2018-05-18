const {User} = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = app => {
  app.post('/users/signup', async (req, res) => {
    const user = new User({ fullName: req.body.fullName, email: req.body.email, password: req.body.password });

    try {
      await user.save();

      res.send(user);
    } catch(e) {
      res.status(422).send(e);
    }
  });

  app.post('/users/signin', async (req, res) => {
    const body = { email: req.body.email, password: req.body.password };

    const user = await User.findByCredentials(body.email, body.password);

    try {
      const token = await user.generateAuthToken();
      
      res.header('x-auth', token).send(user);
    } catch(e) {
      res.status(400).send(e);
    }
  });
}
