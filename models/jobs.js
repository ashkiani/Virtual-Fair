module.exports = function (sequelize, DataTypes) {
  var Jobs = sequelize.define("tblJobs", {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });

  var Locations = sequelize.define("tblLocations", {
    location: DataTypes.STRING
  });

  // Adding location_id to tblJobs
  Locations.hasMany(Jobs, { foreignKey: 'location_id', onDelete: "cascade" });

  return Jobs;
};
