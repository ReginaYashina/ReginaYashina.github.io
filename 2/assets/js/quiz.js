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


