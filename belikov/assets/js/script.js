//преобразование img в background
//js
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();
;
$('.header--burger').click(function () {
$('.header--burger, .header--nav-body').toggleClass('active');
$('body').toggleClass('lock');
    });
;
//определяет, когда использовать формат изображений .webp
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });;
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		appendDots:$('.slider_section--dots'),
		responsive:[
			{
				breakpoint: 540,
				settings: {
					arrows:false
				}
			}
			// {
			// 	breakpoint: 550,
			// 	settings: {
			// 		slidesToShow:1
			// 	}
			// }
		 ]
	});
// $('.slider').slick('setPosition');
	// $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	console.log(currentSlide);
	// 	if(nextSlide === 4){
	// 		$('.slider-section__bg').fadeIn(3000);
	// 		$('.slick-arrow').fadeOut();
	// 	} else {
	// 		$('.slider-section__bg').fadeOut();
	// 		$('.slick-arrow').fadeIn(3000);
	// 	}

	// 	if(nextSlide === 1){
	// 		$('#img_4, #img_3, #img_2').addClass('animation');
	// 	} else{
	// 		$('#img_4, #img_3, #img_2').removeClass('animation');
	// 	}

	// 	if(nextSlide === 2){
	// 		$('#img_5, #img_5-1, #img_6, #img_6-1, #img_7, #img_8').addClass('animation');
	// 	} else{
	// 		$('#img_5, #img_5-1, #img_6, #img_6-1, #img_7, #img_8').removeClass('animation');
	// 	}

	// 	if(nextSlide === 3){
	// 		$('#img_9, #img_9-1, #img_10, #img_10-1').addClass('animation');
	// 	} else{
	// 		$('#img_9, #img_9-1, #img_10, #img_10-1').removeClass('animation');
	// 	}




	// });
});

;
 