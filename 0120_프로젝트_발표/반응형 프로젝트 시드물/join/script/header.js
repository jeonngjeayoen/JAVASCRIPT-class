$(document).ready(function(){
function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

/* 탑버튼 누를시 애니메이트 (PC, Tablet, Mobile) */
$('.f-btn').click(function(){
  $('html, body').animate({
    scrollTop:0
  }, 500);
  return false;
})

/* 반응형 체크 */
$(window).resize(function(){ 
/* PC화면 시작 */
if (window.innerWidth >= 1025) {
/* 서식 초기화 */
$('header .h-top > ul > li, .h-bottom nav ul > li').css({'display':'block'});  
/* 스크롤 애니메이션 시 변경 */
$(this).scroll(function(){
  scrollPos = $(this).scrollTop();
  if(scrollPos>=60){
    $('header').addClass('active');
  } else{
    $('header').removeClass('active');
  }
});
} 
/* 스크롤 애니메이션 시 탑버튼 변경 */
$(window).scroll(function(){
  let scrollPos = $(this).scrollTop();
  if(scrollPos<100){
    $('.f-top-btn').addClass('f-header');
    $('.f-top-btn').removeClass('f-middlem, f-end');
  }
  if(scrollPos > 100){
    $('.f-top-btn').addClass('f-middle');
    $('.f-top-btn').removeClass('f-end, f-header');
  } if(scrollPos > 2500){
    $('.f-top-btn').removeClass('f-middle');
  } 
});

/* 태블릿, 모바일 */
if (window.innerWidth < 1025) {  // 다바이스 크기가 모바일, 태블릿일 때
  /* 스크롤 애니메이션 시 무효화 */
  $(this).scroll(function(){
  $('header').removeClass('active');
  });

  /* 스크롤 애니메이션 시 탑버튼 변경 */
$(window).scroll(function(){
  let scrollPos = $(this).scrollTop();
  if(scrollPos<100){
    $('.f-top-btn').addClass('f-header');
  }else{
    $('.f-top-btn').removeClass('f-header');
    $('.f-top-btn').addClass('f-middle');
  }
});

  /* 메뉴 클릭 애니메이션 */
  let gnb = $('.h-bottom > nav > ul > li');
  gnb.click(function(){
    console.log('eve')
    $(this).find('.lnb').slideDown().parent().siblings().find('.lnb').slideUp();
    });

  $('label').click(function(){
    if($("#toggle").is(':checked') == true){

      $('header').addClass('h-header-on');
      $('.h-bottom nav > ul > li, header .h-top ul > li').stop().delay(200).fadeIn();
      $(".h-btn01").addClass('h-on01').removeClass('h-btn01');
      $(".h-btn02").addClass('h-on02').removeClass('h-btn02');
      $(".h-btn03").addClass('h-on03').removeClass('h-btn03');
    }else{
      $('header .h-top ul > li, .h-bottom nav > ul > li').stop().fadeOut();
      $('header').removeClass('h-header-on');
      $(".h-on01").addClass('h-btn01').removeClass('h-on01');
      $(".h-on02").addClass('h-btn02').removeClass('h-on02');
      $(".h-on03").addClass('h-btn03').removeClass('h-on03');
    }
    });
  }
}).resize(); 
});