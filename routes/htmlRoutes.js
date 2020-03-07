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
  app.get("/status", (req, res) => {
    db.Applications.findAll({}).then(async dbApplications => {
      let foundApplications = [];
      for (let i = 0; i < dbApplications.length; i++) {
        let userName = await db.Users.findOne({
          attributes: ["firstname", "lastname"],
          where: { id: dbApplications[i].UserId }
        });
        let jobTitle = await db.Jobs.findOne({
          attributes: ["title"],
          where: { id: dbApplications[i].JobId }
        });
        let status = await db.AdminActions.findOne({
          attributes: ["ActionId", "updatedAt"],
          where: { id: dbApplications[i].id },
          order: ["updatedAt"]
        });
        let action = await db.Actions.findOne({
          attributes: ["action"],
          where: { id: status.ActionId }
        });
        foundApplications.push({
          id: dbApplications[i].id,
          note: dbApplications[i].note,
          userId: dbApplications[i].UserId,
          userName: `${userName.firstname} ${userName.lastname}`,
          jobId: dbApplications[i].JobId,
          jobTitle: jobTitle.title,
          status: action.action,
          date: status.updatedAt
        });
      }
      console.log(foundApplications);
      res.render("status", foundApplications);
    });
  });

  // Load admin page
  app.get("/admin", (req, res) => {
    db.Applications.findAll({}).then(async dbApplications => {
      let foundApplications = [];
      for (let i = 0; i < dbApplications.length; i++) {
        let userName = await db.Users.findOne({
          attributes: ["firstname", "lastname"],
          where: { id: dbApplications[i].UserId }
        });
        let jobTitle = await db.Jobs.findOne({
          attributes: ["title"],
          where: { id: dbApplications[i].JobId }
        });
        let status = await db.AdminActions.findOne({
          attributes: ["ActionId", "updatedAt"],
          where: { id: dbApplications[i].id },
          order: ["updatedAt"]
        });
        let action = await db.Actions.findOne({
          attributes: ["action"],
          where: { id: status.ActionId }
        });
        foundApplications.push({
          id: dbApplications[i].id,
          note: dbApplications[i].note,
          userId: dbApplications[i].UserId,
          userName: `${userName.firstname} ${userName.lastname}`,
          jobId: dbApplications[i].JobId,
          jobTitle: jobTitle.title,
          status: action.action,
          date: status.updatedAt
        });
      }
      console.log(foundApplications);
      res.render("admin", foundApplications);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("/worldmap", function(req, res) {
    res.render("worldmap");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
