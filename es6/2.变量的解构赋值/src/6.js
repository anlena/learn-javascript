"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

b = 3; //不能使用圆括号的情况

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

var _ref = {};
d = _ref.P;
var _ = 3;

var _ref2 = _slicedToArray(_, 1);

parseInt.prop = _ref2[0];
_;