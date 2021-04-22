let a = 0;

function fn1(arg1){
arg1 = 1;
console.log(a,arg1);

}

let arg1 = a;
arg1 = 1;
console.log(a,arg1);

fn1(a);

let b = {
  prop: 0
}

function fn2(arg2){
  // 下記のarg2は架空に出来たものでありlet arg2みたいなもの
  arg2.prop = 1;
  console.log(b,arg2);
}

fn2(b);

function fn3(arg2){
 // 上記はプロパティの値でありこっちはarg2の参照先を変えている
  arg2 = {};
  console.log(b,arg2);
}

fn3(b);