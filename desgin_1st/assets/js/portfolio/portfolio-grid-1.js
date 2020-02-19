
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
		
		// use value of search field to filter
		var $quicksearch = $('#quicksearch').keyup( debounce( function() {
			qsRegex = new RegExp( $quicksearch.val(), 'gi' );
			$container.isotope();
		}, 200 ) );
		
		// debounce so filtering doesn't happen every millisecond
		function debounce( fn, threshold ) {
		  var timeout;
		  return function debounced() {
			if ( timeout ) {
			  clearTimeout( timeout );
			}
			function delayed() {
			  fn();
			  timeout = null;
			}
			timeout = setTimeout( delayed, threshold || 100 );
		  }
		}
		
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
		
		//browser select
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) 
		{
			$('.details-link-info').css({"top":"0","margin-top":"45%"});
			
			if ($(window).width() <= 767) {
				$('.details-link-info').css({"top":"0","margin-top":"45%"});
			}
		};
		
	});