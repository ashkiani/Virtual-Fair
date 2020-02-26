module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("tblUsers", {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    });
    return Users;
  };
  