new Promise(function (resolve,reject){
  console.log('promise');

  setTimeout(function(){
     resolve("hello")
  },1000)
  
  // reject("bye");

}).then(function(data){
  console.log('then: ' + data);
  // throw new Error();
  return data;
}).then(function(data){
  console.log('then ' + data);
}).then(function(data){
  console.log('then');
}).catch(function(data){
  console.log('catch ' + data);
}).finally(function(data){
  console.log('finally');
});

console.log('global end');