module.exports = function(sequelize, DataTypes) {
    var UserType = sequelize.define("tblUserType", {
      type: DataTypes.STRING
    });
    return UserType;
  };
  