const file = {0:{File:{name:'jji',size:'10000'}}}
console.log(Object.keys(file))
console.log(Object.values(file)[0]);
console.log(JSON.stringify(Object.values(file)[0].File.size))
console.log(JSON.stringify(Object.values(file)[0].File.name))