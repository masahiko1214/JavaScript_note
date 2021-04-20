function incrementFactory() {
    
  let num = 0;

  function a() {
      num = num + 1;
      console.log(num);
  }

  return a;
}

// increment = incrementFactory();にて変数increment内に関数が返ってきている為実行する事が可能
const increment = incrementFactory();

increment();
increment();
increment();
increment();