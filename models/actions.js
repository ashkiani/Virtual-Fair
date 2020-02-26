module.exports = function(sequelize, DataTypes) {
    var Actions = sequelize.define("tblActions", {
      action: DataTypes.STRING
    });
    return Actions;
  };
  