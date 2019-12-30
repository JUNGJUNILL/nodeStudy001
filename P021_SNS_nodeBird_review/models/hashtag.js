module.exports = (sequelize, DataTypes)=>(

    sequelize.define('hashtag',{


        title:{
            type:DataTypes.STRING(15), 
            allowNull:false, 
            unique:true, 
            //title nvarchar(15) primary key 
        },
        },{
            timestamps:true,
            paranoid:true,
    })

); 