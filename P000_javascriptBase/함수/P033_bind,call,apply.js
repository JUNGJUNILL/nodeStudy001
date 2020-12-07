function sum(num) {

    return num + this.num1 + this.num2; 

}

var myObj = {num1:100,num2:100}; 

var custumSum  = sum.bind(myObj); 
console.log(custumSum(5)); 