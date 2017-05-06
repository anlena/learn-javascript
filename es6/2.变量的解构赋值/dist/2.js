//对象的解构赋值

let { foo, bar } = { foo: 'aaa', bar: 'bbb' };

//变量名必须与属性同名，才能取到值

let { bar1, foo1 } = { foo1: 'aaa', bar1: 'bbb' };
let { baz1 } = { foo1: 'aaa', bar1: 'bbb' }

//变量名与属性名不一致的时候

var { foo2: baz2 } = { foo2: 'aaa', bar2: 'bbb' };
let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;

//用于嵌套结构的对象

let obj1 = {
    p: [
        'hello',
        {
            y: 'world'
        }
    ]
};

let { P: [x, { y }] } = obj;

//上边，p是模式，不是变量，因此不会被赋值

var node = {
    loc: {
        start: {
            line: 1,
            cloumn: 5
        }
    }
}

var { loc: { start: { line } } } = line;

//上面代码中，只有line是变量，loc和start都是模式，不会被赋值。

//嵌套赋值

let obj3 = {};
let arr = [];

({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

//对象的结构也可以指定默认值

var { x1 = 3 } = {};
var { x2, y1 = 5 } = { x2: 1 };
var { x3: y2 = 3 } = {};
var { x4: y3 = 3 } = { x4: 4 };
var { message: msg = 'Something went wrong' } = {};

// 默认值生效的条件是，对象的属性值严格等于undefined。

var { x5 = 3 } = { x5: undefined };
var { x6 = 3 } = { x6: null };

// 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。

let arr2 = [1, 2, 3];
let { 0: first, [arr.length - 1]: last } = arr2;