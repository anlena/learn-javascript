var fs = require('fs');

// 异步读取文件
fs.readFile('tt.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

//异步读取图片
fs.readFile('p.png', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length);
    }
});

//Buffer->string
var text = data.toString('utf-8');
console.log(text);

//String-> Buffer
var buf = new Buffer(text, 'utf-8');
console.log(buf);