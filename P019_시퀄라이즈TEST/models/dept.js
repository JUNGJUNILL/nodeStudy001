module.exports=(sequelize, DataTypes) =>(

    sequelize.define('dept',{

        DEPTNO:{
            type:DataTypes.INTEGER,
            primaryKey:true,
        },
        DNAME:{
            type:DataTypes.STRING(14),
            allowNull:true,  //널 허용하겠다. 
        },
        LOC:{
            type:DataTypes.STRING(13),
            allowNull:true,
        }
     },{
        freezeTableName: true,
        timestamps: false,
     })
);