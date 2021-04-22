const a = 1;
const b = 0;
const c = 2;
const d = 0;

//&&の条件式では途中falsyの値を条件式の結果として返し、途中すべてtruthyの場合は最後の結果が返ってくる
console.log(a && b && c)

// ||の条件式では途中でtruthyであればその値を結果として返す、途中なければ最後の値を返す。
console.log(a || b || c)

// ()でグループ化することが可能
console.log((a || b) || c)
console.log((a || b) && (c || d))