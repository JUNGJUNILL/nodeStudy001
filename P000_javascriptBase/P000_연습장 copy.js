const array =[  {id:0, text: '  리액트 소개', checked: false}]


array[0] = {...array[0] , checked : true}; 


array.map((v,i)=>{
    console.log(v); 
})