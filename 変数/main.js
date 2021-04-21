
// letは再宣言は× 再代入は⚪︎ スコープはブロックスコープ  初期化(ホイスティング)は×
// constは再宣言は× 再代入は⚪× スコープはブロックスコープ  初期化(ホイスティング)は×
// varは再宣言は⚪︎ 再代入は⚪︎ スコープは関数コープ  初期化(ホイスティング)はundefined
let a = 0;

var b = 0;
var b = 1;

let c = 0;
c = 1;

const d = 0;


{
    let e = 0;
    var f = 0;
}

let g = 0;
var h = 0;
console.log(g);
console.log(h);