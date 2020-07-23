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

//Выпадающее меню

$('.categories--link').click(function(event){
    if($('.categories--list').hasClass('one')){
        $('.categories--link').not($(this)).next().removeClass('active');
        $('.categories--list-sub').not($(this).next()).slideUp(300);
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
        center: [53.850178, 27.647279],
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    }),
        ponomarenko = new ymaps.Placemark([53.893019, 27.493680], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            // balloonContentHeader: "Балун метки",
            balloonContentBody: "г.Минск, ул.Пономаренко, 35а",
            // balloonContentFooter: "Подвал",
            iconCaption: 'улица Пономаренко, 35А'
        }, {
            preset: 'islands#redDotIconWithCaption'
        }


        );

    mavra = new ymaps.Placemark([53.850178, 27.647279], {
        hintContent: 'Мы тут!',
        balloonContent: 'Мы тут!',


    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'https://house.belikov.by/wp-content/themes/belikov/assets/img/desktop/icons/2.png',
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




    myMap.behaviors.disable('scrollZoom');
    // myMap.geoObjects.add(ponomarenko);
    myMap.geoObjects.add(mavra);
    myMap.geoObjects.add(myPlacemarkWithContent);

};


ymaps.ready(initExcursion);

function initExcursion() {
    var map = new ymaps.Map("map_excursion", {
        center: [53.902512, 27.561481],
        zoom: 9,
        controls: []
    });
    // Создадим контент для меток.
    var Busuny = '<div class="map__content_wrapper"><h4 class="map__header">д. Бузуны, Воложенский р-он</h4><h5 class="map__subtitle">Объект №1</h5><p class="map__description">устройство кровли из металлочерепицы</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/1/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Krynica = '<div class="map__content_wrapper"><h4 class="map__header">Садовое товарищество "Крыница 92"</h4><h5 class="map__subtitle">Объект №2</h5><p class="map__description">строительство фундамента, стен и кровли </p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/2/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Novoselje = '<div class="map__content_wrapper"><h4 class="map__header">Новоселье, ул.Цветочная, 2</h4><h5 class="map__subtitle">Объект №63</h5><p class="map__description"> устройство свайно-ростверкового фундамента и черновой стяжки, строительство 2х этажей из г/с и кровли из металлочерепицы</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons""><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/63/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/63/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/63/3.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Belica = '<div class="map__content_wrapper"><h4 class="map__header">д.Белица д. У-11</h4><h5 class="map__subtitle">Объект №9</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/9/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Chernica = '<div class="map__content_wrapper"><h4 class="map__header">Смолевический район, хутор Черница</h4><h5 class="map__subtitle">Объект №9</h5><p class="map__description">строительство ленточного фундамента </p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/7/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Elnica = '<div class="map__content_wrapper"><h4 class="map__header">д.Ельница д.13</h4><h5 class="map__subtitle">Объект №11</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/11/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var PrSloboda = '<div class="map__content_wrapper"><h4 class="map__header">д. Прудянская Слобода д.4</h4><h5 class="map__subtitle">Объект №46</h5><p class="map__description">черновая стяжка, устройство свайно-ростверкового фундамента , ввод коммуникаций</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/46/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Vyprabavalnik = '<div class="map__content_wrapper"><h4 class="map__header">садоводческое товарищество Выпрабавальник, 2087</h4><h5 class="map__subtitle">Объект №13</h5><p class="map__description">устройство цокольного фундамента из ФБС блоков, монолитное перекрытие, кладка первого этажа, монолитное перекрытие первого и второго этажа, монолитная лестница в подвал</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/13/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Ozero = '<div class="map__content_wrapper"><h4 class="map__header">р-н Озерский с\с аг.Озеро ул.Вишневая д.22</h4><h5 class="map__subtitle">Объект №16</h5><p class="map__description">строительство ленточного фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/16/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Grinkevichi = '<div class="map__content_wrapper"><h4 class="map__header">Держинский р-рн. Гринкевичи д. 12</h4><h5 class="map__subtitle">Объект №18</h5><p class="map__description">устройство фундамента для забора</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/18/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Novashino = '<div class="map__content_wrapper"><h4 class="map__header">п.Новашино, ул. Новаш уч. 206</h4><h5 class="map__subtitle">Объект №22</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/22/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Cvetochnaya = '<div class="map__content_wrapper"><h4 class="map__header">Новоселье, ул.Цветочная, 2</h4><h5 class="map__subtitle">Объект №69</h5><p class="map__description">устройство плитного фундамента,  возведение стен из керамзитобетонного блока, устройство монолитного перекрытия</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/69/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Fanipol = '<div class="map__content_wrapper"><h4 class="map__header">г. Фаниполь</h4><h5 class="map__subtitle">Объект №3</h5><p class="map__description">подготовка нулевого цикла, площадь 1,5 га</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/3/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/3/2.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Sokol = '<div class="map__content_wrapper"><h4 class="map__header">Смолевический р-он, СТ Сокол</h4><h5 class="map__subtitle">Объект №4</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/4/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Mara = '<div class="map__content_wrapper"><h4 class="map__header">с\с СТ Мара уч.48</h4><h5 class="map__subtitle">Объект №17</h5><p class="map__description">устройство ленточного фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/17/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Shpilki = '<div class="map__content_wrapper"><h4 class="map__header">д. Шпильки, ул. Центральная д.4 </h4><h5 class="map__subtitle">Объект №19</h5><p class="map__description">устройство плитного фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/19/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Komuna = '<div class="map__content_wrapper"><h4 class="map__header">Логойский р-н. Янушковичский с\с д.Комуна</h4><h5 class="map__subtitle">Объект №20</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/20/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Velikopolje = '<div class="map__content_wrapper"><h4 class="map__header">д.Великополье, ул. Центральная д.27 кв.1</h4><h5 class="map__subtitle">Объект №21</h5><p class="map__description">замена фундамента под существующим домом</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/21/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Goncharka = 'div class="map__content_wrapper"><h4 class="map__header">Смолевический район, д. Гончарка</h4><h5 class="map__subtitle">Объект №23</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/23/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Verchles = '<div class="map__content_wrapper"><h4 class="map__header">с\с д.Верхлес уч. №13</h4><h5 class="map__subtitle">Объект №24</h5><p class="map__description">земляные работы,устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/24/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Vishnevka = '<div class="map__content_wrapper"><h4 class="map__header">д.Вишневка</h4><h5 class="map__subtitle">Объект №25</h5><p class="map__description">устройство свайно-ростверкового фундамента, установка гидроизоляция</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/25/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Zabolotje = '<div class="map__content_wrapper"><h4 class="map__header">д. Заболотье ул.Новая, д.6</h4><h5 class="map__subtitle">Объект №26</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/26/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Dovborovo = '<div class="map__content_wrapper"><h4 class="map__header">с\с, пос. Довборово, 2Б</h4><h5 class="map__subtitle">Объект №28</h5><p class="map__description">вертикальная планировка участка, устройство ленточного фундамента </p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/28/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Zhdanovichi = '<div class="map__content_wrapper"><h4 class="map__header">агр.гор. Ждановичи</h4><h5 class="map__subtitle">Объект №29</h5><p class="map__description">земляные работы, устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/29/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Charownica = '<div class="map__content_wrapper"><h4 class="map__header">Логойский р-н. СТ Чаровница</h4><h5 class="map__subtitle">Объект №30</h5><p class="map__description">устройство свайно-ростверкового фундамента, ростверк под печь</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/30/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Vishnevka18 = '<div class="map__content_wrapper"><h4 class="map__header">с\с д. Вишневка 18</h4><h5 class="map__subtitle">Объект №32</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/32/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Ptich = '<div class="map__content_wrapper"><h4 class="map__header">с\с СТ На Птичи уч. 107</h4><h5 class="map__subtitle">Объект №34</h5><p class="map__description">установка и бетонирование свай (забивные сваи)</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/34/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Kopishi = '<div class="map__content_wrapper"><h4 class="map__header">д. Копищи Ул. Подгорная 2</h4><h5 class="map__subtitle">Объект №36</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/36/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/36/2.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Pervomaj = '<div class="map__content_wrapper"><h4 class="map__header">д.Первомай, ул.Луговая уч10</h4><h5 class="map__subtitle">Объект №37</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/37/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Tarasovo = '<div class="map__content_wrapper"><h4 class="map__header">д.Тарасово, ул.Сосновая, уч21</h4><h5 class="map__subtitle">Объект №38</h5><p class="map__description">демонтаж рвзрушенного фундамента, земляные работы </p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/38/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Kolodishi = '<div class="map__content_wrapper"><h4 class="map__header">д.Колодищи, ул.Пригородная, 5</h4><h5 class="map__subtitle">Объект №39</h5><p class="map__description">строительство фундамента, стен и кровли </p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/39/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/39/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/39/3.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Strochica = '<div class="map__content_wrapper"><h4 class="map__header">д.Строчица, 6</h4><h5 class="map__subtitle">Объект №42</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/42/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/42/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/42/3.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Grynkovo = '<div class="map__content_wrapper"><h4 class="map__header">д. Грыньково, ул. Центральная д. 9</h4><h5 class="map__subtitle">Объект №43</h5><p class="map__description">фундамент под ограждение, площадка для дров, ступени гараж, подвал гаража</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/44/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Gaspadar = '<div class="map__content_wrapper"><h4 class="map__header">СТ "Гаспадар" уч№144</h4><h5 class="map__subtitle">Объект №45</h5><p class="map__description">строительство свайно-ростверкового фундамента, кладка стен два этажа, устройство кровли</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/45/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/45/2.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Molodechno = '<div class="map__content_wrapper"><h4 class="map__header">Молодечно, ул.Лесная, 28</h4><h5 class="map__subtitle">Объект №49</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/49/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Timoshki = '<div class="map__content_wrapper"><h4 class="map__header">д.Тимошки, 32</h4><h5 class="map__subtitle">Объект №51</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/51/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Volat = '<div class="map__content_wrapper"><h4 class="map__header">СТ "Волат МЗКТ" уч132</h4><h5 class="map__subtitle">Объект №55</h5><p class="map__description">устройство плитного фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/55/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Belaruchi = '<div class="map__content_wrapper"><h4 class="map__header">СТ "Беларучи", №278</h4><h5 class="map__subtitle">Объект №58</h5><p class="map__description">устройство свайно-ростверкового фундамента, кладка стен из керамзитобетонного блока, утройство кровли из металлочерепицы</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><input type="radio" id="button-4" name="buttons" checked="checked"><label for="button-4"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/58/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/58/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/58/3.png" alt="" class="map__slider_img"></li><li id="map_slide4"><img src="assets/img/map/58/4.png" alt="" class="map__slider_img"></li></ul></div></div><a href = "https://www.youtube.com/watch?v=IccWJ2uxyxA&t=22s" target="_blank" class="map__link">Посмотреть видеоролик</a></div>';
    var Berezovaja = '<div class="map__content_wrapper"><h4 class="map__header">аг. Озеро, ул.Березовая, 18</h4><h5 class="map__subtitle">Объект №59</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/59/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/59/2.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Leskovka = '<div class="map__content_wrapper"><h4 class="map__header">д.Лесковка, ул.Подлесная, 8</h4><h5 class="map__subtitle">Объект №60</h5><p class="map__description">устройство плитного фундамента по технологии УШП</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/60/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/60/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/60/3.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Felicianovo = '<div class="map__content_wrapper"><h4 class="map__header">д.Фелицианово, ул.Сельская, д. 2а</h4><h5 class="map__subtitle">Объект №62</h5><p class="map__description">устройство свайно-ростверкового фундамента, кладка стен из газосиликатного блока</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/62/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/62/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/62/3.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Gaspadar2002 = '<div class="map__content_wrapper"><h4 class="map__header">СТ "Гаспадар-2002"</h4><h5 class="map__subtitle">Объект №64</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/64/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Busuny100 = '<div class="map__content_wrapper"><h4 class="map__header">д. Бузуны, уч. 100</h4><h5 class="map__subtitle">Объект №67</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/67/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Vasilkovaja = '<div class="map__content_wrapper"><h4 class="map__header">г.Минск, ул.Васильковая, 4 (Озерище)</h4><h5 class="map__subtitle">Объект №71</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки, строительство стен из г/с и кровли из металлочерепицы</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/71/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/71/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/71/3.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Logozhesk = '<div class="map__content_wrapper"><h4 class="map__header">п.Логожеск, ул.Озерная, 6</h4><h5 class="map__subtitle">Объект №72</h5><p class="map__description">устройство подпорной стены с наклонными колоннами</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/72/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Slobodshina = '<div class="map__content_wrapper"><h4 class="map__header">п.Слободщина, ул.Славянская, 23</h4><h5 class="map__subtitle">Объект №74</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/74/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Luzhki = '<div class="map__content_wrapper"><h4 class="map__header">д. Лужки уч.3</h4><h5 class="map__subtitle">Объект №75</h5><p class="map__description">устройство свайно-ростверкового фундамента по забивным сваям, черновой стяжки,  кладка 2-х этажного дома из керамзитобетонного блока, устройство кровли из керамической черепицы</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/75/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/75/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/75/3.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Landysh = '<div class="map__content_wrapper"><h4 class="map__header">СТ "Ландыш 2005" ,уч №42</h4><h5 class="map__subtitle">Объект №79</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки, устройство септика</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/79/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Vinogradovka = '<div class="map__content_wrapper"><h4 class="map__header">д.Виноградовка, ул.Центральная, 14</h4><h5 class="map__subtitle">Объект №80</h5><p class="map__description">устройство мелко-заглубленного ленточного фундамента, строительство погреба </p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons" ><label for="button-2"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/80/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/81/1.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Machulishi = '<div class="map__content_wrapper"><h4 class="map__header">г.п. Мачулищи, У-84</h4><h5 class="map__subtitle">Объект №85</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки, кладка стен из керамзитобетонного блока</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/85/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/85/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/85/3.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Kasyn = '<div class="map__content_wrapper"><h4 class="map__header">д. Касынь ул. Луговая, 23</h4><h5 class="map__subtitle">Объект №88</h5><p class="map__description">возведение свайно-ростверкого фундамента под забор</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/88/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/88/2.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Chodakovo = '<div class="map__content_wrapper"><h4 class="map__header">СТ Ходаково 69</h4><h5 class="map__subtitle">Объект №89</h5><p class="map__description">устройство плитного фундамента, возведение стен из газосиликатных блоков </p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/89/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/89/2.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Ratkovskij = '<div class="map__content_wrapper"><h4 class="map__header">Раковский с/с, ул. Лесная 131 (Бузуны)</h4><h5 class="map__subtitle">Объект №90</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/90/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Teljakovo = '<div class="map__content_wrapper"><h4 class="map__header">д.Теляково , ул. Зеленая 13</h4><h5 class="map__subtitle">Объект №92</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки, вместе с ямой</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/92/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Vokzalnaja = '<div class="map__content_wrapper"><h4 class="map__header">аг. Ждановичи, ул.Вокзальная 18 кв.1</h4><h5 class="map__subtitle">Объект №94</h5><p class="map__description">Строительство цокольного этажа</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/94/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Zhukovka = '<div class="map__content_wrapper"><h4 class="map__header">д. Жуковка, участок №21</h4><h5 class="map__subtitle">Объект №95</h5><p class="map__description">устройство плитного фундамента, возведение 2-х этажей из газосиликатного блока, устройство монолитного перекрытия устройство кровли из металочерепицы</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/95/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/95/2.png" alt="" class="map__slider_img"></li></ul></div></div> </div> ';
    var Zvezdnoe = '<div class="map__content_wrapper"><h4 class="map__header">Ст Звездное у-193</h4><h5 class="map__subtitle">Объект №96</h5><p class="map__description">вертикальная планировка участка, устройство фундамента под дом, устройство подпорной стены </p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/96/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Stankovo = '<div class="map__content_wrapper"><h4 class="map__header">Станьковский с/с д. Васильковая, ул. Центральная 22</h4><h5 class="map__subtitle">Объект №97</h5><p class="map__description">устройство свайно-ростверкового фундамента, кладка стен из газосиликатного блока, устройство мягкой кровли </p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/97/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/97/2.png" alt="" class="map__slider_img"></li></ul></div></div> </div> ';
    var Degtjarevka = '<div class="map__content_wrapper"><h4 class="map__header">д. Дягтяревка, адм. Здание 37</h4><h5 class="map__subtitle">Объект №98</h5><p class="map__description">Устройство подпорной стены </p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/98/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/98/2.png" alt="" class="map__slider_img"></li></ul></div></div> </div> ';
    var Tanka = '<div class="map__content_wrapper"><h4 class="map__header">г. Смолевичи, пер. М.Танка 34</h4><h5 class="map__subtitle">Объект №99</h5><p class="map__description">устройство ленточного фундамента и черновой стяжки, кладка стен из газосиликатного блока</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/99/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Budennogo = '<div class="map__content_wrapper"><h4 class="map__header">д.Буденного у-35</h4><h5 class="map__subtitle">Объект №100</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки, монтаж септика, кладка стен из газосиликатного блока, монтаж фальцевой кровли</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/100/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/100/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/100/3.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Koljadichi = '<div class="map__content_wrapper"><h4 class="map__header">д. Колядичи, д.110</h4><h5 class="map__subtitle">Объект №104</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/104/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Priselki = '<div class="map__content_wrapper"><h4 class="map__header">д. Приселки у-5</h4><h5 class="map__subtitle">Объект №105</h5><p class="map__description">устройство свайно-ростверкового фундамента, кладка стен из керамзитобетонного блока, утройство кровли из металлочерепицы</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/105/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Abrikosovaja = '<div class="map__content_wrapper"><h4 class="map__header">д. Глебковичи, ул. Абрикосовая, д.4</h4><h5 class="map__subtitle">Объект №106</h5><p class="map__description">устройство свайно-ростверкового фундамента из забивных свай, возведение стен из газосиликатного блока, устройство кровли из металлочерепицы, внутреняя отделка </p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/106/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Rakov = '<div class="map__content_wrapper"><h4 class="map__header">д. Раков, ул. Боровая д.6</h4><h5 class="map__subtitle">Объект №107</h5><p class="map__description">???</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/107/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Budennogo1 = '<div class="map__content_wrapper"><h4 class="map__header">д. Буденого уч.6236851916010000055</h4><h5 class="map__subtitle">Объект №108</h5><p class="map__description">???</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/108/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Semkovo = '<div class="map__content_wrapper"><h4 class="map__header">Беларучский с/с. д. Семково, ул. Солнечная,5</h4><h5 class="map__subtitle">Объект №109</h5><p class="map__description">???</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/109/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Yantarnaya = '<div class="map__content_wrapper"><h4 class="map__header">д. Дроздово, ул. Янтарная 12</h4><h5 class="map__subtitle">Объект №110</h5><p class="map__description">возведение монолитного душа, забора, а так же постройка гаража из герамзитобетонного блока </p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/110/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/110/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/110/3.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Vesnika = '<div class="map__content_wrapper"><h4 class="map__header">г. Минск ул. Веснинка</h4><h5 class="map__subtitle">Объект №111</h5><p class="map__description">устройсвто свайно-ростверкового фундамента, забивные сваи под дом и  баню, возведение забора</p><div id="map__slider-wrapper"><input type="radio" id="button-1" name="buttons" checked="checked"><label for="button-1"></label><input type="radio" id="button-2" name="buttons"><label for="button-2"></label><input type="radio" id="button-3" name="buttons"><label for="button-3"></label><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/111/1.png" alt="" class="map__slider_img"></li><li id="map_slide2"><img src="assets/img/map/111/2.png" alt="" class="map__slider_img"></li><li id="map_slide3"><img src="assets/img/map/111/3.png" alt="" class="map__slider_img"></li></ul></div></div> </div>';
    var Dubinki = '<div class="map__content_wrapper"><h4 class="map__header">д. Дубинки у-6</h4><h5 class="map__subtitle">Объект №113</h5><p class="map__description">устройство свайно-ростверкового фундамента и черновой стяжки</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/113/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Brovki = '<div class="map__content_wrapper"><h4 class="map__header">д. Бровки ул. Рябинова, 8</h4><h5 class="map__subtitle">Объект №114</h5><p class="map__description">устройство плитного фундамента с ребрами вниз</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/114/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';
    var Yarshevichi = '<div class="map__content_wrapper"><h4 class="map__header">Яршевичи</h4><h5 class="map__subtitle">Объект №128</h5><p class="map__description">устройство свайно-ростверкового фундамента</p><div id="map__slider-wrapper"><div id="map__slider"><ul><li id="map_slide1"><img src="assets/img/map/128/1.png" alt=""  class="map__slider_img"></li></ul></div></div> </div>';






    // Создадим и добавим панель на карту.
    var panel = document.getElementById('map_content');
    // console.log(panel);
    // map.controls.add(panel, {
    //     float: 'left'
    // });
    // Создадим коллекцию геообъектов.
    var collection = new ymaps.GeoObjectCollection(null, {
        // Запретим появление балуна.
        hasBalloon: false,
        iconColor: '#FDC236'
    });
    // Добавим геообъекты в коллекцию.
    collection
        .add(new ymaps.Placemark([54.035688, 26.898597], {
            balloonContent: Yarshevichi
        }))
        .add(new ymaps.Placemark([54.039173, 27.382498], {
            balloonContent: Brovki
        }))
        .add(new ymaps.Placemark([53.664518, 27.600360], {
            balloonContent: Dubinki
        }))
        .add(new ymaps.Placemark([53.942193, 27.473039], {
            balloonContent: Vesnika
        }))
        .add(new ymaps.Placemark([53.989792, 27.633759], {
            balloonContent: Yantarnaya
        }))
        .add(new ymaps.Placemark([54.020945, 27.427515], {
            balloonContent: Semkovo
        }))
        .add(new ymaps.Placemark([54.081695, 27.740986], {
            balloonContent: Budennogo1
        }))
        .add(new ymaps.Placemark([53.964959, 27.027357], {
            balloonContent: Rakov
        }))
        .add(new ymaps.Placemark([53.915767, 27.861159], {
            balloonContent: Abrikosovaja
        }))
        .add(new ymaps.Placemark([54.142729, 27.609114], {
            balloonContent: Priselki
        }))
        .add(new ymaps.Placemark([53.825481, 27.570410], {
            balloonContent: Koljadichi
        }))
        .add(new ymaps.Placemark([54.084043, 27.742290], {
            balloonContent: Budennogo
        }))
        .add(new ymaps.Placemark([54.013200, 28.140140], {
            balloonContent: Tanka
        }))
        .add(new ymaps.Placemark([53.938978, 27.425060], {
            balloonContent: Degtjarevka
        }))
        .add(new ymaps.Placemark([53.680148, 27.244178], {
            balloonContent: Stankovo
        }))
        .add(new ymaps.Placemark([53.942090, 27.386629], {
            balloonContent: Zvezdnoe
        }))
        .add(new ymaps.Placemark([54.186687, 27.514870], {
            balloonContent: Zhukovka
        }))
        .add(new ymaps.Placemark([53.952052, 27.412840], {
            balloonContent: Vokzalnaja
        }))
        .add(new ymaps.Placemark([53.522734, 27.400303], {
            balloonContent: Teljakovo
        }))
        .add(new ymaps.Placemark([54.014083, 27.046504], {
            balloonContent: Ratkovskij
        }))
        .add(new ymaps.Placemark([53.782948, 27.394107], {
            balloonContent: Chodakovo
        }))
        .add(new ymaps.Placemark([54.073064, 27.533902], {
            balloonContent: Kasyn
        }))
        .add(new ymaps.Placemark([53.765006, 27.627639], {
            balloonContent: Machulishi
        }))
        .add(new ymaps.Placemark([53.651830, 27.191349], {
            balloonContent: Vinogradovka
        }))
        .add(new ymaps.Placemark([54.175617, 27.826717], {
            balloonContent: Landysh
        }))
        .add(new ymaps.Placemark([54.030148, 27.960249], {
            balloonContent: Luzhki
        }))
        .add(new ymaps.Placemark([53.998864, 27.820205], {
            balloonContent: Slobodshina
        }))
        .add(new ymaps.Placemark([54.178550, 27.814235], {
            balloonContent: Logozhesk
        }))
        .add(new ymaps.Placemark([53.936540, 27.721057], {
            balloonContent: Vasilkovaja
        }))
        .add(new ymaps.Placemark([54.016438, 27.050763], {
            balloonContent: Busuny100
        }))
        .add(new ymaps.Placemark([53.943649, 27.397045], {
            balloonContent: Gaspadar2002
        }))
        .add(new ymaps.Placemark([53.750509, 27.805634], {
            balloonContent: Felicianovo
        }))
        .add(new ymaps.Placemark([54.003733, 27.710691], {
            balloonContent: Leskovka
        }))
        .add(new ymaps.Placemark([53.642612, 27.458881], {
            balloonContent: Berezovaja
        }))
        .add(new ymaps.Placemark([54.096567, 27.574776], {
            balloonContent: Belaruchi
        }))
        .add(new ymaps.Placemark([53.730215, 27.910506], {
            balloonContent: Volat
        }))
        .add(new ymaps.Placemark([53.744058, 27.428862], {
            balloonContent: Timoshki
        }))
        .add(new ymaps.Placemark([54.322626, 26.834402], {
            balloonContent: Molodechno
        }))
        .add(new ymaps.Placemark([53.947159, 27.396594], {
            balloonContent: Gaspadar
        }))
        .add(new ymaps.Placemark([53.804450, 27.281065], {
            balloonContent: Grynkovo
        }))
        .add(new ymaps.Placemark([53.818229, 27.364125], {
            balloonContent: Strochica
        }))
        .add(new ymaps.Placemark([53.899101, 27.778451], {
            balloonContent: Kolodishi
        }))
        .add(new ymaps.Placemark([53.920036, 27.396442], {
            balloonContent: Tarasovo
        }))
        .add(new ymaps.Placemark([53.708509, 27.310570], {
            balloonContent: Pervomaj
        }))
        .add(new ymaps.Placemark([53.963791, 27.669934], {
            balloonContent: Kopishi
        }))
        .add(new ymaps.Placemark([53.795353, 27.408048], {
            balloonContent: Ptich
        }))
        .add(new ymaps.Placemark([53.939707, 27.184989], {
            balloonContent: Vishnevka18
        }))
        .add(new ymaps.Placemark([54.216978, 27.575189], {
            balloonContent: Charownica
        }))
        .add(new ymaps.Placemark([53.946963, 27.428085], {
            balloonContent: Zhdanovichi
        }))
        .add(new ymaps.Placemark([54.208617, 27.354895], {
            balloonContent: Dovborovo
        }))
        .add(new ymaps.Placemark([53.789305, 27.404123], {
            balloonContent: Zabolotje
        }))
        .add(new ymaps.Placemark([53.939729, 27.185035], {
            balloonContent: Vishnevka
        }))
        .add(new ymaps.Placemark([53.765207, 28.036636], {
            balloonContent: Verchles
        }))
        .add(new ymaps.Placemark([53.975479, 27.921915], {
            balloonContent: Goncharka
        }))
        .add(new ymaps.Placemark([53.679119, 28.567675], {
            balloonContent: Velikopolje
        }))
        .add(new ymaps.Placemark([54.252794, 27.621291], {
            balloonContent: Komuna
        }))
        .add(new ymaps.Placemark([53.756621, 27.392909], {
            balloonContent: Shpilki
        }))
        .add(new ymaps.Placemark([54.039926, 27.459403], {
            balloonContent: Mara
        }))
        .add(new ymaps.Placemark([53.860746, 27.927655], {
            balloonContent: Sokol
        }))
        .add(new ymaps.Placemark([53.742880, 27.353695], {
            balloonContent: Fanipol
        }))
        .add(new ymaps.Placemark([53.906943, 27.179945], {
            balloonContent: Cvetochnaya
        }))
        .add(new ymaps.Placemark([54.050046, 27.276005], {
            balloonContent: Novashino
        }))
        .add(new ymaps.Placemark([53.823515, 27.002338], {
            balloonContent: Grinkevichi
        }))
        .add(new ymaps.Placemark([53.643145, 27.457049], {
            balloonContent: Ozero
        }))
        .add(new ymaps.Placemark([53.776021, 27.784182], {
            balloonContent: Vyprabavalnik
        }))
        .add(new ymaps.Placemark([54.049862, 27.330465], {
            balloonContent: PrSloboda
        }))
        .add(new ymaps.Placemark([53.815866, 27.723702], {
            balloonContent: Elnica
        }))
        .add(new ymaps.Placemark([53.999819, 28.128498], {
            balloonContent: Chernica
        }))
        .add(new ymaps.Placemark([53.719365, 27.533801], {
            balloonContent: Belica
        }))
        .add(new ymaps.Placemark([53.906697, 27.180229], {
            balloonContent: Novoselje
        }))
        .add(new ymaps.Placemark([54.188348, 27.573399], {
            balloonContent: Krynica
        }))
        .add(new ymaps.Placemark([54.188353, 27.573416], {
            balloonContent: Busuny
        }));
    // Добавим коллекцию на карту.
    map.geoObjects.add(collection);
    // Подпишемся на событие клика по коллекции.
    collection.events.add('click', function (e) {
        // Получим ссылку на геообъект, по которому кликнул пользователь.
        var target = e.get('target');
        var content = target.properties.get('balloonContent');
        var bg = document.getElementById('excursion');
        var map_obj = document.getElementById('map_obj');
        // Зададим контент боковой панели.
        panel.insertAdjacentHTML('beforeend', content);
        panel.removeChild(panel.firstElementChild);
        map_obj.value = content;
        console.log(map_obj.value);
        bg.style.cssText = 'background: url(https://house.belikov.by/wp-content/themes/belikov/assets/img/desktop/backgrounds/popup_bg_active.png) no-repeat, #fff;';
        

        //Изменяем цвет метки при клике
        //Цвет неактивных меток
        for (j = 0; j < collection.getLength(); j++) {
            var currentPm = collection.get(j);
            currentPm.options.set(
                'iconColor', '#FDC236'
            );
        }

        // Цвет текущей метки
        target.options.set('iconColor', '#FF0000');
        

        // Переместим центр карты по координатам метки с учётом заданных отступов.
        // map.panTo(target.geometry.getCoordinates(), {useMapMargin: true});
    });
};;
    $(".show_tab").click(function() {
    event.preventDefault();
    var  mainTab= $(this).index();


    $(this).parent('.tabs--items').next('.tabs--body').children('.tabs--block').removeClass('active');
    $(this).parent('.tabs--items').next('.tabs--body').children('.tabs--block').eq(mainTab).addClass('active');

    $(this).parent('.tabs--items').next('.tabs--body').removeClass('active');
    $(this).parent('.tabs--items').next('.tabs--body').eq(mainTab).addClass('active');

    
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
var youtube_src = $("#myModal iframe").attr("src");
// открыть по кнопке
$('.js-button-call').click(function () {

	$('.js-overlay-call').fadeIn();

});

$('.js-button-gift').click(function () {

	$('.js-overlay-gift').fadeIn();

});

$('.js-button-questions').click(function () {

	$('.js-overlay-questions').fadeIn();

});

$('.js-button-reasons').click(function () {

	$('.js-overlay-reasons').fadeIn();

});

$('.js-button-excursion').click(function () {

	$('.js-overlay-excursion').fadeIn();

});

$('.js-button-quiz').click(function () {

	$('.js-overlay-quiz').fadeIn();

});

$('.js-button-quiz_modal').click(function () {

	$('.js-overlay-quiz_modal').fadeIn();

});


$('.js-button-video').click(function () {
	$("#myModal iframe").attr("src", youtube_src + "?autoplay=1");
	$('.js-overlay-video').fadeIn();

});



// закрыть на крестик
$('.js-close-campaign').click(function () {
	$('.js-overlay-call, .js-overlay-gift, .js-overlay-questions, .js-overlay-reasons, .js-overlay-excursion, .js-overlay-quiz_modal, .js-overlay-video, .js-overlay-thanks').fadeOut();
	$("#myModal iframe").attr("src", null);

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-call, .js-overlay-gift, .js-overlay-questions, .js-overlay-reasons, .js-overlay-excursion, .js-overlay-quiz_modal, .js-overlay-video, .js-overlay-thanks').fadeOut();
		$("#myModal iframe").attr("src", null);

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

//  var youtube_src = $("#myModal iframe").attr("src");
//    $('#myModal').on('shown.bs.modal', function () {
//      $("#myModal iframe").attr("src", youtube_src + "?autoplay=1");
//    });
//    $("#myModal").on('hidden.bs.modal', function (e) {
//      $("#myModal iframe").attr("src", null);
//    });


//    $('.js-button-video').click(function () {
// 	$("#myModal iframe").attr("src", youtube_src + "?autoplay=1");
//    });

//    $('.popup__close-video').click(function () {
// 	$("#myModal iframe").attr("src", null);
//    })

//    $(document).mouseup(function (e) {
// 	var popup = $('.js-popup-campaign');
// 	if (e.target != popup[0] && popup.has(e.target).length === 0) {
// 		$("#myModal iframe").attr("src", null);
// 	}
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
    jQuery(document).ready(function($) {
    $('input[type="tel"]').mask("+375-(99)-999-99-99",{placeholder:"_"});
  });;
    $(".finished_project_section--input-file[type=file]").change(function(){
    var filename = $(this).val().replace(/.*\\/, "");
    $("#filename").text(filename);
    $("#projectname").text(filename);
});

;
    $.each($('.calculator--label-c'), function(index, val){
    if($(this).find('input').prop('checked')==true){
        $(this).addClass('active');
    }
});
$(document).on('click', '.calculator--label-c', function(event){
    $(this).parents('.calculator--configuration').find('.calculator--label-c').removeClass('active');
    $(this).parents('.calculator--configuration').find('.calculator--label-c input').prop('checked', false);
    $(this).toggleClass('active');
    $(this).find('input').prop('checked', true);
    return false;
});
    
   
})

var ua = navigator.userAgent,
  evens = (ua.match(/iPad/i)) ? "touchstart" : "click";

var number = 0;
var maxNumber = $(".quiz--page").length;
var $element = $(".quiz--page").find("input, select, textarea");
var btnNext = $('.quiz--next');
var testTextNum = maxNumber;
var discount = 1;
var testText = $('.quiz--number');
var $elementRadio = $(".quiz--page").not('.final, .no-focus').find("input[type='radio'], input[type='checkbox'] ");
var isValid;
var dataBlock;
var activeSlede = [];

var btnPrev = $('.quiz--prev');

for (var i = 0; i < maxNumber; i++) {
  activeSlede[i] = false;
}

$element.on('change input', function (e) {
  var value = $(this).val().trim();
  isValid = value !== "";
  btnActive(!isValid);
  $(".text-subbtn").hide();
});

function btnActive(isValid) {
  if (number === 0) {
    // btnPrev.prop('disabled', 'false');
    btnNext.prop('disabled', isValid);
  } else {
    // btnPrev.prop('disabled', false);
    if (activeSlede[number] === true || isValid === false) {
      btnNext.prop('disabled', false);
    } else {
      btnNext.prop('disabled', true);
    }

  }

}


$('.polzunok-5').click(function () {
  btnNext.prop('disabled', false);
})

// sidebar
var $barLevel = Math.floor(100 / (maxNumber));
var $barWidth = $barLevel;

function progress(num) {
  var testBlock = ".quiz--block-" + num;
  var testCircle = ".quiz--circle-" + (num + 1);
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
  $elementRadio.on('input, change', next);
  // $('.inp-next').on('input, change',next);
}
btnClick();
function next() {
  event.preventDefault();
  activeSlede[number] = true;

  ++number;

  setTimeout(function () {
    $(".quiz--page").hide();
    $(".quiz--page").eq(number).fadeIn(1000);
  }, 300);
  $(".quiz--next").hide();
  $(".quiz--next").eq(number).show();
  $(".quiz--prev").hide();
  $(".quiz--prev").eq(number).show();

  discount += 1;
  testText.text(discount + '%');

  btnActive(!isValid);
  if (activeSlede[number] === true) {
    btnNext.prop('disabled', false);
  } else {
    btnNext.prop('disabled', true);
  }

  $barWidth += $barLevel;
  if (number < maxNumber - 1) {
    $(".right__text-cont-item").hide();
    $(".right__text-cont-item").eq(number).fadeIn(1000);
  } else if (number === maxNumber - 1) {
    $barWidth = 100;
  }

  if (number === 6) {
    $('.test__righ-t1').hide();
    $('.test__righ-t2').fadeIn();
  }
  if (number === 7) {
    $('.test__righ-t2').hide();
    $('.test__righ-t3').fadeIn();
    $('.present-img-item').attr({
      "src": $('.gift-box-item_new img').attr('src'),
    });

    for (var i = 0; i < maxNumber; i++) {
      var val = '';
      $(".quiz--page").eq(i).find('input').each(function (index, el) {
        if ($(this).prop('checked')) {
          val = val + $(this).val() + ' ,';
        }
      });
      otv[i] = val;
    }

    for (var i = 0; i < maxNumber; i++) {
      var str = otv[i].substring(0, otv[i].length - 1);
      $('.quiz--answers').append('<p class="quiz--item">'
        + str + '</p>');
    }
    $('.quiz--btn_block').hide();
    console.log(otv);
  }
  setTimeout(function () {
    $(".test-item__number-furst").text(number + 1);
    // $barWidth += $barLevel;
    progress(number);

    //   animateTop ();
  }, 300);
  // }
}


function prev() {
  event.preventDefault();
  activeSlede[number] = true;

  --number;

  setTimeout(function () {
    $(".quiz--page").hide();
    $(".quiz--page").eq(number).fadeIn(1000);
  }, 300);
  $(".quiz--next").hide();
  $(".quiz--next").eq(number).show();
  $(".quiz--prev").hide();
  $(".quiz--prev").eq(number).show();
  //   $("#not_vis").hide();

  discount -= 1;
  testText.text(discount + '%');


  btnActive(!isValid);
  if (activeSlede[number] === true) {
    btnNext.prop('disabled', false);
  } else {
    btnNext.prop('disabled', true);
  }

  $barWidth -= $barLevel;
  if (number < maxNumber - 1) {
    $(".right__text-cont-item").hide();
    $(".right__text-cont-item").eq(number).fadeIn(1000);
  } else if (number === maxNumber - 1) {
    $barWidth = 100;
  }

  if (number === 6) {
    $('.test__righ-t1').hide();
    $('.test__righ-t2').fadeIn();
  }
  if (number === 7) {
    $('.test__righ-t2').hide();
    $('.test__righ-t3').fadeIn();
    $('.present-img-item').attr({
      "src": $('.gift-box-item_new img').attr('src'),
    });

    for (var i = 0; i < maxNumber; i++) {
      var val = '';
      $(".quiz--page").eq(i).find('input').each(function (index, el) {
        if ($(this).prop('checked')) {
          val = val + $(this).val() + ' ,';
        }
      });
      otv[i] = val;
    }

    for (var i = 0; i < maxNumber; i++) {
      var str = otv[i].substring(0, otv[i].length - 1);
      $('.text-final-ul').append('<p class="text-small text-final-li">'
        + str + '</p>');
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
  //    if(testTextNum != 1){
  //     testTextNum += 1;
  //   if(testTextNum < 5 && testTextNum > 1){
  //     testText.text( testTextNum + '%');
  //   }else if(testTextNum < 2){
  //     testText.text( testTextNum + '%');
  //   }else{
  //     testText.text( testTextNum + ' %');
  //   }
  // }
  setTimeout(function () {
    $(".test-item__number-furst").text(number + 1);
    // $barWidth += $barLevel;
    progress_prev(number + 1);

    //   animateTop ();
  }, 300);
  // }
}
var inpTrue = false;
$('.gift').find('input').on('change input', function () {

  // $('.test__righ-t1').hide();
  // $('.test__righ-t2').fadeIn();
  $('.gift-box-item img').attr({
    "src": $(this).parents('.item-wq-6').find('.iw6i').attr('src'),
  });
  $('.text-prs').text($(this).parents('.item-wq-6').find('.text-small-test').text().trim());
  $('.title-presents-6').text($(this).val());
  $('.present-img').css({ display: 'none' });
  $('.gift-title').css({
    marginTop: '-2vw'
  })
  $('.gift-box').css({
    marginTop: '18vw'
  })

});

// $('.qw3-no-inp').on('change input', function() {
//   $('.test-qw3-inpt').hide();
//   $('.test-qw3-inpt').find('input').val('');
//   inpTrue = false;
// });


function animateTop() {
  var elem = $('.form-test');
  var top = elem.offset().top - 15;
  $('body,html').animate({ scrollTop: top }, 400);
}

$('.popup__form-simple, .quiz--form').submit(function () {
  $.ajax({
    type: "POST",
    url: "https://house.belikov.by/wp-content/themes/belikov/assets/mail.php",
    data: $(this).serialize(),
    dataType: 'json'
  }).done(function () {
    $('.js-overlay-thanks').fadeIn();
    $('.popup__overlay-form').fadeOut();
    $(this).find('input').val('');
    $('.popup__form-simple, .quiz--form').trigger('reset');
  });
  return false;
});



// $('.quiz__form').submit(function() { 
//   $.ajax({
//     type: "POST",
//     url: "http://minigun-agency.by/wp-content/themes/minigun/assets/mail.php",
//     data: $(this).serialize()
//   }).done(function() {
//     $('.quiz--thanks').fadeIn();
//     $('.quiz--page-final, .quiz--proc, .quiz--visual').fadeOut();
//     $('.quiz__for_mocup').removeClass('active');
//     // $('.quiz__form').trigger('reset');
//     // $('.quiz__page-final').hide();
//     // $('.quiz__page-first, .quiz__prev-first, .quiz__next-first').fadeIn();
//   });
//   return false;
// });



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
var ua_modal = navigator.userAgent,
evens = (ua_modal.match(/iPad/i)) ? "touchstart" : "click";
 
var number_modal= 0;
var maxNumber_modal = $(".quiz_modal--page").length;
var $element_modal = $(".quiz_modal--page").find("input, select, textarea");
var btnNext_modal = $('.quiz_modal--next');
var testTextNum_modal = maxNumber_modal;
var discount_modal = 1;
var testText_modal= $('.quiz_modal--number');
var $elementRadio_modal = $(".quiz_modal--page").not('.final, .no-focus').find("input[type='radio'], input[type='checkbox'] ");
var isValid_modal;
var dataBlock_modal;
var activeSlede_modal = [];

var btnPrev_modal = $('.quiz_modal--prev');

for(var i = 0; i< maxNumber_modal; i++){
  activeSlede_modal[i] = false;
}

$element_modal.on('change input', function (e) {
  var value_modal = $(this).val().trim();
  isValid_modal = value_modal !== "";
  btnActive_modal(!isValid_modal);
  $(".text-subbtn").hide();
});

function btnActive_modal(isValid_modal) {
  if(number_modal=== 0){
    // btnPrev_modal.prop('disabled', 'false');
    btnNext_modal.prop('disabled', isValid_modal);
  }else{
    // btnPrev_modal.prop('disabled', false);
    if(activeSlede_modal[number_modal] === true || isValid_modal === false){
      btnNext_modal.prop('disabled', false);
    }else{
      btnNext_modal.prop('disabled', true);
    }
    
  }

}


$('.polzunok-5').click(function(){
  btnNext_modal.prop('disabled',false);
})

// sidebar
var $barLevel_modal = Math.floor(100 / (maxNumber_modal));
  var $barWidth_modal = $barLevel_modal;

  function progress_modal(num){
    var testBlock_modal = ".quiz_modal--block-" + num ;
    var testCircle_modal= ".quiz_modal--circle-" + (num + 1) ;
    $(testBlock_modal).addClass('quiz_modal--block-active');
    $(testCircle_modal).addClass('quiz_modal--circle-active');
    $(".quiz_modal--progress").text($barWidth_modal + '%');
  }
  progress_modal(0); 

  function progress_prev_modal(num) {
    var testBlock_prev_modal = ".quiz_modal--block-" + num;
    var testCircle_prev_modal = ".quiz_modal--circle-" + (num + 1);
    jQuery(testBlock_prev_modal).removeClass('quiz_modal--block-active');
    jQuery(testCircle_prev_modal).removeClass('quiz_modal--circle-active');
    jQuery(".quiz_modal--progress").text($barWidth_modal + '%');
  }


 var otv_modal = []; 
// btn

function btnClick_modal() {

  btnNext_modal.bind(evens, next_modal);
  btnPrev_modal.bind(evens, prev_modal);
  $elementRadio_modal.on('input, change',next_modal);
  // $('.inp-next').on('input, change',next);
}
btnClick_modal();
function next_modal(){
  event.preventDefault();
    activeSlede_modal[number_modal] = true;

    ++number_modal;
    
    setTimeout(function(){
      $(".quiz_modal--page").hide();
      $(".quiz_modal--page").eq(number_modal).fadeIn(1000);
    },300);
	$(".quiz_modal--next").hide();
  $(".quiz_modal--next").eq(number_modal).show();
  $(".quiz_modal--prev").hide();
  $(".quiz_modal--prev").eq(number_modal).show();
  
  discount_modal += 1;
  testText_modal.text( discount_modal + '%');
    
    btnActive_modal(!isValid_modal);
    if(activeSlede_modal[number_modal] === true){
      btnNext_modal.prop('disabled', false);
    }else{
      btnNext_modal.prop('disabled', true);
    }

    $barWidth_modal += $barLevel_modal;
    if(number_modal< maxNumber_modal - 1){
      $(".right__text-cont-item").hide();
      $(".right__text-cont-item").eq(number_modal).fadeIn(1000);
    }else if(number_modal=== maxNumber_modal - 1){
      $barWidth_modal = 100;
    }

    if(number_modal=== 6){
      $('.test__righ-t1').hide();
      $('.test__righ-t2').fadeIn();
    }
    if(number_modal=== 7){
      $('.test__righ-t2').hide();
      $('.test__righ-t3').fadeIn();
      $('.present-img-item').attr({
        "src": $('.gift-box-item_new img').attr('src'),
      });

      for(var i = 0; i < maxNumber_modal ; i++){
        var val_modal = '' ;
        $(".quiz_modal--page").eq(i).find('input').each(function(index, el) {
          if($(this).prop('checked')){
            val_modal = val_modal + $(this).val() + ' ,';
          }
        });
        otv_modal[i] = val_modal;
      }

      for(var i = 0; i < maxNumber_modal ; i++){
        var str_modal = otv_modal[i].substring(0, otv_modal[i].length - 1);
        $('.quiz_modal--answers').append('<p class="quiz_modal--item">'
          +str_modal+'</p>');
      }
      $('.quiz_modal--btn_block').hide();
      console.log(otv_modal); 
    }
      setTimeout(function(){
          $(".test-item__number-furst").text(number_modal+ 1);
          // $barWidth_modal += $barLevel_modal;
          progress_modal(number_modal);

        //   animateTop_modal ();
      },300);
    // }
}


function prev_modal(){
  event.preventDefault();
    activeSlede_modal[number_modal] = true;

    --number_modal;
    
    setTimeout(function(){
      $(".quiz_modal--page").hide();
      $(".quiz_modal--page").eq(number_modal).fadeIn(1000);
    },300);
	$(".quiz_modal--next").hide();
  $(".quiz_modal--next").eq(number_modal).show();
  $(".quiz_modal--prev").hide();
  $(".quiz_modal--prev").eq(number_modal).show();
//   $("#not_vis").hide();
    
discount_modal -= 1;
testText_modal.text( discount_modal + '%');


    btnActive_modal(!isValid_modal);
    if(activeSlede_modal[number_modal] === true){
      btnNext_modal.prop('disabled', false);
    }else{
      btnNext_modal.prop('disabled', true);
    }

    $barWidth_modal -= $barLevel_modal;
    if(number_modal< maxNumber_modal - 1){
      $(".right__text-cont-item").hide();
      $(".right__text-cont-item").eq(number_modal).fadeIn(1000);
    }else if(number_modal=== maxNumber_modal - 1){
      $barWidth_modal = 100;
    }

    if(number_modal=== 6){
      $('.test__righ-t1').hide();
      $('.test__righ-t2').fadeIn();
    }
    if(number_modal=== 7){
      $('.test__righ-t2').hide();
      $('.test__righ-t3').fadeIn();
      $('.present-img-item').attr({
        "src": $('.gift-box-item_new img').attr('src'),
      });

      for(var i = 0; i < maxNumber_modal ; i++){
        var val_modal = '' ;
        $(".quiz_modal--page").eq(i).find('input').each(function(index, el) {
          if($(this).prop('checked')){
            val_modal = val_modal + $(this).val() + ' ,';
          }
        });
        otv_modal[i] = val_modal;
      }

      for(var i = 0; i < maxNumber_modal ; i++){
        var str_modal = otv_modal[i].substring(0, otv_modal[i].length - 1);
        $('.text-final-ul').append('<p class="text-small text-final-li">'
          +str_modal+'</p>');
      }
      $('.quiz_modal--btn_block').hide();
      // console.log(otv_modal);
    }
    // if(number_modal=== maxNumber_modal - 1){
    //      $(".quiz_modal--btn_block").hide();
    //      setTimeout(function(){
    //        $(".quiz_modal--page").hide();
    //        $(".quiz_modal--page").eq(number_modal+ 1).fadeIn(1000);
    //        $(".test-item__number-furst").text(number_modal+ 1);
    //        $barWidth_modal += $barLevel_modal;
    //        progress_modal(number_modal);

    //        animateTop_modal ();
    //      },2700);
    // }else{
    //    if(testTextNum_modal != 1){
    //     testTextNum_modal += 1;
    //   if(testTextNum_modal < 5 && testTextNum_modal > 1){
    //     testText_modal.text( testTextNum_modal + '%');
    //   }else if(testTextNum_modal < 2){
    //     testText_modal.text( testTextNum_modal + '%');
    //   }else{
    //     testText_modal.text( testTextNum_modal + ' %');
    //   }
    // }
      setTimeout(function(){
          $(".test-item__number-furst").text(number_modal+ 1);
          // $barWidth_modal += $barLevel_modal;
          progress_prev_modal(number_modal+1);

        //   animateTop_modal ();
      },300);
    // }
}
var inpTrue_modal = false;
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
//   inpTrue_modal = false;
// });

  
function animateTop_modal (){
  var elem_modal = $('.form-test');
  var top_modal  = elem_modal.offset().top - 15;
  $('body,html').animate({scrollTop: top_modal}, 400);
}

$('.quiz_modal--form').submit(function() { 
  $.ajax({
    type: "POST",
    url: "https://house.belikov.by/wp-content/themes/belikov/assets/mail.php",
    data: $(this).serialize()
  }).done(function() {
    $('.js-overlay-thanks').fadeIn();
    $('.popup__overlay-form').fadeOut();
    $(this).find('input').val('');
    $('.quiz_modal--form').trigger('reset');
  });
  return false;
});

;
function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response); // internet explorer 11
            console.log(json);
            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                // alert("Сообщение отправлено");
                $('.js-overlay-thanks').fadeIn();
                $('.popup__overlay-form').fadeOut();
                $('.finished_project_section--form').trigger('reset');
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
    };
