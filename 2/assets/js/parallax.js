$(document).ready(function () {

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
    
})



































