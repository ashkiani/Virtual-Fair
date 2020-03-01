module.exports = function (sequelize, DataTypes) {
    var Jobs = sequelize.define("Jobs", {
        title: DataTypes.STRING,
        description: DataTypes.TEXT
    });

    Jobs.associate = function(models) {
        Jobs.hasMany(models.JobSkills, {
          onDelete: "cascade"
        });
      };

      Jobs.associate = function(models) {
        Jobs.hasMany(models.JobRequirements, {
          onDelete: "cascade"
        });
      };

      Jobs.associate = function (models) {
        Jobs.hasMany(models.Applications, {
            onDelete: "cascade"
        });
    };

    Jobs.associate = function (models) {
        Jobs.belongsTo(models.Locations, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Jobs;
};