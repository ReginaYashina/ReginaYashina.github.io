//////////////////////main-screen///////////////////////////////////////////
// открыть по кнопке
$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
    
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
    $('.js-overlay-campaign').fadeOut();
   
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-campaign').fadeOut();
       
		
	}
});

// открыть по таймеру 
// $(window).on('load', function () { 
// 	setTimeout(function(){
// 		if($('.js-overlay-campaign').hasClass('disabled')) {
// 			return false;
// 		} else {
			
// 			$(".js-overlay-campaign").fadeIn();
// 		}
// 	}, 5000);
// });


///////////////////brif//////////////////////
// открыть по кнопке
$('.js-button-campaign-1').click(function() { 
	
	$('.js-overlay-campaign-1').fadeIn();
    
});

// закрыть на крестик
$('.js-close-campaign-1').click(function() { 
    $('.js-overlay-campaign-1').fadeOut();
   
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign-1');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-campaign-1').fadeOut();
       
		
	}
});

// открыть по таймеру 
// $(window).on('load', function () { 
// 	setTimeout(function(){
// 		if($('.js-overlay-campaign').hasClass('disabled')) {
// 			return false;
// 		} else {
			
// 			$(".js-overlay-campaign").fadeIn();
// 		}
// 	}, 5000);
// });