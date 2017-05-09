// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。

var s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

// 这三个方法都支持第二个参数，表示开始搜索的位置。

var s = 'Hello world!';

s.startsWith('world', 6);
s.endsWith('Hello', 5);
s.includes('Hello', 6);

// 上面代码表示， 使用第二个参数n时， endsWith的行为与其他两个方法有所不同。 它针对前n个字符， 而其他两个方法针对从第n个位置直到字符串结束。