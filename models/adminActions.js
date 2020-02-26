module.exports = function(sequelize, DataTypes) {
    var AdminActions = sequelize.define("tblAdminActions", {
      note: DataTypes.TEXT
    });
    return AdminActions;
  };
  