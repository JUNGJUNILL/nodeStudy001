var yoosa = {

0:'a',
1:'b',
2:'c',
length:3

}; 

var array = ['a','b','c']; 

array.forEach(function(v){
    console.log(v); 
});

console.log('---------------------------'); 


Array.prototype.forEach.call(yoosa,function(el){
    console.log(el); 
});

console.log('---------------------------'); 
console.log(Array.isArray(yoosa)); 

