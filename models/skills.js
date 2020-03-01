module.exports = function(sequelize, DataTypes) {
    var Skills = sequelize.define("Skills", {
      skill: DataTypes.STRING
    });

    Skills.associate = function(models) {
        Skills.hasMany(models.JobSkills, {
          onDelete: "cascade"
        });
      };
 
    return Skills;
  };
  