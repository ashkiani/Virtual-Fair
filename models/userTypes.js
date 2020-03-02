module.exports = function (sequelize, DataTypes) {
    var UserTypes = sequelize.define("UserTypes", {
        type: DataTypes.STRING
    });

    UserTypes.associate = function (models) {
        UserTypes.hasMany(models.UsersTypes, {
            onDelete: "cascade"
        });
    };

    return UserTypes;
};