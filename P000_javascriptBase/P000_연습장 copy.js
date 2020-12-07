
const aaa = [1,2,3]; 



const array01 = [
                    {a:1,b:1,c:1},
                    {a:2,b:2,c:2},
                    {a:3,b:3,c:3},
                ]; 

                
console.log(aaa[0] = array01[0].a + 1); 
console.log(aaa[0]); 
const array02 = [...array01]; 

array01.map((v,i)=>{

    if(v.a ===1 ){
        array02[i] = {...array01[i] , a: v.a +1}
    }

})


array02.map((v)=>{
    console.log(v); 
})

array01.concat(  [{a:4,b:4,c:4}])

console.log(array01); 

