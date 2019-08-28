module.exports = (sequelize, DataTypes) =>{

    //시퀄라이즈는 알아서 id를 기본키로 연결하므로 id 컬럼은 적어줄 필요가 없습니다.
    return sequelize.define('comment',{

        comment: {
            type:DataTypes.STRING(100),
            allowNull:false, 
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: false, 
            defaultValue: sequelize.literal('getdate()'),
        }

    },{
        timestamps: false, 
        //timestamps 속성이 true면 시퀄라이즈는 createAt, updatedAt 컬럼을 추가합니다. 
        //로우가 생성될 때와 수정될 때의 시간이 자동으로 입력된다. 

    });

}