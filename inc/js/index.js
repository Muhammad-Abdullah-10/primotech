// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//     allowSlideNext : true,
//   });
       
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.from(".navbar-nav", { opacity: 0, y: '-100%', duration: 1 ,ease : 'back.in'});
gsap.from(".logo-desktop", { opacity: 0, x: '-100%', duration: 1 ,ease : 'elastic.in'});
gsap.from(".nav-item" , { duration: 1 , opacity: 0 , delay : 1 ,stagger : .2})  

// let tween = gsap.to(".navbar-nav", { x: 100 }),
//   st = ScrollTrigger.create({
//     trigger: ".trigger",
//     start: "top center",
//     end: "+=500",
//     animation: tween,
//   });

console.log(st.animation); // tween
// Swiper Working
//   var quoteSwiper = new Swiper('.swiper');

//   var imageSwiper = new Swiper('.image-slider', {
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//   });

//   quoteSwiper.params.control = imageSwiper;
//   imageSwiper.params.control = quoteSwiper;
// Swiper Working

// swiper.slideNext();
// swiper.speed();