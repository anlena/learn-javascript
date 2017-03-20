// id选择器
var test = document.getElementById("test");
// 标签选择器
var trs = document.getElementById("test-table").getElementsByTagName("tr");
// 类名选择器
var reds = document.getElementById("test-div").getElementsByClassName("red");

// 获取子元素
var cs = test.children;

// 获取节点test下第一个、最后一个节点：
var first = test.firstElementChild;
var last = test.lastElementChild;


// 通过querySelector获取ID为q1的节点：

var q1 = document.querySelector("#q1");

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：

var ps = q1.querySelectorAll("div.highlighted > p");