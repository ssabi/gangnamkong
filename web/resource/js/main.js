
$( document ).ready(function() {
  //banner
  var bannerSwiper = new Swiper('.banner .swiper-container', {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });
  var newSwiper = new Swiper('.new-product .swiper-container', {
    slidesPerView: 'auto',
    //centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });
});