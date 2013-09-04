var unicef = 
{

	siteURL: "http://unicefoncampuslincoln.co.uk",

	initialize: function(){
		unicef.initPage();
		//do some stuff
	},

	initPage: function(){
		unicef.drawNav();
	},

	drawNav: function(){
		$("#navigation").load("_navbar.html");
	},


};

unicef.initialize();