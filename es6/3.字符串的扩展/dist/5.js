// ES5对字符串对象提供charAt方法， 返回字符串给定位置的字符。 该方法不能识别码点大于0xFFFF的字符。

'abc'.charAt(0); //"a"
'𠮷'.charAt(0) // "\uD842"

// 目前，有一个提案，提出字符串实例的at方法，可以识别Unicode编号大于0xFFFF的字符，返回正确的字符。

'abc'.at(0) // "a"
'𠮷'.at(0) // "𠮷"