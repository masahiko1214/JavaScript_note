// 演算子において比べる値の事をオペランドという

let a = 0;
console.log(a)


// let b = ++a;

let b;

// a = b = a + 1;



//let b = a++;

a = (b = a) + 1;

// console.log(a,b)

function fn(){
  let a = 0;
  return a++
}

console.log(!(fn() * 5))