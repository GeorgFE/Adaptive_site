import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.trainers__slider', {
  slidesPerView: 'auto',
  slidesPerView: 4,
  spaceBetween:50,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
