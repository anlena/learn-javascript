var a = document.getElementById('dom-id');
var div = document.getElementsByTagName('div');
var p = document.getElementsByTagName('p');

//按id
var div = $('#div');
var divDom = div.get(0);
var another = $(divDom);

//按tag查找
var ps = $('p');
ps.length;

//按class查找
var a = $('.red');
var a = $('.red.green');

//按属性查找
var email = $('[name=emai]');
var pass = $('[type="password"]');
var a = $('[item = "A B"]');

//当属性的值包含空格等特殊字符串时，需要用双引号扩起来.

//按属性查找还可以使用前缀查找或者后缀查找
var icon = $('[name ^= icon]');
var name = $('[name $ = width]');
var icons = $('[class="icon-"]');

//组合查找

var emalil = $('input[name=email]');
var tr = $('tr.red');

// 多项选择器

$('p,div');
$('p.red,p.green');