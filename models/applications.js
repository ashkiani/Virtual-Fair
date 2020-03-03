module.exports = function (sequelize, DataTypes) {
    
            var Applications = sequelize.define("Applications", {
                note: DataTypes.TEXT
            });
            
            Applications.associate = function (models) {
                Applications.hasMany(models.AdminActions, {
                    onDelete: "cascade"
                });
            };
        
            return Applications;
   
};
