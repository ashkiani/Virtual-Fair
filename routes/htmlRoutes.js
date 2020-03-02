// var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", (req, res) => res.render("index"));

  // Load Jobs page
  app.get("/jobs", (req, res) => res.render("jobs"));

  // Load Status page
  app.get("/status", (req, res) => res.render("status")); //res.send('Status page -- UNDER CONSTRUCTION!')

  // Load admin page
  app.get("/admin", (req, res) => res.render("admin"));

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
