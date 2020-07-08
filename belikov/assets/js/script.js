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
	$('.slider_crtf').slick({
		arrows:false,
		dots:true,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		slidesToShow:6,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow:4
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow:1
				}
			}
		 ]
	});
});

;
    $(".show-image").click(function() {
    event.preventDefault();
    var  mainImage= $(this).index();
  
    $(this).parent('.gallery--miniature').prev('.gallery--images').children('picture').children('img').removeClass('active');
    $(this).parent('.gallery--miniature').prev('.gallery--images').children('picture').children('img:eq('+mainImage+')').addClass('active');
    
});

$(".main_section--show-image").click(function() {
    event.preventDefault();
    var  mainImage= $(this).index();
  
    $(this).parent('.main_section--miniature').prev('.main_section--images').children('picture').children('img').removeClass('active');
    $(this).parent('.main_section--miniature').prev('.main_section--images').children('picture').children('img:eq('+mainImage+')').addClass('active');
    
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
    let i = 0;
const item = $('.slider_fdb--item');
const btnPrev = $('.slider_fdb--prev');
const btnNext = $('.slider_fdb--next');


btnPrev.click(function () {
    i--;
    if (i < 0) {
        i =  item.length - 1;
    }
    item.eq(i).css({left: -130 + '%'});
    item.eq(i).animate({ left: 0 }, 1000);
    if(i == item.length - 1){
        item.eq(0).animate({ left: 100 + '%' }, 1000);
    }else{
        item.eq(i + 1).animate({ left: 100 + '%' }, 1000);
    }
   

})


btnNext.click(function () {
    i++;
    if (i > item.length - 1) {
        i = 0;
    }
    item.eq(i).css({left: 100 + '%'});
    item.eq(i).animate({ left: 0 }, 1000);
    item.eq(i - 1).animate({ left: -130 + '%' }, 1000);

})
;
    
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [53.893015, 27.491466],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    }),
        ponomarenko = new ymaps.Placemark([53.893019, 27.493680], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            // balloonContentHeader: "Балун метки",
            balloonContentBody: "г.Минск, ул.Пономаренко, 35а",
            // balloonContentFooter: "Подвал",
            iconCaption: 'улица Пономаренко, 35А'
        },{
            preset: 'islands#redDotIconWithCaption'
        }
        
        
        );

    mavra = new ymaps.Placemark([53.892755, 27.491566], {
        hintContent: 'Мы тут!',
        balloonContent: 'Мы тут!',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/2.png',
        // Размеры метки.
        iconImageSize: [100, 100],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-50, -56],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    });


    myMap.geoObjects.add(ponomarenko);
    myMap.geoObjects.add(mavra);
    myMap.geoObjects.add(myPlacemarkWithContent);


};



ymaps.ready(initExcursion);

function initExcursion() {
    var myMap = new ymaps.Map("map_excursion", {
        center: [53.902512, 27.561481],
        zoom: 9
    }, {
        searchControlProvider: 'yandex#search'
    }),
    Busuny = new ymaps.Placemark([54.188353, 27.573416], {
        hintContent: 'Воложенский район, д. Бузуны',
        balloonContent: 'Воложенский район, д. Бузуны',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/5.png',
        // Размеры метки.
        iconImageSize: [45, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    }),
    Chernica = new ymaps.Placemark([53.999819, 28.128498], {
        hintContent: 'Смолевический район, хутор Черница',
        balloonContent: 'Смолевический район, хутор Черница',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/5.png',
        // Размеры метки.
        iconImageSize: [45, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    }),
    Novoselje = new ymaps.Placemark([53.906697, 27.180229], {
        hintContent: 'Новоселье, ул.Цветочная, 2',
        balloonContent: 'Новоселье, ул.Цветочная, 2',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/5.png',
        // Размеры метки.
        iconImageSize: [45, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    }),
    Belica = new ymaps.Placemark([53.719365, 27.533801], {
        hintContent: 'д.Белица д. У-11',
        balloonContent: 'д.Белица д. У-11',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/5.png',
        // Размеры метки.
        iconImageSize: [45, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    }),
    Elnica = new ymaps.Placemark([53.815866, 27.723702], {
        hintContent: 'д.Ельница д.13',
        balloonContent: 'д.Ельница д.13',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/5.png',
        // Размеры метки.
        iconImageSize: [45, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    }),
    PrSloboda = new ymaps.Placemark([54.049862, 27.330465], {
        hintContent: 'д. Прудянская Слобода д.4',
        balloonContent: 'д. Прудянская Слобода д.4',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/5.png',
        // Размеры метки.
        iconImageSize: [45, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    }),
    Vyprabavalnik = new ymaps.Placemark([53.776021, 27.784182], {
        hintContent: 'садоводческое товарищество Выпрабавальник, 2087',
        balloonContent: 'садоводческое товарищество Выпрабавальник, 2087',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/5.png',
        // Размеры метки.
        iconImageSize: [45, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    }),
    Ozero = new ymaps.Placemark([53.643145, 27.457049], {
        hintContent: 'р-н Озерский с\с аг.Озеро ул.Вишневая д.22',
        balloonContent: 'р-н Озерский с\с аг.Озеро ул.Вишневая д.22',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/5.png',
        // Размеры метки.
        iconImageSize: [45, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    }),
    Grinkevichi = new ymaps.Placemark([53.823515, 27.002338], {
        hintContent: 'Держинский р-рн. Гринкевичи д. 12',
        balloonContent: 'Держинский р-рн. Гринкевичи д. 12',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/5.png',
        // Размеры метки.
        iconImageSize: [45, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    }),
    Novashino = new ymaps.Placemark([54.050046, 27.276005], {
        hintContent: 'п.Новашино, ул. Новаш уч. 206',
        balloonContent: 'п.Новашино, ул. Новаш уч. 206',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/5.png',
        // Размеры метки.
        iconImageSize: [45, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    }),
    Cvetochnaya = new ymaps.Placemark([53.906943, 27.179945], {
        hintContent: 'Новоселье, ул.Цветочная, 2',
        balloonContent: 'Новоселье, ул.Цветочная, 2',
        

    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/desktop/icons/5.png',
        // Размеры метки.
        iconImageSize: [45, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        // iconContentLayout: MyIconContentLayout
    });





    myMap.geoObjects.add(Busuny);
    myMap.geoObjects.add(Chernica);
    myMap.geoObjects.add(Novoselje);
    myMap.geoObjects.add(Belica);
    myMap.geoObjects.add(Elnica);
    myMap.geoObjects.add(PrSloboda);
    myMap.geoObjects.add(Vyprabavalnik);
    myMap.geoObjects.add(Ozero);
    myMap.geoObjects.add(Grinkevichi);
    myMap.geoObjects.add(Novashino);
    myMap.geoObjects.add(Cvetochnaya);

    myMap.geoObjects.add(myPlacemarkWithContent);


};



;
    $(".show_tab").click(function() {
    event.preventDefault();
    var  mainTab= $(this).index();
  
    $('.tabs--block').removeClass('active');
    $('.tabs--block').eq(mainTab).addClass('active'); 

    $('.tabs--item').removeClass('active');
    $('.tabs--item').eq(mainTab).addClass('active');  
    
});

;
    $(".polzunok-5").slider({
    min: 0,
    max: 500,
    values: [100, 300],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-5-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-5-right").val(ui.values[ 1 ]);  
    }    
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(document).focusout(function() {
    var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok-5").slider("option", "min"),
    where_right = $(".polzunok-5").slider("values", 1),
    input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok-5").slider("option", "max"),
    where_left = $(".polzunok-5").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".polzunok-input-5-left").val(input_left); 
    $(".polzunok-input-5-right").val(input_right); 
    $(".polzunok-5").slider( "values", [ input_left, input_right ] );
});
;
    //////////////////////main-screen///////////////////////////////////////////
// открыть по кнопке
$('.js-button-call').click(function() { 
	
	$('.js-overlay-call').fadeIn();
    
});

$('.js-button-gift').click(function() { 
	
	$('.js-overlay-gift').fadeIn();
    
});

$('.js-button-questions').click(function() { 
	
	$('.js-overlay-questions').fadeIn();
    
});

$('.js-button-reasons').click(function() { 
	
	$('.js-overlay-reasons').fadeIn();
    
});

$('.js-button-excursion').click(function() { 
	
	$('.js-overlay-excursion').fadeIn();
    
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
    $('.js-overlay-call, .js-overlay-gift, .js-overlay-questions, .js-overlay-reasons, .js-overlay-excursion, .js-overlay-thanks').fadeOut();
   
	
});
 
// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-call, .js-overlay-gift, .js-overlay-questions, .js-overlay-reasons, .js-overlay-excursion, .js-overlay-thanks').fadeOut();
       
		
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
// });;
    $(function() {
    var $li = $('.slider_crtf').find('.slider_crtf--item'),
        $links = $li.find('> a'),
        $lightbox = $('.lightbox'),
        $next = $('.next'),
        $prev = $('.prev'),
        $overlay = $('.overlay'),
        liIndex,
        targetImg;

        // console.log($li);
    
    // //preload images
    // var imgSources = [
    // 'images/img-1-lg.jpg',
    // 'images/img-2-lg.jpg',
    // 'images/img-3-lg.jpg',
    // 'images/img-4-lg.jpg'
    // ];
  
    // var imgs = [];
    // for (var i = 0; i < imgSources.length; i++) {
    //   imgs[i] = new Image();
    //   imgs[i].src = imgSources[i];
    // }
  
    function replaceImg(src) {
        $lightbox.find('source').attr('srcset', src);
      $lightbox.find('img').attr('src', src);
    }
  
    function getHref(index) {
      return $li.eq(index).find('>a').attr('href');
    }
  
    function closeLigtbox() {
      $lightbox.fadeOut();
    }
  
    $overlay.click(closeLigtbox);
  
    $links.click(function(e) {
      e.preventDefault();
      targetImg = $(this).attr('href');
      liIndex = $(this).parent().index();
      replaceImg(targetImg);
      $lightbox.fadeIn();
    });
  
     $next.click( function() {  
      if ( (liIndex + 1) < $li.length ) { 
        targetImg = getHref(liIndex + 1);
        liIndex ++;
      } else {
        targetImg = getHref(0);
        liIndex = 0;
      }
      replaceImg(targetImg);
    });
  
     $prev.click( function() {  
      if ( (liIndex) > 0 ) { 
        targetImg = getHref(liIndex - 1);
        liIndex --;
      } else {
        targetImg = getHref($li.length - 1);
        liIndex = $li.length - 1;
      }
      replaceImg(targetImg);
    });
    
  
  
  
  
  });
  ;
    $(function(){

 
    $(window).scroll(function() 
    {
      if($(this).scrollTop() != 0) 
      {
        $('#toTop').fadeIn();
       
      } else 
        {
          $('#toTop').fadeOut();
          
        }
    });
   
    $('#toTop').click(function() 
    {
      $('body,html').animate({scrollTop:0},800);
    });
  
  });
  
  
  
  ;
    
   
})

var ua = navigator.userAgent,
evens = (ua.match(/iPad/i)) ? "touchstart" : "click";

var number = 0;
var maxNumber = $(".quiz--page").length;
var $element = $(".quiz--page").find("input, select, textarea");
var btnNext = $('.quiz--next');
var testTextNum = maxNumber;
var testText = $('.quiz--number');
var $elementRadio = $(".quiz--page").not('.final, .no-focus').find("input[type='radio'], input[type='checkbox'] ");
var isValid;
var dataBlock;
var activeSlede = [];

var btnPrev = $('.quiz--prev');


for(var i = 0; i< maxNumber; i++){
  activeSlede[i] = false;
}

$element.on('change input', function (e) {
  var value = $(this).val().trim();
  isValid = value !== "";
  btnActive(!isValid);
  $(".text-subbtn").hide();
});

function btnActive(isValid) {
  if(number === 0){
    // btnPrev.prop('disabled', 'false');
    btnNext.prop('disabled', isValid);
  }else{
    // btnPrev.prop('disabled', false);
    if(activeSlede[number] === true || isValid === false){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }
    
  }

}

// sidebar
var $barLevel = Math.floor(100 / (maxNumber));
  var $barWidth = $barLevel;

  function progress(num){
    var testBlock = ".quiz--block-" + num ;
    var testCircle= ".quiz--circle-" + (num + 1) ;
    $(testBlock).addClass('quiz--block-active');
    $(testCircle).addClass('quiz--circle-active');
    $(".quiz--progress").text($barWidth + '%');
  }
  progress(0);

  function progress_prev(num) {
    var testBlock_prev = ".quiz--block-" + num;
    var testCircle_prev = ".quiz--circle-" + (num + 1);
    jQuery(testBlock_prev).removeClass('quiz--block-active');
    jQuery(testCircle_prev).removeClass('quiz--circle-active');
    jQuery(".quiz--progress").text($barWidth + '%');
  }


 var otv = []; 
// btn

function btnClick() {

  btnNext.bind(evens, next);
  btnPrev.bind(evens, prev);
  // $elementRadio.on('input, change',next);
  // $('.inp-next').on('input, change',next);
}
btnClick();
function next(){
  event.preventDefault();
    activeSlede[number] = true;

    ++number;
    
    setTimeout(function(){
      $(".quiz--page").hide();
      $(".quiz--page").eq(number).fadeIn(1000);
    },300);
	$(".quiz--next").hide();
  $(".quiz--next").eq(number).show();
  $(".quiz--prev").hide();
	$(".quiz--prev").eq(number).show();
    
    btnActive(!isValid);
    if(activeSlede[number] === true){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }

    $barWidth += $barLevel;
    if(number < maxNumber - 1){
      $(".right__text-cont-item").hide();
      $(".right__text-cont-item").eq(number).fadeIn(1000);
    }else if(number > maxNumber - 1){
      $barWidth = 100;
    }

    if(number === 6){
      $('.test__righ-t1').hide();
      $('.test__righ-t2').fadeIn();
    }
    if(number === 7){
      $('.test__righ-t2').hide();
      $('.test__righ-t3').fadeIn();
      $('.present-img-item').attr({
        "src": $('.gift-box-item_new img').attr('src'),
      });

      for(var i = 0; i < maxNumber ; i++){
        var val = '' ;
        $(".quiz--page").eq(i).find('input').each(function(index, el) {
          if($(this).prop('checked')){
            val = val + $(this).val() + ' ,';
          }
        });
        otv[i] = val;
      }

      for(var i = 0; i < maxNumber ; i++){
        var str = otv[i].substring(0, otv[i].length - 1);
        $('.quiz--answers').append('<p class="quiz--item">'
          +str+'</p>');
      }
      $('.quiz--btn_block').hide();
      console.log(otv); 
    }
    // if(number === maxNumber - 1){
    //      $(".quiz--btn_block").hide();
    //      setTimeout(function(){
    //        $(".quiz--page").hide();
    //        $(".quiz--page").eq(number + 1).fadeIn(1000);
    //        $(".test-item__number-furst").text(number + 1);
    //        $barWidth += $barLevel;
    //        progress(number);

    //        animateTop ();
    //      },2700);
    // }else{
       if(testTextNum != 1){
        testTextNum -= 1;
      if(testTextNum < 5 && testTextNum > 1){
        testText.text( testTextNum + ' %');
      }else if(testTextNum < 2){
        testText.text( testTextNum + ' %');
      }else{
        testText.text( testTextNum + ' %');
      }
    }
      setTimeout(function(){
          $(".test-item__number-furst").text(number + 1);
          // $barWidth += $barLevel;
          progress(number);

        //   animateTop ();
      },300);
    // }
}

function prev(){
  event.preventDefault();
    activeSlede[number] = true;

    --number;
    
    setTimeout(function(){
      $(".quiz--page").hide();
      $(".quiz--page").eq(number).fadeIn(1000);
    },300);
	$(".quiz--next").hide();
  $(".quiz--next").eq(number).show();
  $(".quiz--prev").hide();
  $(".quiz--prev").eq(number).show();
//   $("#not_vis").hide();
    
    btnActive(!isValid);
    if(activeSlede[number] === true){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }

    $barWidth -= $barLevel;
    if(number < maxNumber - 1){
      $(".right__text-cont-item").hide();
      $(".right__text-cont-item").eq(number).fadeIn(1000);
    }else if(number > maxNumber - 1){
      $barWidth = 100;
    }

    if(number === 6){
      $('.test__righ-t1').hide();
      $('.test__righ-t2').fadeIn();
    }
    if(number === 7){
      $('.test__righ-t2').hide();
      $('.test__righ-t3').fadeIn();
      $('.present-img-item').attr({
        "src": $('.gift-box-item_new img').attr('src'),
      });

      for(var i = 0; i < maxNumber ; i++){
        var val = '' ;
        $(".quiz--page").eq(i).find('input').each(function(index, el) {
          if($(this).prop('checked')){
            val = val + $(this).val() + ' ,';
          }
        });
        otv[i] = val;
      }

      for(var i = 0; i < maxNumber ; i++){
        var str = otv[i].substring(0, otv[i].length - 1);
        $('.text-final-ul').append('<p class="text-small text-final-li">'
          +str+'</p>');
      }
      $('.quiz--btn_block').hide();
      // console.log(otv);
    }
    // if(number === maxNumber - 1){
    //      $(".quiz--btn_block").hide();
    //      setTimeout(function(){
    //        $(".quiz--page").hide();
    //        $(".quiz--page").eq(number + 1).fadeIn(1000);
    //        $(".test-item__number-furst").text(number + 1);
    //        $barWidth += $barLevel;
    //        progress(number);

    //        animateTop ();
    //      },2700);
    // }else{
       if(testTextNum != 1){
        testTextNum += 1;
      if(testTextNum < 5 && testTextNum > 1){
        testText.text( testTextNum + '%');
      }else if(testTextNum < 2){
        testText.text( testTextNum + '%');
      }else{
        testText.text( testTextNum + ' %');
      }
    }
      setTimeout(function(){
          $(".test-item__number-furst").text(number + 1);
          // $barWidth += $barLevel;
          progress_prev(number+1);

        //   animateTop ();
      },300);
    // }
}
var inpTrue = false;
$('.gift').find('input').on('change input', function() {

      // $('.test__righ-t1').hide();
      // $('.test__righ-t2').fadeIn();
      $('.gift-box-item img').attr({
        "src": $(this).parents('.item-wq-6').find('.iw6i').attr('src'),
      });
      $('.text-prs').text($(this).parents('.item-wq-6').find('.text-small-test').text().trim());
      $('.title-presents-6').text($(this).val());
      $('.present-img').css({display: 'none'});
      $('.gift-title').css({
        marginTop:'-2vw'
      })
      $('.gift-box').css({
        marginTop:'18vw'
      })
  
});

// $('.qw3-no-inp').on('change input', function() {
//   $('.test-qw3-inpt').hide();
//   $('.test-qw3-inpt').find('input').val('');
//   inpTrue = false;
// });

  
function animateTop (){
  var elem = $('.form-test');
  var top = elem.offset().top - 15;
  $('body,html').animate({scrollTop: top}, 400);
}

$('.popup__form, .finished_project_section--form').submit(function() { 
  $.ajax({
    type: "POST",
    url: "http://belikov/wp-content/themes/belikov/assets/mail.php",
    data: $(this).serialize()
  }).done(function() {
    $('.js-overlay-thanks').fadeIn();
    $('.popup__overlay-form').fadeOut();
    $(this).find('input').val('');
    $('.popup__form, .finished_project_section--form').trigger('reset');
  });
  return false;
});


// var nForm = false;
// $(function(){
//   'use strict';
//   var nForm = false;
// $('form').on('submit', function(e){
//     e.preventDefault();
//     var $that = $(this);
//     var fd = new FormData( this );

//     var ref = $(this).find(".inp-num");


    
//     var constr = [];
//     var dopType = [];

//     $that.find('.btn').attr({
//       'disabled': 'true'
//     });

//     $('input[name="qw4"]').each(function(index, el) {
    
//       if($(this).prop('checked')){
//         constr.push($(this).val().trim());
//       }
//     });

//      $('input[name="qw3"]').each(function(index, el) {
    
//       if($(this).prop('checked')){
//         dopType.push($(this).val().trim());
//       }
//     });



//     var constr2= constr.join(' , ');

//     var dopType2= dopType.join(' , ');

//     fd.append('qw4', constr2);
//     fd.append('qw3', dopType2);

   
//     $.ajax({
//       url: 'http://belikov/wp-content/themes/belikov/assets/mail.php',
//       type: 'POST',
//       contentType: false, 
//       processData: false, 
//       data: fd,
//        success: function(msg){
//       //     if(!nForm){
//       //       $('.quiz--page', '.final').hide();
//       //         $('form').trigger('reset');
//       //       $('html').addClass('stop');
//       //       $('form').find('input, button').attr({
//       //         "disabled": 'true',
//       //       });
//       //       $('#thanks').fadeIn();
//       //         nForm = true;
//       //         $that.find('.btn').removeAttr('disabled');
//       if(!nForm){
//             $('.quiz--page').hide();
//             $('.qw9').fadeIn(1500);
//             $('.test-item__progress, .test-proc').hide();
//             $('.test__righ-t3').hide();
//             $('.test__righ-t4').fadeIn();

//             $('.qw9').find('.input').each(function(index, el) {
//               $(this).attr({
//                 "required": 'required',
//               });
//             });
//             nForm = true;
//             $that.find('.btn').removeAttr('disabled');


// 		//var u = new Url($('.servs').val());
// 		//u.query.thanks = 'thanks1';    // изменим значение параметра foo в QueryString

// 		//console.log( 'Измененный URL: ' + u);

// 		function updateURL() {
//     if (history.pushState) {
//         var baseUrl = $('.servs').val();
// console.log( baseUrl);
//         var newUrl = baseUrl + '/thanks1';
// console.log( newUrl);
//         history.pushState(null, null, newUrl);
//     }
//     else {
//         console.warn('History API не поддерживается');
//     }
// }
// updateURL();
//  		           }else{
//             $('form').trigger('reset');
//             $('html').addClass('stop');
//             $('form').find('input, button').attr({
//               "disabled": 'true',
//             });
//             $('#thanks').fadeIn();

// 				function updateURL() {
//     if (history.pushState) {
//         var baseUrl = $('.servs').val();
// console.log( baseUrl);
//         var newUrl = baseUrl + '/thanks2';
// console.log( newUrl);
//         history.pushState(null, null, newUrl);
//     }
//     else {
//         console.warn('History API не поддерживается');
//     }
// }
// updateURL();      
// 	}

//       },

//     });
//   });
// });

// function simulate(element, eventName)
// {
//     var options = extend(defaultOptions, arguments[2] || {});
//     var oEvent, eventType = null;

//     for (var name in eventMatchers)
//     {
//         if (eventMatchers[name].test(eventName)) { eventType = name; break; }
//     }

//     if (!eventType)
//         throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

//     if (document.createEvent)
//     {
//         oEvent = document.createEvent(eventType);
//         if (eventType == 'HTMLEvents')
//         {
//             oEvent.initEvent(eventName, options.bubbles, options.cancelable);
//         }
//         else
//         {
//             oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
//             options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
//             options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
//         }
//         element.dispatchEvent(oEvent);
//     }
//     else
//     {
//         options.clientX = options.pointerX;
//         options.clientY = options.pointerY;
//         var evt = document.createEventObject();
//         oEvent = extend(evt, options);
//         element.fireEvent('on' + eventName, oEvent);
//     }
//     return element;
// }

// function extend(destination, source) {
//     for (var property in source)
//       destination[property] = source[property];
//     return destination;
// }

// var eventMatchers = {
//     'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
//     'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
// }
// var defaultOptions = {
//     pointerX: 0,
//     pointerY: 0,
//     button: 0,
//     ctrlKey: false,
//     altKey: false,
//     shiftKey: false,
//     metaKey: false,
//     bubbles: true,
//     cancelable: true
// }
// // -----------------------


//   var idVideo;

//   function playYouModal(e) {
//     e.preventDefault();
//     $(".modal-video-body").append('<iframe></iframe>');
//     var iframe = $(".modal-video-body").find('iframe');

    
//     $('html').addClass('stop');
//     $('#video-modal').fadeIn().scrollTop(1);
//     $('#video-modal').find('.overlay-wrap').height($('#video-modal').find('.modal-wrap').outerHeight(true));
//     if ($(this).data('play') != null) {
//         idVideo = $(this).data("play");
//     }
//     var iframe_url = "https://www.youtube.com/embed/" + idVideo + "?enablejsapi=1&autoplay=1&autohide=1&rel=0";

//     if ($(this).attr("data-params")) iframe_url += '&' + $(this).attr("data-params");
    
//     iframe.attr({
//             src: iframe_url,
//             frameborder: '0',
//             allowfullscreen: 'allowfullscreen'
//         })
//         .css({
//             width: '100%',
//             height: '100%'
//         });

//      $(".modal-video-body").children()[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    
// }



//   // клики
//   $('.video-play').on('click', playYouModal);

// $('.close').on('click', function(event) {
//     event.preventDefault();
//     if($(this).hasClass('close-video')){
//       $('.modal-video-body iframe').remove();
//     }if($(this).hasClass('close-nav')){
//       $(".nav").removeClass('active');
//     }
//     $(".overlay").fadeOut();
//     $("html").removeClass('stop');
//   });
// $(".main__btn-wrap, .main__block-item-img").on("click", function (event) {
// 	event.preventDefault();
//     var id = $('.titletest'), top = $(id).offset().top - 30;
//     $('body,html').animate({scrollTop: top}, 800);
// });


;
// Отправка заявки 
// $(document).ready(function() {
// 	$('.popup__form, .finished_project_section--form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
// 		if (document.form.name.value == '' || document.form.phone.value == '' ) {
// 			valid = false;
// 			return valid;
// 		}
// 		$.ajax({
// 			type: "POST",
// 			url: "http://belikov/wp-content/themes/belikov/assets/mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$('.js-overlay-thanks').fadeIn();
// 			$(this).find('input').val('');
// 			$('.popup__form, .finished_project_section--form').trigger('reset');
// 		});
// 		return false;
// 	});
// });

// Закрыть попап «спасибо»
// $('.js-close-campaign').click(function() { // по клику на крестик
// 	$('.js-overlay-thanks').fadeOut();
// });

// $(document).mouseup(function (e) { // по клику вне попапа
//     var popup = $('.popup');
//     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
//         $('.js-overlay-thanks').fadeOut();
//     }
// });

// // Маска ввода номера телефона (плагин maskedinput)
// $(function($){
// 	$('[name="phone"]').mask("+7(999) 999-9999");
// });

;
