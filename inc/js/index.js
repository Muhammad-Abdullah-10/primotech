
// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//     allowSlideNext : true,
//   });
       
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.from(".navbar-nav", { opacity: 0, y: '-100%', duration: 1 ,ease : 'back.in'});
gsap.from(".logo-desktop", { opacity: 0, x: '-100%', duration: 1 ,ease : 'power1'});
gsap.from(".nav-item" , { duration: 1 , opacity: 0 , delay : 1 ,stagger : .2})  


// let tween = gsap.to(".navbar-nav", { x: 100 }),
//   st = ScrollTrigger.create({
//     trigger: ".trigger",
//     start: "top center",
//     end: "+=500",
//     animation: tween,
//   });

// console.log(st.animation); // tween
// Swiper Working
//   var quoteSwiper = new Swiper('.swiper');

//   var imageSwiper = new Swiper('.image-slider', {
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//   });

//   quoteSwiper.params.control = imageSwiper;
//   imageSwiper.params.control = quoteSwiper;

    // $(".slider").slick({});
    // $(".slider2").slick({ asNavFor: '.slider' });
    // $(".slider3").slick({ asNavFor: '.slider2' });
// Swiper Working

// swiper.slideNext();
// swiper.speed();


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    verticalScrolling: true,
    vertical: true
  });
//   $('.slider-for').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-nav',
//     dots:false,
//     arrows:false,
//     draggable:true,
//     swipe: true,
//     touchMove: true,
//     vertical: true,
//     verticalScrolling: true,
//     focusOnSelect: true,
//     variableWidthL:true,
//     initialSlide:3,
//     verticalSwiping:true
//   });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots:false,
    arrows:false,
    draggable:true,
    swipe: true,
    touchMove: true,
    vertical: true,
    verticalScrolling: true,
    focusOnSelect: true,
    variableWidthL:true,
    // initialSlide:3,
    infinite:false,
    verticalSwiping:true
  });
//   onmousewheel
  // const sliderNav = $(".slider-nav");
  // sliderNav.on('wheel', (function(e) {
  //   e.preventDefault();  
  
  //   if (e.originalEvent.deltaY < 0) {
  //     $(this).slick('slickNext');
  //   } else {
  //     $(this).slick('slickPrev');
  //   }
  // }));
  
  //   onmousewheel
 
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });



  // const swiperV = new Swiper('.swiper-vertical', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });
  

  // Assuming swiper is your Swiper instance

  // Get the active slide index
  // const activeIndex = swiper.activeIndex;
  // console.log(activeIndex);

  // Get the active slide element
  // const activeSlide = swiper.slides[activeIndex];
  // console.log( swiper.slides);

  // Update the data attribute of the active slide element
  // activeSlide.setAttribute('data-my-attribute', 'new-value');
  // var swiperleft = document.getElementsByClassName('swiper-slide-active');
  // console.log(swiperleft);
//  activeIndex.getAttribute('data-val');
