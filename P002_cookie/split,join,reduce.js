const parseCookies = (cookie = '') =>{
    
    cookie
      .split(';')
      .map(v => v.split('='))
      .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
      }, {});
  
  }
  
  //req.headers.cookie
  const parameter = 'connect.sid=s%3A4Zsdua_nwUG5UCObFCEOsY5_rjJkeThm.xvaXHDQimpu43mA9tbXSJwCs%2FMc9evILr%2BSrXret708; io=wtwgGYWRiH9ZcXJBAAAI; name=testNodeBird; mycookie=test; hollyShut=sex';
  
  //split의 반환값은 배열... 
  const resultSplit  = parameter.split(';'); 
  
  const resultMap = resultSplit.map((v)=>{

      return v.split('='); 
  }); 


  const resultReduce = resultMap.reduce((acc,[k,v])=>{

      acc[k.trim()]  = v; 
      return acc; 

  },{}); 
    //초기값이 존재한다.. 
    //0번째 배열부터 순회 

    //초기값이 없는경우
    //1번째 배열부터 순회... 
console.log('resultReduce-->' , resultReduce); 
