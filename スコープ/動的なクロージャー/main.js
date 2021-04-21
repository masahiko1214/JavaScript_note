function addNumberFactory(num){
  function addNumber(value){
    return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5);

// return addNumber;の部分がadd5したがってadd5 === addNumber さらにaddNumberは関数になっている
const result = add5(10);
console.log(result);