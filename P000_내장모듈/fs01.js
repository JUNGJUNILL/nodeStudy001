const fs = require('fs'); 

var list;
fs.readFile(__dirname+'/materialappendword.txt','utf8',(err,data)=>{

   list =data.replace(/\r\n/g,',').split(',');
 // console.log(list); 

})

fs.readFile(__dirname+'/materialName.txt','utf8',(err,data)=>{
    let array  = data.replace(/\r\n/g,',').split(',');
    




    try {
      array.map((v)=>{

        const newArray=[];
        newArray.push(v); 
      //  let insert = newArray.concat(list).join(' ');
      let insert = list.concat(newArray).join(' ');
      
        //insert.replace(',',/\r\n/g);
        console.log(insert); 
        
      
        fs.appendFileSync(__dirname+'/materialNameEdit.txt',insert+'\n');
      })
        
        // array.map(v=>{
        //     v = `'${v}',`;
        //     fs.appendFileSync(__dirname+'/goodedit.txt', v);
          
   // })
        
        console.log('The "data to append" was appended to file!');
      } catch (err) {
        /* Handle the error */
      }

}); 