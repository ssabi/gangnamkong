$(document).ready(function() {
	$(window).on({
		scroll : function(){
			var scrollTop = $(this).scrollTop();
			var $target = $("#header");
			if(scrollTop >= 80){
				$target.addClass("fixed");
			}else{
				$target.removeClass("fixed");
			}
		}
	});

	$(".search-wrap input").on({
		"mousedown touchstart focusin" : function(){
			$(this).closest(".search-wrap").addClass("ext");
			$(".search-ext").show();
		}
	});
	$(document).on('mousedown touchstart focusin', function(e){
		//console.log($(e.target));
		if($(e.target).closest(".search-wrap").length === 0) {
			$(".search-wrap").removeClass("ext");
			$(".search-ext").hide();
		}
	});

	//Main Visual Swiper
	var visualSwiper = new Swiper('.visual .swiper-container', {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	});
	var newSwiper = new Swiper('.new-product .swiper-container', {
		slidesPerView: 'auto',
		//slidesPerView: 4,
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
		loop: true,
		preventClicks: true,
		navigation: {
			nextEl: '.recipe-control .swiper-button-next',
			prevEl: '.recipe-control .swiper-button-prev'
		},
		pagination: {
			el: '.recipe-pagination .swiper-pagination'
		}
	});

	//찜하기
	$( '.ico-heart' ).click( function() {
		$(this).toggleClass( 'on' );
	});
	//tab
	$(".tab_content").hide(); //Hide all content
	$("ul.tab-nav li:first").addClass("on").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tab-nav li").click(function () {
		$("ul.tab-nav li").removeClass("on"); //Remove any "on" class
		$(this).addClass("on"); //Add "on" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});

	//관련상품 스와이퍼
	var RelatedSwiper = new Swiper('.sub-bottom-swiper .swiper-container', {
		slidesPerView: 4,
		loop: true,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});