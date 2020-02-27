module.exports = function(sequelize, DataTypes) {
    var UserTypes = sequelize.define("tblUsersTypes", {
      
    });

    var Users = sequelize.define("tblUsers", {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    });

    var UserType = sequelize.define("tblUserType", {
      type: DataTypes.STRING
    });

    // Adding user_ID and type_ID to tblUsersTypes
    Users.hasMany(UserTypes, {foreignKey: 'user_id', onDelete: "cascade"});
    UserType.hasMany(UserTypes, {foreignKey: 'type_id', onDelete: "cascade"});
    
    return UserTypes;
  };
  