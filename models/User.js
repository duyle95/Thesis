const mongoose = require("mongoose");
const { Schema } = mongoose;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  credits: {
    type: Number,
    default: 0
  }
});

userSchema.pre("save", function(next) {
  var user = this;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
