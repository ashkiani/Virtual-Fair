module.exports = function (sequelize, DataTypes) {
    var UsersTypes = sequelize.define("UsersTypes", {
       
    });

    UsersTypes.associate = function (models) {
        UsersTypes.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    UsersTypes.associate = function (models) {
        UsersTypes.belongsTo(models.UserTypes, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return UsersTypes;
};