$("#footer").append("<div class=\"links flex-center\">Все права защищены СООО Завод Белмаш 2018 ©</div>")


var $topSliderChecker = setInterval(
    function(){
        var $slick_header_top = $('.slider-header');
        if($slick_header_top.unslick){
            $slick_header_top.unslick();
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
5000);

