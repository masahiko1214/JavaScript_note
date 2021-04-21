function printEquality(a, b) {
  console.log(a === b);
  console.log(a == b);
}

// ==は抽象的な等価性の比較になるため比べる型（右辺が同じ型ではない場合は型変換が行われる） 

let a = '1';
let b = 1;

let c = true;

// console.log(b === Number(c));
// printEquality(b, c);

let e = "";
let f = 0;
let g = "0";

printEquality(g, f);