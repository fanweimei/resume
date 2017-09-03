resume
======

在线简历模板 [查看效果](https://www.fanweimei.com/resume/)

### 需求分析

虽然目前已有一些网站是做模板简历的业务，如500丁在线简历编辑模板、可导出pdf，包图网、wps中的word简历模板等，但是一个稍微好看一点的模板都是需要付费，而且缺乏个性化设置，比如需要在简历中放置一些图表，基本上无法编辑，也很难灵活地增加一些自己喜欢的图表Logo等。此外从众多的简历模板中挑选一个自己喜欢的模板也不是一件简单的事。因此我做了一个在线简历模板。

### 快速开始

```
https://github.com/fanweimei/resume.git
cd resume
npm install
npm start
```

打开[localhost:3001](http://www.localhost:3001)

### 技术栈

-	[x] react
-	[x] webpack
-	[x] es6
-	[x] less
-	[x] babel
-	[x] zepto
-	[x] echarts

### 脚手架  
使用webpack搭建的脚手架，具有如有功能： 
* 区分开发环境和生产环境，开发环境使用命令：`npm start`, 生产环境打包: `npm run build` 
* 可解析jsx, es6, es7的语法，自动补全文件后缀 
* 可解析less语法，使用autoprefixer自动补全前缀 
* 可在js文件中导入html文件转为字符串（自定义模板） 
* 可解析图片、字体图标文件 
* js文件中可通过别名（~表示src目录）的方式导入文件 
* 支持js, css文件自动注入index.html文件中 
* 分离业务代码和公共依赖代码，公共代码块打包到vendor.js文件中 
* 支持环境变量、全局变量的配置，目前已配置的全局变量有React, ReactDOM 
* 开发环境中支持react组件热更新（使用react-hot-loader实现） 
* 开发环境中支持webpack-dev-server, 开启了调试模式 
* 生产环境中支持MD5，打包后增加文件版本后，解决缓存问题 
* 生产环境中单独分离css样式文件、支持压缩、打包后自动文件中所有的注释 
* 支持编译前先清空dist目录

### 目录文件

```
+ resume
    + src             //项目源码
      + assets       // 图片资源
      + container    //组件内容
        + submodule   // 子组件，简历中的每个模块都是一个子文件夹
          app.js      //简历组件
          app.less
      + lib           //公共Js文件库
      + style         //公共样式文件库
```

### 目前项目已有的功能 
- 更换主题（换肤） 
- 导出pdf 
- 支持本地缓存 
- 引入了echarts将技能模块以图表的形式来表示 
### 待完善的地方 
- 如果更改模板内容及样式，目前都只能从代码中更改，后期需增加可在线编辑的功能。 
- 目前是一个纯静态的前端页面，不涉及后台数据交互，换肤后的状态保存在本地localStorage中，如果后期需要增加更多模板，还可引入react-redux。
### 已优化的地方 
- 项目采用了cdn，所以访问速度比较快。 
- 在页面dom节点和环形图渲染之后，先预先将页面转化为pdf文件保存起来，之后点击下载按钮再导出pdf文件到本地，所以点击下载简历的速度很快。 
- 将html转化为pdf文件，引用了jsPdf第三方库，它本身是先将html转化为canvas，再将canvas转化为pdf，再将html转为canvas的过程中是存在一些问题的，如图片不高清、图片位移，[具体解决方法](https://segmentfault.com/a/1190000007707209)。
