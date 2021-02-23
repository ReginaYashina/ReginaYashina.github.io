function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
//TABS
$(".show_tab").click(function () {
	event.preventDefault();
	var mainTab = $(this).index();

	$(this).parent('.tabs__items').next('.tabs__body').children('.tabs__block').removeClass('active');
	$(this).parent('.tabs__items').next('.tabs__body').children('.tabs__block').eq(mainTab).addClass('active');

	$(this).parent('.tabs__items').next('.tabs__body').removeClass('active');
	$(this).parent('.tabs__items').next('.tabs__body').eq(mainTab).addClass('active');

	$(this).parent('.tabs__items').children('.tabs__item').removeClass('active');
	$(this).parent('.tabs__items').children('.tabs__item').eq(mainTab).addClass('active');

});
//TABS-COLORS
// $(this).parent('.tabs__items').parent('.balconies-colors__navwrapper').parent('.balconies-types__border').parent('.balconies-types__block').parent('.balconies-types__column--r').prev('.balconies-types__column--l').children('.tabs__body').children('.tabs__block')
$(".show_tab-colors").click(function () {
	event.preventDefault();
	var mainTabColor = $(this).index();

	$(this).parent('.tabs__items').parent('.balconies-colors__navwrapper').parent('.balconies-types__border').parent('.balconies-types__block').parent('.balconies-types__column--r').prev('.balconies-types__column--l').children('.tabs__body').children('.tabs__block').removeClass('active');
	$(this).parent('.tabs__items').parent('.balconies-colors__navwrapper').parent('.balconies-types__border').parent('.balconies-types__block').parent('.balconies-types__column--r').prev('.balconies-types__column--l').children('.tabs__body').children('.tabs__block').eq(mainTabColor).addClass('active');

	$(this).parent('.tabs__items').parent('.balconies-colors__navwrapper').parent('.balconies-types__border').parent('.balconies-types__block').parent('.balconies-types__column--r').prev('.balconies-types__column--l').children('.tabs__body').removeClass('active');
	$(this).parent('.tabs__items').parent('.balconies-colors__navwrapper').parent('.balconies-types__border').parent('.balconies-types__block').parent('.balconies-types__column--r').prev('.balconies-types__column--l').children('.tabs__body').eq(mainTabColor).addClass('active');

	$(this).parent('.tabs__items').children('.tabs__item').removeClass('active');
	$(this).parent('.tabs__items').children('.tabs__item').eq(mainTabColor).addClass('active');

});
if ($(window).width() <= 567) {
	$(".show_tab-colors").click(function () {
		event.preventDefault();
		var mainTabColor = $(this).index();

		$(this).parent('.tabs__items').parent('.balconies-colors__navwrapper').parent('.balconies-types__column--l').children('.tabs__body').children('.tabs__block').removeClass('active');
		$(this).parent('.tabs__items').parent('.balconies-colors__navwrapper').parent('.balconies-types__column--l').children('.tabs__body').children('.tabs__block').eq(mainTabColor).addClass('active');

		$(this).parent('.tabs__items').parent('.balconies-colors__navwrapper').parent('.balconies-types__column--l').children('.tabs__body').removeClass('active');
		$(this).parent('.tabs__items').parent('.balconies-colors__navwrapper').parent('.balconies-types__column--l').children('.tabs__body').eq(mainTabColor).addClass('active');

		$(this).parent('.tabs__items').children('.tabs__item').removeClass('active');
		$(this).parent('.tabs__items').children('.tabs__item').eq(mainTabColor).addClass('active');

	});
}

//TABS-KIT

// $(".show_tab_el").click(function () {
// 	var mainTabEl = $(this).index();

// 	$(this).parent('.design__tabs-items').parent('.design__tabs--el').next('.design__colors-tabs-body').children('.design__tabs--color').removeClass('active');

// 	$(this).parent('.design__tabs-items').parent('.design__tabs--el').next('.design__colors-tabs-body').children('.design__tabs--color').eq(mainTabEl).addClass('active');

// 	$(this).parent('.design__tabs-items').parent('.design__tabs--el').next('.design__colors-tabs-body').removeClass('active');
// 	$(this).parent('.design__tabs-items').parent('.design__tabs--el').next('.design__colors-tabs-body').eq(mainTabEl).addClass('active');

// 	$(this).parent('.design__tabs-items').children('.design__tabs-item--el').removeClass('active');
// 	$(this).parent('.design__tabs-items').children('.design__tabs-item--el').eq(mainTabEl).addClass('active');

// })

//KIT ( :/ ыыыыыыыыыыы )
//меню
$("#show-rama").click(function () {
	$('#rama').css({ 'display': 'block', 'z-index': '10' });
	$('#fit,#ton,#lay,#slop,#sill').css({ 'display': 'none', 'z-index': '0' });
	$("#show-rama").addClass('active');
	$('#show-fit,#show-ton,#show-lay,#show-slop,#show-sill').removeClass('active');
})
$("#show-ton").click(function () {
	$('#ton').css({ 'display': 'block', 'z-index': '10' });
	$('#fit,#rama,#lay,#slop,#sill').css({ 'display': 'none', 'z-index': '0' });
	$("#show-ton").addClass('active');
	$('#show-fit,#show-rama,#show-lay,#show-slop,#show-sill').removeClass('active');
})
$("#show-fit").click(function () {
	$('#fit').css({ 'display': 'block', 'z-index': '10' });
	$('#ton,#rama,#lay,#slop,#sill').css({ 'display': 'none', 'z-index': '0' });
	$("#show-fit").addClass('active');
	$('#show-ton,#show-rama,#show-lay,#show-slop,#show-sill').removeClass('active');
})
$("#show-lay").click(function () {
	$('#lay').css({ 'display': 'block', 'z-index': '10' });
	$('#fit,#ton,#rama,#slop,#sill').css({ 'display': 'none', 'z-index': '0' });
	$("#show-lay").addClass('active');
	$('#show-fit,#show-ton,#show-rama,#show-slop,#show-sill').removeClass('active');
})
$("#show-slop").click(function () {
	$('#slop').css({ 'display': 'block', 'z-index': '10' });
	$('#fit,#ton,#rama,#lay,#sill').css({ 'display': 'none', 'z-index': '0' });
	$("#show-slop").addClass('active');
	$('#show-fit,#show-ton,#show-rama,#show-lay,#show-sill').removeClass('active');
})
$("#show-sill").click(function () {
	$('#sill').css({ 'display': 'block', 'z-index': '10' });
	$('#fit,#ton,#rama,#lay,#slop').css({ 'display': 'none', 'z-index': '0' });
	$("#show-sill").addClass('active');
	$('#show-fit,#show-ton,#show-rama,#show-lay,#show-slop').removeClass('active');
})
//рама
$("#sh0rama").click(function () {
	$('#0rama').css('display', 'block');
	$('#1rama,#2rama,#3rama,#4rama,#5rama,#6rama,#7rama,#8rama,#9rama,#10rama').css('display', 'none');
	$("#sh0rama").addClass('active-color');
	$('#sh1rama,#sh2rama,#sh3rama,#sh4rama,#sh5rama,#sh6rama,#sh7rama,#sh8rama,#sh9rama,#sh10rama').removeClass('active-color');
})
$("#sh1rama").click(function () {
	$('#1rama').css('display', 'block');
	$('#0rama,#2rama,#3rama,#4rama,#5rama,#6rama,#7rama,#8rama,#9rama,#10rama').css('display', 'none');
	$("#sh1rama").addClass('active-color');
	$('#sh0rama,#sh2rama,#sh3rama,#sh4rama,#sh5rama,#sh6rama,#sh7rama,#sh8rama,#sh9rama,#sh10rama').removeClass('active-color');
})
$("#sh2rama").click(function () {
	$('#2rama').css('display', 'block');
	$('#1rama,#0rama,#3rama,#4rama,#5rama,#6rama,#7rama,#8rama,#9rama,#10rama').css('display', 'none');
	$("#sh2rama").addClass('active-color');
	$('#sh1rama,#sh0rama,#sh3rama,#sh4rama,#sh5rama,#sh6rama,#sh7rama,#sh8rama,#sh9rama,#sh10rama').removeClass('active-color');
})
$("#sh3rama").click(function () {
	$('#3rama').css('display', 'block');
	$('#1rama,#2rama,#0rama,#4rama,#5rama,#6rama,#7rama,#8rama,#9rama,#10rama').css('display', 'none');
	$("#sh3rama").addClass('active-color');
	$('#sh1rama,#sh2rama,#sh0rama,#sh4rama,#sh5rama,#sh6rama,#sh7rama,#sh8rama,#sh9rama,#sh10rama').removeClass('active-color');
})
$("#sh4rama").click(function () {
	$('#4rama').css('display', 'block');
	$('#1rama,#2rama,#3rama,#0rama,#5rama,#6rama,#7rama,#8rama,#9rama,#10rama').css('display', 'none');
	$("#sh4rama").addClass('active-color');
	$('#sh1rama,#sh2rama,#sh3rama,#sh0rama,#sh5rama,#sh6rama,#sh7rama,#sh8rama,#sh9rama,#sh10rama').removeClass('active-color');
})
$("#sh5rama").click(function () {
	$('#5rama').css('display', 'block');
	$('#1rama,#2rama,#3rama,#4rama,#0rama,#6rama,#7rama,#8rama,#9rama,#10rama').css('display', 'none');
	$("#sh5rama").addClass('active-color');
	$('#sh1rama,#sh2rama,#sh3rama,#sh4rama,#sh0rama,#sh6rama,#sh7rama,#sh8rama,#sh9rama,#sh10rama').removeClass('active-color');
})
$("#sh6rama").click(function () {
	$('#6rama').css('display', 'block');
	$('#1rama,#2rama,#3rama,#4rama,#5rama,#0rama,#7rama,#8rama,#9rama,#10rama').css('display', 'none');
	$("#sh6rama").addClass('active-color');
	$('#sh1rama,#sh2rama,#sh3rama,#sh4rama,#sh5rama,#sh0rama,#sh7rama,#sh8rama,#sh9rama,#sh10rama').removeClass('active-color');
})
$("#sh7rama").click(function () {
	$('#7rama').css('display', 'block');
	$('#1rama,#2rama,#3rama,#4rama,#5rama,#6rama,#0rama,#8rama,#9rama,#10rama').css('display', 'none');
	$("#sh7rama").addClass('active-color');
	$('#sh1rama,#sh2rama,#sh3rama,#sh4rama,#sh5rama,#sh6rama,#sh0rama,#sh8rama,#sh9rama,#sh10rama').removeClass('active-color');
})
$("#sh8rama").click(function () {
	$('#8rama').css('display', 'block');
	$('#1rama,#2rama,#3rama,#4rama,#5rama,#6rama,#7rama,#0rama,#9rama,#10rama').css('display', 'none');
	$("#sh8rama").addClass('active-color');
	$('#sh1rama,#sh2rama,#sh3rama,#sh4rama,#sh5rama,#sh6rama,#sh7rama,#sh0rama,#sh9rama,#sh10rama').removeClass('active-color');
})
$("#sh9rama").click(function () {
	$('#9rama').css('display', 'block');
	$('#1rama,#2rama,#3rama,#4rama,#5rama,#6rama,#7rama,#8rama,#0rama,#10rama').css('display', 'none');
	$("#sh9rama").addClass('active-color');
	$('#sh1rama,#sh2rama,#sh3rama,#sh4rama,#sh5rama,#sh6rama,#sh7rama,#sh8rama,#sh0rama,#sh10rama').removeClass('active-color');
})
$("#sh10rama").click(function () {
	$('#10rama').css('display', 'block');
	$('#1rama,#2rama,#3rama,#4rama,#5rama,#6rama,#7rama,#8rama,#9rama,#0rama').css('display', 'none');
	$("#sh10rama").addClass('active-color');
	$('#sh1rama,#sh2rama,#sh3rama,#sh4rama,#sh5rama,#sh6rama,#sh7rama,#sh8rama,#sh9rama,#sh0rama').removeClass('active-color');
})
//фурнитура
$("#sh0fit").click(function () {
	$('#0fit').css('display', 'block');
	$('#1fit,#2fit,#3fit,#4fit,#5fit,#6fit,#7fit,#8fit,#9fit,#10fit').css('display', 'none');
	$("#sh0fit").addClass('active-color');
	$('#sh1fit,#sh2fit,#sh3fit,#sh4fit,#sh5fit,#sh6fit,#sh7fit,#sh8fit,#sh9fit,#sh10fit').removeClass('active-color');
})
$("#sh1fit").click(function () {
	$('#1fit').css('display', 'block');
	$('#0fit,#2fit,#3fit,#4fit,#5fit,#6fit,#7fit,#8fit,#9fit,#10fit').css('display', 'none');
	$("#sh1fit").addClass('active-color');
	$('#sh0fit,#sh2fit,#sh3fit,#sh4fit,#sh5fit,#sh6fit,#sh7fit,#sh8fit,#sh9fit,#sh10fit').removeClass('active-color');
})
$("#sh2fit").click(function () {
	$('#2fit').css('display', 'block');
	$('#1fit,#0fit,#3fit,#4fit,#5fit,#6fit,#7fit,#8fit,#9fit,#10fit').css('display', 'none');
	$("#sh2fit").addClass('active-color');
	$('#sh1fit,#sh0fit,#sh3fit,#sh4fit,#sh5fit,#sh6fit,#sh7fit,#sh8fit,#sh9fit,#sh10fit').removeClass('active-color');
})
$("#sh3fit").click(function () {
	$('#3fit').css('display', 'block');
	$('#1fit,#2fit,#0fit,#4fit,#5fit,#6fit,#7fit,#8fit,#9fit,#10fit').css('display', 'none');
	$("#sh3fit").addClass('active-color');
	$('#sh1fit,#sh2fit,#sh0fit,#sh4fit,#sh5fit,#sh6fit,#sh7fit,#sh8fit,#sh9fit,#sh10fit').removeClass('active-color');
})
$("#sh4fit").click(function () {
	$('#4fit').css('display', 'block');
	$('#1fit,#2fit,#3fit,#0fit,#5fit,#6fit,#7fit,#8fit,#9fit,#10fit').css('display', 'none');
	$("#sh4fit").addClass('active-color');
	$('#sh1fit,#sh2fit,#sh3fit,#sh0fit,#sh5fit,#sh6fit,#sh7fit,#sh8fit,#sh9fit,#sh10fit').removeClass('active-color');
})
$("#sh5fit").click(function () {
	$('#5fit').css('display', 'block');
	$('#1fit,#2fit,#3fit,#4fit,#0fit,#6fit,#7fit,#8fit,#9fit,#10fit').css('display', 'none');
	$("#sh5fit").addClass('active-color');
	$('#sh1fit,#sh2fit,#sh3fit,#sh4fit,#sh0fit,#sh6fit,#sh7fit,#sh8fit,#sh9fit,#sh10fit').removeClass('active-color');
})
$("#sh6fit").click(function () {
	$('#6fit').css('display', 'block');
	$('#1fit,#2fit,#3fit,#4fit,#5fit,#0fit,#7fit,#8fit,#9fit,#10fit').css('display', 'none');
	$("#sh6fit").addClass('active-color');
	$('#sh1fit,#sh2fit,#sh3fit,#sh4fit,#sh5fit,#sh0fit,#sh7fit,#sh8fit,#sh9fit,#sh10fit').removeClass('active-color');
})
$("#sh7fit").click(function () {
	$('#7fit').css('display', 'block');
	$('#1fit,#2fit,#3fit,#4fit,#5fit,#6fit,#0fit,#8fit,#9fit,#10fit').css('display', 'none');
	$("#sh7fit").addClass('active-color');
	$('#sh1fit,#sh2fit,#sh3fit,#sh4fit,#sh5fit,#sh6fit,#sh0fit,#sh8fit,#sh9fit,#sh10fit').removeClass('active-color');
})
$("#sh8fit").click(function () {
	$('#8fit').css('display', 'block');
	$('#1fit,#2fit,#3fit,#4fit,#5fit,#6fit,#7fit,#0fit,#9fit,#10fit').css('display', 'none');
	$("#sh8fit").addClass('active-color');
	$('#sh1fit,#sh2fit,#sh3fit,#sh4fit,#sh5fit,#sh6fit,#sh7fit,#sh0fit,#sh9fit,#sh10fit').removeClass('active-color');
})
$("#sh9fit").click(function () {
	$('#9fit').css('display', 'block');
	$('#1fit,#2fit,#3fit,#4fit,#5fit,#6fit,#7fit,#8fit,#0fit,#10fit').css('display', 'none');
	$("#sh9fit").addClass('active-color');
	$('#sh1fit,#sh2fit,#sh3fit,#sh4fit,#sh5fit,#sh6fit,#sh7fit,#sh8fit,#sh0fit,#sh10fit').removeClass('active-color');
})
$("#sh10fit").click(function () {
	$('#10fit').css('display', 'block');
	$('#1fit,#2fit,#3fit,#4fit,#5fit,#6fit,#7fit,#8fit,#9fit,#0fit').css('display', 'none');
	$("#sh10fit").addClass('active-color');
	$('#sh1fit,#sh2fit,#sh3fit,#sh4fit,#sh5fit,#sh6fit,#sh7fit,#sh8fit,#sh9fit,#sh0fit').removeClass('active-color');
})
//стекло
$("#sh0ton").click(function () {
	$('#0ton').css('display', 'block');
	$('#1ton,#2ton,#3ton,#4ton,#5ton,#6ton,#7ton,#8ton,#9ton,#10ton,#11ton').css('display', 'none');
	$("#sh0ton").addClass('active-color');
	$('#sh1ton,#sh2ton,#sh3ton,#sh4ton,#sh5ton,#sh6ton,#sh7ton,#sh8ton,#sh9ton,#sh10ton,#11ton').removeClass('active-color');
})
$("#sh1ton").click(function () {
	$('#1ton').css('display', 'block');
	$('#0ton,#2ton,#3ton,#4ton,#5ton,#6ton,#7ton,#8ton,#9ton,#10ton').css('display', 'none');
	$("#sh1ton").addClass('active-color');
	$('#sh0ton,#sh2ton,#sh3ton,#sh4ton,#sh5ton,#sh6ton,#sh7ton,#sh8ton,#sh9ton,#sh10ton').removeClass('active-color');
})
$("#sh2ton").click(function () {
	$('#2ton').css('display', 'block');
	$('#1ton,#0ton,#3ton,#4ton,#5ton,#6ton,#7ton,#8ton,#9ton,#10ton').css('display', 'none');
	$("#sh2ton").addClass('active-color');
	$('#sh1ton,#sh0ton,#sh3ton,#sh4ton,#sh5ton,#sh6ton,#sh7ton,#sh8ton,#sh9ton,#sh10ton').removeClass('active-color');
})
$("#sh3ton").click(function () {
	$('#3ton').css('display', 'block');
	$('#1ton,#2ton,#0ton,#4ton,#5ton,#6ton,#7ton,#8ton,#9ton,#10ton').css('display', 'none');
	$("#sh3ton").addClass('active-color');
	$('#sh1ton,#sh2ton,#sh0ton,#sh4ton,#sh5ton,#sh6ton,#sh7ton,#sh8ton,#sh9ton,#sh10ton').removeClass('active-color');
})
$("#sh4ton").click(function () {
	$('#4ton').css('display', 'block');
	$('#1ton,#2ton,#3ton,#0ton,#5ton,#6ton,#7ton,#8ton,#9ton,#10ton').css('display', 'none');
	$("#sh4ton").addClass('active-color');
	$('#sh1ton,#sh2ton,#sh3ton,#sh0ton,#sh5ton,#sh6ton,#sh7ton,#sh8ton,#sh9ton,#sh10ton').removeClass('active-color');
})
$("#sh5ton").click(function () {
	$('#5ton').css('display', 'block');
	$('#1ton,#2ton,#3ton,#4ton,#0ton,#6ton,#7ton,#8ton,#9ton,#10ton').css('display', 'none');
	$("#sh5ton").addClass('active-color');
	$('#sh1ton,#sh2ton,#sh3ton,#sh4ton,#sh0ton,#sh6ton,#sh7ton,#sh8ton,#sh9ton,#sh10ton').removeClass('active-color');
})
$("#sh6ton").click(function () {
	$('#6ton').css('display', 'block');
	$('#1ton,#2ton,#3ton,#4ton,#5ton,#0ton,#7ton,#8ton,#9ton,#10ton').css('display', 'none');
	$("#sh6ton").addClass('active-color');
	$('#sh1ton,#sh2ton,#sh3ton,#sh4ton,#sh5ton,#sh0ton,#sh7ton,#sh8ton,#sh9ton,#sh10ton').removeClass('active-color');
})
$("#sh7ton").click(function () {
	$('#7ton').css('display', 'block');
	$('#1ton,#2ton,#3ton,#4ton,#5ton,#6ton,#0ton,#8ton,#9ton,#10ton').css('display', 'none');
	$("#sh7ton").addClass('active-color');
	$('#sh1ton,#sh2ton,#sh3ton,#sh4ton,#sh5ton,#sh6ton,#sh0ton,#sh8ton,#sh9ton,#sh10ton').removeClass('active-color');
})
$("#sh8ton").click(function () {
	$('#8ton').css('display', 'block');
	$('#1ton,#2ton,#3ton,#4ton,#5ton,#6ton,#7ton,#0ton,#9ton,#10ton').css('display', 'none');
	$("#sh8ton").addClass('active-color');
	$('#sh1ton,#sh2ton,#sh3ton,#sh4ton,#sh5ton,#sh6ton,#sh7ton,#sh0ton,#sh9ton,#sh10ton').removeClass('active-color');
})
$("#sh9ton").click(function () {
	$('#9ton').css('display', 'block');
	$('#1ton,#2ton,#3ton,#4ton,#5ton,#6ton,#7ton,#8ton,#0ton,#10ton').css('display', 'none');
	$("#sh9ton").addClass('active-color');
	$('#sh1ton,#sh2ton,#sh3ton,#sh4ton,#sh5ton,#sh6ton,#sh7ton,#sh8ton,#sh0ton,#sh10ton').removeClass('active-color');
})
$("#sh10ton").click(function () {
	$('#10ton').css('display', 'block');
	$('#1ton,#2ton,#3ton,#4ton,#5ton,#6ton,#7ton,#8ton,#9ton,#0ton').css('display', 'none');
	$("#sh10ton").addClass('active-color');
	$('#sh1ton,#sh2ton,#sh3ton,#sh4ton,#sh5ton,#sh6ton,#sh7ton,#sh8ton,#sh9ton,#sh0ton').removeClass('active-color');
})
//раскладка
$("#sh0lay").click(function () {
	$('#1lay,#2lay,#3lay,#4lay,#5lay,#6lay,#7lay,#8lay,#9lay,#10lay').css('display', 'none');
	$("#sh0lay").addClass('active-color');
	$('#sh1lay,#sh2lay,#sh3lay,#sh4lay,#sh5lay,#sh6lay,#sh7lay,#sh8lay,#sh9lay,#sh10lay').removeClass('active-color');
})
$("#sh1lay").click(function () {
	$('#1lay').css('display', 'block');
	$('#0lay,#2lay,#3lay,#4lay,#5lay,#6lay,#7lay,#8lay,#9lay,#10lay').css('display', 'none');
	$("#sh1lay").addClass('active-color');
	$('#sh0lay,#sh2lay,#sh3lay,#sh4lay,#sh5lay,#sh6lay,#sh7lay,#sh8lay,#sh9lay,#sh10lay').removeClass('active-color');
})
$("#sh2lay").click(function () {
	$('#2lay').css('display', 'block');
	$('#1lay,#0lay,#3lay,#4lay,#5lay,#6lay,#7lay,#8lay,#9lay,#10lay').css('display', 'none');
	$("#sh2lay").addClass('active-color');
	$('#sh1lay,#sh0lay,#sh3lay,#sh4lay,#sh5lay,#sh6lay,#sh7lay,#sh8lay,#sh9lay,#sh10lay').removeClass('active-color');
})
$("#sh3lay").click(function () {
	$('#3lay').css('display', 'block');
	$('#1lay,#2lay,#0lay,#4lay,#5lay,#6lay,#7lay,#8lay,#9lay,#10lay').css('display', 'none');
	$("#sh3lay").addClass('active-color');
	$('#sh1lay,#sh2lay,#sh0lay,#sh4lay,#sh5lay,#sh6lay,#sh7lay,#sh8lay,#sh9lay,#sh10lay').removeClass('active-color');
})
$("#sh4lay").click(function () {
	$('#4lay').css('display', 'block');
	$('#1lay,#2lay,#3lay,#0lay,#5lay,#6lay,#7lay,#8lay,#9lay,#10lay').css('display', 'none');
	$("#sh4lay").addClass('active-color');
	$('#sh1lay,#sh2lay,#sh3lay,#sh0lay,#sh5lay,#sh6lay,#sh7lay,#sh8lay,#sh9lay,#sh10lay').removeClass('active-color');
})
$("#sh5lay").click(function () {
	$('#5lay').css('display', 'block');
	$('#1lay,#2lay,#3lay,#4lay,#0lay,#6lay,#7lay,#8lay,#9lay,#10lay').css('display', 'none');
	$("#sh5lay").addClass('active-color');
	$('#sh1lay,#sh2lay,#sh3lay,#sh4lay,#sh0lay,#sh6lay,#sh7lay,#sh8lay,#sh9lay,#sh10lay').removeClass('active-color');
})
$("#sh6lay").click(function () {
	$('#6lay').css('display', 'block');
	$('#1lay,#2lay,#3lay,#4lay,#5lay,#0lay,#7lay,#8lay,#9lay,#10lay').css('display', 'none');
	$("#sh6lay").addClass('active-color');
	$('#sh1lay,#sh2lay,#sh3lay,#sh4lay,#sh5lay,#sh0lay,#sh7lay,#sh8lay,#sh9lay,#sh10lay').removeClass('active-color');
})
$("#sh7lay").click(function () {
	$('#7lay').css('display', 'block');
	$('#1lay,#2lay,#3lay,#4lay,#5lay,#6lay,#0lay,#8lay,#9lay,#10lay').css('display', 'none');
	$("#sh7lay").addClass('active-color');
	$('#sh1lay,#sh2lay,#sh3lay,#sh4lay,#sh5lay,#sh6lay,#sh0lay,#sh8lay,#sh9lay,#sh10lay').removeClass('active-color');
})
$("#sh8lay").click(function () {
	$('#8lay').css('display', 'block');
	$('#1lay,#2lay,#3lay,#4lay,#5lay,#6lay,#7lay,#0lay,#9lay,#10lay').css('display', 'none');
	$("#sh8lay").addClass('active-color');
	$('#sh1lay,#sh2lay,#sh3lay,#sh4lay,#sh5lay,#sh6lay,#sh7lay,#sh0lay,#sh9lay,#sh10lay').removeClass('active-color');
})
//откосы
$("#sh0slop").click(function () {
	$('#0slop').css('display', 'block');
	$('#1slop,#2slop,#3slop,#4slop,#5slop,#6slop,#7slop,#8slop,#9slop,#10slop').css('display', 'none');
	$("#sh0slop").addClass('active-color');
	$('#sh1slop,#sh2slop,#sh3slop,#sh4slop,#sh5slop,#sh6slop,#sh7slop,#sh8slop,#sh9slop,#sh10slop').removeClass('active-color');
})
$("#sh1slop").click(function () {
	$('#1slop').css('display', 'block');
	$('#0slop,#2slop,#3slop,#4slop,#5slop,#6slop,#7slop,#8slop,#9slop,#10slop').css('display', 'none');
	$("#sh1slop").addClass('active-color');
	$('#sh0slop,#sh2slop,#sh3slop,#sh4slop,#sh5slop,#sh6slop,#sh7slop,#sh8slop,#sh9slop,#sh10slop').removeClass('active-color');
})
$("#sh2slop").click(function () {
	$('#2slop').css('display', 'block');
	$('#1slop,#0slop,#3slop,#4slop,#5slop,#6slop,#7slop,#8slop,#9slop,#10slop').css('display', 'none');
	$("#sh2slop").addClass('active-color');
	$('#sh1slop,#sh0slop,#sh3slop,#sh4slop,#sh5slop,#sh6slop,#sh7slop,#sh8slop,#sh9slop,#sh10slop').removeClass('active-color');
})
$("#sh3slop").click(function () {
	$('#3slop').css('display', 'block');
	$('#1slop,#2slop,#0slop,#4slop,#5slop,#6slop,#7slop,#8slop,#9slop,#10slop').css('display', 'none');
	$("#sh3slop").addClass('active-color');
	$('#sh1slop,#sh2slop,#sh0slop,#sh4slop,#sh5slop,#sh6slop,#sh7slop,#sh8slop,#sh9slop,#sh10slop').removeClass('active-color');
})
$("#sh4slop").click(function () {
	$('#4slop').css('display', 'block');
	$('#1slop,#2slop,#3slop,#0slop,#5slop,#6slop,#7slop,#8slop,#9slop,#10slop').css('display', 'none');
	$("#sh4slop").addClass('active-color');
	$('#sh1slop,#sh2slop,#sh3slop,#sh0slop,#sh5slop,#sh6slop,#sh7slop,#sh8slop,#sh9slop,#sh10slop').removeClass('active-color');
})
$("#sh5slop").click(function () {
	$('#5slop').css('display', 'block');
	$('#1slop,#2slop,#3slop,#4slop,#0slop,#6slop,#7slop,#8slop,#9slop,#10slop').css('display', 'none');
	$("#sh5slop").addClass('active-color');
	$('#sh1slop,#sh2slop,#sh3slop,#sh4slop,#sh0slop,#sh6slop,#sh7slop,#sh8slop,#sh9slop,#sh10slop').removeClass('active-color');
})
$("#sh6slop").click(function () {
	$('#6slop').css('display', 'block');
	$('#1slop,#2slop,#3slop,#4slop,#5slop,#0slop,#7slop,#8slop,#9slop,#10slop').css('display', 'none');
	$("#sh6slop").addClass('active-color');
	$('#sh1slop,#sh2slop,#sh3slop,#sh4slop,#sh5slop,#sh0slop,#sh7slop,#sh8slop,#sh9slop,#sh10slop').removeClass('active-color');
})
$("#sh7slop").click(function () {
	$('#7slop').css('display', 'block');
	$('#1slop,#2slop,#3slop,#4slop,#5slop,#6slop,#0slop,#8slop,#9slop,#10slop').css('display', 'none');
	$("#sh7slop").addClass('active-color');
	$('#sh1slop,#sh2slop,#sh3slop,#sh4slop,#sh5slop,#sh6slop,#sh0slop,#sh8slop,#sh9slop,#sh10slop').removeClass('active-color');
})
$("#sh8slop").click(function () {
	$('#8slop').css('display', 'block');
	$('#1slop,#2slop,#3slop,#4slop,#5slop,#6slop,#7slop,#0slop,#9slop,#10slop').css('display', 'none');
	$("#sh8slop").addClass('active-color');
	$('#sh1slop,#sh2slop,#sh3slop,#sh4slop,#sh5slop,#sh6slop,#sh7slop,#sh0slop,#sh9slop,#sh10slop').removeClass('active-color');
})
$("#sh9slop").click(function () {
	$('#9slop').css('display', 'block');
	$('#1slop,#2slop,#3slop,#4slop,#5slop,#6slop,#7slop,#8slop,#0slop,#10slop').css('display', 'none');
	$("#sh9slop").addClass('active-color');
	$('#sh1slop,#sh2slop,#sh3slop,#sh4slop,#sh5slop,#sh6slop,#sh7slop,#sh8slop,#sh0slop,#sh10slop').removeClass('active-color');
})
$("#sh10slop").click(function () {
	$('#10slop').css('display', 'block');
	$('#1slop,#2slop,#3slop,#4slop,#5slop,#6slop,#7slop,#8slop,#9slop,#0slop').css('display', 'none');
	$("#sh10slop").addClass('active-color');
	$('#sh1slop,#sh2slop,#sh3slop,#sh4slop,#sh5slop,#sh6slop,#sh7slop,#sh8slop,#sh9slop,#sh0slop').removeClass('active-color');
})
//подоконники
$("#sh0sill").click(function () {
	$('#0sill').css('display', 'block');
	$('#1sill,#2sill,#3sill,#4sill,#5sill,#6sill,#7sill,#8sill,#9sill,#10sill').css('display', 'none');
	$("#sh0sill").addClass('active-color');
	$('#sh1sill,#sh2sill,#sh3sill,#sh4sill,#sh5sill,#sh6sill,#sh7sill,#sh8sill,#sh9sill,#sh10sill').removeClass('active-color');
})
$("#sh1sill").click(function () {
	$('#1sill').css('display', 'block');
	$('#0sill,#2sill,#3sill,#4sill,#5sill,#6sill,#7sill,#8sill,#9sill,#10sill').css('display', 'none');
	$("#sh1sill").addClass('active-color');
	$('#sh0sill,#sh2sill,#sh3sill,#sh4sill,#sh5sill,#sh6sill,#sh7sill,#sh8sill,#sh9sill,#sh10sill').removeClass('active-color');
})
$("#sh2sill").click(function () {
	$('#2sill').css('display', 'block');
	$('#1sill,#0sill,#3sill,#4sill,#5sill,#6sill,#7sill,#8sill,#9sill,#10sill').css('display', 'none');
	$("#sh2sill").addClass('active-color');
	$('#sh1sill,#sh0sill,#sh3sill,#sh4sill,#sh5sill,#sh6sill,#sh7sill,#sh8sill,#sh9sill,#sh10sill').removeClass('active-color');
})
$("#sh3sill").click(function () {
	$('#3sill').css('display', 'block');
	$('#1sill,#2sill,#0sill,#4sill,#5sill,#6sill,#7sill,#8sill,#9sill,#10sill').css('display', 'none');
	$("#sh3sill").addClass('active-color');
	$('#sh1sill,#sh2sill,#sh0sill,#sh4sill,#sh5sill,#sh6sill,#sh7sill,#sh8sill,#sh9sill,#sh10sill').removeClass('active-color');
})
$("#sh4sill").click(function () {
	$('#4sill').css('display', 'block');
	$('#1sill,#2sill,#3sill,#0sill,#5sill,#6sill,#7sill,#8sill,#9sill,#10sill').css('display', 'none');
	$("#sh4sill").addClass('active-color');
	$('#sh1sill,#sh2sill,#sh3sill,#sh0sill,#sh5sill,#sh6sill,#sh7sill,#sh8sill,#sh9sill,#sh10sill').removeClass('active-color');
})
$("#sh5sill").click(function () {
	$('#5sill').css('display', 'block');
	$('#1sill,#2sill,#3sill,#4sill,#0sill,#6sill,#7sill,#8sill,#9sill,#10sill').css('display', 'none');
	$("#sh5sill").addClass('active-color');
	$('#sh1sill,#sh2sill,#sh3sill,#sh4sill,#sh0sill,#sh6sill,#sh7sill,#sh8sill,#sh9sill,#sh10sill').removeClass('active-color');
})
$("#sh6sill").click(function () {
	$('#6sill').css('display', 'block');
	$('#1sill,#2sill,#3sill,#4sill,#5sill,#0sill,#7sill,#8sill,#9sill,#10sill').css('display', 'none');
	$("#sh6sill").addClass('active-color');
	$('#sh1sill,#sh2sill,#sh3sill,#sh4sill,#sh5sill,#sh0sill,#sh7sill,#sh8sill,#sh9sill,#sh10sill').removeClass('active-color');
})
$("#sh7sill").click(function () {
	$('#7sill').css('display', 'block');
	$('#1sill,#2sill,#3sill,#4sill,#5sill,#6sill,#0sill,#8sill,#9sill,#10sill').css('display', 'none');
	$("#sh7sill").addClass('active-color');
	$('#sh1sill,#sh2sill,#sh3sill,#sh4sill,#sh5sill,#sh6sill,#sh0sill,#sh8sill,#sh9sill,#sh10sill').removeClass('active-color');
})
$("#sh8sill").click(function () {
	$('#8sill').css('display', 'block');
	$('#1sill,#2sill,#3sill,#4sill,#5sill,#6sill,#7sill,#0sill,#9sill,#10sill').css('display', 'none');
	$("#sh8sill").addClass('active-color');
	$('#sh1sill,#sh2sill,#sh3sill,#sh4sill,#sh5sill,#sh6sill,#sh7sill,#sh0sill,#sh9sill,#sh10sill').removeClass('active-color');
})
$("#sh9sill").click(function () {
	$('#9sill').css('display', 'block');
	$('#1sill,#2sill,#3sill,#4sill,#5sill,#6sill,#7sill,#8sill,#0sill,#10sill').css('display', 'none');
	$("#sh9sill").addClass('active-color');
	$('#sh1sill,#sh2sill,#sh3sill,#sh4sill,#sh5sill,#sh6sill,#sh7sill,#sh8sill,#sh0sill,#sh10sill').removeClass('active-color');
})
$("#sh10sill").click(function () {
	$('#10sill').css('display', 'block');
	$('#1sill,#2sill,#3sill,#4sill,#5sill,#6sill,#7sill,#8sill,#9sill,#0sill').css('display', 'none');
	$("#sh10sill").addClass('active-color');
	$('#sh1sill,#sh2sill,#sh3sill,#sh4sill,#sh5sill,#sh6sill,#sh7sill,#sh8sill,#sh9sill,#sh0sill').removeClass('active-color');
})
///
//CUSTOM RADIO
$(document).ready(function () {
	$.each($('.popup__label'), function () {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.popup__label', function () {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$('.popup__label').removeClass('active');
		$(this).toggleClass('active');
		return false;
	});
});
$(document).ready(function () {
	$.each($('.design__label, .design__label--smb2, .price__column-3'), function () {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.design__label, .design__label--smb2, .price__column-3', function () {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$('.design__label, .design__label--smb2, .price__column-3').removeClass('active');
		$(this).toggleClass('active');
		return false;
	});
});
//CUSTOM CHECKBOX
$(document).ready(function () {
	$.each($('.design__label--smb1'), function () {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.design__label--smb1', function () {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');
		return false;
	});
});
//LIGHTBOX
$(function () {
	var $li = $('.pix-slider').find('.pix-slider__item'),
		$links = $li.find('> a'),
		$lightbox = $('.lightbox'),
		$next = $('.next'),
		$prev = $('.prev'),
		$overlay = $('.overlay'),
		$close = $('.close'),
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
	$close.click(closeLigtbox);

	$links.click(function (e) {
		e.preventDefault();
		targetImg = $(this).attr('href');
		liIndex = $(this).parent().index();
		replaceImg(targetImg);
		$lightbox.fadeIn();
	});

	$next.click(function () {
		if ((liIndex + 1) < $li.length) {
			targetImg = getHref(liIndex + 1);
			liIndex++;
		} else {
			targetImg = getHref(0);
			liIndex = 0;
		}
		replaceImg(targetImg);
	});

	$prev.click(function () {
		if ((liIndex) > 0) {
			targetImg = getHref(liIndex - 1);
			liIndex--;
		} else {
			targetImg = getHref($li.length - 1);
			liIndex = $li.length - 1;
		}
		replaceImg(targetImg);
	});


});
$(function () {
	var $li = $('.gallery__slider').find('.gallery__item'),
		$links = $li.find('> a'),
		$lightbox = $('.lightbox'),
		$next = $('.next'),
		$prev = $('.prev'),
		$overlay = $('.overlay'),
		$close = $('.close'),
		liIndex,
		targetImg;

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
	$close.click(closeLigtbox);

	$links.click(function (e) {
		e.preventDefault();
		targetImg = $(this).attr('href');
		liIndex = $(this).parent().index();
		replaceImg(targetImg);
		$lightbox.fadeIn();
	});

	$next.click(function () {
		if ((liIndex + 1) < $li.length) {
			targetImg = getHref(liIndex + 1);
			liIndex++;
		} else {
			targetImg = getHref(0);
			liIndex = 0;
		}
		replaceImg(targetImg);
	});

	$prev.click(function () {
		if ((liIndex) > 0) {
			targetImg = getHref(liIndex - 1);
			liIndex--;
		} else {
			targetImg = getHref($li.length - 1);
			liIndex = $li.length - 1;
		}
		replaceImg(targetImg);
	});


});
$(function () {
	var $li = $('.reviews__slider').find('.reviews__item'),
		$links = $li.find('> a'),
		$lightbox = $('.lightbox'),
		$next = $('.next'),
		$prev = $('.prev'),
		$overlay = $('.overlay'),
		$close = $('.close'),
		liIndex,
		targetImg;

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
	$close.click(closeLigtbox);

	$links.click(function (e) {
		e.preventDefault();
		targetImg = $(this).attr('href');
		liIndex = $(this).parent().index();
		replaceImg(targetImg);
		$lightbox.fadeIn();
	});

	$next.click(function () {
		if ((liIndex + 1) < $li.length) {
			targetImg = getHref(liIndex + 1);
			liIndex++;
		} else {
			targetImg = getHref(0);
			liIndex = 0;
		}
		replaceImg(targetImg);
	});

	$prev.click(function () {
		if ((liIndex) > 0) {
			targetImg = getHref(liIndex - 1);
			liIndex--;
		} else {
			targetImg = getHref($li.length - 1);
			liIndex = $li.length - 1;
		}
		replaceImg(targetImg);
	});


});
//
if ($(window).width() <= 1024) {
	$('.window__p br').remove();
}
if ($(window).width() > 1024) {
	$('.flats-title br').remove();
}
if ($(window).width() <= 567) {
	$('.flats-title--h br').remove();
}

//SWITCH
$(function () {
	$('#switch-btn, #switch-btn-t').click(function () {
		$(this).toggleClass('switch-on');
		if ($(this).hasClass('switch-on')) {
			$(this).trigger('on.switch');
		} else {
			$(this).trigger('off.switch');
		}
	});
	$('#switch-btn, #switch-btn-t').on('on.switch', function () {
		$('#block-1, #block-1-t').addClass('bl-hide');
		$('#block-2, #block-2-t').removeClass('bl-hide');
		$('.switch-btn__title-2').addClass('active');
		$('.switch-btn__title-1').removeClass('active');
	});
	$('.switch-btn').on('off.switch', function () {
		$('#block-1, #block-1-t').removeClass('bl-hide');
		$('#block-2, #block-2-t').addClass('bl-hide');
		$('.switch-btn__title-1').addClass('active');
		$('.switch-btn__title-2').removeClass('active');
	});
});
//RANGE
$(".polzunok-5").slider({
	min: 25,
	max: 550,
	value: 224,
	range: "min",
	animate: "fast",
	slide: function (event, ui) {
		$(".calc__value").val(ui.value);
	}
});
$(".calc__value").val($(".polzunok-5").slider("value"));
//SPOILER
$('.spoiler__title').click(function (event) {
	if ($('.spoiler').hasClass('one')) {
		$('.spoiler__title').not($(this)).removeClass('active');
		$('.spoiler__text').not($(this).next()).slideUp(300);
	}
	$(this).toggleClass('active').next().slideToggle(300);
})
$('.spoiler-inner__title').click(function (event) {
	if ($('.spoiler-inner').hasClass('one')) {
		$('.spoiler-inner__title').not($(this)).removeClass('active');
		$('.spoiler-inner__text').not($(this).next()).slideUp(300);
	}
	$(this).toggleClass('active').next().slideToggle(300);
})
//SPOILER-MENU-TABLET
$('.mobile-menu-spoiler__title').click(function (event) {
	if ($('.mobile-menu-spoiler').hasClass('one')) {
		$('.mobile-menu-spoiler__title').not($(this)).removeClass('active');
		$('.mobile-menu-spoiler__text').not($(this).next()).slideUp(300);
	}
	$(this).toggleClass('active').next().slideToggle(300);
})

$('.mobile-menu-spoiler__title--small').click(function (event) {
	if ($('.mobile-menu-spoiler--small').hasClass('one')) {
		$('.mobile-menu-spoiler__title--small').not($(this)).removeClass('active');
		$('.mobile-menu-spoiler__text--small').not($(this).next()).slideUp(300);
	}
	$(this).toggleClass('active').next().slideToggle(300);
})
//

$(document).on('click', '#mess', function () {
	$('#mess-block').css('display', 'block');
	$('#post-inp').css('display', 'none');
})

$(document).on('click', '#post', function () {
	$('#mess-block').css('display', 'none');
	$('#post-inp').css('display', 'block');
})
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
/*
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
*/
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	let header = document.querySelector(".header");
	let topMenu = document.querySelector(".top-nav");
	let bottomMenu = document.querySelector(".bottom-nav");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
			header.classList.toggle("_active");
			topMenu.classList.toggle("_active");
			bottomMenu.classList.toggle("_active");
			$('html').scrollTop(0);
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================

// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
	for (let index = 0; index < title.length; index++) {
		let el = title[index];
		let txt = el.innerHTML;
		let txt_words = txt.replace('  ', ' ').split(' ');
		let new_title = '';
		for (let index = 0; index < txt_words.length; index++) {
			let txt_word = txt_words[index];
			let len = txt_word.length;
			new_title = new_title + '<p>';
			for (let index = 0; index < len; index++) {
				let it = txt_word.substr(index, 1);
				if (it == ' ') {
					it = '&nbsp;';
				}
				new_title = new_title + '<span>' + it + '</span>';
			}
			el.innerHTML = new_title;
			new_title = new_title + '&nbsp;</p>';
		}
	}
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
				return false;
			}
			if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
				return false;
			}
			if (spoller.closest('._spollers').classList.contains('_one')) {
				let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
				for (let i = 0; i < curent_spollers.length; i++) {
					let el = curent_spollers[i];
					if (el != spoller) {
						el.classList.remove('_active');
						_slideUp(el.nextElementSibling);
					}
				}
			}
			spoller.classList.toggle('_active');
			_slideToggle(spoller.nextElementSibling);
		});
	}
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}
//=================
//SearchInList
function search_in_list(input) {
	let ul = input.parentNode.querySelector('ul')
	let li = ul.querySelectorAll('li');
	let filter = input.value.toUpperCase();

	for (i = 0; i < li.length; i++) {
		let el = li[i];
		let item = el;
		txtValue = item.textContent || item.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	}
}
//=================
//DigiFormat
function digi(str) {
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
	if (digi_animate.length > 0) {
		for (let index = 0; index < digi_animate.length; index++) {
			const el = digi_animate[index];
			const el_to = parseInt(el.innerHTML.replace(' ', ''));
			if (!el.classList.contains('_done')) {
				digi_animate_value(el, 0, el_to, 1500);
			}
		}
	}
}
function digi_animate_value(el, start, end, duration) {
	var obj = el;
	var range = end - start;
	// no timer shorter than 50ms (not really visible any way)
	var minTimer = 50;
	// calc step time to show all interediate values
	var stepTime = Math.abs(Math.floor(duration / range));

	// never go below minTimer
	stepTime = Math.max(stepTime, minTimer);

	// get current time and calculate desired end time
	var startTime = new Date().getTime();
	var endTime = startTime + duration;
	var timer;

	function run() {
		var now = new Date().getTime();
		var remaining = Math.max((endTime - now) / duration, 0);
		var value = Math.round(end - (remaining * range));
		obj.innerHTML = digi(value);
		if (value == end) {
			clearInterval(timer);
		}
	}

	timer = setInterval(run, stepTime);
	run();

	el.classList.add('_done');
}
//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.which == 27) {
		popup_close();
	}
});
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}
function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}
function makeEaseInOut(timing) {
	return function (timeFraction) {
		if (timeFraction < .5)
			return timing(2 * timeFraction) / 2;
		else
			return (2 - timing(2 * (1 - timeFraction))) / 2;
	}
}
function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
function form_submit(e) {
	let btn = event.target;
	let form = btn.closest('form');
	let message = form.getAttribute('data-message');
	let error = form_validate(form);
	if (error == 0) {
		//SendForm
		form_clean(form);
		if (message) {
			popup_open('message-' + message);
			e.preventDefault();
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		event.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass") {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+375 (99) 9999999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				datepicker(input, {
					customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}


let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
	//scr_body.setAttribute('data-scroll', pageYOffset);
	let src_value = pageYOffset;
	let header = document.querySelector('header.header');
	if (src_value > 10) {
		header.classList.add('_scroll');
	} else {
		header.classList.remove('_scroll');
	}
	if (scr_blocks.length > 0) {
		for (let index = 0; index < scr_blocks.length; index++) {
			let block = scr_blocks[index];
			let block_offset = offset(block).top;
			let block_height = block.offsetHeight;

			if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				block.classList.add('_scr-sector_active');
			} else {
				if (block.classList.contains('_scr-sector_active')) {
					block.classList.remove('_scr-sector_active');
				}
			}
			if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				if (!block.classList.contains('_scr-sector_current')) {
					block.classList.add('_scr-sector_current');
				}
			} else {
				if (block.classList.contains('_scr-sector_current')) {
					block.classList.remove('_scr-sector_current');
				}
			}
		}
	}
	if (scr_items.length > 0) {
		for (let index = 0; index < scr_items.length; index++) {
			let scr_item = scr_items[index];
			let scr_item_offset = offset(scr_item).top;
			let scr_item_height = scr_item.offsetHeight;


			let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
			if (window.innerHeight > scr_item_height) {
				scr_item_point = window.innerHeight - scr_item_height / 3;
			}

			if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
				scr_item.classList.add('_active');
				scroll_load_item(scr_item);
			} else {
				scr_item.classList.remove('_active');
			}
			if (((src_value > scr_item_offset - window.innerHeight))) {
				if (scr_item.querySelectorAll('._lazy').length > 0) {
					scroll_lazy(scr_item);
				}
			}
		}
	}

	if (scr_fix_block.length > 0) {
		fix_block(scr_fix_block, src_value);
	}
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	if (custom_scroll_line) {
		let window_height = window.innerHeight;
		let content_height = document.querySelector('.wrapper').offsetHeight;
		let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
		let custom_scroll_line_height = custom_scroll_line.offsetHeight;
		custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
	}

	if (src_value > scrollDirection) {
		// downscroll code
	} else {
		// upscroll code
	}
	scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
	//document.addEventListener("DOMContentLoaded", scroll_scroll);
	scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
	let lazy_src = scr_item.querySelectorAll('*[data-src]');
	if (lazy_src.length > 0) {
		for (let index = 0; index < lazy_src.length; index++) {
			const el = lazy_src[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('src', el.getAttribute('data-src'));
				el.classList.add('_loaded');
			}
		}
	}
	let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
	if (lazy_srcset.length > 0) {
		for (let index = 0; index < lazy_srcset.length; index++) {
			const el = lazy_srcset[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('srcset', el.getAttribute('data-srcset'));
				el.classList.add('_loaded');
			}
		}
	}
}

function scroll_load_item(scr_item) {
	if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
		let map_item = document.getElementById('map');
		if (map_item) {
			scr_item.classList.add('_loaded-map');
			map();
		}
	}
}

//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
	disableScroll();
	window.addEventListener('wheel', full_scroll);
}
function full_scroll(e) {
	let viewport_height = window.innerHeight;
	if (viewport_height >= scr_min_height) {
		if (scrolling_full) {
			// ВЫЧИСЛИТЬ!!!
			let current_scroll = pageYOffset;//parseInt(scr_body.getAttribute('data-scroll'));
			//
			let current_block = document.querySelector('._scr-sector._scr-sector_current');
			let current_block_pos = offset(current_block).top;
			let current_block_height = current_block.offsetHeight;
			let current_block_next = current_block.nextElementSibling;
			let current_block_prev = current_block.previousElementSibling;
			let block_pos;
			if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
				if (current_block_prev) {
					let current_block_prev_height = current_block_prev.offsetHeight;
					block_pos = offset(current_block_prev).top;
					if (current_block_height <= viewport_height) {
						if (current_block_prev_height >= viewport_height) {
							block_pos = block_pos + (current_block_prev_height - viewport_height);
							full_scroll_to_sector(block_pos);
						}
					} else {
						enableScroll();
						if (current_scroll <= current_block_pos) {
							full_scroll_to_sector(block_pos);
						}
					}
				} else {
					full_scroll_pagestart();
				}
			} else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
				if (current_block_next) {
					block_pos = offset(current_block_next).top;
					if (current_block_height <= viewport_height) {
						full_scroll_to_sector(block_pos);
					} else {
						enableScroll();
						if (current_scroll >= block_pos - viewport_height) {
							full_scroll_to_sector(block_pos);
						}
					}
				} else {
					full_scroll_pageend();
				}
			}
		} else {
			disableScroll();
		}
	} else {
		enableScroll();
	}
}
function full_scroll_to_sector(pos) {
	disableScroll();
	scrolling_full = false;
	_goto(pos, 800);

	let scr_pause = 500;
	if (navigator.appVersion.indexOf("Mac") != -1) {
		scr_pause = 1000;
	};
	setTimeout(function () {
		scrolling_full = true;
	}, scr_pause);
}
function full_scroll_pagestart() { }
function full_scroll_pageend() { }

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
	let blocks = [];
	for (let index = 0; index < link.length; index++) {
		let el = link[index];
		let block_name = el.getAttribute('href').replace('#', '');
		if (block_name != '' && !~blocks.indexOf(block_name)) {
			blocks.push(block_name);
		}
		el.addEventListener('click', function (e) {
			if (document.querySelector('.menu__body._active')) {
				menu_close();
				body_lock_remove(500);
			}
			let target_block_class = el.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		})
	}

	window.addEventListener('scroll', function (el) {
		let old_current_link = document.querySelectorAll('._goto-block._active');
		if (old_current_link) {
			for (let index = 0; index < old_current_link.length; index++) {
				let el = old_current_link[index];
				el.classList.remove('_active');
			}
		}
		for (let index = 0; index < blocks.length; index++) {
			let block = blocks[index];
			let block_item = document.querySelector('.' + block);
			if (block_item) {
				let block_offset = offset(block_item).top;
				let block_height = block_item.offsetHeight;
				if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
					let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
					for (let index = 0; index < current_links.length; index++) {
						let current_link = current_links[index];
						current_link.classList.add('_active');
					}
				}
			}
		}
	})
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
	for (let index = 0; index < goto_links.length; index++) {
		let goto_link = goto_links[index];
		goto_link.addEventListener('click', function (e) {
			let target_block_class = goto_link.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		});
	}
}
function _goto(target_block, speed, offset = 0) {
	let header = '';
	//OffsetHeader
	//if (window.innerWidth < 992) {
	//	header = 'header';
	//}
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: header,
		offset: offset,
		easing: 'easeOutQuad',
	};
	let scr = new SmoothScroll();
	scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
	document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
	/*if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}*/
}

function fix_block(scr_fix_block, scr_value) {
	let window_width = parseInt(window.innerWidth);
	let window_height = parseInt(window.innerHeight);
	let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
	for (let index = 0; index < scr_fix_block.length; index++) {
		const block = scr_fix_block[index];
		const block_width = block.getAttribute('data-width');
		const item = block.querySelector('._side-block');
		if (!block_width) { block_width = 0; }
		if (window_width > block_width) {
			if (item.offsetHeight < window_height - (header_height + 30)) {
				if (scr_value > offset(block).top - (header_height + 15)) {
					item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
				} else {
					gotoRelative(item);
				}
				if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
					block.style.cssText = "position:relative;";
					item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
				}
			} else {
				gotoRelative(item);
			}
		}
	}
	function gotoRelative(item) {
		item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
	}
}

if (!isMobile.any()) {
	//custom_scroll();
	/*
	window.addEventListener('wheel', scroll_animate, {
		capture: true,
		passive: true
	});
	window.addEventListener('resize', custom_scroll, {
		capture: true,
		passive: true
	});
	*/
}
function custom_scroll(event) {
	scr_body.style.overflow = 'hidden';
	let window_height = window.innerHeight;
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
	let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
	if (custom_scroll_content_height > window_height) {
		if (!custom_scroll_line) {
			let custom_scroll = document.createElement('div');
			custom_scroll_line = document.createElement('div');
			custom_scroll.setAttribute('class', '_custom-scroll');
			custom_scroll_line.setAttribute('class', '_custom-scroll__line');
			custom_scroll.appendChild(custom_scroll_line);
			scr_body.appendChild(custom_scroll);
		}
		custom_scroll_line.style.height = custom_cursor_height + 'px';
	}
}

let new_pos = pageYOffset;
function scroll_animate(event) {
	let window_height = window.innerHeight;
	let content_height = document.querySelector('.wrapper').offsetHeight;
	let start_position = pageYOffset;
	let pos_add = 100;

	if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
		new_pos = new_pos - pos_add;
	} else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
		new_pos = new_pos + pos_add;
	}
	if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
	if (new_pos < 0) new_pos = 0;

	if (scrolling) {
		scrolling = false;
		_goto(new_pos, 1000);

		let scr_pause = 100;
		if (navigator.appVersion.indexOf("Mac") != -1) {
			scr_pause = scr_pause * 2;
		};
		setTimeout(function () {
			scrolling = true;
			_goto(new_pos, 1000);
		}, scr_pause);
	}
	//If native scroll
	//disableScroll();
}

$(document).ready(function () {
	$('.pix-slider').slick({
		arrows: true,
		dots: false,
		// centerMode: true,
		slidesToShow: 3,
		// centerPadding: '100px',
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800


		// responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			adaptiveHeight: true
		// 		}
		// 	}
		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow:1
		// 		}
		// 	}
		// ]
	})
	$('.flat-window__row').slick({
		arrows: false,
		dots: false,
		slidesToShow: 4,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					// adaptiveHeight: true
					dots: true,
					slidesToShow: 2,
					appendDots: $('.flat-window__dots')
				}
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1,
					dots: true,
					appendDots: $('.flat-window__dots')
				}
			}
		]
	})
	$('.panoramic-window__row').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					// adaptiveHeight: true
					dots: true,
					slidesToShow: 1,
					appendDots: $('.panoramic-window__dots')
				}
			}
			// {
			// 	breakpoint: 550,
			// 	settings: {
			// 		slidesToShow:1
			// 	}
			// }
		]
	})

	$('.gallery__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 2,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		appendArrows: $('.gallery__arrows'),
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					// adaptiveHeight: true
					dots: true,
					slidesToShow: 1,
					arrows: false,
					appendDots: $('.gallery__arrows')

				}
			}
			// {
			// 	breakpoint: 550,
			// 	settings: {
			// 		slidesToShow:1
			// 	}
			// }
		]
	})


	$('.reviews__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		appendArrows: $('.reviews__arrows'),
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					// adaptiveHeight: true
					dots: true,
					slidesToShow: 2,
					appendDots: $('.reviews__arrows'),
					arrows: false

				}
			}
			// {
			// 	breakpoint: 550,
			// 	settings: {
			// 		slidesToShow:1
			// 	}
			// }
		]
	})


	$('.sales__row--t').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		appendArrows: $('.reviews__arrows'),
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					// adaptiveHeight: true
					dots: true,
					slidesToShow: 2,
					appendDots: $('.sales__dots'),
					arrows: false
				}
			},
			{
				breakpoint: 568,
				settings: {
					dots: true,
					slidesToShow: 1,
					appendDots: $('.sales__dots')
				}
			}
		]
	})


	$('.portfolio__row--t').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		appendArrows: $('.portfolio__arrows'),
		responsive: [
			{
				breakpoint: 769,
				settings: {
					// adaptiveHeight: true
					dots: true,
					slidesToShow: 2,
					appendDots: $('.portfolio__dots'),
					arrows: false
				}
			},
			{
				breakpoint: 568,
				settings: {
					dots: true,
					slidesToShow: 1,
					appendDots: $('.portfolio__dots')
				}
			}
		]
	})




	var kitSliders = $('#rama, #fit, #ton, #lay, #slop, #sill').slick({
		arrows: true,
		dots: false,
		// centerMode: true,
		slidesToShow: 9,
		// centerPadding: '100px',
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 4
				}
			}
			// {
			// 		breakpoint: 550,
			// 		settings: {
			// 			slidesToShow:1
			// 		}
			// 	}
		]
	})


	$(".show_tab_el").click(function () {
		kitSliders.slick('refresh');
	})










})

