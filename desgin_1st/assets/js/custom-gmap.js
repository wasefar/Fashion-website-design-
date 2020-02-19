/* ==============================================
Google Maps
=============================================== */

$("#map").gmap3({
    marker:{     
	address:"93 Worth St, New York, NY"},
    map:{
    options:{
	styles: [ {
	stylers: [ { "saturation":-100 }, { "lightness": 0 }, { "gamma": 0.5 }]},
	],
	zoom: 10,
	scrollwheel:false,
	draggable: true }
	}
	});	
	
	
$("#map-2").gmap3({
    marker:{     
	address:"93 Worth St, New York, NY"},
    map:{
    options:{
	zoom: 10,
	scrollwheel:false,
	draggable: true }
	}
	});	