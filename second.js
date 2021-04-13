const numbers = [1, 3, 5, 7, 9];

// findメソッドを使って配列numbersから3の倍数を見つけ、定数foundNumberに代入
const foundNumber = numbers.find((number)=>{
  return number % 3 === 0;
});

console.log( foundNumber);