//字符串

const [a, b, c, d, e] = 'hello';

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。

let { length: len } = 'hello';