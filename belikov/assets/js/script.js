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
		dots:false,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		slidesToShow:6
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
    // ymaps.ready(function(){
//     // Указывается идентификатор HTML-элемента.
//     var map = new ymaps.Map("map", {
//         center: [53.892919, 27.493793],
//         zoom: 15
//     });
// });

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
})