const db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", (req, res) => res.render("index"));

  // Load Jobs page
  app.get("/jobs", async (req, res) => {
    //Siavash 3/3/2020 Added the following calls to pass location and skills to the jobs page.
    db.Locations.findAll({}).then(function(dbLocations) {
      let foundLocations = dbLocations.map(val => {
        return { id: val.id, location: val.location };
      });
      db.Skills.findAll({}).then(function(dbSkills) {
        let foundSkills = dbSkills.map(val => {
          return { id: val.id, skill: val.skill };
        });
        let values = { locations: foundLocations, skills: foundSkills };
        console.log(values);
        res.render("jobs", values);
      });
    });
  });

  // Load Status page
  app.get("/status", (req, res) => res.render("status")); //res.send('Status page -- UNDER CONSTRUCTION!')

  // Load admin page
  app.get("/admin", (req, res) => res.render("admin"));

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
