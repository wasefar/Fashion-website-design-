var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);


$(document).ready(function($) {

/* ======= Video Button ======= */   
		try {
			$(".pause-btn").on('click', function() {
			   $(this).hide();
			   $(".play-btn").show();
			});
			$(".play-btn").on('click', function() {
			   $(this).hide();
			   $(".pause-btn").show();
			});
		} catch (err) {

        }
		
});