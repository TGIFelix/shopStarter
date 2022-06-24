// IMPORT
import Swiper from 'swiper/bundle';
import './style.css';
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

// ---ADD CLASS ON SCROLL
window.addEventListener('scroll', () => {
	if (window.scrollY > 32) {
		document.querySelector('html').classList.add('scrolling');
	} else {
		document.querySelector('html').classList.remove('scrolling');
	}
});

// ---NAVIGATION
const navDrawer = document.querySelector('.nav__drawer');
const navOpen = document.querySelector('.nav__open');
const navClose = document.querySelector('.nav__close');

document.addEventListener('keydown', (event) => {
  if (event.key === 'm') {
    navDrawer.classList.toggle('open');
  }
})


navOpen.addEventListener('click', () => {
  navDrawer.classList.add('open');
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      navDrawer.classList.remove('open');
    }
  })
})

navClose.addEventListener('click', () => { navDrawer.classList.remove('open'); })


// ---PRODUCT IMAGE EXPAND
const imgOpen = `
  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
`,
  imgClose = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  `;

if (document.querySelector('.img__expand')) {
  const imgExp = document.querySelector('.img__expand')
  imgExp.addEventListener('click', () => {
    document.querySelector('.main__product').classList.toggle('expand');
    imgExp.innerHTML = document.querySelector('.main__product').classList.contains('expand') ? imgClose : imgOpen;
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelector('.main__product').classList.remove('expand');
      document.querySelector('.img__expand').innerHTML = imgOpen;
    } else if (event.key === 'f') {
      document.querySelector('.main__product').classList.toggle('expand');
      imgExp.innerHTML = document.querySelector('.main__product').classList.contains('expand') ? imgClose : imgOpen
    }
  })
}