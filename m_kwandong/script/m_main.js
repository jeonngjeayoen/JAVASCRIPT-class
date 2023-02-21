$(function(){
  //1. 토글버튼 변수
  let t_btn = $('.toggle');
  let gnb = $('.gnb > ul > li > a');
  let s_Btn = $('.seArch');
  let s_box = $('.search_box');

  t_btn.click(function(){
    $(this).find('span').first().toggleClass('act01');
    $(this).find('span').eq(1).toggleClass('act02');
    $(this).find('span').last().toggleClass('act03');
    $(s_box).hide();
    $('.gnb').toggle();
    $('header').toggleClass('h_on');
    $('header').removeClass('s_on');
  });
  gnb.click(function(){
    $(this).next().slideToggle().parent().siblings().find('.sub').slideUp();
    $(this).find('i.fas').toggleClass('a_on').parents().siblings().find('i.fas').removeClass('a_on');
    return false;
  });
  s_Btn.click(function(){
    $(s_box).toggle();
    $(t_btn).find('span').first().removeClass('act01');
    $(t_btn).find('span').eq(1).removeClass('act02');
    $(t_btn).find('span').last().removeClass('act03');
    $('.gnb').hide();
    $('header').toggleClass('s_on');
    $('header').removeClass('h_on');
  })
  let m_img = $('#visual_slide div');
  const l_btn = $('#visual_slide .s_btn li:first-child');
  const r_btn = $('#visual_slide .s_btn li:last-child');
  const c_btn = $('#visual_slide .ctrl_btn li');

  let n = c_btn.index();

  //3초마다 반복호출되는 함수 작성
  function fadeInOut(){
    //console.log('내용 반복하기');
    m_img.stop().fadeOut();
    c_btn.removeClass('on');

    if(n==3){
      n=0;
    }else{
      n++;
    }
    c_btn.eq(n).addClass('on');
    m_img.eq(n).stop().fadeIn();
  }
  //좌측버튼 클릭시 실행되는 함수
  function fadeInOut2(){
    //console.log('내용 반복하기');
    m_img.stop().fadeOut();
    c_btn.removeClass('on');

    if(n==0){
      n=3;
    }else{
      n--;
    }
    c_btn.eq(n).addClass('on');
    m_img.eq(n).stop().fadeIn();
  }

  //시간객체를 사용하여 함수호출 setInterval(함수명, 시간);
  let Timer = setInterval(fadeInOut, 5000);

  // 콘트롤 버튼 클릭시 시간을 제거하고
  c_btn.hover(function(){
    clearInterval(Timer);
  },function(){  //마우스 아웃시 시간을 다시 생성하여 움직이게 한다.
    clearInterval(Timer);
    Timer = setInterval(fadeInOut, 5000);
  });

// 콘트롤 버튼 클릭시 해당 슬라이드 보이게하기
  c_btn.click(function(){
    n = $(this).index(); //클릭한 콘트롤 목록의 인덱스값을 다시 구하고
    m_img.fadeOut(); //보이는 이미지 모두 숨기고
    c_btn.removeClass('on'); //콘트롤버튼 서식을 모두제거
    m_img.eq(n).fadeIn(); //인덱스번호에 맞는 슬라이드가 보이게한다.
    c_btn.eq(n).addClass('on'); //해당하는 콘트롤버튼에 서식적용
  });

  // 좌측, 우측 방향버튼 클릭시 시간을 제거하고  해당 함수를 호출한다.
  l_btn.click(function(){
    clearInterval(Timer);
    fadeInOut2();
  });
  r_btn.click(function(){
    clearInterval(Timer);
    fadeInOut();
  });
    // 탭콘텐츠 변수선언
    let t_mnu = $('.tcon > ul > li > a');

    t_mnu.click(function(){
      // a태그에 적용되는 배경서식
      $(this).toggleClass('tab_on').parent().siblings().find('a').removeClass('tab_on');
  
      //a태그 자손 i.fas에 적용되는 서식
      $(this).find('i.fas').toggleClass('a01_on').parent().parent().siblings().find('i.fas').removeClass('a01_on');
  
      //a태그의 자손 .cont에 적용되는 서식
      $(this).next().slideToggle().parent().siblings().find('.cont').slideUp();
      return false;
    });
    $('.m_box a').click(function(){
      $(this).hide(); //더보기 버튼은 숨기고
  
      $.ajax({
        url:'./script/product.json',
        type:'post',
        dataType:'json',
        success:function(result){
          let t='<article>';
          $.each(result.product,function(i,e){
            t+="<figure><img src='./images/"+e.path+"' alt='"+e.tit+"'><figcaption><h6>TV광고</h6><p>2023</p></figcaption></figure>";
          });
          t+="</article>";
          //데이터를 t변수에 담아서 list박스에 내용을 출력한다.
          $('#list').html(t);
        }
      });
      return false;
    });
});

// 뉴스서식
var chAnge = $('#new .news label img');
	$(chAnge).on('click', function(){
		$(chAnge).each(function(){
			$(this).attr('src', $(this).attr('src').replace('_on.png', '_off.png'));
		});
    //탭메뉴
		$(this).attr('src', $(this).attr('src').replace('_off.png', '_on.png'));
	});
    //이벤트 슬라이드

const slide = document.querySelector('.s_wrap');
const slide_img = document.querySelectorAll('.s_wrap .slide-item');
const prev_btn = document.querySelector('.fa-angle-left');
const next_btn = document.querySelector('.fa-angle-right');
const ctrl_btn = document.querySelectorAll('.contRol_btn > span');
const img_n = slide_img.length;

const img_w = 100;
const m = 0; 
const s_con = 1;
let count = 0;

function mslide(n){
  slide.style.left=(img_w+m)*-n+'%';
  count = n;
  for(let j=0; j<ctrl_btn.length; j++){
    ctrl_btn[j].classList.remove('On');
  }
  ctrl_btn[n].classList.add('On');
}

prev_btn.addEventListener('click', function(){ 
  if(count > 0){
    mslide(count-1);
  }else{
    mslide(img_n-s_con);
  }
  clearInterval(Timer2);
});

next_btn.addEventListener('click', function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
  clearInterval(Timer2);
});

for(let i=0; i<ctrl_btn.length; i++){
  ctrl_btn[i].addEventListener('click', function(){
    mslide(i);
    for(let j=0; j<ctrl_btn.length; j++){
      ctrl_btn[j].classList.remove('On');
    }
    ctrl_btn[i].classList.add('On');
  });
}
  let Timer2 = setInterval(function(){
    if(count < img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }}, 3000);

  slide.addEventListener('mouseenter', function(){
    clearInterval(Timer2);});

  slide.addEventListener('mouseleave', function(){
    Timer2 = setInterval(function(){
      if(count < img_n-s_con){
        mslide(count+1);
      }else{
        mslide(0);
      }} , 3000);
    });
    window.addEventListener('scroll', ()=>{
      console.log(window.scrollY);
      let ws = window.scrollY;
      if(ws>=1500){
        document.querySelector('.t_btn').style.display='block';
      }else{
        document.querySelector('.t_btn').style.display='none';
      }
    });