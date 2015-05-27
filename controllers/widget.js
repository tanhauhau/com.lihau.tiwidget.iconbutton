var m = {};
m.data = {};
m.data.padding = 10;
m.data.iconPadding = 10;
m.data.iconURL = "";
m.data.radius = 20;
m.data.buttonColor = "#f00";
m.data.onClick = function(){};
m.setPadding = function(value){
	m.init({padding: value});
};
m.setIconPadding = function(value){
	m.init({iconPadding: value});
};
m.setIconURL = function(value){
	m.init({iconURL: value});
};
m.setRadius = function(value){
	m.init({radius: value});
};
m.setButtonColor = function(value){
	m.init({buttonColor: value});
};
m.getPadding = function(){return m.data.padding; };
m.getIconPadding = function(){return m.data.iconPadding; };
m.getIconURL = function(){return m.data.iconURL; };
m.getRadius = function(){return m.data.radius; };
m.getButtonColor = function(){return m.data.buttonColor; };

$.imgcontainer.addEventListener("click", function(e){
	m.data.onClick(_.extend(e, m.data));
});

m.init = function(args){
	_.extend(m.data, args);
	if(OS_ANDROID && m.data.iconURL[0] != "/"){
		m.data.iconURL = "/" + m.data.iconURL;
	}
	Ti.API.info(m.data.iconURL);
	$.img.image = m.data.iconURL;
	$.img.width = (m.data.radius - m.data.iconPadding) * 2;
	$.img.height = (m.data.radius - m.data.iconPadding) * 2;
	$.img.top = m.data.iconPadding;
	$.img.bottom = m.data.iconPadding;
	$.img.left = m.data.iconPadding;
	$.img.right = m.data.iconPadding;
	$.imgcontainer.backgroundColor = m.data.buttonColor;
	$.imgcontainer.borderRadius = m.data.radius;
	$.imgcontainer.width = m.data.radius * 2;
	$.imgcontainer.height = m.data.radius * 2;
	$.imgcontainer.top = m.data.padding;
	$.imgcontainer.bottom = m.data.padding;
	$.imgcontainer.left = m.data.padding;
	$.imgcontainer.right = m.data.padding;
	$.iconbutton.width = (m.data.radius + m.data.padding) * 2;
	$.iconbutton.height = (m.data.radius + m.data.padding) * 2;
};
exports.init = m.init;
exports.settings = m;