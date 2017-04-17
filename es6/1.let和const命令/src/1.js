"use strict";

//基本用法

//1.
// {
//     var a = 10;
//     let b = 1;
// }
// console.log(a);
// console.log(b);


//2.
for (var j = 0; j < 5; j++) {}
console.log(j);

for (var _i = 0; _i < 10; _i++) {}
console.log(i);

//3.
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();
var a = [];

var _loop = function _loop(_i2) {
    a[_i2] = function () {
        console.log(_i2);
    };
};

for (var _i2 = 0; _i2 < 10; _i2++) {
    _loop(_i2);
}
a[6]();

//4.
for (var _i3 = 0; _i3 < 3; _i3++) {
    var _i4 = "abc";
    console.log(_i4);;
}