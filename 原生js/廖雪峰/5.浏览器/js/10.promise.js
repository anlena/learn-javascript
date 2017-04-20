//简单的promise例子
function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function() {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        } else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}

// var p1 = new Promise(test);
// var p2 = p1.then(function(result) {
//     console.log('成功：' + result);
// });
// var p3 = p2.catch(function(reason) {
//     console.log('失败：' + reason);
// });

//串联起来

new Promise(test).then(function(result) {
    console.log('成功：' + result);
}).catch(function(reason) {
    console.log('失败' + reason);
});

//异步执行更多任务

job1.then(job2).then(job3).catch(handleError);

//ajax函数将返回Promise对象：
function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function(reason, reject) {
        request.onreadystatechange = function() {
            if (request.status === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method.url);
        request.send(data);
    });
}

var log = document.getElementById('adwe');
var p = ajax('GET', '/api/cateadf');
p.then(function(text) {
    log.innerText = text;
}).catch(function(status) {
    log.innerText = 'ERROR' + status;
});


// all 

var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, 'p1');
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 322, 'p2');
})

//同时执行
Promise.all([p1, p2]).then(function(results) {
    console.log(results);
});


//race

var p1 = new Promise(function(resolve, reject) {
    setTimeout(resove, 500, 'p1');
});

var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, 'p2');
});

Promise.race([p1, p2]).then(function(results) {
    console.log(results);
})