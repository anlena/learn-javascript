// 计算一个数组的乘积

// 普通实现

function f1(x){
    return x * x;
}

var arr = [12,2,3];
var result = [];
for (var i = 0; i < arr.length; i++) {
    result.push(f1(arr[i]));
}
console.log(result);

// map实现

function f2(x){
    return x * x;
}

var arr1 = arr.map(f2);
console.log(arr1);


// 把所有数字转换为字符串

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr1 = arr.map(String);
console.log(arr1);



// reduce

// 利用reduce求积

var arr = [1,23,5,67,8,8];
var arr1 = arr.reduce(function(x,y){
    return x * y;
});

console.log(arr1);


//要把[1, 3, 5, 7, 9]变换成整数13579，reduce()也能派上用场：

var arr = [1,3,5,7,9];
var arr1 = arr.reduce(function(x,y){
    return 10*x + y;
});

console.log(arr1);

// 想办法把一个字符串13579先变成Array——[1, 3, 5, 7, 9]，再利用reduce()就可以写出一个把字符串转换为Number的函数。


var arr = '12312';

function fn3 (s){
    return s.split(' ').map(function(x) {
        console.log(arr);
        return x - '0';
    }).reduce(function(x, y) {
        return x * 10 + y;
    });
}

function fn4(s){
    return s.split('').map(item => +item).reduce((x,y) => x*10 + y, 0);
}

var arr1 = fn3(arr);
var arr2 = fn4(arr);
console.log(arr1);
console.log(arr2);

// 请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。
var arr = ['adam', 'LISA', 'barT'];
function fn5(arr){
        return arr.map(item => item.split('').map((item,index) => index===0 ? item.toUpperCase() : item.toLowerCase()).join(''));
}

var name1 = fn5(arr);
console.log(name1);
