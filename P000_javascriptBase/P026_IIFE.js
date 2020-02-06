(function () {
    console.log("I am an IIFE, too!");
  })();


  (function IIFE(msg, times) {
    for (var i=1; i<=times; i++){
      console.log(msg);  
    }
  })("Hello!", 5);



  var Sequence = (function sequenceIIFE() {
    // 현재 counter 값을 저장하기 위한 Private 변수입니다.
    var current = 0;
  
    // IIFE에서 반환되는 객체입니다.
    return {
    };
  
  }());
  
  //클래식한 자바스크립트 모듈 패턴
  var Sequence = (function sequenceIIFE() {
    // 현재 counter 값을 저장하기 위한 Private 변수입니다.
    var current = 0;
  
    // IIFE에서 반환되는 객체입니다.
    return {hello:'good'};
  
  }());
  
  console.log(typeof Sequence , Sequence);



  var test = (function testIIFE(){

    var current01 = 0; 

    return {

            getCurrentValue: function() {

                return current01; 
            
    }, 

    getNextValue : function() {
        current01 = current01 + 1; 
        return current01; 

      }


    }

  })(); 

console.log(test.getCurrentValue());   // 0
console.log(test.getNextValue());      // 1
console.log(test.getNextValue());      // 2
console.log(test.getCurrentValue());   // 2
