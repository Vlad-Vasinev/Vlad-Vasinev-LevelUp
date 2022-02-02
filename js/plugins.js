

jQuery(document).ready(function ($) {

    //видео на заднем фоне
    $('.promo').vide('video-bg/video-1.mp4');

    //таймер 
    $(function () {
        var clock;
		$(document).ready(function() {
			var clock;

			clock = $('.clock').FlipClock({
		        clockFace: 'DailyCounter',
		        autoStart: true,
                
		        // callbacks: {
		        // 	stop: function() {
		        // 		// $('.message').html('The clock has stopped!')
		        // 	}
		        // }
		    });
		    clock.setTime(14400);
		    clock.setCountdown(true);
		    clock.start();
		});
    });

});

$(function () {
    //slick-slider
    $(function () {
        $('.reviews__list').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        autoplay: false,
                    }
                }
            ]
        });
    })

    //при клике по input номера - запретить ввод букв
    $(function () {
        $("#phone").on('input', function (e) {
            this.value = this.value.replace(/[^0-9\.]/g, '');
        });
    })

    // клик по input номер телефона
    $(function () {
        $('#phone').on('click', function (e) {
            e.preventDefault();
            $('.product__form').removeClass('show--message-name');
            $('.product__form').addClass('show--message-number');
            setTimeout(function () {
                $('.product__form').removeClass('show--message-number');
            }, 4000);
        })
    })

    // клик по input имя
    $(function () {
        $('#name').on('click', function (e) {
            e.preventDefault();
            $('.product__form').removeClass('show--message-number');
            $('.product__form').addClass('show--message-name');
            setTimeout(function () {
                $('.product__form').removeClass('show--message-name');
            }, 4000);
        })
    })

    //при клике по кнопке - скролл до формы
    $(function () {
        $(".btn-form").on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".product__form").offset().top
            }, 1000);
        });
    })
});
