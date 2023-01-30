let n = 1; //초기값
const img_list = document.querySelectorAll('.lnb > li');
const left_btn = document.querySelector('i.fa-arrow-left','i.fa-angle-left');
const right_btn = document.querySelector('i.fa-arrow-right','i.fa-angle-right');
const left_Btn = document.querySelector('i.fa-angle-left');
const right_Btn = document.querySelector('i.fa-angle-right');
const Li = document.querySelectorAll('.lnb > li');

document.getElementById('page').innerHTML=n + ' / 16건';

img_list.forEach((el, index) => {
  el.onclick=()=>{
    console.log(index);
    n = index+1; //인덱스번호에 1을 더하여 1부터 숫자가 나오게... 

    imgChange();
  }
});

left_btn.addEventListener('click', function(){
  if(n == 1){
    n=16;
  }else{
    n--;
  }
  console.log(n); //확인한다.
  imgChange();
});

right_btn.addEventListener('click', function(){
  if(n == 16){
    n=1;
  }else{
    n++;
  }
  console.log(n); //확인한다.
  imgChange();
});
left_Btn.addEventListener('click', function(){
  if(n == 1){
    n=16;
  }else{
    n--;
  }
  console.log(n); //확인한다.
  imgChange();
});

right_Btn.addEventListener('click', function(){
  if(n == 16){
    n=1;
  }else{
    n++;
  }
  console.log(n); //확인한다.
  imgChange();
});
function imgChange(){
  for(let j=0;j<Li.length;j++){
    Li[j].style.border='none';
  }
  document.getElementById('page').innerHTML= n + '/16건';
  document.getElementById('photo').src='./img01/movie_image'+n+'.jpg';
  Li[n-1].style.border='2px solid red';
};

