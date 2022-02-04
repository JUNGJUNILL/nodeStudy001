var faker = require('faker');
var randomName = faker.name.findName();
var hello = faker.lorem.paragraph(); 

console.log(hello)

for(let i=0; i<50; i++){
    console.log(faker.name.findName()); 
}