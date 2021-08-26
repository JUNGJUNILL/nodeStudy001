const imageFileName=[
'file01.jpg',
'file02.jpg',
'file03.jpg'

]


// hello.map((v,i)=>{

//   console.log(imageFileName[i].split('/')[imageFileName[i].split('/').length-1])

// })


const hello ='https://jscompany-s3.s3.ap-northeast-2.amazonaws.com/images/1001/04_1627482871040_1111.jpg'; 
console.log(hello.split('/')[hello.split('/').length-1])
