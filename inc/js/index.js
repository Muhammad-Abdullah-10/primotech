
// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//     allowSlideNext : true,
//   });
       
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'node_modules/locomotive-scroll';

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
