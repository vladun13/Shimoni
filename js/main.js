$(document).ready(function(){
    /* SLIDER */
    $(".slider__list").slick({
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			rtl: true,
			arrows: true,
			appendArrows: $('.slider__arrows'),
			prevArrow: '<button type="button" class="slider__arrow slider__arrow_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
			nextArrow: '<button type="button" class="slider__arrow slider__arrow_next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
			dots: true,
			appendDots: $('.slider__dots'),
			dotsClass: 'slider__slick-dots'
	});

	    /* ПЛАВАЮЩЕЕ МЕНЮ ПРИ ПРОКРУТКЕ */
			function swimMenu(){
        var navFixed = $(".phone-box.navigation__nofixed"),
        navHeight = navFixed.height();
    
        if ($(window).scrollTop()) {
            navFixed.addClass("navigation__fixed").removeClass("navigation__nofixed");
        };
    
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            
            if (scroll < navHeight + 500) {
                navFixed.addClass("navigation__nofixed");
                navFixed.removeClass("navigation__fixed navigation__hidden");
            };
            if (scroll > navHeight){
                navFixed.addClass("navigation__hidden");
            };
            if (scroll > navHeight + 500){
                navFixed.addClass("navigation__fixed");
                navFixed.removeClass("navigation__nofixed");
						};
						
        });
    };

    swimMenu();


});

