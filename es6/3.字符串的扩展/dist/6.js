// ES6提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为Unicode正规化。

'\u01D1'.normalize() === '\u004F\u030C'.normalize();
// true

// normalize方法可以接受一个参数来指定normalize的方式， 参数的四个可选值如下。

// NFC， 默认参数， 表示“ 标准等价合成”（ Normalization Form Canonical Composition）， 返回多个简单字符的合成字符。 所谓“ 标准等价” 指的是视觉和语义上的等价。
// NFD， 表示“ 标准等价分解”（ Normalization Form Canonical Decomposition）， 即在标准等价的前提下， 返回合成字符分解的多个简单字符。
// NFKC， 表示“ 兼容等价合成”（ Normalization Form Compatibility Composition）， 返回合成字符。 所谓“ 兼容等价” 指的是语义上存在等价， 但视觉上不等价， 比如“ 囍” 和“ 喜喜”。（ 这只是用来举例， normalize方法不能识别中文。）
// NFKD， 表示“ 兼容等价分解”（ Normalization Form Compatibility Decomposition）， 即在兼容等价的前提下， 返回合成字符分解的多个简单字符。


'\u004F\u030C'.normalize('NFC').length // 1
    '\u004F\u030C'.normalize('NFD').length // 2

// 上面代码表示， NFC参数返回字符的合成形式， NFD参数返回字符的分解形式。

// 不过， normalize方法目前不能识别三个或三个以上字符的合成。 这种情况下， 还是只能使用正则表达式， 通过Unicode编号区间判断。