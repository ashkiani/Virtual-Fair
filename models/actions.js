module.exports = function (sequelize, DataTypes) {
    var Actions = sequelize.define("Actions", {
        action: DataTypes.STRING
    });

    Actions.associate = function (models) {
        Actions.hasMany(models.AdminActions, {
            onDelete: "cascade"
        });
    };

    return Actions;
};
