//非IE浏览器下检测
function hasPlugin(name) {
	name = name.toLowerCase();
	for(var i=0; i<navigator.plugins.length; i++) {
		if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
			return true;
		}
	}
	return false;
}

//IE下检测,name是这个插件的COM标识符
function hasIEPlugin(name) {
	try{
		new ActiveXObject(name);
		return true;
	}catch(e){
		return false;
	}
}

//如果要兼容IE，每个插件单独检测
function hasFlash() {
	var rs = hasPlugin('Flash');
	if(!rs) {
		rs = hasIEPlugin('ShockwaveFlash.ShockwaveFlash');
	}
	return rs;
}
