function fn(){
  const a = arguments[0];
  const b = arguments[1];
    console.log(arguments);
    console.log(a,b);
  }
  
  
  // 意図的に初期化したいならnullを使う
  fn(1,undefined);