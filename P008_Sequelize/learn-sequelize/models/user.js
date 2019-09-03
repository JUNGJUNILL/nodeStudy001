module.exports = (sequelize , DataType)=>{

    return sequelize.define('user',{

        name: {
            type: DataType.STRING(20),
            allowNull: false,
            unique: true, 

        },

        age: {
            type: DataType.INTEGER,
            allowNull: false,

        },

        married: {
            type: DataType.BOOLEAN,
            allowNull: false,

        },

        comment:{
            type: DataType.TEXT,
            allowNull: true,
        },

        created_at: {
            type: DataType.DATE,
            allowNull: false, 
            defaultValue: sequelize.literal('getdate()'), 
                          //이 메서드는 인자로 넣은 문자를 그대로 사용하는 역할을 한다. 
        },
    },{
        timestamps: false,
    });
}