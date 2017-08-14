var http = require("http");

http.createServer(function(request, response) {

    //发送http头部
    //http 状态值：200
    // 内容类型：text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    //发送响应数据 hello world!
    response.end('Hello World\n');
}).listen(8888);

//终端打印信息

console.log('Server running at 8888')