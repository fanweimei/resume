
var util = {};

util.extend = function(tar, obj){
  for(var attr in obj ){
    if(obj.hasOwnProperty(attr)) {
      tar[attr] = obj[attr];
    }
  }
}

// 模拟ajax请求数据
util.ajax = function(options){
  var opt = {
    url: '',
    type: 'get',
    data: {},
    success: function(){},
    error: function(){}
  }
  util.extend(opt, options);
  if(opt.url) {
    var xhr = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject('Microsoft.XMLHTTP');
    var url = opt.url;
    var type = opt.type.toLowerCase();
    var dataArr =  [];
    for(var key in opt.data) {
      dataArr.push(key+'='+opt.data[key]);
    }
    if(type=='get') {
      url = dataArr.length>0? url+'?'+dataArr.join('&'): url;
      xhr.open(type, url, true);
      xhr.send();
    }
    if(type=='post'){
      xhr.open(type, url, true);
      xhr.setREquestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.send(dataArr.join('&'));
    }
    xhr.onload = function() {
      if(xhr.status == 200 || xhr.status == 304) {
        if(opt.success && opt.success instanceof Function) {
          var res = xhr.responseText;
          if (typeof res === 'string') {
            res = JSON.parse(res);
            opt.success.call(xhr, res);
          }
        }
      }else {
        if(opt.error && opt.error instanceof Function) {
          opt.error.call(xhr, xhr.status);
        }
      }
    }
  }
}

util.createScript = function(url, charset) {
  var script = document.createElement('script');
  charset && script.setAttribute('charset', charset);
  script.setAttribute('src', url);
  script.async = true;
  return script;
}

//通过jsonp跨域请求数据
util.jsonp = function(options){
  var url = options.url;
  var onsuccess = options.onsuccess;
  var onerror = options.onerror;
  var charset = options.charset || 'utf-8';

  var callbackName = 'jsonp'
  +Math.random().toString(16).replace(/[^a-z]+/g,'').substr(0,5);
  window[callbackName] = function() {
    if(onsuccess && onsuccess instanceof Function) {
      onsuccess(arguments[0]);
    }
  }
  var script = util.createScript(url+'?callback='+callbackName, charset);
  script.onload = script.onreadystatechange = function(){
    if(!script.readyState || /loaded|complete/.test(script.readyState)) {
      script.onload = script.onreadystatechange = null;
      if(script.parentNode){
        script.parentNode.removeChild(script);
      }
      window[callbackName] = null;
    }
  }
  script.onerror = function(){
    if(onerror && onerror instanceof Function) {
      onerror();
    }
  }
  document.getElementsByTagName('head')[0].appendChild(script);
}
