$(function(){
  const slide = document.querySelector('.slide');
  const slide_img = document.querySelectorAll('.slide li');
  const prev_btn = document.getElementById('left_btn');
  const next_btn = document.getElementById('right_btn');
  const ctrl_btn = document.querySelectorAll('.control_btn > span');
  const img_n = slide_img.length;

  const img_w = 1200;
  const m = 0; 
  const s_con = 1;
  let count = 0;

  function mslide(n){
    slide.style.left=(img_w+m)*-n+'px';
    count = n;
    for(let j=0; j<ctrl_btn.length; j++){
      ctrl_btn[j].classList.remove('on');
    }
    ctrl_btn[n].classList.add('on');
  }

  prev_btn.addEventListener('click', function(){ 
    if(count > 0){
      mslide(count-1);
    }else{
      mslide(img_n-s_con);
    }
    clearInterval(Timer);
  });

  next_btn.addEventListener('click', function(){
    if(count < img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }
    clearInterval(Timer);
  });

  for(let i=0; i<ctrl_btn.length; i++){
    ctrl_btn[i].addEventListener('click', function(){
      mslide(i);
      for(let j=0; j<ctrl_btn.length; j++){
        ctrl_btn[j].classList.remove('on');
      }
      ctrl_btn[i].classList.add('on');
    });
  }
    let Timer = setInterval(function(){
      if(count < img_n-s_con){
        mslide(count+1);
      }else{
        mslide(0);
      }}, 3000);

    slide.addEventListener('mouseenter', function(){
      clearInterval(Timer);});

    slide.addEventListener('mouseleave', function(){
      Timer = setInterval(function(){
        if(count < img_n-s_con){
          mslide(count+1);
        }else{
          mslide(0);
        }} , 3000);
      });


})
