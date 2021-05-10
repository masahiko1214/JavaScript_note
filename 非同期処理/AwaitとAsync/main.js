function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init(){
  //  awaitを付けると resolveの引数を返す、つけないとPromiseのオブジェクトを返す。
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);

  console.log(val)
}

init();
/* sleep(0).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}) */
