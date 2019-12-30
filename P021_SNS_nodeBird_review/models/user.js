module.exports = (sequelize, DataTypes)=>(


    sequelize.define('user',{

        email:{
            type:DataTypes.STRING(40),   
            allowNull:false, 
            unique:true, 
            //email nvarchar(40) primary key 
        },

        nick:{
            type:DataTypes.STRING(15), 
            allowNull:false, 
            //nick nvarchar(15)  
        }, 

        password:{
            type:DataTypes.STRING(100), 
            allowNull:true,
            //password nvarchar(100) not null 
        }, 

        provider:{
            type:DataTypes.STRING(10), 
            allowNull:false, 
            defaultValue:'local', 
            //provider nvarchar(10) not null default 'local' 
        }, 

        snsId:{
            type:DataTypes.STRING(30), 
            allowNull:true, 
            //snsId nvarchar(30) 
        },
    },{
        timestamps:true,
        //createdAt
        //updatedAt
        //컬럼 자동 생성 

        paranoid:true,
        //deletedAt
        //컬럼 자동 생성 
        //해당 row를 삭제시 실제로 데이터가 삭제되지 않고
        //deletedAt에 삭제된 날짜가 추가되며 deletedAt에 날짜가 표기된 row는 find작업시 제외된다.
        //즉, 데이터는 삭제되지 않지만 삭제된 효과를 준다. 
        //timestamps 옵션이 true 여야 사용이 가능하다. 
    }
    
    )
)

