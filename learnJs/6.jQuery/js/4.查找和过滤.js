//find
var ul = $('ul.lang');
var dy = ul.find('.dy');

//parent
var swf = $('#swif');
var parent = swf.parent();
var a = swf.parent('div.red');

//next()和prev()
var swift = $('#swift');

swift.next();
swift.next('[name=haskell]');
swift.prev();
swift.prev('.js');

//过滤
var langs = $('ul.lang li');
var a = langs.filter('.dy');

var langs = $('ul.langs li');
langs.filter(function() {
    return this.innerHTML.indexOf('S') === 0;
});

//map
var langs = $('ul.lang li');
var arr = langs.map(function() {
    return this.innerHTML;
}).get();

var langs = $('ul.lang li');
var js = langs.first();
var haskell = langs.last();
var sub = langs.slice(2, 4);