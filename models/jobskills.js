module.exports = function(sequelize, DataTypes) {
    var JobSkills = sequelize.define("JobSkills", {
    });

    JobSkills.associate = function (models) {
        JobSkills.belongsTo(models.Skills, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    JobSkills.associate = function (models) {
        JobSkills.belongsTo(models.Jobs, {
            foreignKey: {
                allowNull: false
            }
        });
    };
 
    return JobSkills;
  };
  