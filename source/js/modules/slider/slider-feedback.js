import Swiper from '../../vendor/swiper';

const swiper = new Swiper('.feedback__swiper', {
  // Настройки слайдера
  slidesPerView: 1,
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export default swiper;
