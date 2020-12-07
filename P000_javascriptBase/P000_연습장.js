
const todos =  [
    {id:0, text: '  리액트 소개', checked: false},
    {id:1, text: '  리액트 소개', checked: true},
    {id:2, text: '  리액트 소개', checked: false},
  ] ;

const array  = [...todos]; 

todos.map((v,i)=>{

    if(v.id === 0 ) {
        array[i] ={ ...todos[i] , checked: !v.checked,good:'테스형'}

    }
    console.log('array=>' , array.length); 

}); 


array.map((v,i)=>{
    console.log(v); 
})