//var JobSkills = require("./jobsSkills");

module.exports = function(sequelize, DataTypes) {
    var Skills = sequelize.define("tblSkills", {
      skill: DataTypes.STRING
    });

    return Skills;
  };
  