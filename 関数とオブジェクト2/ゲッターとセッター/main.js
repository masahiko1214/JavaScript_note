function Person1(name, age) {
	this._name = name;
	this._age = age;
}

Object.defineProperty(Person1.prototype,'name', {

	get: function(){
		return this._name;
	},

	set: function(val){
		this._name = val;
	}
});

const p1 = new Person1('Bob',23);

/* console.log(p1.name) */

class Person2{

	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	get name(){
		console.log('hello')
		return this._name;
	}

	set name(val){
		this._name = val;
	}


	// static はインスタンス化していないのでカッコ内ではthisは使えない
	static hello(){
console.log('hello')

	}


}

const P2 = new Person2('Bob',23);

Person2.hello();