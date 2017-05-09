var template = `
    <ul>
        <% for(var i=0; i < data.supplies.length;i++){ %>
            <li><%= data.supplies[i] %></li>>
       <% }%>
    </ul>
`;

//一种思路是将其转换为JavaScript表达式字符串。

echo('<ul>');
for (var i = 0; i < data.supplies.length; i++) {
    echo('<li>');
    echo(data.supplies[i]);
    echo('<li>');
}
echo('</ul>');

// 这个转换使用正则表达式就行了。

var evalExpr = /<%=(.+?)%>/g;
var expr = /<%([\s\S]+?)>/g;

template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');

template = 'echo(`' + template + '`);';


//然后，将template封装在一个函数里面返回，就可以了。

var script =
    `(function parse(data){
  var output = "";

  function echo(html){
    output += html;
  }

  ${ template }

  return output;
})`;

return script;

// 将上面的内容拼装成一个模板编译函数compile。

function compile(template) {
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script =
        `(function parse(data){
    var output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

    return script;
}

// compile函数的用法如下。

var parse = eval(compile(template));
div.innerHTML = parse({ supplies: ["broom", "mop", "cleaner"] });
//   <ul>
//     <li>broom</li>
//     <li>mop</li>
//     <li>cleaner</li>
//   </ul>