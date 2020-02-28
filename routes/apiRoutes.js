var db = require("../models");

module.exports = function (app) {
  app.get('/api/jobs', async (req, res) => {
    try {
      console.log(db.tblJobs);
      db.tblJobs.findAll({}).then(function (allJobs) {
        res.json(allJobs);
      });
    } catch (err) {
      console.log(err);
      res.send("Error occurred:" + err);
    }
  })

  app.post('/api/jobs', async (req, res) => {
    try {
      //Postman test
      // {
      //   "cities": [1, 2, 3],
      //     "skills": [4, 5, 6],
      //       "keywords": ["k1", "k2", "k3"]
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

    } catch (err) {
      console.log(err);
      res.send("Error occurred:" + err);
    }
  })

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
