const passport = require("passport");
const passportServices = require("../services/passport");
const Auth = require("../controllers/auth");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });

module.exports = app => {
  app.post("/api/users/signup", Auth.signup);
  app.post("/api/users/signin", requireLogin, Auth.signin);
};
