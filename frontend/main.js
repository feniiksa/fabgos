import "./src/scss/style.scss";

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css/autoplay';
const swiper = new Swiper('.my-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // watchOverflow: true,
  // spaceBetween: 100,
  // centeredSlidesBounds: true,
  // loop: true,
  // speed: 400,
  // allowTouchMove: false,
  // breakpoints: {
  //   768: {
  //     slidesPerView: 1.05,
  //     slidesOffsetAfter: 40,
  //   },
  // }
}); 