module.exports = (sequelize, DataTypes) => {

    return sequelize.define('dept',{
        loc : {
            type: DataTypes.STRING(13), 
            allowNull: true, 
        },
        dname : {
            type: DataTypes.STRING(14), 
            allowNull: true, 
        },
    }, {

        timestamps: false, 
    });

};