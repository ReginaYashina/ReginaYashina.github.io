$(document).ready(function () {
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
    $(document).ready(function () {
    $('.header__burger').click(function () {
$('.header__burger, .header__burger-line, .header__menu, .header__menu-mobile, .header__description, .header__contacts, .header__body, .header__logo, .header__logo>img').toggleClass('active');
$('.page').toggleClass('lock');
    });
});;
    if($(window).width()>=1024){
    $('.mouse-prallax').each(function () {
        $(this).on('mousemove', (e) => {
            let coordX = $(this).offset().left;
            let coordY = $(this).offset().top;
            const x = (e.pageX - coordX) / $(this).width();
            const y = (e.pageY - coordY) / $(this).height();

            $(this).find('.mouse_prallax__content1').css({
                'transform': 'translate3d(' + x * 21 + 'px, ' + y * 21 + 'px, 0px)',
                'transition': 'all 0.6s ease 0s'
            }


            );

            $(this).find('.mouse_prallax__content2').css({
                'transform': 'translate3d(' + x * 23 + 'px, -' + y * 23 + 'px, 0px)',
                'transition': 'all 0.6s ease 0s'
            }


            );

            $(this).find('.mouse_prallax__content3').css({
                'transform': 'translate3d(-' + x * 24 + 'px, ' + y * 24 + 'px, 0px)',
                'transition': 'all 0.6s ease 0s'
            }

            );

            $(this).find('.mouse_prallax__content4').css({
                'transform': 'translate3d(' + x * 22 + 'px, -' + y * 22 + 'px, 0px)',
                'transition': 'all 0.6s ease 0s'
            });



            $(this).on('mouseover', () => {
                $(this).find('.mouse_prallax__content1').css({
                    'transform': 'none',
                    'transition': 'all 0.2s ease 0s'
                }
                );

                $(this).find('.mouse_prallax__content2').css({
                    'transform': 'none',
                    'transition': 'all 0.2s ease 0s'
                }
                );

                $(this).find('.mouse_prallax__content3').css({
                    'transform': 'none',
                    'transition': 'all 0.2s ease 0s'
                }
                );

                $(this).find('.mouse_prallax__content4').css({
                    'transform': 'none',
                    'transition': 'all 0.2s ease 0s'
                }
                );

                



            })
        })


    })
}
    




































;
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
// });;
    
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		appendDots:$('.slider-section__dots'),
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					adaptiveHeight: true
				}
			}
		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow:1
		// 		}
		// 	}
		 ]
	});
	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log(currentSlide);
		if(nextSlide === 4){
			$('.slider-section__bg').fadeIn(3000);
			$('.slick-arrow').fadeOut();
		} else {
			$('.slider-section__bg').fadeOut();
			$('.slick-arrow').fadeIn(3000);
		}

		if(nextSlide === 1){
			$('#img_4, #img_3, #img_2').addClass('animation');
		} else{
			$('#img_4, #img_3, #img_2').removeClass('animation');
		}

		if(nextSlide === 2){
			$('#img_5, #img_5-1, #img_6, #img_6-1, #img_7, #img_8').addClass('animation');
		} else{
			$('#img_5, #img_5-1, #img_6, #img_6-1, #img_7, #img_8').removeClass('animation');
		}

		if(nextSlide === 3){
			$('#img_9, #img_9-1, #img_10, #img_10-1').addClass('animation');
		} else{
			$('#img_9, #img_9-1, #img_10, #img_10-1').removeClass('animation');
		}




	});

;
      $('.spoiler__title').click(function(event){
        if($('.spoiler').hasClass('one')){
            $('.spoiler__title').not($(this)).removeClass('active');
            $('.spoiler__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    })
;
    $(function () {
    $('#switch-btn-1').click(function () {
      $(this).toggleClass('switch-on');
      if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
      } else {
        $(this).trigger('off.switch');
      }
    });
    $('#switch-btn-1').on('on.switch', function () {
      $('#block-1').addClass('bl-hide');
      $('#block-2').removeClass('bl-hide');
    });
    $('.switch-btn').on('off.switch', function () {
      $('#block-1').removeClass('bl-hide');
      $('#block-2').addClass('bl-hide');
    });
  });;   
})

function theRotator() {
    $('.main-screen__img_change-left, .main-screen__img_change-right, .main-screen__title_change').css({ opacity: 0.0 });
    $('.main-screen__img_change-left:first, .main-screen__img_change-right:first, .main-screen__title_change:first').css({ opacity: 1.0 });
    setInterval('rotate()', 5000);
}

function rotate() {
    let current_left = ($('.main-screen__img_change-left.show') ? $('.main-screen__img_change-left.show') : $('.main-screen__img_change-left:first'));
    let current_right = ($('.main-screen__img_change-right.show') ? $('.main-screen__img_change-right.show') : $('.main-screen__img_change-right:first'));
    let current_title = ($('.main-screen__title_change.show') ? $('.main-screen__title_change.show') : $('.main-screen__title_change:first'));
    let next_left = ((current_left.next().length) ? ((current_left.next().hasClass('show')) ? $('.main-screen__img_change-left:first') : current_left.next()) : $('.main-screen__img_change-left:first'));
    let next_right = ((current_right.next().length) ? ((current_right.next().hasClass('show')) ? $('.main-screen__img_change-right:first') : current_right.next()) : $('.main-screen__img_change-right:first'));
    let next_title = ((current_title.next().length) ? ((current_title.next().hasClass('show')) ? $('.main-screen__title_change:first') : current_title.next()) : $('.main-screen__title_change:first'));

    next_left.css({ opacity: 0.0 })
        .addClass('show')
        .animate({ opacity: 1.0 }, 1000);

    current_left.animate({ opacity: 0.0 }, 1000)
        .removeClass('show');

    next_right.css({ opacity: 0.0 })
        .addClass('show')
        .animate({ opacity: 1.0 }, 1000);

    current_right.animate({ opacity: 0.0 }, 1000)
        .removeClass('show');

    next_title.css({ opacity: 0.0 })
        .addClass('show')
        .animate({ opacity: 1.0 }, 1000);

    current_title.animate({ opacity: 0.0 }, 1000)
        .removeClass('show');
}


$(document).ready(function () {
    theRotator();

});
var ua = navigator.userAgent,
evens = (ua.match(/iPad/i)) ? "touchstart" : "click";

var number = 0;
var maxNumber = $(".quiz__page").length;
var $element = $(".quiz__page").find("input, select, textarea");
var btnNext = $('.quiz__next');
var testTextNum = maxNumber;
var testText = $('.quiz__gift-count');
var $elementRadio = $(".quiz__page").not('.final, .no-focus').find("input[type='radio'], input[type='checkbox'] ");
var isValid;
var dataBlock;
var activeSlede = [];

var btnPrev = $('.quiz__prev');








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
    var testBlock = ".quiz__block-" + num ;
    var testCircle= ".quiz__circle-" + (num + 1) ;
    $(testBlock).addClass('quiz__block_active');
    $(testCircle).addClass('quiz__circle_active');
    $(".quiz__progress-bar").text($barWidth + '%');
  }
  progress(0);

  function progress_prev(num) {
    var testBlock_prev = ".quiz__block-" + num;
    var testCircle_prev = ".quiz__circle-" + (num + 1);
    jQuery(testBlock_prev).removeClass('quiz__block_active');
    jQuery(testCircle_prev).removeClass('quiz__circle_active');
    jQuery(".quiz__progress-bar").text($barWidth + '%');
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
      $(".quiz__page").hide();
      $(".quiz__page").eq(number).fadeIn(1000);
    },300);
	$(".quiz__next").hide();
  $(".quiz__next").eq(number).show();
  $(".quiz__prev").hide();
	$(".quiz__prev").eq(number).show();
    
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
        $(".quiz__page").eq(i).find('input').each(function(index, el) {
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
      $('.test__btn-block').hide();
      // console.log(otv);
    }
    // if(number === maxNumber - 1){
    //      $(".test__btn-block").hide();
    //      setTimeout(function(){
    //        $(".quiz__page").hide();
    //        $(".quiz__page").eq(number + 1).fadeIn(1000);
    //        $(".test-item__number-furst").text(number + 1);
    //        $barWidth += $barLevel;
    //        progress(number);

    //        animateTop ();
    //      },2700);
    // }else{
       if(testTextNum != 1){
        testTextNum -= 1;
      if(testTextNum < 5 && testTextNum > 1){
        testText.text( testTextNum + ' вопросa');
      }else if(testTextNum < 2){
        testText.text( testTextNum + ' вопрос');
      }else{
        testText.text( testTextNum + ' вопросов');
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
      $(".quiz__page").hide();
      $(".quiz__page").eq(number).fadeIn(1000);
    },300);
	$(".quiz__next").hide();
  $(".quiz__next").eq(number).show();
  $(".quiz__prev").hide();
  $(".quiz__prev").eq(number).show();
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
        $(".quiz__page").eq(i).find('input').each(function(index, el) {
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
      $('.test__btn-block').hide();
      // console.log(otv);
    }
    // if(number === maxNumber - 1){
    //      $(".test__btn-block").hide();
    //      setTimeout(function(){
    //        $(".quiz__page").hide();
    //        $(".quiz__page").eq(number + 1).fadeIn(1000);
    //        $(".test-item__number-furst").text(number + 1);
    //        $barWidth += $barLevel;
    //        progress(number);

    //        animateTop ();
    //      },2700);
    // }else{
       if(testTextNum != 1){
        testTextNum += 1;
      if(testTextNum < 5 && testTextNum > 1){
        testText.text( testTextNum + ' вопросa');
      }else if(testTextNum < 2){
        testText.text( testTextNum + ' вопрос');
      }else{
        testText.text( testTextNum + ' вопросов');
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




var nForm = false;
$(function(){
  'use strict';
  var nForm = false;
$('form').on('submit', function(e){
    e.preventDefault();
    var $that = $(this);
    var fd = new FormData( this );

    var ref = $(this).find(".inp-num");


    
    var constr = [];
    var dopType = [];

    $that.find('.btn').attr({
      'disabled': 'true'
    });

    $('input[name="qw4"]').each(function(index, el) {
    
      if($(this).prop('checked')){
        constr.push($(this).val().trim());
      }
    });

     $('input[name="qw3"]').each(function(index, el) {
    
      if($(this).prop('checked')){
        dopType.push($(this).val().trim());
      }
    });



    var constr2= constr.join(' , ');

    var dopType2= dopType.join(' , ');

    fd.append('qw4', constr2);
    fd.append('qw3', dopType2);

   
    $.ajax({
      url: './mail.php',
      type: 'POST',
      contentType: false, 
      processData: false, 
      data: fd,
       success: function(msg){
      //     if(!nForm){
      //       $('.quiz__page', '.final').hide();
      //         $('form').trigger('reset');
      //       $('html').addClass('stop');
      //       $('form').find('input, button').attr({
      //         "disabled": 'true',
      //       });
      //       $('#thanks').fadeIn();
      //         nForm = true;
      //         $that.find('.btn').removeAttr('disabled');
      if(!nForm){
            $('.quiz__page').hide();
            $('.qw9').fadeIn(1500);
            $('.test-item__progress, .test-proc').hide();
            $('.test__righ-t3').hide();
            $('.test__righ-t4').fadeIn();

            $('.qw9').find('.input').each(function(index, el) {
              $(this).attr({
                "required": 'required',
              });
            });
            nForm = true;
            $that.find('.btn').removeAttr('disabled');


		//var u = new Url($('.servs').val());
		//u.query.thanks = 'thanks1';    // изменим значение параметра foo в QueryString

		//console.log( 'Измененный URL: ' + u);

		function updateURL() {
    if (history.pushState) {
        var baseUrl = $('.servs').val();
console.log( baseUrl);
        var newUrl = baseUrl + '/thanks1';
console.log( newUrl);
        history.pushState(null, null, newUrl);
    }
    else {
        console.warn('History API не поддерживается');
    }
}
updateURL();
 		           }else{
            $('form').trigger('reset');
            $('html').addClass('stop');
            $('form').find('input, button').attr({
              "disabled": 'true',
            });
            $('#thanks').fadeIn();

				function updateURL() {
    if (history.pushState) {
        var baseUrl = $('.servs').val();
console.log( baseUrl);
        var newUrl = baseUrl + '/thanks2';
console.log( newUrl);
        history.pushState(null, null, newUrl);
    }
    else {
        console.warn('History API не поддерживается');
    }
}
updateURL();      
	}

      },

    });
  });
});

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

