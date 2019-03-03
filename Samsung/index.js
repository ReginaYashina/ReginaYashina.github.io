(function( $ ) {
	$.fn.slideshow = function( options ) {
		options = $.extend({
			slides: ".slide",
			speed: 4000,
			easing: "linear"	
		}, options);
		var timer = null;
		var index = 0;
		var slideTo = function( slide, element ) {
			var $currentSlide = $( options.slides, element ).eq( slide );
			$currentSlide.stop( true, true ).
			animate({
				opacity: 1
			}, options.speed, options.easing ).
			siblings( options.slides ).
			css( "opacity", 0 );		
		};
		var autoSlide = function( element ) {
			timer = setInterval(function() {
				index++;
				if( index == $( options.slides, element ).length ) {
					index = 0;
				}
				slideTo( index, element );
			}, options.speed);	
		};
		var startStop = function( element ) {
			element.hover(function() {
				clearInterval( timer );
				timer = null;	
			}, function() {
				autoSlide( element );	
			});
		};	
		return this.each(function() {
			var $element = $( this ),
				$previous = $( options.previous, $element ),
				$next = $( options.next, $element ),
				index = 0,
				total = $( options.slides ).length;
				$( options.slides, $element ).each(function() {
					var $slide = $( this );
					var image = $slide.data( "image" );
					$slide.css( "backgroundImage", "url(" + image + ")" );
				});
				autoSlide( $element );
				startStop( $element );
		});
	};
	$(function() {
		$( "#main-slider" ).slideshow();	
	});
})( jQuery );
Share = {
	vkontakte: function(purl, ptitle, pimg, text) {
		url  = 'http://vkontakte.ru/share.php?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&image='       + encodeURIComponent(pimg);
		url += '&noparse=true';
		Share.popup(url);
	},
	odnoklassniki: function(purl, text) {
		url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
		url += '&st.comments=' + encodeURIComponent(text);
		url += '&st._surl='    + encodeURIComponent(purl);
		Share.popup(url);
	},
	facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},
	mailru: function(purl, ptitle, pimg, text) {
		url  = 'http://connect.mail.ru/share?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&imageurl='    + encodeURIComponent(pimg);
		Share.popup(url)
	},
	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};



	
