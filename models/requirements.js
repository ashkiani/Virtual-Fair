module.exports = function(sequelize, DataTypes) {
    var Requirements = sequelize.define("tblRequirements", {
      requirement: DataTypes.STRING
    });
    return Requirements;
  };
  