var fs = require('fs');

//异步
var data = 'Hello,Node.js';

fs.writeFile('tt.txt', data, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok');
    }
});


//同步
var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);

//state

var fs = require('fs');

fs.stat('sample.txt', function(err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});