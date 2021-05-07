// タスクキュー：実行待ちの非同期処理

const btn = document.querySelector('button');
btn.addEventListener('click', function task2() {
    console.log('task2 done');
});


function a() {
    setTimeout(function task1() {
        console.log('task1 done');
    }, 2000);

    const startTime = new Date();
    while (new Date() - startTime < 5000);

    console.log('fn a done');
}

a();