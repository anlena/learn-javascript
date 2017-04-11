function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            };
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());
console.log(f2());
console.log(f3());

// 计算x2或x3

function make_pow(n){
    return function (x){
        return Math.pow(x,n);
    };
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(3));
console.log(pow3(2));
