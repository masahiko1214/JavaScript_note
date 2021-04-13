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