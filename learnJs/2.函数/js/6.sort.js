// 从小到大排序
var arr = [10,20,2,33];
arr.sort(function(x,y){
    if (x < y) {
        return -1;
    }else{
        return 1;
    }
    return 0;
});
console.log(arr);

// 从大到小
var arr = [12,14,10,2,3,6];
arr.sort(function(x,y){
    if (x < y) {
        return 1;
    }else{
        return -1;
    }
    return 0;
});
console.log(arr);
