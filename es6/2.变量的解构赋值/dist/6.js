//不能使用圆括号的情况

//1.变量声明语句中，不能带有圆括号。
//全部报错
// let [(a)] = [1];

// let { x: (c) } = {};
// let ({ x: c }) = {};
// let {
//     (x: c)
// } = {};
// let {
//     (x): c
// } = {};

// let { o: ({ p: p }) } = { o: { p: 2 } };


// 2.函数参数中，模式不能带有圆括号

// function f([(z)]) {
//     return z;
// }

// 2. 赋值语句中， 不能将整个模式， 或嵌套模式中的一层， 放在圆括号之中。

// ({ p: a }) = { p: 43 };
// ([a]) = [5];




//可以使用圆括号的情况

[(b)] = [3];
({ P: (d) } = {});
[(parseInt.prop)] = 3;