/*
Theme Name: Bishop
Version: 1.0.0
Author: Webredox
Author URI: http://www.webredox.net
Description: Multi-Purpose Theme by webredox
*/

/*	IE 10 Fix*/

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);


	$('.tweet-content').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: true,
		autoplay: true,
		touchMove: true,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 480,
		  settings: {
			dots: false,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	$('.portfolio-right-testimonial').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: true,
		autoplay: true,
		touchMove: true,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 480,
		  settings: {
			dots: false,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	
	$('.screenshot-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		arrows: false,
		autoplay: true,
		touchMove: true,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 480,
		  settings: {
			dots: false,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	
	$('.landing-clients').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		arrows: false,
		autoplay: true,
		touchMove: true,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 480,
		  settings: {
			dots: false,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
		
		