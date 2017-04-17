//1...
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
//编译后let变成var了
console.log(bar);
let bar = 2;