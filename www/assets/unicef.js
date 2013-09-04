var unicef = 
{

	siteURL: "http://unicefoncampuslincoln.co.uk",

	initialize: function(){
		navigator.splashscreen.hide();
		unicef.initPage();
		//do some stuff
	},

	initPage: function(){
		unicef.drawNav();
	},

	drawNav: function(){
		$("#navigation").load("_navbar.html");
	} 

	// Wait for device API libraries to load
    //
    onLoad: function() {
        document.addEventListener("deviceready", unicef.onDeviceReady, false);
    }

    // device APIs are available
    //
    onDeviceReady: function() {
        // Now safe to use device APIs
        unicef.initPage();
    }


};

unicef.initialize();