// コンストラクタ関数はオブジェクトを生成するもの、関数コンストラクタは関数を生成するためのコンストラクト


function Person(name,age){
  this.name = name;
  this.age = age;
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);