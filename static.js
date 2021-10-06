// snow
/*$.getScript("//olgabelmash.github.io/belmash/snow-it.min.js", function() {
    $.fn.snowit({flakeColor: 'LightCyan',total: 100,minSize : 15,maxSize : 40, speed: $(document).height()/105});
});*/
$("#footer").append("<div style=\"padding-bottom:35px;\" class=\"links flex-center\">Все права защищены СООО Завод Белмаш 2018-2021 ©</div>")
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
          $(".slick-track").css("display","flex");
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
	// LinkedIn
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
	
	// Instagram
	$(".social-links").append('<a target="_blank" style="padding-left: 5px;" href="https://www.instagram.com/belmash_official/">'+
	'<svg id="svg_instagram" aria-label="Instagram" fill="#797a7b" viewBox="0 0 48 48" height="30" width="30" class="social-icon social-icon_instagram"><path d="M13.86.13A17 17 0 008 1.26 11 11 0 003.8 4 12.22 12.22 0 001 8.28 18 18 0 00-.11 14.1c-.13 2.55-.13 3.38-.13 9.9s0 7.32.13 9.9A18 18 0 001 39.72 11.43 11.43 0 003.8 44 12.17 12.17 0 008 46.74a17.75 17.75 0 005.82 1.13c2.55.13 3.38.13 9.9.13s7.32 0 9.9-.13a17.82 17.82 0 005.83-1.13A11.4 11.4 0 0043.72 44a11.94 11.94 0 002.78-4.24 17.7 17.7 0 001.13-5.82c.13-2.55.13-3.38.13-9.9s0-7.32-.13-9.9a17 17 0 00-1.13-5.86A11.31 11.31 0 0043.72 4a12.13 12.13 0 00-4.23-2.78A17.82 17.82 0 0033.66.13C31.11 0 30.28 0 23.76 0s-7.31 0-9.9.13m.2 43.37a13.17 13.17 0 01-4.47-.83 7.25 7.25 0 01-2.74-1.79 7.25 7.25 0 01-1.79-2.74 13.23 13.23 0 01-.83-4.47c-.1-2.52-.13-3.28-.13-9.7s0-7.15.13-9.7a12.78 12.78 0 01.83-4.44 7.37 7.37 0 011.79-2.75A7.35 7.35 0 019.59 5.3a13.17 13.17 0 014.47-.83c2.52-.1 3.28-.13 9.7-.13s7.15 0 9.7.13a12.78 12.78 0 014.44.83 7.82 7.82 0 014.53 4.53 13.12 13.12 0 01.83 4.44c.13 2.51.13 3.27.13 9.7s0 7.15-.13 9.7a13.23 13.23 0 01-.83 4.47 7.9 7.9 0 01-4.53 4.53 13 13 0 01-4.44.83c-2.51.1-3.28.13-9.7.13s-7.15 0-9.7-.13m19.63-32.34a2.88 2.88 0 102.88-2.88 2.89 2.89 0 00-2.88 2.88M11.45 24a12.32 12.32 0 1012.31-12.35A12.33 12.33 0 0011.45 24m4.33 0a8 8 0 118 8 8 8 0 01-8-8"></path></svg></a>');
	
	$("#svg_instagram path").hover(
		function() {
	  		$(this).css("fill","#a6a8ab");
		},
		function() {
	  		$(this).css("fill","#797a7b");
		}
	);
	
	
	$(".dropdown-catalog-tree").css("min-width","350px");
	
	// fb slide
	var fbHTML='<div class="facebook_left"><div id="facebook_icon"></div><div class="facebook_box"><fb:fan profile_id="1658198971090168" stream="0" connections="16" logobar="0" width="237" height="389"></fb:fan></div></div>';
	var fbCSS='<style type="text/css">.facebook_left{width:245px;height:389px;position:fixed;left:-245px;top:220px;z-index:99997}.facebook_right{width:245px;height:389px;position:fixed;right:-245px;top:220px;z-index:99997}.facebook_left #facebook_icon{float:right;height:60px;width:34px;right:-34px;background:url(/data/media/images/5d7f8bc05c0f3.png) no-repeat;cursor:pointer;position:relative;z-index:99998}.facebook_right #facebook_icon{float:left;height:60px;width:34px;left:-34px;background:url(fb.png) no-repeat;cursor:pointer;position:relative;z-index:99998}.facebook_right .facebook_box{background-color:#fff;border:4px solid #3b5998;float:right;top:-60px;position:relative;z-index:99999}.facebook_left .facebook_box{background-color:#fff;border:4px solid #3b5998;float:left;top:-60px;position:relative;z-index:99999}</style>';
	$("body").prepend('<script src="//connect.facebook.net/en_US/all.js#xfbml=1"></script>');
	$("#footer").append(fbCSS).append(fbHTML);
	
	$(".facebook_left").hover(function() {
		$(".facebook_left").stop(true, false).animate({
			left: "0"
		}, 800, 'easeOutQuint');
	});
	$(".facebook_left").mouseleave(function() {
		$(".facebook_left").stop(true, false).animate({
			left: "-245"
		}, 800, 'easeInQuint');
	});
	
	
	$(".filter.country").on('loaded.bs.select', function (a,b,c,d) {
		var menu = $(this).find('ul.dropdown-menu');
		if(menu){
			var firstEl = $(this).find('ul.dropdown-menu').find('*[data-original-index="1"]');
			var elKirgiz = $(this).find('ul.dropdown-menu').find('*[data-original-index="15"]');
			var elKazah = $(this).find('ul.dropdown-menu').find('*[data-original-index="16"]');
			elKirgiz.insertBefore(firstEl);
			elKazah.insertAfter(elKirgiz);
		}
	});
	
	
	
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

var element = $("#yw0 .items .tree-card:last-child").detach();
$('#yw0 .items').prepend(element);
element.css('width', '100%');

/*var $delay=1000;
var $hoverChecker;
$(document).on('mouseenter','#yw0 .item', function(){
	if(!$hoverChecker){
		let $el=$(this);
		$hoverChecker = setTimeout(function() {
			clearTimeout($hoverChecker);
			$hoverChecker=false;
			//$(".side.more").empty();
			$el.click();
		}, $delay);
	}
});
$(document).on('click','#yw0 .item', function(){
	if($hoverChecker){
		clearTimeout($hoverChecker);
		$hoverChecker=false;
	}
});*/



//$(".dropdown-parent a[href$='/uslugi/']").html('<a href="/uslugi/"><span class="title">УСЛУГИ<i class="fa fa-angle-down" aria-hidden="true"></i></span></a>');
$(".dropdown-parent a[href$='/uslugi/']>span.title").append("<i class='fa fa-angle-down' aria-hidden='true'></i>");
$(".dropdown-parent a[href$='/uslugi/'] +ul").html('<li><a class="active" href="/uslugi/obrabotka-listovogo-material/">ЛАЗЕРНАЯ РЕЗКА</a></li><li><a href="/uslugi/tokarnaya-obrabotka-detaley/">ТОКАРНАЯ ОБРАБОТКА</a></li><li><a href="/uslugi/frezernaya-obrabotka-detaley/">ФРЕЗЕРОВАНИЕ</a></li><li><a href="/uslugi/slesarnye-raboty/">СЛЕСАРНЫЕ РАБОТЫ</a></li><li><a href="/uslugi/svarka-metallokonstrukciy/">СВАРКА МЕТАЛЛА</a></li><li><a href="/uslugi/lite-detaley-iz-razlichnyh-tipov-plastmass/">ЛИТЬЕ ПЛАСТМАСС</a></li><li><a href="/uslugi/printer-shirokoformatnoy-pechati/">ШИРОКОФОРМАТНАЯ ПЕЧАТЬ</a></li>');

$('a[href="/produkciya/belmash-camping"] img').attr('src','/data/media/images/60926baa54c10.png');
$('a[href="/produkciya/elekstroinstrument"] img').attr('src','/data/media/files/615d6b88b41c7.png');

if($(location).attr('href')=="https://belmash.by/"){
	$(".dropdown-parent>a>span.active").removeClass("active");
}
if($(location).attr('href')=="https://belmash.by/gde-kupit-produkciyu/"){
	$(".dropdown-parent a[href$='/o-kompanii/']>span.active").removeClass("active");
}
