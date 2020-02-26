module.exports = function(sequelize, DataTypes) {
    var JobSkills = sequelize.define("tblJobsSkills", {
        name: DataTypes.STRING
    });


    // JobSkills.associate = function(models) {
    //     JobSkills.belongsTo(models.Skills, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };
      
    return JobSkills;
  };
  