

const fetch = require('node-fetch'); 

fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download').then(result=>result.json()) //json() promise를 반환하므로... 
                                                                .then(potato=>potato.data.movies.map(function(v){
                                                                  console.log(v.id , " : " , v.title_english); 
                                                                }));

