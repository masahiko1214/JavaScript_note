const a = {
  prop: 0
}
// propに０を参照するオブジェクトが変数として格納される
let { prop } = a;

prop = 1;

console.log(a,prop);

function fn(obj){
  let{prop} = obj;
  prop = 1;
  console.log(obj, prop);
}

fn(a);