/*
Theme Name: Ricochet
Version: 1.2.0
Author: Mkscoder
Author URI: http://www.mkscoder.com
Description: Multi-Purpose Theme by Mkscoder
*/

/*	IE 10 Fix*/

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

$(document).ready(function($) {
    "use strict";
		
		var menu = $('.navbar');
		$(window).scroll(function () {
		   if(scrollY <= 0){
			   menu.removeClass('second-nav').addClass('main-nav');
			}
		   if(scrollY > 0 ){
			   menu.removeClass('main-nav').addClass('second-nav');
			}
		});	
			
	});

	
	
	
		
		
	