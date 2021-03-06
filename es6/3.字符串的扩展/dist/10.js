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

//普通字符串

`In JavaScript '\n' is a line-feed.`;

//多行字符串

`In JavaScript this is not legal`;

console.log(`string text line 1 string text line 2`);

//字符串嵌入变量

var name = "Bob",
    time = "today";
`Hello ${name},how are you ${tiem}`;

// 面代码中的模板字符串，都是用反引号表示。如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。

var getting = `\'Yo\``;

// 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。

$('#list').html(`
    <ul>
        <li>first</li>
        <li>second</li>
    </ul>
`)

//上面代码中，所有模板字符串的空格和换行，都是被保留的，比如<ul>标签前面会有一个换行。如果你不想要这个换行，可以使用trim方法消除它。

$("#list").html(`
    <ul>
        <li>first</li>
        <li>second</li>
    </ul>
`.trim());

// 模板字符串中嵌入变量，需要将变量名写在${}之中。

function authorize(user, action) {
    if (!user.hasPrivilege(action)) {
        throw new Error(
            // 传统写法为
            // 'User '
            // + user.name
            // + ' is not authorized to do '
            // + action
            // + '.'
            `User ${user.name} is not authorized to do ${action}.`);

    }
}

// 大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性。

var x = 1;
var y = 2;

`${x} + ${y} = ${x + y}`
// "1 + 2 = 3"

`${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

var obj = { x: 1, y: 2 };
`${obj.x + obj.y}`
// 3

// 模板字符串之中还能调用函数。/

function fn() {
    return "Hellp world";
}

`foo ${fn()} bar `

// 如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。

// 如果模板字符串中的变量没有声明，将报错。

// 变量place没有声明
var msg = `Hello, ${place}`;
// 报错

// 由于模板字符串的大括号内部， 就是执行JavaScript代码， 因此如果大括号内部是一个字符串， 将会原样输出。

`Hello ${'World'}`
// "Hello World"

// 模板字符串甚至还能嵌套。

const tmpl = addrs => `
    <table>
    ${
        address.map(addr => `
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
        `).join('')}
    </table>
    }
`;

// 上面代码中，模板字符串的变量之中，又嵌入了另一个模板字符串，使用方法如下。

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));


// 如果需要引用模板字符串本身，在需要时执行，可以像下面这样写。

//写法一
let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name',str);
func('jack');

//写法二

let strr = '(name) => `Hello ${name}`';
let funcc = eval.call(null,strr);
funcc('jack');