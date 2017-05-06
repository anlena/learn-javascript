"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _marked = [fibs].map(regeneratorRuntime.mark);

//基本用法
var a = 1,
    b = 2,
    c = 3;

//模式匹配

var foo = 1,
    bar = 2,
    baz = 3;
var _ref = ["foo", "bar", "baz"],
    third = _ref[2];
var _ref2 = [1, 2, 3],
    x = _ref2[0],
    y = _ref2[1];
var head = 1,
    tail = [2, 3, 4];

var _ref3 = ["hah"],
    d = _ref3[0],
    e = _ref3[1],
    f = _ref3.slice(2);

//不完全解构

var _ref4 = [1, 2, 3],
    xx = _ref4[0],
    yy = _ref4[1];
var aa = 1,
    _ref5 = [2, 3],
    bb = _ref5[0],
    cc = 4;

//set结构

var _ref6 = new Set(['a', 'b', 'c']),
    _ref7 = _slicedToArray(_ref6, 3),
    m = _ref7[0],
    ye = _ref7[1],
    xq = _ref7[2];

//Iterator接口

function fibs() {
    var a, b, _ref8;

    return regeneratorRuntime.wrap(function fibs$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    a = 0;
                    b = 1;

                case 2:
                    if (!true) {
                        _context.next = 10;
                        break;
                    }

                    _context.next = 5;
                    return a;

                case 5:
                    _ref8 = [b, a + b];
                    a = _ref8[0];
                    b = _ref8[1];
                    _context.next = 2;
                    break;

                case 10:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var _fibs = fibs(),
    _fibs2 = _slicedToArray(_fibs, 6),
    first = _fibs2[0],
    second = _fibs2[1],
    thirds = _fibs2[2],
    fourth = _fibs2[3],
    fitth = _fibs2[4],
    sixth = _fibs2[5];

// 默认值

var _ref9 = [],
    _ref9$ = _ref9[0],
    foe = _ref9$ === undefined ? true : _ref9$;
var _ref10 = ['aa'],
    xe = _ref10[0],
    _ref10$ = _ref10[1],
    ya = _ref10$ === undefined ? 'ss' : _ref10$;
var xp = 'dd',
    _undefined = undefined,
    aq = _undefined === undefined ? 'aa' : _undefined;
var _undefined2 = undefined,
    xv = _undefined2 === undefined ? 1 : _undefined2;
var _ref11 = null,
    s = _ref11 === undefined ? 2 : _ref11;

//表达式

function ffa() {
    console.log('dd');
}

var _ = 1,
    ew = _ === undefined ? fu() : _;

//解构赋值其他变量(已声明的)

var _ref12 = [],
    _ref12$ = _ref12[0],
    v = _ref12$ === undefined ? 1 : _ref12$,
    _ref12$2 = _ref12[1],
    ym = _ref12$2 === undefined ? v : _ref12$2;
var _ref13 = [3],
    _ref13$ = _ref13[0],
    t = _ref13$ === undefined ? 1 : _ref13$,
    _ref13$2 = _ref13[1],
    as = _ref13$2 === undefined ? t : _ref13$2;
var _2 = 1,
    ev = _2 === undefined ? 1 : _2,
    _3 = 3,
    oo = _3 === undefined ? ev : _3;
// let [om = wq, y = 2] = [];