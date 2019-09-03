module.exports = (sequelize , DataType)=>{

    return sequelize.define('comment',{

        comment: {
            type: DataType.STRING(100),
            allowNull: false,

        },
        created_at: {
            type: DataType.DATE,
            allowNull: false, 
            defaultValue: sequelize.literal('getdate()'), 
        },
    },{
        timestamps: false,
    });
}