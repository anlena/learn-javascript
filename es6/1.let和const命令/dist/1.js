//基本用法

//1.
// {
//     var a = 10;
//     let b = 1;
// }
// console.log(a);
// console.log(b);


//2.
for (var j = 0; j < 5; j++) {}
console.log(j);

for (let i = 0; i < 10; i++) {}
console.log(i);

//3.
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6]();
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6]();

//4.
for (let i = 0; i < 3; i++) {
    let i = "abc";
    console.log(i);;
}