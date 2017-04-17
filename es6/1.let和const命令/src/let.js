"use strict";

//1.隐蔽死区
function bar(var x = y, y = 2) {
    return [x, y];
}
bar(); //报错

function bar1(x = 2, y = x) {
    return [x, y];
}
bar1(); //[2,2]

//不报错
var x = x;

//报错
let x = x;

//2.不允许重复声明

//报错
function a() {
    let a = 10;
    var a = 5;
}

//报错
function b() {
    let a = 10;
    let a = 1;
}

function c(arg) {
    let arg; //
}

function func(arg) {
    {
        let arg;
    }
}