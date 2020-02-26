module.exports = function(sequelize, DataTypes) {
    var Jobs = sequelize.define("tblJobs", {
      title: DataTypes.STRING,
      description: DataTypes.STRING
    });
    return Jobs;
  };
  