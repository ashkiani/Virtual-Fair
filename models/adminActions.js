module.exports = function (sequelize, DataTypes) {
    var AdminActions = sequelize.define("AdminActions", {
        note: DataTypes.TEXT
    });
    

    AdminActions.associate = function (models) {
        AdminActions.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    AdminActions.associate = function (models) {
        AdminActions.belongsTo(models.Applications, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    AdminActions.associate = function (models) {
        AdminActions.belongsTo(models.Actions, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return AdminActions;
};
