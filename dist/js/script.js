window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mobile-header__menu'),
  menuItem = document.querySelectorAll('.mobile-header__menu-item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('mobile-header__menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('mobile-header__menu_active');
      })
  })
})

$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    speed: 1000,
    adaptiveHeight: true,
    slidesToShow:1,
    // rtl: true,
		// autoplay:true,
		// autoplaySpeed:1500,
    // centerMode: true,
    // variableWidth: true,
  });
});

// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false
// })

// $(document).ready(function(){
//   $('.solution__slider').slick({
//     dots: true,
//     speed: 1000,
//     adaptiveHeight: true
//   });
// });

// $(document).ready(function(){
//     $('.slider').slick({
//       dots: true,
//       // infinite: true,
//       speed: 300,
//       // slidesToShow: 1,
//       adaptiveHeight: true
//       // prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//       // nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//     });

//   });

