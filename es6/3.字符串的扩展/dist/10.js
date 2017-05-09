// 传统的JavaScript语言，输出模板通常是这样写的。

$("#result").append(
    'There are <b>' + basket.count + '</b>' +
    'items in your basket,' +
    '<em>' + basket.onSale +
    '</em> are on sale!'
)

// 上面这种写法相当繁琐不方便，ES6引入了模板字符串解决这个问题。

$("#result").append(`
    There are <b>${basket.count}</b> items
    in your basket,<em>${basket.onSale}</em>
    are on sale! 
`)

// 模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。