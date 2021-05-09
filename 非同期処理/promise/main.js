new Promise(function (resolve,reject){
  console.log('promise');
  resolve();
}).then(function(){
  console.log('then');
})

console.log('global end');