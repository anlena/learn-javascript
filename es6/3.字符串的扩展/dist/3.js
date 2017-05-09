// ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于0xFFFF）。

string.fromCharCode(0x20BB7);


// ES6提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。

String.fromCodePoint(0x20BB7);

String.fromCodePoint(0x78, 0x1f680, 0x79) === "x\uD83D\uDE80y";

// 上面代码中， 如果String.fromCodePoint方法有多个参数， 则它们会被合并成一个字符串返回。

// 注意， fromCodePoint方法定义在String对象上， 而codePointAt方法定义在字符串的实例对象上。