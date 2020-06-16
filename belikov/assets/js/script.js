$(document).ready(function () {
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
	$('.slider_fp').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800
		// responsive:[
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 			arrows:false
		// 		}
		// 	}
			// {
			// 	breakpoint: 550,
			// 	settings: {
			// 		slidesToShow:1
			// 	}
			// }
		//  ]
	});

});

;
    $(".show-image").click(function() {
    event.preventDefault();
    var  mainImage= $(this).index();
  
    $(this).parent('.gallery--miniature').prev('.gallery--images').children('picture').children('img').removeClass('active');
    $(this).parent('.gallery--miniature').prev('.gallery--images').children('picture').children('img:eq('+mainImage+')').addClass('active');
    
    console.log( $(this).parent('.gallery--miniature').prev('.gallery--images').children('picture '))
});

;
     $('.spoiler--title').click(function(event){
        if($('.spoiler').hasClass('one')){
            $('.spoiler--title').not($(this)).removeClass('active');
            $('.spoiler--text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    })

;
})