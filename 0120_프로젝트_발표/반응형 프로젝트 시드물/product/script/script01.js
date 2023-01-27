let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 32,
  breakpoints: {
    1025: {
      slidesPerView: 4,
      slidesPerColumn: 4,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 16,
      slideOffsetBefore: 32,
      slideOffsetAfter: 32
    },
    320: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 16,
      slideOffsetBefore: 16,
      slideOffsetAfter: 16
    }
  },
  loop: true,
  navigation: {
    nextEl: ".next-slide",
    prevEl: ".prev-slide",
  },
});
$(function(){
  let b3 = $('.open'); 

  b3.click(function(){
    $('.gallery_sub').toggle();
  });
})

const tabItem = document.querySelectorAll(".pd-tab-menu");
console.log(tabItem);
const tabContent = document.querySelectorAll(".pd-tab-item");
console.log(tabContent);



for(let i = 0; i < tabItem.length; i++){
  tabItem[i].addEventListener("click", function(){
    for(let j = 0; j < tabItem.length; j++){
      tabItem[j].classList.remove("tab-active");
      tabContent[j].classList.remove("tab-active");
    }
    tabItem[i].classList.add("tab-active");
    tabContent[i].classList.add("tab-active");
  });
}