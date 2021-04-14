const numbers = [1, 3, 5, 7, 9];

// findメソッドを使って配列numbersから3の倍数を見つけ、定数foundNumberに代入
const foundNumber = numbers.find((number)=>{
  return number % 3 === 0;
});

console.log( foundNumber);




const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Denis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入
const fullNames = names.map((name)=>{
  return name.firstName + name.lastName;
});

// 定数fullNamesを出力
console.log(fullNames);

const printWanko = () => {
  console.log("にんじゃわんこ");
};

// 関数callにcallbackという名前の引数を追加
const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  // 引数に渡したcallbackを呼び出す
  callback();
};

// 関数printWankoを引数に渡して関数callを実行
call(printWanko);