module.exports = function(sequelize, DataTypes) {
    var Applications = sequelize.define("tblApplications", {
      note: DataTypes.TEXT
    });
    return Applications;
  };
  