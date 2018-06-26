const mongoose = require("mongoose");
const passport = require("passport");

const requireAuth = require("../middlewares/requireAuth");
const survey = require("../controllers/survey");
const Survey = mongoose.model("Survey");

module.exports = app => {
  app.post("/api/surveys", requireAuth, survey.postSurvey);
};
