module.exports = function(sequelize, DataTypes) {
    var JobRequirements = sequelize.define("tblJobsRequirements", {
    });

    var Jobs = sequelize.define("tblJobs", {
      title: DataTypes.STRING,
      description: DataTypes.STRING
    });

    var Requirements = sequelize.define("tblRequirements", {
      requirement: DataTypes.STRING
    });

    // Adding job_ID and requirement_ID to tblJobsSkills
    Jobs.hasMany(JobRequirements, {foreignKey: 'job_id', onDelete: "cascade"});
    Requirements.hasMany(JobRequirements, {foreignKey: 'requirement_id', onDelete: "cascade"});

    return JobRequirements;
  };
  