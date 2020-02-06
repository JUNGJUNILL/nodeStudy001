
class A {

    constructor(a){
        this.parentA = a*2; 
    }
}



class B extends A{

    constructor(a,b){
        super(a)
        this.parentB = b*3; 
    }
}

const b = new B(2,2); 
console.log(b); 