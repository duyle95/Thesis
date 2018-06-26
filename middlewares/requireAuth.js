const passport = require("passport");
const passportServices = require("../services/passport");

module.exports = passport.authenticate("jwt", { session: false });
