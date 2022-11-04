
const preLoader = document.querySelector('.preLoader');
const main = document.querySelector('.main');
const sig = document.querySelector('.sig');
const wellcome = document.querySelector('.wellcome');

function wellCome(){
  wellcome.style.opacity = '1';
}
function sigLoader(){
  sig.style.opacity = '1';
}
function timeLoader(){
  preLoader.style.opacity = '0';
  main.style.opacity = '1';    
  preLoader.style.zIndex = '0'
  main.style.zIndex = '1'
};
setTimeout(()=>{
  wellCome()
},'3000')
setTimeout(()=>{
    sigLoader()
},'1000')

setTimeout(() => {
  timeLoader();
  
}, "5000");

// slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  },
});

var swiper_logos = new Swiper(".logos-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});







