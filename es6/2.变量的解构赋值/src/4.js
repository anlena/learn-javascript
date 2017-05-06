"use strict";

// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

var _ = 123,
    s = _.toString;

s === Number.prototype.toString;

var _true = true,
    m = _true.toString;

m === boolean.prototype.toString;