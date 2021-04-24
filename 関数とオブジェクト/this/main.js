const person = {
  name: 'Tom',
  hello: function() {
      // thisは呼び出しにあるオブジェトを参照しているもの
console.log('Hello ' + this.name)
  }
}
//オブジェクトの中にある関数はブジェクトにドットをつけ関数名();で実行する
person.hello();