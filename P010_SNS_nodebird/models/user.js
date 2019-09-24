module.exports = (sequelize, DataType) => (

    sequelize.define('birduser',{

            userid: {

                type:DataType.STRING(20), 
                primaryKey:true,
                

            },                  

            email: {

                
                type:DataType.STRING(40), 
                primaryKey:true,

            }, 

            nick: {

                type: DataType.STRING(15),
                allowNull: false,
            },

            password:{

                type: DataType.STRING(100),
                allowNull: false,
            },

            providers:{


                type: DataType.STRING(100),
                allowNull: false,
                defaultValue: 'local',
            },

            snsId:{

                type: DataType.STRING(30),
                allowNull: true,
            },

            remark01:{

                type: DataType.STRING(100),
                allowNull: true,
            },
        },
            {

                timestamps: true,
                paranoid: true, 
            })
);