module.exports = function(sequelize, DataTypes) {
    var AdminActions = sequelize.define("tblAdminActions", {
      note: DataTypes.TEXT
    });

    var Users = sequelize.define("tblUsers", {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    });

    var Applications = sequelize.define("tblApplications", {
      note: DataTypes.TEXT
    });

    var Actions = sequelize.define("tblActions", {
      action: DataTypes.STRING
    });

// Adding admin_ID, application_ID, action_id to tblAdminActions
Users.hasMany(AdminActions, {foreignKey: 'admin_id', onDelete: "cascade"});
Applications.hasMany(AdminActions, {foreignKey: 'application_id', onDelete: "cascade"});
Actions.hasMany(AdminActions, {foreignKey: 'action_id', onDelete: "cascade"});

    return AdminActions;
  };
  