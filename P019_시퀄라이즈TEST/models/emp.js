module.exports=(sequelize, DataTypes) =>(

    sequelize.define('emp',{

        EMPNO:{
            type:DataTypes.INTEGER,
            primaryKey:true,
        },
        ENAME:{
            type:DataTypes.STRING(10),
            allowNull:true,  //널 허용하겠다. 
        },
        JOB:{
            type:DataTypes.STRING(9),
            allowNull:true,
        },
        MGR:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        HIREDATE:{
            type:DataTypes.DATE,
            allowNull:true,
        },
        SAL:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        COMM:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        DEPTNO:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        COPYENAME:{
            type:DataTypes.STRING(10),
            allowNull:true, 
        }

     },{
        freezeTableName: true,
        timestamps: false,
     })
);