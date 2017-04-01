// 要编写一个产生斐波那契数列的函数，可以这么写：

function fib(max) {
    var
        t,
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        t = a + b;
        a = b;
        b = t;
        arr.push(t);
    }
    return arr;
}

console.log(fib(20));


// 一次返回一个数

function* fib1(max){
    var
        t,
        a = 0,
        b = 1,
        n = 1;
    while(n < max){
        yield a;
        t = a + b;
        a = b;
        b = t;
        n++;
    }
    return a;
}

for(var x of fib1(5)){
    console.log(x);
}
console.log(fib1(20));
