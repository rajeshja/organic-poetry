var FSR = {
    'version': '1.0',
    'date:': '06022009',
    'cid': 'gcdwU50NZREhoRxwJI1IEw==',
    'sid': 'MOBILE',
    'url': 'survey.foreseeresults.com/survey/display',
    'userAgent': navigator.userAgent
};

FSR.Browser = function(){
	try{
		var versions = "applewebkit/[0-9]+|blackberry[0-9]+/[0-9]+|playstation portable[)]?; [0-9]+|opera mini/[0-9]+|iemobile [0-9]+|up\.browser/[0-9]+";
		return escape(new String(FSR.userAgent.match(new RegExp("safari/[0-9]+", "i"))
					|| FSR.userAgent.match(new RegExp(versions, "i"))
					|| FSR.userAgent.match(new RegExp("opera [0-9]+", "i"))
					|| "unknown"
				).replace(/blackberry[0-9]+/i, "BlackBerry").replace(/playstation portable[)]?;/i, "PSP").replace("/", " "));
	}catch(e){}
};

FSR.Device = function(){
	try{
		var devices = "iphone|itouch|blackberry|nokia|android|windows ce|hp ipaq|palm|playstation portable";
		return escape(FSR.userAgent.match(new RegExp(devices, "i")) || FSR.userAgent.match(new RegExp("ppc", "i")) ||  "other");
	}catch(e){}
}

FSR.Screen = function(){
	try{return screen.width + "x" + screen.height;}catch(e){}
}

FSR.getParameter = function(name){
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null){ return ""; }
	else{ return results[1]; }
}

FSR.Survey = function(){
	var url = location.protocol + "//" + FSR.url + 
			"?cid=" + FSR.cid + 
			"&sid=" + FSR.sid + 
			"&cpp[orderid]=" + FSR.getParameter("orderid") +
			"&ccp[device]=" + FSR.Device() + 
			"&ccp[browser]=" + FSR.Browser() + 
			"&ccp[screen]=" + FSR.Screen() + 
			"&cpp[url]=" + escape(window.location.href);
	var survey = window.open(url, "popup");
}
