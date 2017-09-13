//通过node.js开启一个服务器，以jsonp的形式实现跨域发送数据
const http = require('http');

const hostname = '127.0.0.1';
const port = 9000;

const server = http.createServer((req, res) => {
  var index = req.url.indexOf('?');
  var params = req.url.substr(index+1).split('&');
  var arr, callbackName;
  for(var i=0; i<params.length; i++) {
    arr = params[i].split('=');
    if(arr[0]=='callback') {
      callbackName = arr[1];
      break;
    }
  }
  var rs = '';
  var data = {
    name: 'fanfan',
    age: 3
  }
  if(callbackName) {
    rs = callbackName+'('+JSON.stringify(data)+')'
  }
  console.log(rs);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript');
  res.end(rs);
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
