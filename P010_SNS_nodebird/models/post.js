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

        createdAt: {
            type: DataType.DATE,
            allowNull: false, 
            defaultValue: sequelize.literal('getdate()'), 
                          //이 메서드는 인자로 넣은 문자를 그대로 사용하는 역할을 한다. 
        },

        updatedAt: {
            type: DataType.DATE,
            allowNull: false, 
            defaultValue: sequelize.literal('getdate()'), 
                          //이 메서드는 인자로 넣은 문자를 그대로 사용하는 역할을 한다. 
        },

        deletedAt: {
            type: DataType.DATE,
            allowNull: false, 
            defaultValue: sequelize.literal('getdate()'), 
                          //이 메서드는 인자로 넣은 문자를 그대로 사용하는 역할을 한다. 
        },

    } 
    
    
    ,{
        timestamps: false,
    })

); 