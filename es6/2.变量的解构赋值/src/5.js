'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//函数参数

function add(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return x + y;
}

add([1, 2]);

//
[[1, 2], [3, 4]].map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        a = _ref4[0],
        b = _ref4[1];

    return a + b;
});

//函数参数的解构也可以使用默认值

function move() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref5$x = _ref5.x,
        x = _ref5$x === undefined ? 0 : _ref5$x,
        _ref5$y = _ref5.y,
        y = _ref5$y === undefined ? 0 : _ref5$y;

    return [x, y];
}

move({ x: 3, y: 8 });
move({ x: 3 });
move({});
move();

//
[1, undefined, 3].map(function () {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'yes';
    return x;
});