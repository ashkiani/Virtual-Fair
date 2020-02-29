var db = require("../models");

module.exports = function (app) {
  app.get("/api/jobs", async (req, res) => {
    try {
      console.log(db.tblJobs);
      db.tblJobs.findAll({}).then(function (allJobs) {
        res.json(allJobs);
      });
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
      // db.tblJobs.findAll({ include: db.tblJobsSkills, where: { '$tbljobsskills.skill_id$': req.body.cities } }).then(function (foundJobs) {
      //   // res.json(allJobs);
      //   // response.status(201).json(allJobs);
      //   // response.status(404, 'The task is not found').send();
      //   res.json(foundJobs);
      // });
      //it returns an array of job objects that include job id, job title and job skills and job requirements.
      //object below is for initial testing only. The plan is to populate it from the database.
      let result = [];
      result.push({
        jobId: "1",
        jobTitle: "test job1",
        jobSkills: ["skill1", "skill2"],
        jobRequirements: ["req1", "req2"]
      });
      result.push({
        jobId: "2",
        jobTitle: "test job2",
        jobSkills: ["skill1", "skill3"],
        jobRequirements: ["req5", "req2"]
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
