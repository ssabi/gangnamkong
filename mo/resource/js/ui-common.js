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

	//Content Tab
	/*
	$(".scTab li").on({
		click : function(e){
			e.preventDefault();
			$(this).addClass("on").siblings("li").removeClass("on");
		}
	});
	*/

	//Selectbox
	$("select").on({
		change : function(){
			var selVal = $(this).val();
			$(this).removeClass("default");
			if(selVal == "default"){
				$(this).addClass("default");
			}
		}
	});

	//category menu
	/*
	$(".sub-menu").hide();
	$(".category .menu li>a").click(function(){
		$(this).parent().addClass('on').siblings().removeClass('on');

		var submenu = $(this).next(".sub-menu");
		if( submenu.is(":visible") ){
				submenu.slideUp();
		}else{
				submenu.slideDown();
				submenu.parent().siblings('li').find('.sub-menu').slideUp();
		}
	});
	*/
	$(".category .menu > li > a").on({
		click : function(e){
			e.preventDefault();

			$(this).parent().toggleClass('on').siblings("li").removeClass("on");

			var dropdown = $(this).next(".sub-menu");

			//$con.not(dropdown).removeClass("show");
			//dropdown.toggleClass("show");
			$(".sub-menu").not(dropdown).slideUp(200);

			dropdown.slideToggle(200);
		}
	});

	$(".ico_btm_category").on({
		click : function(e){
			e.preventDefault();
			$(this).closest("li").addClass("on");
			var $target = $(".category-menu-wrap");
			var $html = $("html");
			$target.addClass("active");
			$html.addClass("ovf");
			

			$(".category-menu-wrap .close-menu").off("click").on({
				click : function(e){
					e.preventDefault();
					$(".ico_btm_category").closest("li").removeClass("on");
					$(this).closest(".category-menu-wrap").removeClass("active");
					$html.removeClass("ovf");
				}
			});
		}
	});

	//수량 선택
	$(".btn-minus").on({
		click : function(){
			var $target = $(this).closest(".btn-quantity").find("input");
			var $value = $target.val();

			var exp = eval($value) - 1;
			if(exp <= 0){
				exp = 0;
			}
			$target.val(exp);
		}
	});
	$(".btn-plus").on({
		click : function(){
			var $target = $(this).closest(".btn-quantity").find("input");
			var $value = $target.val();

			var exp = eval($value) + 1;
			$target.val(exp);
		}
	});

	//
	$(".btn_accord").on({
		click : function(){
			$(this).toggleClass("fold");
			var $target = $(this).closest(".accord_wrap").find(".accord_con");
			$target.slideToggle(200);
		}
	});

	$(".btn_layer").on({
		click : function(){
			var layer = $(this).data("layer");
			//console.log(layer);
			$(layer).addClass("show");

			$(".layer_close").off("click").on({
				click : function(){
					$(this).closest(".layer_pop").fadeOut(200, function(){
						$(this).removeClass("show").removeAttr("style");
					});
				}
			});

			$(document).on('mousedown touchstart focusin', function(e){
				//console.log($(e.target));
				if($(e.target).closest(".layer_box").length === 0) {
					$(".layer_pop").fadeOut(200, function(){
						$(this).removeClass("show").removeAttr("style");
					});
				}
			});
		}
	});
});