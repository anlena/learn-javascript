'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//对象的解构赋值

var _foo$bar = { foo: 'aaa', bar: 'bbb' },
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;

//变量名必须与属性同名，才能取到值

var _foo1$bar = { foo1: 'aaa', bar1: 'bbb' },
    bar1 = _foo1$bar.bar1,
    foo1 = _foo1$bar.foo1;
var _foo1$bar2 = { foo1: 'aaa', bar1: 'bbb' },
    baz1 = _foo1$bar2.baz1;

//变量名与属性名不一致的时候

var _foo2$bar = { foo2: 'aaa', bar2: 'bbb' },
    baz2 = _foo2$bar.foo2;

var obj = { first: 'hello', last: 'world' };
var f = obj.first,
    l = obj.last;

//用于嵌套结构的对象

var obj1 = {
    p: ['hello', {
        y: 'world'
    }]
};

var _obj$P = _slicedToArray(obj.P, 2),
    x = _obj$P[0],
    y = _obj$P[1].y;

//上边，p是模式，不是变量，因此不会被赋值

var node = {
    loc: {
        start: {
            line: 1,
            cloumn: 5
        }
    }
};

var line = line.loc.start.line;

//上面代码中，只有line是变量，loc和start都是模式，不会被赋值。

//嵌套赋值

var obj3 = {};
var arr = [];

//对象的结构也可以指定默认值

var _foo$bar2 = { foo: 123, bar: true };
obj.prop = _foo$bar2.foo;
arr[0] = _foo$bar2.bar;
var _ref = {},
    _ref$x = _ref.x1,
    x1 = _ref$x === undefined ? 3 : _ref$x;
var _x = { x2: 1 },
    x2 = _x.x2,
    _x$y = _x.y1,
    y1 = _x$y === undefined ? 5 : _x$y;
var _ref2 = {},
    _ref2$x = _ref2.x3,
    y2 = _ref2$x === undefined ? 3 : _ref2$x;
var _x2 = { x4: 4 },
    _x2$x = _x2.x4,
    y3 = _x2$x === undefined ? 3 : _x2$x;
var _ref3 = {},
    _ref3$message = _ref3.message,
    msg = _ref3$message === undefined ? 'Something went wrong' : _ref3$message;

// 默认值生效的条件是，对象的属性值严格等于undefined。

var _x3 = { x5: undefined },
    _x3$x = _x3.x5,
    x5 = _x3$x === undefined ? 3 : _x3$x;
var _x4 = { x6: null },
    _x4$x = _x4.x6,
    x6 = _x4$x === undefined ? 3 : _x4$x;

// 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。

var arr2 = [1, 2, 3];
var first = arr2[0],
    last = arr2[arr.length - 1];