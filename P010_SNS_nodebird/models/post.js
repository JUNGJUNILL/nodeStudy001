module.exports = (sequelize, DataType)=> (


    sequelize.define('post',{

        userid: {
            type:DataType.STRING(20), 
            primaryKey:true,
            

        }, 

        seq: {       
            type:DataType.INTEGER, 
            primaryKey:true,

        }, 

        content: {
            type: DataType.STRING(140),
            allowNull: false,

        },

        img: {
            type: DataType.STRING(200),
            allowNull: true,

        },

    } ,{

        timestamps: true,
        paranoid: true, 

    })

); 