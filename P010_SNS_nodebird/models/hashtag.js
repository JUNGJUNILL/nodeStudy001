module.exports = (sequelize, DataType)=> (


    sequelize.define('hashtag',{

        seq: {
            type:DataType.INTEGER, 
            primaryKey:true,

        },
        //POST가 USERID , SEQ로 다중 키가 잡혀 있다 하더라도.. 
        //SEQ 값은 고유하다. 

        title: {
            type:DataType.STRING(15),
            allowNull: false,

        }


    } ,{

        timestamps: true,
        paranoid: true, 

    })

); 