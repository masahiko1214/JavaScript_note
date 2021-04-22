let a = parseInt("")
console.log(Boolean(a));

if(a){
  console.log('truthy');
}else{
  console.log('falsy');
}

// falsyとしては false null 0 0n undefined NaN "" 等がある。