module.exports = (sequelize, DataTypes)=>(

    sequelize.define('domain',{
    
        host: { //인터넷 주소
            type:DataTypes.STRING(80),
            allowNull: false, 
        }, 
    
        type:{ //도메인 종류
            type:DataTypes.STRING(10), 
            allowNull: false, 
    
        },
    
        clientSecret:{ //클라이언트 비밀키 : API를 사용할 때 필요한 비밀키입니다. 
            type:DataTypes.STRING(40), 
            allowNull: false, 
    
        },
      },{
          validate:{
              unknownType() {
                  console.log(this.type,this.type !== 'free', this.type !== ' premium'); 
                  if(this.type !== 'free' && this.type !=='premium'){
                      throw new Error('type 컬럼은 free나 premium이어야 합니다.')
                  }
              },
          },

          timestamps:true, 
          paranoid:true,

            })
        ); 
    
    
    
    
    