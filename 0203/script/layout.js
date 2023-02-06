$(function(){

  

  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);

  // 스크롤 기능을 사용하여 header, gnb에 서식을 적용하기
    if(sPos>=800){
      $('header').addClass('h_on');
      $('header .gnb a').addClass('on');
      $('header i.fas').addClass('on');
      $('header h1 img').attr('src','./images/logo-casper_black.png');

    }else{
      $('header').removeClass('h_on');
      $('header .gnb a').removeClass('on');
      $('header i.fas').removeClass('on');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
    }
  });

  //header에 마우스 오버시 로고, 내비게이션, i.fas에 서식적용하고
  $('header').hover(function(){
    $(this).addClass('h_on');
    $('header .gnb a').addClass('on');
    $('header i.fas').addClass('on');
    $('header h1 img').attr('src','./images/logo-casper_black.png');

    //header에 마우스 아웃시 로고, 내비게이션, i.fas에 서식제거하기
  },function(){
    $(this).removeClass('h_on');
    $('header .gnb a').removeClass('on');
    $('header i.fas').removeClass('on');
    $('header h1 img').attr('src','./images/logo-casper-white.png');
  });

  


   //아래로 이동하기 버튼을 클릭시 top콘텐츠가 상단으로 올라오게 하기
  $('#next_btn').click(function(){
    $('html, body').animate({scrollTop:$('#top3').offset().top-70},500,'easeOutQuint');
  });

    //내비게이션 클릭시 해당 콘텐츠가 상단으로 올라오게 하기
    let aside_n = $('#m_nav > ul > li')
    let gnb_n = $('#gnb > li')
    aside_n.click(function(){
      let n = $(this).index();

      $('html, body').animate({scrollTop:$('section').eq(n+1).offset().top-70},500);
      return false;
    })
    gnb_n.click(function(){
      let n = $(this).index();

      $('html, body').animate({scrollTop:$('section').eq(n+1).offset().top-70},500);
      return false;
    })
    let swiper = new Swiper('.main_slide', {
    autoplay:{
      delay:4000,
      disableOnInteraction:false,
    },
    navigation:{
      nextEl : ".swiper-button-next",
      prevEl : ".swiper-button-prev",
    },
    pagination : {
      el:".swiper-pagination",
      clickable: true,
    }
  });
});