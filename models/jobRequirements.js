module.exports = function(sequelize, DataTypes) {
    var JobRequirements = sequelize.define("JobRequirements", {
    });

    JobRequirements.associate = function (models) {
        JobRequirements.belongsTo(models.Requirements, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    JobRequirements.associate = function (models) {
        JobRequirements.belongsTo(models.Jobs, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return JobRequirements;
  };