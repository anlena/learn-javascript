var a = x => x*x;
console.log(a(3));


var b = x => {
    if(x > 0){
        return x*x;
    }else{
        return -x*x;
    }
}

console.log(b(4));

// 两个参数
(x,y) => x*x + y*y;

// 无参数
() => 3.14;

// 可变参数
(x,y...test) => {
    var i,sum = x + y;
    for (var i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}

// 返回一个对象

x => ({
    foo:x;
});
