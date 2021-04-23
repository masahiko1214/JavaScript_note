const a = {
  prop: 0
}

const b = {
  prop: 0
}
// 参照先を比べているためfalse
console.log(a == b);
console.log(a.prop === b.prop);

const c = a;

console.log(a === c);