var s = "𠮷";

s.length; //2
s.charAt(0); //''
s.charAt(1); //''
s.charCodeAt(0); //55362
s.charCodeAt(1); //57271


//codePointAt

var s = '𠮷a';
s.codePointAt(0);
s.codePointAt(1);
s.codePointAt(2);

// codePointAt方法返回的是码点的十进制值， 如果想要十六进制的值， 可以使用toString方法转换一下。

var s = '𠮷a';
s.codePointAt(0).toString(16);
s.codePointAt(2).toString(16);

// 字符a在字符串s的正确位置序号应该是1，但是必须向codePointAt方法传入2。解决这个问题的一个办法是使用for...of循环，因为它会正确识别32位的UTF-16字符。

var s = '𠮷a';
for (let ch of s) {
    console.log(ch.codePointAt(0).toString(16));
}


// codePointAt方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。

function is32Bit(c) {
    return c.codePointAt(0) > 0xffff;
}

is32Bit("𠮷") // true
is32Bit("a") // false