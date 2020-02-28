module.exports = function (sequelize, DataTypes) {

  var JobSkills = sequelize.define("tblJobsSkills", {
  });

  var Skills = sequelize.define("tblSkills", {
    skill: DataTypes.STRING
  });

  var Jobs = sequelize.define("tblJobs", {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });

  var Locations = sequelize.define("tblLocations", {
    location: DataTypes.STRING
  });

  // Adding job_ID and skill_ID to tblJobsSkills
  Jobs.hasMany(JobSkills, { foreignKey: 'job_id', onDelete: "cascade" });
  Skills.hasMany(JobSkills, { foreignKey: 'skill_id', onDelete: "cascade" });

  // Adding location_id to tblJobs
  Locations.hasMany(Jobs, { foreignKey: 'location_id', onDelete: "cascade" });

  return JobSkills;
};
