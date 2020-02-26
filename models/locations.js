module.exports = function(sequelize, DataTypes) {
    var Locations = sequelize.define("tblLocations", {
      location: DataTypes.STRING
    });
    return Locations;
  };
  