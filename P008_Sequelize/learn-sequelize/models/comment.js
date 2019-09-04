module.exports = (sequelize , DataType)=>{

    return sequelize.define('comment',{

        id: {
            type:DataType.INTEGER,
            primaryKey:true,
        },

        comment: {
            type: DataType.STRING(100),
            allowNull: false,

        },
        created_at: {
            type: DataType.DATE,
            allowNull: false, 
            defaultValue: sequelize.literal('getdate()'), 
        },

        seq: {
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        }
        
    },{
        timestamps: false,
    });
}