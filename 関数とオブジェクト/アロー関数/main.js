function a(name){
  return 'hello ' + name;
  }
  
  
  // アロー関数において{}の部分が一行の場合はreturn及び{}は省略する事が出来る、また引数が一つの場合は()も省略する事が出来る
  const b = (name, name1) => 'hello' + name + name1 ;
  
  
  console.log(b('Tom','Bob'));