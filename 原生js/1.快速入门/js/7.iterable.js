var a = ['A','B','c'];
var s = new Set(['A','B',' C']);
var m = new Map([[1,'x'],[2,'y'],[3,'z']]);

for (var x of a) {
	console.log(x);
}

for (var x of s) {
	console.log(x);
}

for (var x of m) {
	console.log(x[0] + '=' + x[1]);
}


//for in和for of的区别

var a = ['a','b','c'];
a.name = 'bob';
for (var x in a) {
	console.log(x);
}
for (var x of a) {
	console.log(x);
}


//forEach()

//数组
var a = ['a','o','u'];
a.forEach(function (element,index,array) {
	console.log(element +'-'+ index +'-'+ array);
})


//set

var s = new Set(['a','d','f']);
s.forEach(function(element,sameElement,set) {
	console.log(element +'-'+ sameElement +'-'+ set);
});


//map

var m = new Map([[1,'x'],[2,'y'],[3,'z']]);
m.forEach(function(value,key,map) {
	console.log(value +'-'+ key +'-'+ map);
})
