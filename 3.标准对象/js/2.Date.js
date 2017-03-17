// 获取系统当前时间
var now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

// 创建一个指定日期的Date对象

var d = new Date(2012,4,12,23,12,32,122);
console.log(d);

// 第二种创建一个指定日期和时间的方法是解析一个符合ISO 8601格式的字符串：

var d = Date.parse('2015-06-24T19:49:22.875+08:00');
console.log(d);
var d1 = new Date(d);
console.log(d1);

// 我们既可以显示本地时间，也可以显示调整后的UTC时间：
var d = new Date(1435146562875);
var d1 = d.toLocaleString();
console.log(d1);
var d2 = d.toUTCString();
console.log(d2);

// 获取当前时间戳
if(Date.now){
    console.log(Date.now());
}else{
    console.log(new Date().getTime());
}
