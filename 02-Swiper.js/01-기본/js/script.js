const topSlider = new Swiper('.top-slider', {
  // 옵션 설정
  // direction: 'vertical', /* 넘기는 뱡항,좌우 상하 // 기본값 좌우 */
  loop: true,
  autoplay: {
    delay: 3000 /* 아이템이 노출되는(멈춰있는) 시간 */,
    pauseOnMouseEnter: true,
  },
  speed: 600 /* 넘기기 속도, 기본값 0.3초 */,

  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },

  // 페이지내이션
  pagination: {
    //
    el: '.top-slider .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.top-slider .swiper-button-next',
    prevEl: '.top-slider .swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.top-slider .swiper-scrollbar',
  },
});

const bottomSlider = new Swiper('.bottom-slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  // 페이지내이션
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});
