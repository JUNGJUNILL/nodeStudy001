const axios = require('axios'); 
axios.defaults.baseURL =  'http://www.kobis.or.kr';
const param1 = '/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=0629834ae89dc98668de1dd8f46c9b34&targetDt=20120101';
const param2 = 'http://localhost/asp/study/HubmekaAPIServer.jsp'; 
axios.get(param1)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    console.log(response.status);
    console.log(response.statusText);
    console.log(JSON.stringify(response.headers));
    console.log(JSON.stringify(response.config));
  });