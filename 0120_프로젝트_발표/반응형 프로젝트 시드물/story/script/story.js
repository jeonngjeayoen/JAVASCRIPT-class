// 스토리 스크립트

$(document).ready(function(){

//1. 변수
const slide = document.querySelector('.st-icon');
const slide_img = document.querySelectorAll('.st-icon article');
const ctrl_btn = document.querySelectorAll('.st-control-btn > span');

const img_n = slide_img.length; //목록 li의 개수  5
console.log(img_n); //5

const img_w = 100; //li태그의 너비
const m = 4;     //간격
const s_con = 1; //한페이지에 보여질 개수

let count = 0;

// 감싸는 부모요소의 너비를 구하기
// slide.style.width=(img_w+m)*img_n-m+'px';
slide.style.width=500;
//(300+30)*5-30 = 1620

//왼쪽으로 움직이는 슬라이드 함수
function mslide(n){
  slide.style.left=(img_w+m)*-n+'%';
  count = n;
  //count값에 따라 버튼의 색상 변경
  for(let i=0; i<img_n; i++){
    ctrl_btn[i].classList.remove('on');
  }
  ctrl_btn[count].classList.add('on');
}

// 매 3초마다 자동으로 함수를 호출하여 움직이게 한다.
//시간 객체 - setInterval(함수명, 시간)

let Timer = setInterval(function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
},4000);

//현재 count에 같은 ctrn_btn에 on부여, 나머지는 on 제거
for(let i=0; i<ctrl_btn.length; i++){
  ctrl_btn[i].addEventListener('click', function(){
    mslide(i);
  });
}

$('#c-btn').click(function(){
  if($(this).attr('src') === './img/pause_btn.svg'){
  clearInterval(Timer);
  $(this).attr('src', './img/play_btn.svg');
  return false;
}else{
  Timer = setInterval(function(){
    if(count < img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }
  },4000);
  $(this).attr('src', './img/pause_btn.svg');
  return false;
  }
});

});