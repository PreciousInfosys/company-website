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



var mySwiper = new Swiper(".company-swiper-container", {
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
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
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


// $(document).on('click', '.navbar-nav li.dropdown', function(){
//   $(this).toggleClass('active').siblings().removeClass('active')
// })


const toggleButtons = document.querySelectorAll('.dropdown-toggle');
const menus = document.querySelectorAll('.dropdown-menu');

toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener('click', () => {
    const menu = toggleButton.nextElementSibling;
    menu.classList.toggle('visible');
    menu.style.height = menu.classList.contains('visible') ? menu.scrollHeight + 'px' : '0';
  });
});



