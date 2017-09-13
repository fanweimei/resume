const WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 8000});
wss.on('connect',function(ws) {
  console.log('client connected');
  ws.on('message', function(message) {
    console.log(message);
    var data = {
      name: 'fanfan'
    }
    ws.send(JSON.stringify(data));
  })
})
