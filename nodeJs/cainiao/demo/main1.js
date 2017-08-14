var fs = require("fs");

var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束");

// 阻塞方式，等读取完文件内容开始执行下边的