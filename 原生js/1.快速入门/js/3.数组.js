var arr = [10,20,34,'hello',12];

// indexOf  返回查找元素的位置
console.log(arr.indexOf(20));
console.log(arr.indexOf('hello'));

// slice    返回被截取的元素，不会改变原数组
console.log(arr.slice(0,2));
console.log(arr);
console.log(arr.slice(2));
console.log(arr);

// push和pop
// 返回添加后数组的长度，原数组改变
console.log(arr.push(11,13));
console.log(arr);

// 返回被删除的元素 原数组改变
console.log(arr.pop());
console.log(arr.pop());
console.log(arr);

// unshift和shift
// 返回添加后数组的长度，原数组改变
console.log(arr.unshift(1,2));
console.log(arr);

// 返回被删除的元素，原数组改变
console.log(arr.shift());
console.log(arr.shift());
console.log(arr);

// sort 返回排序后的数组，原数组也变为排序后
console.log(arr.sort());
console.log(arr);

// reverse 返回被反转的数组，原数组也变为反转后的数组
console.log(arr.reverse());
console.log(arr.reverse());
console.log(arr);


arr = [10,20,34,'hello',12];

// splice   返回被删除的元素，原数组改变

// 返回被删除的元素，原数组变为更改的元素
console.log(arr.splice(2,3,'ni','hao'));
console.log(arr);

arr = [10,20,34,'hello',12];

// 返回被删除的元素，原数组变为删除后的元素
console.log(arr.splice(2,2));
console.log(arr);

arr = [10,20,34,'hello',12];

// 返回[],没有删除元素，原数组改变
console.log(arr.splice(2,0,'ni','hao'));
console.log(arr);


arr = [10,20,34,'hello',12];

// concat   返回连接后的数组，原数组不改变
var add = arr.concat([1,2,3]);
console.log(add);
console.log(arr);

// join 返回被连接的字符串，原数组不发生改变
console.log(arr.join('-'));
console.log(arr);
