
const array = [
    { id: 0, text: 'hello', tag: 'a' },
    { id: 1, text: 'world' , tag: 'b' },
    { id: 2, text: 'bye', tag: 'c' }
  ];

  const modifiedArray = array.map(item => item.id === 1? ({ ...item, text: 'Korea' }) : item )
  modifiedArray.map(v=>console.log(v)); 

  const obj1 = { foo: 'bar', x: 42 };
  const obj2 = { foo: 'baz', y: 13 };
  const obj3 = { foo: 'helloWorld', y: 99, z:100 };

  const objtest = {...obj1,...obj2,...obj3}; 
  console.log(objtest)


  const merge = (...objects) => ({...objects}); 
  const mergedObj = merge(obj1,obj2); 
  console.log(mergedObj)