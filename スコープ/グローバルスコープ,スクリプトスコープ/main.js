
// constやletで宣言するとスクリプトスコープに格納される、varや関数宣言の場合はグローバルオブジェクトに格納される。
let a = 0;
var b = 0;
function c() {}

console.log(b);

window.d = 1;
let d = 2;
console.log(d);