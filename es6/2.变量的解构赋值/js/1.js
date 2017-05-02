// 数组的结构赋值

// 基本用法

let [a, b, c] = [1, 2, 3];
let [foo, [
    [bar], baz
]] = [1, [
    [2], 3
]];
let [x, , y] = [1, 2, 3];
let [head, ...tail] = [1, 2, 3, 4];
let [x, y, ...z] = ['a'];

//不完全结构

let [x, y] = [1, 2, 3];

let [a, [b], d] = [1, [2, 3], 4];

//默认值

let [foo = true] = [];
let [x, y = 'b'] = ['a'];
let [x, y = 'b'] = ['a', undefined];