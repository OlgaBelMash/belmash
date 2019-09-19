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
var $partnerSliderChecker = setInterval(
    function(){
        var $slick_partner = $('.slider-partners');
        if($slick_partner.hasClass('slick-initialized')){
            $slick_partner[0].slick.unslick();
            $slick_partner.slick({
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 1500,
                infinite: true,
		slidesToShow: 5
            	});
		clearInterval ($partnerSliderChecker);
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
	$(".social-links").append('<a target="_blank" href="https://www.linkedin.com/company/belmash/">'+
	'<svg class="social-icon social-icon_linkedin" version="1.1" id="svg_linkedin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="430.113px" height="430.114px" viewBox="0 50 512 512" xml:space="preserve">'+
		'<path fill="#828282" d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683'+
        'C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z'+
        'M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615'+
        'c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915'+
        's-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/></svg></a>');
	
	$("#svg_linkedin path").hover(
		function() {
	  		$(this).css("fill","#2797CF");
		},
		function() {
	  		$(this).css("fill","#797a7b");
		}
	);
	
	$(".dropdown-catalog-tree").css("min-width","350px");
	
	// fb slide
	var fbINIT='<script>window.fbAsyncInit = function() { FB.init({ appId: "1658198971090168",autoLogAppEvents : true,xfbml: true,version: "v4.0"});};</script>';
	var fbSRC='<script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>';
	var fbHTML='<div class="facebook_left"><div id="facebook_icon"></div><div class="facebook_box"><fb:fan profile_id="1658198971090168" stream="0" connections="16" logobar="0" width="237" height="389"></fb:fan></div></div>';
	var fbCSS='<style type="text/css">.facebook_left{width:245px;height:389px;position:fixed;left:-245px;top:220px;z-index:99997}.facebook_right{width:245px;height:389px;position:fixed;right:-245px;top:220px;z-index:99997}.facebook_left #facebook_icon{float:right;height:60px;width:34px;right:-34px;background:url(/data/media/images/5d7f8bc05c0f3.png) no-repeat;cursor:pointer;position:relative;z-index:99998}.facebook_right #facebook_icon{float:left;height:60px;width:34px;left:-34px;background:url(fb.png) no-repeat;cursor:pointer;position:relative;z-index:99998}.facebook_right .facebook_box{background-color:#fff;border:4px solid #3b5998;float:right;top:-60px;position:relative;z-index:99999}.facebook_left .facebook_box{background-color:#fff;border:4px solid #3b5998;float:left;top:-60px;position:relative;z-index:99999}</style>';
	$("body").prepend(fbINIT).append(fbSRC);
	$("#footer").append(fbCSS).append(fbHTML);
	
	$(".facebook_left").hover(function() {
		$(".facebook_left").stop(true, false).animate({
			left: "0"
		}, 800, 'easeOutQuint');
	});
	$(".facebook_left").stop(true, false).animate({
			left: "-245"
	}, 800, 'easeInQuint');
});
$(document).on('click','#cookieButton', function(){
	localStorage.setItem('cookieAccepted', 1);
	$('#cookieNotification').remove();
});
$("#partners .section-title-container").css('text-align', 'center');
$(".tip-caption").css('text-align', 'left').css('min-width', '150px').css('white-space','nowrap');
$(".tip-caption").each(function() {
	$(this).text($(this).text().toUpperCase());
});
$("#yw0 .col-sm-12").each(function() {
	$(this).removeClass("col-lg-6");
	$(this).addClass("col-lg-12");
	$(this).removeClass("col-md-6");
	$(this).addClass("col-md-12");
	$(this).prepend("<span style='color:#1a498c;' class='glyphicon glyphicon-question-sign'></span>");
});

var $delay=1000;
var $hoverChecker;
$(document).on('mouseenter','#yw0 .item', function(){
	if(!$hoverChecker){
		let $el=$(this);
		$hoverChecker = setTimeout(function() {
			clearTimeout($hoverChecker);
			$hoverChecker=false;
			$el.click();
		}, $delay);
	}
});
$(document).on('click','#yw0 .item', function(){
	if($hoverChecker){
		clearTimeout($hoverChecker);
		$hoverChecker=false;
	}
});

