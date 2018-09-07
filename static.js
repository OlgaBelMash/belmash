$("#footer").append("<div class=\"links flex-center\">Все права защищены СООО Завод Белмаш 2018 ©</div>")
var $topSliderChecker = setInterval(
    function(){
        var $slick_header_top = $('.slider-header');
        if($slick_header_top.hasClass('slick-initialized')){
            $slick_header_top[0].slick.unslick();
            $slick_header_top.slick({
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true
            });
			clearInterval ($topSliderChecker);
		}
    },
100);
$(window).ready(function () {
	if(!localStorage.getItem('cookieAccepted')){
		var cookieHTML="<div id='cookieNotification' style='font-size: 13px;background: #002c7e;width: 100%;height: 30px;position: fixed;bottom: 0px;z-index: 9999;color: #fee;padding-left: 15px;'>"+
		  "<p style='display: inline-block;'>Сайт belmash.by использует файлы cookies и сервисы сбора технических данных посетителей (данные об IP-адресе, местоположении и др.) для более удобной и быстрой работы."+
		  "Продолжая посещение нашего сайта, вы автоматически соглашаетесь на использование cookies."+
		  "<a href='/informacija/cookie/nasha-politika-faylov-cookie/' style='line-height: 30px;color: #c81717;'>&nbsp;Подробнее...</a></p>"+
		  "<button id='cookieButton' style='background: none;border: none;float: right;	margin-right: 15px;'>"+
		  "	<span style='font-size: 25px;line-height: 30px;'>×</span>"+
		  "</button>"+
		"</div>"
		$("#footer").append(cookieHTML);
	}
});
$(document).on('click','#cookieButton', function(){
	localStorage.setItem('cookieAccepted', 1);
	$('#cookieNotification').remove();
});
