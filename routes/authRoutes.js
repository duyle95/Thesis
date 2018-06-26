const Auth = require("../controllers/auth");

const requireLogin = require("../middlewares/requireLogin");
const requireAuth = require("../middlewares/requireAuth");

module.exports = app => {
  app.post("/api/users/signup", Auth.signup);
  app.post("/api/users/signin", requireLogin, Auth.signin);
  app.get("/api/current_user", requireAuth, Auth.currentUser);
};
