
	//jQuery Document Ready
	$(window).load(function() {
		
		
		// init Isotope
		var $container = $('#isotope-container').isotope({
			itemSelector: '.item',
			layoutMode: 'masonry',
			masonry: {
				gutter: 30
			},
			transitionDuration: '0.8s',
			
		});
		
		
		// bind filter button click
		$('#filters ul li a').click(function(){
				/*-- active filter button --*/
			$('#filters ul li a.active-button').removeClass('active-button');
			$(this).addClass('active-button');
			
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
			});
			return false;
			
		});
		
	});