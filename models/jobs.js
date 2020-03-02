module.exports = function (sequelize, DataTypes) {
  var Jobs = sequelize.define("Jobs", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Jobs.associate = function (models) {
    Jobs.hasMany(models.JobSkills, {
      onDelete: "cascade"
    });
    Jobs.hasMany(models.Applications, {
      onDelete: "cascade"
    });
    Jobs.hasMany(models.JobRequirements, {
      onDelete: "cascade"
    });
  };

  return Jobs;
};