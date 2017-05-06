//基本用法
let [a, b, c] = [1, 2, 3];

//模式匹配
let [foo, [
    [bar], baz
]] = [1, [
    [2], 3
]];

let [, , third] = ["foo", "bar", "baz"];

let [x, y] = [1, 2, 3];

let [head, ...tail] = [1, 2, 3, 4];

let [d, e, ...f] = ["hah"];

//不完全解构

let [xx, yy] = [1, 2, 3];

let [aa, [bb], cc] = [1, [2, 3], 4];

//set结构

let [m, ye, xq] = new Set(['a', 'b', 'c']);

//Iterator接口

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [first, second, thirds, fourth, fitth, sixth] = fibs();



// 默认值

let [foe = true] = [];

let [xe, ya = 'ss'] = ['aa'];
let [xp, aq = 'aa'] = ['dd', undefined];

let [xv = 1] = [undefined];
let [s = 2] = [null];

//表达式

function ffa() {
    console.log('dd');
}

let [ew = fu()] = [1];


//解构赋值其他变量(已声明的)

let [v = 1, ym = v] = [];
let [t = 1, as = t] = [3];
let [ev = 1, oo = ev] = [1, 3];
// let [om = wq, y = 2] = [];