const bcrypt = require('bcrypt');

async function callback(){
  const result =await bcrypt.compare('123123', '$2b$12$H62siddjt/Axv3d.tFFFMuy/zGdxY7jYlZ/7QqwO2OLmhjFH1sU8C');
  console.log(result); 
}
callback();