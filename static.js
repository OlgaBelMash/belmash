$("#footer").append("<div style=\"padding-bottom:35px;\" class=\"links flex-center\">Все права защищены СООО Завод Белмаш 2018-2019 ©</div>")
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
		$('head').append("<style>.slick-dots-override button::before{font-size:14px !important;text-shadow:-2px 0 #002c7e, 0 2px #002c7e, 2px 0 #002c7e, 0 -2px #002c7e; }</style>");
		$(".slick-dots li").each(function() {
			$(this).addClass("slick-dots-override");
		});
		clearInterval ($topSliderChecker);
	}
    },
100);
$(window).ready(function () {
	if(!localStorage.getItem('cookieAccepted')){
		var cookieHTML="<div id='cookieNotification' style='font-size: 13px;background: #002c7e;width: 100%;height: 30px;position: fixed;bottom: 0px;z-index: 9999;color: #fee;padding-left: 15px;'>"+
		  "<div style='display: inline-block;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;max-width: 97%;padding-right: 25px;'>Сайт belmash.by использует файлы cookies и сервисы сбора технических данных посетителей (данные об IP-адресе, местоположении и др.) для более удобной и быстрой работы. "+
		  "Продолжая посещение нашего сайта, вы автоматически соглашаетесь на использование cookies."+
		  "<a href='/informacija/cookie/nasha-politika-faylov-cookie/' target='_blank' style='line-height: 30px;color: #c81717;'>&nbsp;Подробнее...</a></div>"+
		  "<button id='cookieButton' style='background: none;border: none;float: right;	right: 10px;position: absolute;'>"+
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

$(".tip-caption").css('text-align', 'left').css('min-width', '150px');

$("#yw0 .col-sm-12").each(function() {
	$(this).removeClass("col-lg-6");
	$(this).addClass("col-lg-12");
	$(this).removeClass("col-md-6");
	$(this).addClass("col-md-12");
	$(this).prepend("<span style='color:#1a498c;' class='glyphicon glyphicon-question-sign'></span>");
});

var $delay=500;
$('#yw0').resize(function() {
	$('#yw0 .item').each(function() {	
		var $hoverChecker;
		$(this).hover( function() {
			$hoverChecker = setTimeout(function() {
				console.log("FOCUS!");
				clearTimeout($hoverChecker);
			}, $delay);
		});
	});
});
