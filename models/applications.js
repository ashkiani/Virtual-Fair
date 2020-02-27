module.exports = function(sequelize, DataTypes) {
    var Applications = sequelize.define("tblApplications", {
      note: DataTypes.TEXT
    });

    var Jobs = sequelize.define("tblJobs", {
      title: DataTypes.STRING,
      description: DataTypes.STRING
    });

    var Users = sequelize.define("tblUsers", {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    });

     // Adding job_ID and applicaant_ID to tblApplications
     Jobs.hasMany(Applications, {foreignKey: 'job_id', onDelete: "cascade"});
     Users.hasMany(Applications, {foreignKey: 'applicant_id', onDelete: "cascade"});

    return Applications;
  };
  