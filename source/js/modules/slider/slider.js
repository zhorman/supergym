import Swiper from '../../vendor/swiper';

const swiper = new Swiper('.swiper', {
  // Настройки слайдера
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export default swiper;
