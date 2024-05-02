
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LocomotiveScroll from 'node_modules/locomotive-scroll';
      
document.addEventListener("DOMContentLoaded", function () {

gsap.from(".navbar-nav", { opacity: 0, y: '-100%', duration: 1 ,ease : 'back.in'});
gsap.from(".logo-desktop", { opacity: 0, x: '-100%', duration: 1 ,ease : 'power1'});
gsap.from(".nav-item" , { duration: 1 , opacity: 0 , delay : 1 ,stagger : .2})  

var verticalSwiper = new Swiper(".services-thumb-slider", {
  slidesPerView: 5,
  speed: 400,
  direction: "vertical",
  centeredSlides: true,
  mousewheel: true,
  initialSlide: "2",
});
verticalSwiper.on("slideChange", function () {
  updateValueOnSlideChange(this);
});

// Initialize horizontal swiper
var horizontalSwiper = new Swiper(".swiper-horizontal", {
  slidesPerView: 1,
  initialSlide: "2",
  speed: 400,
  centeredSlides: true,
  effect: "fade",
  fadeEffect: { crossFade: false },
});
horizontalSwiper.on("slideChange", function () {
  myCallbackfunction(this);
});

//Callback function used for when slide is changed.
function myCallbackfunction(data) {
  var activeSlide = verticalSwiper.slides[verticalSwiper.realIndex];
  // var anchorText = activeSlide.querySelector("data-slide");
  var anchorTexta = activeSlide.querySelector("a");
  var a = anchorTexta.getAttribute('data-slide');
  // console.log(a);
  // console.log(data.realIndex);
  var activeSlide = horizontalSwiper.slides[data.realIndex];
  // console.log(activeSlide);
  // var attr = activeSlide.find('.wrapper-content-slider');
  // console.log(attr);
}
function updateValueOnSlideChange(data) {
  var activeSlide = verticalSwiper.slides[verticalSwiper.realIndex];
  var anchorText = activeSlide.querySelector("a");
  var getBannerImgDiv = document.querySelector(".swipper-wrapper");

  var classMap = {
    "Web Development": "webiste-banner-bg",
    "Mobile Application Development": "mobile-dev-banner",
    "Digital Marketing": "digital-marketing-banner",
    "Digital Branding & Communication": "digital-branding-banner",
    "UI/UX Design": "ui-ux-banner",
    "Ecommerce Web Development": "e-com-banner"
};

// Loop through the classMap and add or remove classes based if anchor text is
// to the classMap text then add class coresponding to text
Object.entries(classMap).forEach(([text, className]) => {
    if (anchorText.textContent === text) {
        getBannerImgDiv.classList.add(className);
    } else {
        getBannerImgDiv.classList.remove(className);
    }
});
}

// Synchronize slides when vertical swiper changes
// verticalSwiper.on("slideChange", function () {
//   var activeIndex = verticalSwiper.activeIndex;
//   horizontalSwiper.slideTo(activeIndex);
// });

// Synchronize slides when horizontal swiper changes
// horizontalSwiper.on("slideChange", function () {
//   var activeIndex = horizontalSwiper.activeIndex;
//   verticalSwiper.slideTo(activeIndex);
// });

// Connection b/w both sliders
horizontalSwiper.controller.control = verticalSwiper;
verticalSwiper.controller.control = horizontalSwiper;
// Swiper Home Page Service Slider End

// Test Code
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



  // Swiper Home Page Service Slider Start
  // Initialize vertical swiper
// Test Code

});


  
