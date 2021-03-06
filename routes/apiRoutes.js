const db = require("../models");
function getJobs(condition, res) {
  //Siavash 3/4/2020: I saw a couple of issue with using .findAll({ include: { all: true, nested: true }})
  //1- It returns more than what is needed and it has poor performance
  //2- It wasn't working for Skills - it complained about a missing relationship but we know the relationships exists and works correctly
  // Hence I added a couple of nested queries to retrieve only what is required for this route.
  db.Jobs.findAll({
    include: [db.JobSkills, db.JobRequirements],
    where: condition
  }).then(async allJobs => {
    let output = [];
    for (let i = 0; i < allJobs.length; i++) {
      let location = await db.Locations.findOne({
        attributes: ["location"],
        where: { id: allJobs[i].LocationId }
      });
      let skillIds = allJobs[i].JobSkills.map(jobSkill => {
        return jobSkill.SkillId;
      });
      let skills = await db.Skills.findAll({
        attributes: ["skill"],
        where: { id: skillIds }
      });
      skills = skills.map(skill => {
        return skill.skill;
      });
      let ReqIds = allJobs[i].JobRequirements.map(JobRequirement => {
        return JobRequirement.RequirementId;
      });
      let requirements = await db.Requirements.findAll({
        attributes: ["requirement"],
        where: { id: ReqIds }
      });
      requirements = requirements.map(requirement => {
        return requirement.requirement;
      });
      output.push({
        id: allJobs[i].id,
        title: allJobs[i].title,
        description: allJobs[i].description,
        location: location.location,
        skills: skills,
        requirements: requirements
      });
    }
    console.log(output);
    res.status(200).json(output);
  });
}

module.exports = function(app) {
  app.get("/api/jobs", async (req, res) => {
    try {
      console.log("api get received at /api/jobs");
      getJobs(null, res);
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
      //   "keywords":"web"
      //   }
      console.log(req.body);
      console.log(req.body.locations);
      console.log(req.body.skills);
      console.log(req.body.keywords);
      let keywords = `%${req.body.keywords}%`;
      // if (req.body.keywords !== null) {
      //   if (req.body.keywords.length > 0) {
      //     keywordsArr = [];
      //     req.body.keywords.forEach(element => {
      //       keywordsArr.push(`{ title: { [Op.like]: "%${element}%" } }`);
      //       keywordsArr.push(`{ description: { [Op.like]: "%${element}%" } }`);
      //     });
      //     keywords = keywordsArr.join(); //`{[Op.or]: ['${keywordsArr.join()}']}`;
      //     console.log(keywords);
      //   }
      // }
      const Op = db.Sequelize.Op;
      const condition = {
        [Op.and]: [
          { "$JobSkills.SkillId$": req.body.skills },
          { LocationId: req.body.locations },
          {
            [Op.or]: [
              { title: { [Op.like]: keywords } },
              { description: { [Op.like]: keywords } }
            ]
          }
        ]
      };

      getJobs(condition, res);
    } catch (err) {
      console.log(err);
      res.send("Error occurred:" + err);
    }
  });

  app.get("/api/locations", async (req, res) => {
    try {
      console.log("api get received at /api/locations");
      //it returns an array of objects that include location id and location name. The front-end can use this to populate the drop-downs, etc...
      db.Locations.findAll({ attributes: ["id", "location"] }).then(
        async allLocations => {
          let output = allLocations.map(location => {
            return { id: location.id, location: location.location };
          });
          console.log(output);
          res.status(200).json(output);
        }
      );
    } catch (err) {
      console.log(err);
      res.send("Error occurred:" + err);
    }
  });

  app.get("/api/skills", async (req, res) => {
    try {
      console.log("api get received at /api/skills");
      //it returns an array of objects that include skill id and skill title. The front-end can use this to populate the drop-downs, etc...
      db.Skills.findAll({ attributes: ["id", "skill"] }).then(
        async allSkills => {
          let output = allSkills.map(skill => {
            return { id: skill.id, skill: skill.skill };
          });
          console.log(output);
          res.status(200).json(output);
        }
      );
    } catch (err) {
      console.log(err);
      res.send("Error occurred:" + err);
    }
  });

  app.post("/api/apply", async (req, res) => {
    try {
      //Postman test
      // {
      //   "jobId": 1,
      //     "note": "I really really want this job"
      // }
      console.log("api post received at /api/apply");
      console.log(req.body.jobId);
      console.log(req.body.note);
      db.Applications.findOrCreate({
        where: {
          JobId: req.body.jobId,
          UserId: 1
        },
        defaults: {
          JobId: req.body.jobId,
          UserId: 1,
          note: req.body.note
        }
      }).then(result => {
        let application = result[0]; // the instance of the application
        let created = result[1]; // boolean stating if it was created or not
        if (created) {
          res.status(200).json(application);
        } else {
          res.status(403).send("Application already exists.");
        }
      });
    } catch (err) {
      console.log(err);
      res.send("Error occurred:" + err);
    }
  });
};
