// コンテキストが生成された時点で、ホイスティングによりメモリに変数も関数も保存される、ただし変数に代入はされていないことに留意が必要

a();

function a() {
    let c = 1;

    console.log(c);

    d();
    function d() {
        console.log('d is called');
    }
    console.log('a is called');
}


const b = 0;

console.log(b);