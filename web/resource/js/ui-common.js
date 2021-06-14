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

	//20210506 수정 Start
	//Main Visual Swiper
	var visualSwiper = new Swiper('.visual .swiper-container', {
		//loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	//20210506 수정 End
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
	//$(".tab_content").hide(); //Hide all content
	//$("ul.tab-nav li:first").addClass("on").show(); //Activate first tab
	//$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	/*
	$("ul.tab-nav li").click(function () {
		$("ul.tab-nav li").removeClass("on"); //Remove any "on" class
		$(this).addClass("on"); //Add "on" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
	*/

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

	//마이페이지 메뉴
	$('.left-menu li').click(function(){
		$(this).closest(".left-menu").find("li").removeClass("on");
		$(this).addClass('on');
	});

	//장바구니 아코디언
	$('.accordion > a.accor-down').click(function(e) {
		e.preventDefault();

		$('.accordion > a.accor-down').toggleClass('on');

		var $this = $('.accordion > a.accor-down');
		if ($this.hasClass('on')) {
			$this.parent().next().removeClass('show');
			$this.parent().next().slideUp(300);
		} else {
			$this.parent().next().toggleClass('show');
			$this.parent().next().slideToggle(300);
		}
	});

	//모달 - 수량 선택
	$(".btn-modal").on({
		click : function(e){
			e.preventDefault();

			var href = $(this).attr("href");
			console.log(href);
			var $target = $(href);
			//var $target = $(".modal");
			

			$target.fadeIn(200);

			$(".modal .close").on({
				click : function(){
					$(this).closest(".modal").fadeOut(200);
				}
			});

			$(document).on('mousedown touchstart focusin', function(e){
				//console.log($(e.target));
				if($(e.target).closest(".modal-dialog").length === 0) {
					$(".modal").fadeOut(200);
				}
			});
		}
	});

	$(".file-wrap").each(function(){
		$(this).find('input[type="file"').on({
			change : function(){
				var $target = $(this).closest(".file-wrap").find('input[type="text"]');
				var $value = $(this).val();
				$target.val($value);
			}
		});
	});

	//현금영수증 신청 이벤트
	$("#cashType input").on({
		click : function(){
			var $value = $(this).attr("id");

			var $section = $(this).closest(".inner-section");
			var activeClass = "on";

			switch ($value) {
				case "cash05":
					$section.addClass(activeClass);
				break;
				case "cash06":
					$section.removeClass(activeClass);
				break;
				default:
					$section.addClass(activeClass);
				break;
			}
		}
	});
	//현금영수증 개인/사업자 선택 이벤트
	$("#chkType input").on({
		click : function(){
			var $value = $(this).attr("id");

			var $phone = $(".type-individual");
			var $business = $(".type-business");

			var activeClass = "show";

			switch ($value) {
				case "type01":
					$phone.addClass(activeClass);
					$business.removeClass(activeClass);
				break;
				case "type02":
					$phone.removeClass(activeClass);
					$business.addClass(activeClass);
				break;
				default:
					$phone.addClass(activeClass);
					$business.removeClass(activeClass);
				break;
			}
		}
	});
	//세금계산서
	$("#taxType input").on({
		click : function(){
			var $value = $(this).attr("id");

			var $section = $(this).closest(".inner-section");
			var activeClass = "on";

			switch ($value) {
				case "tax05":
					$section.addClass(activeClass);
				break;
				case "tax06":
					$section.removeClass(activeClass);
				break;
				default:
					$section.addClass(activeClass);
				break;
			}
		}
	});
});