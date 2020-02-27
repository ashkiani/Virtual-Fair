module.exports = function(sequelize, DataTypes) {
    
    var JobSkills = sequelize.define("tblJobsSkills", {
    });

    var Skills = sequelize.define("tblSkills", {
        skill: DataTypes.STRING
      });

      var Jobs = sequelize.define("tblJobs", {
        title: DataTypes.STRING,
        description: DataTypes.STRING
      });
  
      //Setting foreign key for tblJobsSkills
      Jobs.hasMany(JobSkills, {as: 'job_id'});
      Skills.hasMany(JobSkills, {foreignKey: 'skill_id'});

    return JobSkills;
  };
  