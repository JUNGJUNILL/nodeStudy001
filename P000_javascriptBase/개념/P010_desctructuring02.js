const iu = {

        name:'아이유',
        age:25,
        gender:'female',

}

const {

    name:n,
    age:a,
    gender:g

} = iu; 

console.log(n,a,g); 

console.log("--------------------------------------------------------"); 


const iu01 = {


    name:'아이유',
    age:25,
    gender:'female',

}

const {

    name,
    age,
    gender,

} =iu01

console.log(name,age,gender);

console.log("--------------------------------------------------------"); 


const loginInfo = {


    device : {

        createAt :'20191021',
        deviced : 'phone',
        deviceType: 'samsung',

    },


    user : {
        createAt : '20190101',
        email : 'fkdldjseodnl@naver.com',
        name : '정준일', 
        nickname : "captainryan", 
        number : "01088055172"
    }

}

const {

    device : {
        createAt,
        deviced,
        deviceType
    },
    user : userInfo,
    user : {
        createAt : userCreatedAt,
        email,
        name1
      
    
    }


} =  loginInfo; 

console.log(userInfo)



/*
const {
    device : {
        createAt,
        deviced,
        deviceType
    },
    user : userInfo,
    user : {
        createAt : userCreatedAt,
        email,
        name1
      
    }
    } = {
        device : {
            createAt : '20190101',
            deviced : "phone",
            deviceType : "samsung"
        },
        user : {
            createAt : '20190101',
            email : 'fkdldjseodnl@naver.com',
            name : '정준일', 
            nickname : "captainryan", 
            number : "01088055172"
        }
    }
    */console.log("--------------------------------------------------------"); 


    const phone01 = {

        name:'아이폰',
        color:undefined,

    }

    const {
        name : name02,
        version : version02 = "testVersion",
        color: color02 = "blue",

    } =phone01

    console.log(name02,version02,color02); 

    console.log("--------------------------------------------------------"); 



    const deliveryProduct = {


        orderedDate:'20190101',
        estimatedDate: '20190102',
        status: '배송중',
        items : [
            {name :'사과' , price:1000 , qty: 3 },
            {name :'딸기' , price:2000,  qty:4 },
            {name :'보리' , price:50000 , qty:1 },

        ]

    }


const { 

    estimatedDate : esti,
    status,
    items : [,...produces]

} =deliveryProduct


produces.map((v)=>{
    console.log(v);
})


console.log("--------------------------------------------------------"); 


const getArea = (info)=>{

    const {
        width,
        height,
    } =info 
    
    console.log('width * height =>  ' , width*height); 


}

getArea({width:10,height:10});


const getArea01 = ({width,height} = {width:0,height:0})=>{

        console.log('width,height->  ',width,height); 


}



console.log("--------------------------------------------------------"); 

function objFunction(){

    console.log('Inside `objFunction`:', this.foo);

    return {

        foo: 25,
        bar: () => console.log('Inside `bar`:', this.foo),


    }


}

objFunction.call({foo: 13}).bar();