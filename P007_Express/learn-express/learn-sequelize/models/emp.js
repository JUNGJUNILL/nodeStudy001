module.exports = (sequelize, DataTypes) => {

    return sequelize.define('emp',{
        ename : {
            type: DataTypes.STRING(10), 
            allowNull: false, 
        },
        job : {
            type: DataTypes.STRING(9), 
            allowNull: false, 
        },
        deptno : {
            type: DataTypes.NUMBER, 
            allowNull: false, 
        },
    }, {

        timestamps: false, 
    });

};