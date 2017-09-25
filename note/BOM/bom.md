### window对象

#### 全局作用域

所有在全局作用域中声明的变量、函数都会变成window对象的属性和方法

```JS
var age = 22;
console.log(window.age) //22
```

定义全局变量和在window对象上直接定义属性的区别：全局变量不能通过delete操作符删除，而直接在window对象上定义的属性可以。

#### 窗口位置

获取窗口相对于屏幕左边和上边的位置

```JS
window.screenLeft/window.screenTop  //IE, Chrome, Safari, Opera
window.screenX/window.screenY   //Firfox
```

#### 窗口大小

```JS
window.outerWidth/window.outerHeight //浏览器窗口本身的尺寸
window.innerWidth /window.outerHeight //页面可视区的大小

document.documentElement.clientWidth||document.body.clientWidth //获取文档的宽度
```

#### 导航和打开窗口

window.open接受四个参数：要加载的url、窗口目标、一个特性字符串和一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值。

```JS
//返回一个新的window对象win
var win = window.open('https://www.fanweimei.com','_blank','width=400, height=400');

win.close(); // 关闭通过open打开的网页
//win.opener指向打开它的那个window
console.log(win.opener == window) //true
```

#### 间歇调用和超时调用

每隔1s输出一个自增数值，有两种方法：

```JS
//方法一：setInterval
var i = 0;
setInterval(function() {
  console.log(++i);
},1000);
//方法二：setTimeout

var num = 0;
function incrementNumber() {
  setTimeout(function() {
    console.log(++num);
    incrementNumber();
  }, 1000);
}
incrementNumber();
```

setInterval和setTimeout中的this指向window

#### 系统对话框

```JS
alert('0k');
confirm('Are you sure?');
prompt('what\'s your name?','fanfan');
window.print();     //显示打印对话框
window.find();       //显示查找对话框
```

### location对象

location对象下的所有属性：

```JS
hash: 返回url中的hash值
host: 返回服务器名称和端口号
hostname: 返回不带端口号的服务器名称
href: 返回当前加载页面的完整url
pathname: 返回url的目录或文件名
port: 返回url指定的端口号
protocol: 返回页面使用的协议
search: 返回url的查询字符串
```

查询字符串参数方法：

```JS
function getQueryStringArgs() {
  var qs = location.search.length>0
    ? location.search.substring(1): '';
  var args = {};
  var items = qs.length? qs.split('&'): [];
  var item = null, name = null, value = null;
  for(var i=0; i<items.length; i++){
    item = items[i].split('=');
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);

    if(name.length) {
      args[name] = value;
    }
  }
  return args;
}
```

改变浏览器的url有下面三种方式：

```JS
location.assign('https://www.fanweimei.com');
window.location = 'https://www.fanweimei.com';
location.href = 'https://www.fanweimei.com';
```

另外通过将hash, search, hostname, pathname和port属性设置为新值来改变url, 除hash外，改变其它值都会刷新页面。

上述任何一种方式修改url之后，历史记录中都会生成一条新记录，用户通过点击”后退”按钮都会导航到前一个页面。要禁止这种行为，可以使用replace。

```JS
window.replace('https://www.fanweimei.com');
```

reload方法可以重新加载当前页面：

```JS
window.reload(); //可能会从浏览器缓存中重新加载
window.reload(true); //强制从服务器端重新加载
```

### navigator

浏览器检测插件的方法：*见代码*

### history

```JS
history.go(num); //向前或向后跳转|num|页
history.back();  //类似于浏览器的后退按钮
history.forward();  //类似于浏览器的前进按钮
history.length   //历史记录数
```
