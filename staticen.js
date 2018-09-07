$("#footer").append("<div class=\"links flex-center\">© BELMASH 2018 All rights reserved</div>")


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
