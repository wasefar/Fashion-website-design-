/*
Theme Name: Bishop
Version: 1.2.0
Author: Webredox
Author URI: http://www.webredox.net 
Description: Multi-Purpose Theme by Webredox
*/

/*	IE 10 Fix*/

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

$(document).ready(function($) {
    "use strict";
		
		try {
			$("nav").sticky({
				topSpacing: 0,
				className: 'sticky'
			});
		} catch (err) {

		}
		
		$(".post-slider").owlCarousel({
			items: 1,
			navigation: false,
			pagination: false,
			singleItem:true,
			autoPlay: true,
			transitionStyle: "backSlide"
		});
			
		$(".testimonial-slide-1").owlCarousel({
			items: 1,
			navigation: false,
			pagination: true,
			paginationNumbers: true,
			singleItem:true,
			autoPlay: true,
			transitionStyle: "backSlide"
		});
		
		$(".testimonial-slide-2").owlCarousel({
			items: 4,
			navigation: false,
			pagination: true,
			autoPlay: true
		});
		
		$(".testimonial-slide-3").owlCarousel({
			items: 1,
			navigation: false,
			pagination: false,
			autoPlay: true
		});
		
		$(".portfolio-single-slide").owlCarousel({
			items: 1,
			navigation: true,
			navigationText : ["<img src='assets/images/owl-left.png'>", "<img src='assets/images/owl-right.png'>"],
			pagination: false,
			paginationNumbers: true,
			singleItem:true,
			autoPlay: true,
			transitionStyle: "backSlide"
		});
		
		
			// hide #back-top first
			$("#back-top").hide();
			
			// fade in #back-top
			$(function () {
				$(window).scroll(function () {
					if ($(this).scrollTop() > 100) {
						$('#back-top').fadeIn();
					} else {
						$('#back-top').fadeOut();
					}
				});

				// scroll body to 0px on click
				$('#back-top a').click(function () {
					$('body,html').animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			});
			
			
			$(".team-social").css({
				"margin-top": 0 * $(".team-social").height() / 2 + "px"
			});
			  
			  // content functions ------------------
				$(".team-image-hover").hover(function() {
					$(this).find("ul.team-social").fadeIn();
					$(this).find(".team-social a").each(function(a) {
						var b = $(this);
						setTimeout(function() {
							b.animate({
								opacity: 1,
								top: "0"
							}, 400);
						}, 150 * a);
					});
				}, function() {
					$(this).find(".team-social a").each(function(a) {
						var b = $(this);
						setTimeout(function() {
							b.animate({
								opacity: 0,
								top: "50px"
							}, 400);
						}, 150 * a);
					});
					setTimeout(function() {
						$(this).find("ul.team-social").fadeOut();
					}, 150);
				});
	
	});
	
	
	/* ==============================================
	Skill Bars
	=============================================== */
		try {
			
			$('.progress-col').waypoint(function() {
			   jQuery('.skillbar').each(function(){
					jQuery(this).find('.skillbar-bar').animate({
						width:jQuery(this).attr('data-percent')
					},2000);
				});
				
				}, { offset: '100%' 
			});	
	
		} catch (err) {

        }
	/* ==============================================
EASY PIE CHART
=============================================== */		
	try {
        jQuery('.chart').bind('inview', function(event, visible) {
            var c = jQuery(this).css('color');
            $('.chart').easyPieChart({
                scaleColor:false,
				lineWidth:	15,
				lineCap: 'Square',
				animate:4000,
				size:	200,
				barColor: '#1c96ac',
				trackColor: '#d8d8d8',
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }
            });
        });
    } catch (err) {

    }

		
	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image',
		});
	} catch(err) {

	}
	
	
	
	/* ==============================================
	Liquid Slider - Home Text Slider
	=============================================== */
	$('#slider-home').liquidSlider({
		autoSlide: true,
		autoSlideInterval: 4500,
		autoSlideControls: true,
		forceAutoSlide: true,
		dynamicArrows: false,

		slideEaseFunction: 'animate.css',
		slideEaseDuration: 900,
		heightEaseDuration: 900,
		animateIn: "bounceIn",
		animateOut: "bounceOut",
		callback: function() {
			var self = this;
			$('.slider-6-panel').each(function() {
				$(this).removeClass('animated ' + self.options.animateIn);
			});
		}
	});
	
	/* ==============================================
	Backstretch
	=============================================== */

	$(".home-fullscreen-slider").backstretch([
		"assets/images/revolution/slide_66.jpg",
		"assets/images/revolution/slide_67.jpg",
		"assets/images/revolution/slide_68.jpg"
	], {
		fade: 750,
		duration: 4000
	});
	
	
	// First we're going to hide these elements
		$(".small-play-btn").hide();

		// Start the movie
		$("#video").on("YTPStart",function(){
			$(".small-play-btn").hide();
			$(".small-pause-btn").show();
		});

		// Pause the movie
		$("#video").on("YTPPause",function(){
			$(".small-play-btn").show();
			$(".small-pause-btn").hide();
		});

		
	$( ".top-cart-trigger" ).on( 'click', function() {
		$( "#click-toggle" ).slideToggle( "slow" );
	});	
	
	
	if ($(window).width() < 767) {
		
			  
		jQuery(".nav").each(function(i){
		jQuery(".nav > li.drop > a").addClass('wractive dropnav');
		   
		});
		
		jQuery(".nav").each(function(i){
		jQuery("ul.drop-down li.drop > a").addClass('wrsubactive dropnav');
		   
		});
		
		jQuery(".nav a.wractive").on( 'click', function (e) {
        e.preventDefault();

        jQuery(this).parent().find(".drop-down").slideToggle(300);
			if (jQuery(this).hasClass("active")) {
				jQuery(this).removeClass('active');
			} else {
				jQuery(this).addClass('active');
			}

		});
	
			jQuery(".nav a.wrsubactive").on( 'click', function (e) {
				e.preventDefault();

				jQuery(this).parent().find(".drop-down").slideToggle(300);
				if (jQuery(this).hasClass("active")) {
					jQuery(this).removeClass('active');
				} else {
					jQuery(this).addClass('active');
				}

			});
			
		}
		
		else{
			jQuery(".nav").each(function(i){
			jQuery(".nav > li.drop > a").removeClass('wractive dropnav');
			   
			});
			
			jQuery(".nav").each(function(i){
			jQuery("ul.drop-down li.drop > a").removeClass('wrsubactive dropnav');
				
			});
		}
		
		
		/* ==============================================
	Preloader
	=============================================== */
	try {
		$(window).load(function() {
			$("#preloader").delay(1000).fadeOut(1000);
		});
	} catch (err) {

        }
		
		
		
		
	$(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;

        // passes on every "a" tag
        $(".navbar-nav li a").each(function() {
            // checks if its the same on the address bar
            if (url == (this.href)) {
                $(this).closest("li").addClass("active");
     $(this).parents('li').addClass('active');
            }
        });
    });
	
		
		
		 
		
	
	
	