'use strict';

var tmp = 123;

if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
}

//2.
if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}

//3.
function bar(x = y, y = 2) {
    return [x, y];
}

bar(); // 报错

//4.
function bar(x = 2, y = x) {
    return [x, y];
}
bar(); // [2, 2]

//5.
// 不报错
var x = x;

// 报错
let x = x;
// ReferenceError: x is not defined