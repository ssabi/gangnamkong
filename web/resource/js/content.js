
$(document).ready(function() {
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

  //마이페이지 메뉴
  $('.left-menu li').click(function(){
    $(this).closest(".left-menu").find("li").removeClass("on");
    $(this).addClass('on');
  });
});