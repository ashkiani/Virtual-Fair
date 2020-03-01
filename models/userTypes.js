module.exports = function (sequelize, DataTypes) {
    var UserTypes = sequelize.define("UserTypes", {
       
    });

    UserTypes.associate = function (models) {
        UserTypes.hasMany(models.UsersTypes, {
            onDelete: "cascade"
        });
    };

    return UserTypes;
};