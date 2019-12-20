const fs = require('fs'); 

fs.readFile(__dirname+'/good.txt','utf8',(err,data)=>{
    let array  = data.replace(/\r\n/g,',').split(',');
    




    try {
        array.map(v=>{
            v = `'${v}',`;
            fs.appendFileSync(__dirname+'/goodedit.txt', v);
          
    })
        
        console.log('The "data to append" was appended to file!');
      } catch (err) {
        /* Handle the error */
      }

}); 