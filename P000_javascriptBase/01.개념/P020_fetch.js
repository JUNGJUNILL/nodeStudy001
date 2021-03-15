const fetch =require('node-fetch');

fetch('http://localhost/asp/base/DealerInfo01_F01_window.jsp')
.then((res) => {
  if (res.status === 200 || res.status === 201) { // 성공을 알리는 HTTP 상태 코드면
    
    //Response 객체에서 값을 볼 수 있게 해주는 메소드 5가지가 있습니다.
    //text, arrayBuffer, blob, json, formData

    res.json().then(json => console.log(json)); 
    // json 반환 


    //   res.text().then(text => console.log(text)); 
    // text 반환 



  } else { // 실패를 알리는 HTTP 상태 코드면
    console.error(res.statusText);
  }
})
.catch(err => console.error(err));




// console.log('----------------------------------------------------------'); 

fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=0629834ae89dc98668de1dd8f46c9b34&targetDt=20120101')
.then(result=>result.json()) //json() promise를 반환하므로... 
.then(potato=>potato.boxOfficeResult.dailyBoxOfficeList.map(function(v){
    console.log(v.rnum+ " : " + v.movieNm , " : " , v.rank); 
}));



console.log('----------------------------------------------------------'); 

// fetch('http://localhost/asp/study/HubmekaAPIServer.jsp?command=load')
// .then(result=>result.json()) //json() promise를 반환하므로... 
// .then(potato=>potato.map((v)=>{
//     console.log(v.EMPNO ," : ", 
//                 v.ENAME ," : ",
//                 v.JOB ," : ",
//                 v.MGR ," : ",
//                 v.HIREDATE ," : ",
//                 v.SAL ," : ",
//                 v.COMM ," : ",
//                 v.DEPTNO 
//                 ); 
// }));
