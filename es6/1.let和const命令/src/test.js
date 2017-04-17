"use strict";

// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }

(function() {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }

    f();
}());
// Uncaught Type