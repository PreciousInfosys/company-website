var mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  initialSlide: 0,
  effect: "slide",
  spaceBetween: 0,
  slidesPerView: 1,
  autoHeight: true,
  autoplay: 
  {
    delay: 2500,
  },
  loop: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  slidesOffsetBefore: 0,
  grabCursor: true,
  pagination: {                       
    el: '.swiper-pagination',
    clickable: true,
    paginationClickable: true,
    spaceBetween: 0
  },
});
