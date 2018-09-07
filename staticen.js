$("#footer").append("<div style=\"padding-bottom:35px;\" class=\"links flex-center\">All rights reserved BELMASH 2018 ©</div>")
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
		  "<p style='display: inline-block;'>Website belmash.by uses cookies to ensure that we give you the best user experiences. "+
		  "By using this site you agree to the use of cookies for analytics and personalized content."+
		  "<a href='/en/news/cookie/policy-of-cookie-files/' target='_blank' style='line-height: 30px;color: #c81717;'>&nbsp;More...</a></p>"+
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
