module.exports = function(sequelize, DataTypes) {
    var Skills = sequelize.define("tblSkills", {
      skill: DataTypes.STRING
    });

    // Skills.associate = function(models) {
    //     Skills.hasMany(models.JobSkills, {
    //       onDelete: "cascade"
    //     });
    //   };
    return Skills;
  };
  