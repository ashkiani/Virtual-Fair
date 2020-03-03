module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });

    Users.associate = function (models) {
        Users.hasMany(models.Applications, {
            onDelete: "cascade"
        });
        Users.hasMany(models.AdminActions, {
            onDelete: "cascade"
        });
        Users.hasMany(models.UsersTypes, {
            onDelete: "cascade"
        });
    };

    return Users;
};
