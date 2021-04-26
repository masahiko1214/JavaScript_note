function a() {
  console.log('hello ' + this.name);
}

const tim = {name: 'Tim'};


const b = a.bind(tim);

b();

// applyは第2引数に配列を持ってくる
a.apply(tim);
a.call(tim);

const arry = [1,2,3,4,5];

// const result = Math.max.apply(null,arry);
const result = Math.max(...arry);
console.log(result);