var fs = require('fs');

var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...,姓段的，我想你了\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...，我想你了，姓段的\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();