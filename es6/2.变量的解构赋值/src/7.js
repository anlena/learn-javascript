'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//用途

// 1.交换变量的值

var x = 1;
var y = 2;

//2.从函数返回多个值

///返回一个数组
var _ref = [y, x];
x = _ref[0];
y = _ref[1];
function example() {
    return [1, 2, 3];
}

var _example = example(),
    _example2 = _slicedToArray(_example, 3),
    a = _example2[0],
    b = _example2[1],
    c = _example2[2];

//返回一个对象

function example() {
    return {
        foo: 1,
        bar: 2
    };
}

var _example3 = example(),
    foo = _example3.foo,
    bar = _example3.bar;

//3.函数参数的定义

//参数是一组有次序的值


function f(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        x = _ref3[0],
        y = _ref3[1],
        z = _ref3[2];
}
f([1, 2, 3]);

//参数是一组五次序的值

function f1(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        z = _ref4.z;
}
f({ z: 3, y: 2, x: 1 });

//4.提取JSON数据

var jsonDate = {
    id: 43,
    status: "ok",
    data: [872, 2321]
};

var id = jsonDate.id,
    status = jsonDate.status,
    number = jsonDate.data;

console.log(id, status, number);

//函数参数的默认值

jQuery.ajax = function (url, _ref5)
//more config
{
    var _ref5$async = _ref5.async,
        async = _ref5$async === undefined ? true : _ref5$async,
        _ref5$beforeSend = _ref5.beforeSend,
        beforeSend = _ref5$beforeSend === undefined ? function () {} : _ref5$beforeSend,
        _ref5$cache = _ref5.cache,
        cache = _ref5$cache === undefined ? true : _ref5$cache,
        _ref5$complete = _ref5.complete,
        complete = _ref5$complete === undefined ? function () {} : _ref5$complete,
        _ref5$crossDomain = _ref5.crossDomain,
        crossDomain = _ref5$crossDomain === undefined ? false : _ref5$crossDomain,
        _ref5$global = _ref5.global,
        global = _ref5$global === undefined ? true : _ref5$global;
}
//do stuff


//6.遍历Map结构

;var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        console.log(key + "is" + value);
    }

    // 如果只想获取键名，或者只想获取键值，可以写成下面这样。

    //获取键名
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 1),
            key = _step2$value[0];
    }
    //...


    //获取键值
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            value = _step3$value[1];
    }
    //...


    //7.输入模块的指定方法
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _require = require("source-map"),
    SourceMapConsumer = _require.SourceMapConsumer,
    SourceNode = _require.SourceNode;