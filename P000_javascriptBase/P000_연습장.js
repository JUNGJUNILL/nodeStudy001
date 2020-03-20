
const todos =  [
  {id:0, text: '  리액트 소개', checked: false},
  {id:1, text: '  리액트 소개', checked: true},
  {id:2, text: '  리액트 소개', checked: false},
] ;


const add = [...todos,{id:3, text: ' ' , checked:true}]

//add.map((v)=>console.log(v,'헬로우')); 



const newArray = todos.concat({id:4,text:'씌발' , checked: true});
// newArray.map(v=>console.log(v));

const newArray01 = [...todos,{id:5, text:'신발', checked: true}]
newArray01.map(v=>console.log(v));


newArray01.findIndex(todo=>todo.id)
