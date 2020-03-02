module.exports = function(sequelize, DataTypes) {
    var Requirements = sequelize.define("Requirements", {
      requirement: DataTypes.STRING
    });

    
    Requirements.associate = function(models) {
        Requirements.hasMany(models.JobRequirements, {
          onDelete: "cascade"
        });
      };

    return Requirements;
  };