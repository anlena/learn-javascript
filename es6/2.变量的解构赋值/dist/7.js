//用途

// 1.交换变量的值

let x = 1;
let y = 2;

[x, y] = [y, x];


//2.从函数返回多个值

///返回一个数组
function example() {
    return [1, 2, 3];
}
let [a, b, c] = example();

//返回一个对象

function example() {
    return {
        foo: 1,
        bar: 2
    };
}
let { foo, bar } = example();


//3.函数参数的定义

//参数是一组有次序的值
function f([x, y, z]) {}
f([1, 2, 3]);

//参数是一组五次序的值

function f1({ x, y, z }) {}
f({ z: 3, y: 2, x: 1 });


//4.提取JSON数据

let jsonDate = {
    id: 43,
    status: "ok",
    data: [872, 2321]
};

let { id, status, data: number } = jsonDate;
console.log(id, status, number);



//函数参数的默认值

jQuery.ajax = function(url, {
    async = true,
    beforeSend = function() {},
    cache = true,
    complete = function() {},
    crossDomain = false,
    global = true,
    //more config
}) {
    //do stuff
}


//6.遍历Map结构

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + "is" + value);
}

// 如果只想获取键名，或者只想获取键值，可以写成下面这样。

//获取键名
for (let [key] of map) {
    //...
}

//获取键值
for (let [, value] of map) {
    //...
}



//7.输入模块的指定方法

const { SourceMapConsumer, SourceNode } = require("source-map");