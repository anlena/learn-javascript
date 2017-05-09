// repeat方法返回一个新字符串，表示将原字符串重复n次。

'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""

// 参数如果是小数，会被取整。

'na'.repeat(2.9) // "nana"

// 如果repeat的参数是负数或者Infinity，会报错。

'na'.repeat(Infinity)
    // RangeError
'na'.repeat(-1)
    // RangeError


// 但是，如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0。

'na'.repeat(-0.9) // ""

// 参数NaN等同于0。