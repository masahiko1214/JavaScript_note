function hello(name){
  console.log('hello' + name)
}
function bye(){
  console.log('bye')
}

function fn(cb){
  cb('Tom');
}

fn(hello);
fn(bye);
//下記は(function~)();の形になるため即時関数である
fn(function(name){
  console.log('hello' + name);
})
