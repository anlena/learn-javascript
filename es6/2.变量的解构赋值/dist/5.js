//函数参数

function add([x, y]) {
    return x + y;
}

add([1, 2]);

//
[
    [1, 2],
    [3, 4]
].map(([a, b]) => a + b);

//函数参数的解构也可以使用默认值

function move({ x = 0, y = 0 } = {}) {
    return [x, y];
}

move({ x: 3, y: 8 });
move({ x: 3 });
move({});
move();

//
[1, undefined, 3].map((x = 'yes') => x);