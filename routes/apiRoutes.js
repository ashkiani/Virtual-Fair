const db = require("../models");
const jobsSelectQuery = `SELECT Jobs.id, Jobs.Title, Jobs.Description, Locations.Location, Skills.Skill, Requirements.Requirement 
FROM Locations INNER JOIN (Skills INNER JOIN (Requirements INNER JOIN ((Jobs INNER JOIN JobRequirements ON Jobs.id = JobRequirements.Jobid)
 INNER JOIN JobSkills ON Jobs.id = JobSkills.Jobid) ON Requirements.id = JobRequirements.Requirementid) ON Skills.id = JobSkills.Skillid) ON Locations.id = Jobs.Locationid`;

module.exports = function(app) {
  app.get("/api/jobs", async (req, res) => {
    try {
      console.log("api get received at /api/jobs");
      let records = await db.sequelize.query(jobsSelectQuery, {
        bind: ["active"],
        type: db.sequelize.QueryTypes.SELECT
      });
      console.log(records);
      res.status(200).json(records);
    } catch (err) {
      console.log(err);
      res.send("Error occurred:" + err);
    }
  });

  app.post("/api/jobs", async (req, res) => {
    try {
      console.log("api post received at /api/jobs");
      //Postman test
      // {
      //   "locations": [1,2,3],
      //   "skills":[1,5,6],
      //   "keywords":["web","JavaScript","cool"]
      //   }
      console.log(req.body);
      console.log("City" + req.body.cities);
      console.log(req.body.skills);
      console.log(req.body.keywords);
      let whereClauseNeeded = false;
      let skills = "";
      if (req.body.skills !== null) {
        if (req.body.skills.length > 0) {
          skills = req.body.skills.join();
          whereClauseNeeded = true;
        }
      }
      let locations = "";
      if (req.body.locations !== null) {
        if (req.body.locations.length > 0) {
          locations = req.body.locations.join();
          whereClauseNeeded = true;
        }
      }
      let keywordsPresent = false;
      if (req.body.keywords !== null) {
        if (req.body.keywords.length > 0) {
          //keywords = req.body.keywords.join();
          whereClauseNeeded = true;
          keywordsPresent = true;
        }
      }
      let whereClause = "";
      if (whereClauseNeeded) {
        let ANDNeeded = false;
        whereClause = " WHERE ";
        if (skills !== "") {
          whereClause += `JobSkills.Skillid IN (${skills})`;
          ANDNeeded = true;
        }
        if (locations !== "") {
          if (ANDNeeded) {
            whereClause += " AND ";
          }
          whereClause += `Jobs.Locationid IN(${locations})`;
          ANDNeeded = true;
        }
        if (keywordsPresent) {
          let keywords = req.body.keywords.map(keyword => {
            return `--field-- LIKE '%${keyword}%'`;
          });
          let keywordsCondition = keywords.join();
          keywordsCondition = keywordsCondition.replace(/,/g, " OR ");
          let keywordsTitle = keywordsCondition.replace(
            /--field--/g,
            "Jobs.Title"
          );
          let keywordsDescription = keywordsCondition.replace(
            /--field--/g,
            "Jobs.Description"
          );
          if (ANDNeeded) {
            whereClause += " AND ";
          }
          whereClause += `(${keywordsTitle}) OR (${keywordsDescription})`;
        }
        console.log("---");
        console.log("query:");
        console.log(jobsSelectQuery + whereClause);
        console.log("---");
      }
      let records = await db.sequelize.query(jobsSelectQuery + whereClause, {
        bind: ["active"],
        type: db.sequelize.QueryTypes.SELECT
      });
      console.log(records);
      res.status(200).json(records);
    } catch (err) {
      console.log(err);
      res.send("Error occurred:" + err);
    }
  });

  app.get("/api/locations", async (req, res) => {
    try {
      console.log("api get received at /api/locations");
      //it returns an array of objects that include location id and location name. The front-end can use this to populate the drop-downs, etc...
      //object below is for initial testing only. The plan is to populate it from the database.
      let result = [];
      result.push({
        locationId: "1",
        locationName: "Location1"
      });
      result.push({
        locationId: "2",
        locationName: "Location2"
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.send("Error occurred:" + err);
    }
  });

  app.get("/api/skills", async (req, res) => {
    try {
      console.log("api get received at /api/skills");
      //it returns an array of objects that include skill id and skill title. The front-end can use this to populate the drop-downs, etc...
      //object below is for initial testing only. The plan is to populate it from the database.
      let result = [];
      result.push({
        skillId: "1",
        skillTitle: "Skill1"
      });
      result.push({
        skillId: "2",
        skillTitle: "skill2"
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.send("Error occurred:" + err);
    }
  });

  // Get all examples
  // app.get("/api/examples", function (req, res) {
  //   db.Example.findAll({}).then(function (dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function (req, res) {
  //   db.Example.create(req.body).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
