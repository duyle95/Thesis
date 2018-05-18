const mongoose = require('mongoose');
const { Schema } = mongoose;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// what properties should user contains
const userSchema = new Schema({
  fullName: {
    type: String,
    minlength: 3
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true,
    minlength: 8
  }
});

userSchema.statics.findByCredentials = function(email, password) {
  // const User = this;
  //
  // const user = await User.findOne({ email });
  //
  // if (!user) {
  //   return Promise.reject();
  // }
  //
  // return new Promise((resolve, reject) => {
  //   bcrypt.compare(user.password, password, (err, res) => {
  //     if (res) {
  //       resolve(user);
  //     } else {
  //       reject();
  //     }
  //   });
  // });
  var User = this;

  return User.findOne({email}).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      // Use bcrypt.compare to compare password and user.password
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
}

userSchema.methods.generateAuthToken = async function() {
  const user = this;
  var access = 'auth';
  var token = await jwt.sign({ _id: user._id.toHexString(), iat: Math.floor(Date.now() / 1000) - 30 }, process.env.JWT_SECRET);

  return token;
}

userSchema.pre('save', function(next) {
  var user = this;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
})

const User = mongoose.model('User', userSchema);

module.exports = { User };
