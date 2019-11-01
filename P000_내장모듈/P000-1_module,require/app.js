var {English, Korean} = require('./greet');//비구조화 할당으로 여러 개를 가져 올  수 도 있다.
                                   //greet폴더의 index.js파일을 만듦으로서
                                   //require 메서드가 특별히 인식하는 파일(index.js)이다. 
                                   //그러므로 여러 모듈을 가져올 떄 활용된다.
                                    

var 잉글리쉬 = require('./greet').English; //하나하나씩 가져 올 수 도 있다. 




English();
Korean();
잉글리쉬(); 