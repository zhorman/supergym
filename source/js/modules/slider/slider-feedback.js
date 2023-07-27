const swiper = new Swiper('.feedback__swiper', {
  // Настройки слайдера
  slidesPerView: 1,
  spaceBetween: 600,
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
