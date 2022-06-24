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
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  }
});

window.addEventListener('scroll', () => {
	if (window.scrollY > 32) {
		document.querySelector('html').classList.add('scrolling');
	} else {
		document.querySelector('html').classList.remove('scrolling');
	}
});

document.querySelector('.nav__toggle').addEventListener('click', () => {
  document.querySelector('.nav__drawer').classList.add('open');
})

document.querySelector('.nav__close').addEventListener('click', () => {
  document.querySelector('.nav__drawer').classList.remove('open');
})