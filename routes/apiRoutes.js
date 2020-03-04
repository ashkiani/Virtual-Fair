const db = require("../models");
// let jobs = [];
// jobs.push({
//   jobId: "1",
//   jobTitle: "test job1",
//   jobSkills: ["skill1", "skill2"],
//   jobRequirements: ["req1", "req2"]
// });
// jobs.push({
//   jobId: "2",
//   jobTitle: "test job2",
//   jobSkills: ["skill1", "skill3"],
//   jobRequirements: ["req5", "req2"]
// });

module.exports = function(app) {
  app.get("/api/jobs", async (req, res) => {
    try {
      console.log("api get received at /api/jobs");
      let query =
        "SELECT Jobs.id, Jobs.Title, Jobs.Description, Locations.Location, Skills.Skill, Requirements.Requirement ";
      query +=
        "FROM Locations INNER JOIN (Skills INNER JOIN (Requirements INNER JOIN ((Jobs INNER JOIN JobRequirements ON Jobs.id = JobRequirements.Jobid) INNER JOIN JobSkills ON Jobs.id = JobSkills.Jobid) ON Requirements.id = JobRequirements.Requirementid) ON Skills.id = JobSkills.Skillid) ON Locations.id = Jobs.Locationid;";
      let records = await db.sequelize.query(query, {
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
      // {"cities": [1, 2, 3],
      //  "skills": [4, 5, 6],
      //  "keywords": ["k1", "k2", "k3"]
      // }
      console.log(req.body);
      console.log(req.body.cities);
      console.log(req.body.skills);
      console.log(req.body.keywords);

      //it returns an array of job objects that include job id, job title and job skills and job requirements.
      //object below is for initial testing only. The plan is to populate it from the database.
      res.json(jobs);
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
