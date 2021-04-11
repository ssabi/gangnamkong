$(document).ready(function(){
	//Main Visual Swiper
  var visualSwiper = new Swiper('.visual_swiper .swiper-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
  });

	//New Product Swiper
	var newSwiper = new Swiper('.new_swiper .swiper-container', {
		slidesPerView: 'auto',
  });

	//Recipe Product Swiper
	var recipeSwiper = new Swiper('.recipe_swiper .swiper-container', {
		slidesPerView: 'auto',
  });

	//Related Product Swiper
	var recipeSwiper = new Swiper('.related_swiper .swiper-container', {
		slidesPerView: 'auto',
  });
});