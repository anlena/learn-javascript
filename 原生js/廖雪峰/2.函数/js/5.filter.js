// 删掉偶数，保存奇数
var arr = [1,13,45,23,22,14,4,];
var r = arr.filter(function(x){
    return x%2 !==0;
});

console.log(r);


// 把一个Array中的空字符串删掉，可以这么写：
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function(s){
    return s && s.trim(); //ie9以下不支持
});
console.log(r);


// 回调函数
var arr = ['A','B','C'];
var r = arr.filter(function(element,index,self){
    console.log(element);
    console.log(index);
    console.log(self);
});

console.log(r);

// 利用filter，可以巧妙地去除Array的重复元素：

var
    r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
    r = arr.filter(function (element, index, self) {
        return self.indexOf(element) === index;
    });

console.log(arr);
// 去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。
