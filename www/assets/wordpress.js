Handlebars.registerHelper("debug", function(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);
 
  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
  }
});





var wordpress = {

    baseURL: "http://unicefoncampuslincoln.co.uk/api/",
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any eventlists that are required on startup. Common eventlists are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the eventlist. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        wordpress.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    //get event list
    eventlist: function(){
        $.ajax({
            url: wordpress.baseURL + 'get_category_posts/?slug=events',
            type: 'GET',
            dataType: 'json',
            success: function(data){

                var source   = $("#eventlist-template").html();
                var template = Handlebars.compile(source);
                var eventlistData = template(data);
                $('#eventlist-data').html(eventlistData);
                $('#eventlist-data').trigger('create');

            },
            error: function(data){
                console.log(data);
            }
        });
    },

    indexslider: function(){
        $.ajax({
            url: wordpress.baseURL + 'get_category_posts/?slug=mobile-slider-images',
            type: 'GET',
            dataType: 'json',
            success: function(data){

                var source   = $("#indexcarousel-template").html();
                var template = Handlebars.compile(source);
                var indexcarouselData = template(data);
                $('#indexcarousel-data').html(indexcarouselData);
                $('#indexcarousel-data').trigger('create');

            },
            error: function(data){
                alert(data.statusText);
                console.log(data);
            }
        });
    }
    

};