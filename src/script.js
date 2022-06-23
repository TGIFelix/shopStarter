// IMPORT STYLES
import './tailwind.css';
import './main.scss';

// VUEJS
import vue from 'vue';

// SWIPERJS
 import Swiper from 'swiper/bundle';
 import 'swiper/css/bundle';

 const swiper = new Swiper('.product__img-swiper', {
    loop: true,
    slidesPerView: 1,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  
  });