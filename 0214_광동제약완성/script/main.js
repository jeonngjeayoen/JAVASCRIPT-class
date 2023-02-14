$(function(){
  //메인슬라이드
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
  //좌, 우 버튼에 마우스 아웃시 다시 시간을 생성하여 자동으로 움직이게 한다.
  $('#visual_slide .s_btn').mouseleave(function(){
    Timer=setInterval(fadeInOut, 5000);
  });

  //a요소에 서식을 모두 제거하고 선택한 요소에만 .tab_on적용
  $('.tcon ul li').click(function(){
    $(this).find('a').addClass('tab_on').parent().siblings().find('a').removeClass('tab_on');
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

//탭메뉴 콘텐츠 서식
const tab_list = document.querySelectorAll('.tcon ul li a');
const tcon = document.querySelectorAll('.tcon ul li div');

//2. 탭메뉴 첫번째 li태그안에 있는 .cont를 보이게하기
//$('.tcon ul li:first-child .cont').show();
document.querySelector('.cont').style.display='block';

for(let i=0;i<tab_list.length;i++){
  tab_list[i].addEventListener('click', (e)=>{
    e.preventDefault();

    //선택한 li목록의 div태그를 화면에 보이게한다.
    for(let j=0;j<=tcon.length;j++){
      tcon[j].style.display='none'; //모두 숨기기

      tcon[i].style.display="block"; //선택한 li요소의 자손 tcon나오게

      tab_list[j].classList.remove('tab_on');//모두 제거
      tab_list[i].classList.add('tab_on');//선택한 a요소에 서식을 적용.
      console.log(tab_list[j]);
    }
  });
  // 탑버튼 클릭시 상단으로 부드럽게 올라가게 하기
  $('.t_btn').click(function(){
    $('html, body').animate({scrollTop:'0px'},500);
    return false; //a태그요소 #으로 인해 새로고침이 안되게 함.
  })
  // ajax메서드로 json데이터 불러오기
  $('.m_box a').click(function(){
    $(this).hide(); //더보기 버튼은 숨기고

    $.ajax({
      url:'./script/product.json',
      type:'post',
      dataType:'json',
      success:function(result){
        let t='<ul>';
        $.each(result.product,function(i,e){
          t+="<li><span><span>TV광고</span><span>2023</span><img src='./images/"+e.path+"' alt='"+e.tit+"'></span></li>";
        });
        t+="</ul>";

        //데이터를 t변수에 담아서 list박스에 내용을 출력한다.
        $('#list').html(t);
      }
    });
    return false;
  });

}
  //이벤트 슬라이드

const slide = document.querySelector('.s_wrap');
const slide_img = document.querySelectorAll('.s_wrap .slide-item');
const prev_btn = document.querySelector('.fa-angle-left');
const next_btn = document.querySelector('.fa-angle-right');
const ctrl_btn = document.querySelectorAll('.contRol_btn > span');
const img_n = slide_img.length;

const img_w = 1200;
const m = 0; 
const s_con = 1;
let count = 0;

function mslide(n){
  slide.style.left=(img_w+m)*-n+'px';
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
// 자바스크립트로 윈도우 스크롤값 구하기
window.addEventListener('scroll', ()=>{
  console.log(window.scrollY);
  let ws = window.scrollY;
  if(ws>=1500){
    document.querySelector('.t_btn').style.display='block';
  }else{
    document.querySelector('.t_btn').style.display='none';
  }
});
  
