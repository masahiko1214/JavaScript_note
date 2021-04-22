function hello(name){
  name = name || 'Tom';
  
    console.log('hello' + name);
  
  }
  hello('Bob')
  
  let name = 'Bob';
  
  name && hello(name);