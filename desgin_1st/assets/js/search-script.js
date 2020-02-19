/*
Theme Name: Bishop
Version: 1.2.0
Author: Webredox
Author URI: http://www.webredox.net 
Description: Multi-Purpose Theme by Webredox
*/	
	/*-- search site --*/
	$( document ).ready(function() {
		 "use strict";
		
		/*-- click search --*/
		$(".filter-close-button a").click(function(){
			$("#home-search").slideToggle(500);
			return false;
		});
	});