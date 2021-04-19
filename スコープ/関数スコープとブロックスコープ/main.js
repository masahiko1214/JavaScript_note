
// 関数内{}がスコープ
function a() {
  let b = 0;
  console.log(b);
}

a();


// {}内がブロックスコープ、ブロックスコープ内ではvarはエラーが表示されないので使えない
if(true) {
  let c = 1;
  
  let d = function() {
      console.log('d is called');
  }
}

d();
console.log(c);