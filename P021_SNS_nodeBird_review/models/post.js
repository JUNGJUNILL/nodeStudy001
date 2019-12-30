module.exports = (sequelize, DataTypes)=>(

    sequelize.define('post',{
        
        content:{
            type:DataTypes.STRING(140), 
            allowNull: false, 
            //content nvarchar(40) not null 
        },

        img:{
            type:DataTypes.STRING(200), 
            allowNull:true, 
            //img nvarchar(200) 
        }, 
    },{
        timestamps:true,
        paranoid:true,

    })


); 