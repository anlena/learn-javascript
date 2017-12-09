/**
* 事件监听兼容
*/ 

function regEvent(ele,event_name,fun){
  if(window.attachEvent){
    ele.attachEvent(event_name,fun);  //IE浏览器
  }else{
    event_name = event_name.replace(/^on/,"");  //如果on开头，删除on
    ele.addEventListener(event_name,fun,false); //非IE浏览器
  }
}


/**
 
* 注册滚轮事件函数
 
* @param ele  注册的事件对象
 
* @param fun  注册事件函数
 
*/ 

function mouseWheel(ele,fun)

{

   (/firefox/i).test(navigator.userAgent)?ele.addEventListener("DOMMouseScroll",fun,false):ele.onmousewheel=fun;

}


/**
 * 发送请求
 */

function ajaxLoad(){
  var xmlhttp;
  // 创建 XMLHttpRequest 对象
  try{
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
  }catch(e){
      // code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200){  // 响应成功
        document.getElementById("demo").innerHTML=xmlhttp.responseText;
    }
  }
  // 初始化请求参数
  xmlhttp.open("GET","/demo/javascript/ajax/ajaxDemo.php?action=getIP",true);
  // 发送请求
  xmlhttp.send();
  
}