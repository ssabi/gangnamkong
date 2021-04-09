$( document ).ready(function() {
	//Main Visual Swiper
	var visualSwiper = new Swiper('.visual .swiper-container', {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		}
	});
	var newSwiper = new Swiper('.new-product .swiper-container', {
		slidesPerView: 'auto',
		//spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on:{
			transitionEnd:function(s){
				//s.updateSize();
				//s.updateSlides();
				//s.updateProgress();
				s.update();
			},
			transitionStart:function(s){
				//s.updateSize();
				//s.updateSlides();
				//s.updateProgress();
				s.update();
			}
		}
	});
	var recipeSwiper = new Swiper('.recipe .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		preventClicks: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		}
	});
});