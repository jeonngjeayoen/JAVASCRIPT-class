$(document).ready(function(){
// 슬라이더 선언
let swiper = new Swiper(".m-banner-swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  loop: true
});

// 슬라이더 버튼
let playBtn = '../img/play_btn.svg'
let pauseBtn = '../img/pause_btn.svg'
let cBtn = document.getElementById('c-btn')

$('.swiper-btn').click(function(){
  if($(this).find('img').attr('src') === './img/pause_btn.svg'){
  swiper.autoplay.stop();
  $(this).find('img').attr('src', './img/play_btn.svg');
  return false;
}else{
  swiper.autoplay.start();
  $(this).find('img').attr('src', './img/pause_btn.svg');
  return false;
  }
});
});

if (window.innerWidth > 1025) {
$('#story').addClass('scroll');
  //스크롤 감지 애니메이션
$(window).scroll(function(){
  let scrollPos = $(this).scrollTop();
  if(scrollPos > 850){
    $('#newsroom').addClass('scroll')
  } 
  if(scrollPos > 2000){
    $('#call').addClass('scroll')
    return false;
  } 
}
);
};
//해상도가 1024미만, 768이상일 때
if (window.innerWidth < 1025 && window.innerWidth > 768) {
  //스크롤 감지 애니메이션
$(window).scroll(function(){
  let scrollPos = $(this).scrollTop();
  if(scrollPos > 10){
    $('#story').addClass('scroll');
  } 
  if(scrollPos > 1040){
    $('#newsroom').addClass('scroll')
  } 
  if(scrollPos > 1700){
    $('#call').addClass('scroll')
    return false;
  } 
}
);
};
//해상도가 768 미만일 때
if (window.innerWidth < 769) {


//스크롤 감지 애니메이션
$(window).scroll(function(){
  let scrollPos = $(this).scrollTop();
  if(scrollPos > 10){
    $('#story').removeClass('scroll');
  }
  if(scrollPos > 150){
    $('#story').addClass('scroll');
  } 
  if(scrollPos > 1300){
    $('#newsroom').addClass('scroll')
  } 
  if(scrollPos > 2800){
    $('#call').addClass('scroll')
    return false;
  }
}
);
};

//resize 이벤트
$(window).resize(function(){
//해상도가 768 미만이라면 이미지 주소 변경
if (window.innerWidth < 769) {
  $('.slide01 img').attr('src', './img/mainslide1-m.jpg');
  $('.slide02 img').attr('src', './img/mainslide2-m.jpg');
  $('.slide03 img').attr('src', './img/mainslide3-m.jpg');
  $('.slide04 img').attr('src', './img/mainslide4-m.jpg');
  $('.slide05 img').attr('src', './img/mainslide5-m.jpg');
}else{
  $('.slide01 img').attr('src', './img/mainslide1.jpg');
  $('.slide02 img').attr('src', './img/mainslide2.jpg');
  $('.slide03 img').attr('src', './img/mainslide3.jpg');
  $('.slide04 img').attr('src', './img/mainslide4.jpg');
  $('.slide05 img').attr('src', './img/mainslide5.jpg');
}
}).resize();
