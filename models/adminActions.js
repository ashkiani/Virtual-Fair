module.exports = function (sequelize, DataTypes) {
    var AdminActions = sequelize.define("AdminActions", {
        note: DataTypes.TEXT
    });
    
    return AdminActions;
};
