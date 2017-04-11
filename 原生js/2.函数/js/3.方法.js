//var xiaoming = {
//	name:'xiaoming',
//	age:20
//};


//将函数放在对象里面叫做函数. 调用方法，调用方法
//var xiaoming = {
//  name: '小明',
//  birth: 1990,
//  age: function () {
//      var y = new Date().getFullYear();
//      console.log(y - this.birth);
//  }
//};
//
//console.log(xiaoming.age);// function xiaoming.age()
//xiaoming.age(); // 今年调用是25,明年调用就变成26了


//直接调用函数,this指向全局对象,window.

//function getAge () {
//	var y = new Date().getFullYear();
//	console.log(y - this.birth);
//}
//
//var xiaoming = function () {
//	name: '小明',
//  birth: 1990,
//  age: getAge
//}
//
//xiaoming.age();
//getAge();

//修复this指向问题

//var xiaoming = {
//	name:'小明',
//	birth:1990,
//	age:function() {
//		var that = this;
//		function getAgeFromBirth () {
//			var y = new Date().getFullYear();
//			return y - that.birth;
//		}
//		return getAgeFromBirth ();
//	}
//}


//function getAge () {
//	var y = new Date().getFullYear();
//	return y - this.birth;
//}
// 
//var xiaoming = {
//	name: '小明',
//  birth: 1990,
//  age: getAge
//}
//
//xiaoming.age();
//getAge.apply(xiaoming,[]);


//Math.max.apply(null,[3,4,5]);
//Math.max.call(null,3,3,4);


var count = 0;
var old = parseInt;

window.parseInt = function () {
	count +=1;
	return old.apply(null,arguments);
}

parseInt(10);
parseInt(20);
parseInt(30);
console.log(count);