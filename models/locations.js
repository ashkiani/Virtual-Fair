module.exports = function(sequelize, DataTypes) {
    var Locations = sequelize.define("Locations", {
      location: DataTypes.STRING
    });

    Locations.associate = function(models) {
        Locations.hasMany(models.Jobs, {
          onDelete: "cascade"
        });
      };
 
    return Locations;
  };
  