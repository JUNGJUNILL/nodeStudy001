

const appentList = ['와사비','생와사비','초밥']; 

const materialNameList = ['와사비1kg','와사비1box','와사비2pack']; 



//console.log((materialNameList[0]+' '.concat(appentList)).replace(/,/gi," "));


//예상 결과값 
/*
와사비1kg 와사비 생와사비 초밥 
와사비1box 와사비 생와사비 초밥 
와사비2pack 와사비 생와사비 초밥 
*/


//materialNameList

materialNameList.map((v,i)=>{

    let vv=''
    vv=v+' '.concat(appentList).replace(/,/gi," "); 
    console.log(vv); 

})