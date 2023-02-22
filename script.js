$(document).ready(function(){
    var slick = $('.js-slider').slick({
        dots: true,
        arrows: false,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('image');
            return '<a href="#"><img src="'+thumb+'"></a>';
        },
    });
    $('.colors__slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    });
    var tab = 0;
	$('body').on('click', '.js-tab-color', function () {
		tab = $(this).attr('data-to-tab');
		let tabBody = $(this).closest('.main-screen__slider').find('.js-slider[data-tab="' + tab + '"]');
        $(this).addClass('top__color_active').siblings('.top__color_active').removeClass('top__color_active')
        tabBody.addClass('slider__content_active').siblings('.slider__content_active').removeClass('slider__content_active')
        slick.slick('refresh');
	});
    scrollTracking()   
});
$(window).scroll(function(){
	scrollTracking();
});
function scrollTracking(){
    var text = document.querySelectorAll(".js_text")
    var img = document.querySelectorAll(".js_img")
    for (let i = 0; i < text.length; i++) { 
        var el =  img[i];
        var top = text[i].getBoundingClientRect().top;
        var bottom = text[i].getBoundingClientRect().bottom;
        if (top >= 0 && bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            img.forEach((function(e) 
                {
                    e.classList.remove("img__item_active")
                }
            ))
            el.classList.add("img__item_active")
        }
        else {
            el.classList.remove("img__item_active")
        }
    }  
}





