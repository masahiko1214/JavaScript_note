//ここから復習

const chara = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人"];

console.log(chara);

// pushメソッドを使って配列charactersに、文字列「とりずきん」を追加してください
chara.push("とりずきん");

// 配列charactersを出力してください
console.log(chara);

chara.forEach((character) =>{
  console.log(character);
});

console.log("Hello World");
console.log("20"+"15");
// 変数lengthは半径
let length = 5;

// 変数lengthの半径の値を出力
console.log(length);

// 変数lengthを用いて、円の面積を出力
console.log(length*length*3);

const name = "にんじゃわんこ"
//注意 ${name}を変数として使う場合はバッククォーテーションを使う必要がある
console.log(`こんにちは、${name}さん`); 
//その他の方法としては+で繋ぐ
console.log("こんにちは、"+ name + "さん"); 

//javascriptにおいて比較演算子は
// 同じ場合は === 三つ使う点に注意、同じで真偽値true 
// 違う場合にtrueは !== 同じで真偽値true 


//条件分岐で短調になる時はswitch文を使う、またbreak；して条件から抜けるのを忘れない

const rank = 5;

switch (rank) {
case 1:
  console.log("金メダルです！");
  break;
case 2:
  console.log("銀メダルです！");
  break;
case 3:
  console.log("銅メダルです！");
  break;
// defaultの処理を追加してください
default:
console.log("メダルはありません");
break;

}
// for文は ( 変数の定義 ;条件式  ;変数の更新 )
for (let number=1 ;number<=100; number++) {

}

const animals = ["dog", "cat", "sheep"];

// for文を用いて、配列をそれぞれ取り出す
for (let i=0 ; i < 3 ; i++ ){
console.log(animals[i]);
}

const characters = [
{name: "にんじゃわんこ", age: 14},
{name: "ひつじ仙人", age: 1000}
];

// charactersの1つ目の要素をコンソールに出力
console.log(characters[0]);

// charactersの2つ目の要素の「name」に対応する値
console.log(characters[1].name);

// =>はアロー関数、const greet = function() { と同じ
const greet = () =>{
console.log("こんにちは！");
}


console.log("こんにちは！");


// オブジェクトに格納されている関数をメソッドという
let obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: function() {
      console.log('value3');
  },
  prop4: {
      prop5: 'value5'
  }
}
obj.prop3();

obj.prop6 = 'value6';
console.log(obj);