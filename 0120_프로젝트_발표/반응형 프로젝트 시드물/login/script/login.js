$(document).ready(function(){

  //1. 이메일에 focus
  $('input.email').focus(); //첫 항목에 focus
  $('input.email').on('touchstart', function(){
    $(this).focus(); //모바일에서 focus가 안되는 경우 터치이벤트 발생시 포커스
  });
  //2. focus일 때 클래스 삽입
  $('.email, .pw').focus(function(){ //input에 focus가 되면
    $(this).parent().addClass('input-focus'); //input의 부모요소에 클래스 삽입
    $(this).parent().siblings().removeClass('input-focus'); //input의 부모요소의 형제요소에 클래스 삭제
  });

  //3. 로그인 버튼 클릭시
  $('.login_btn').click(function(){ //로그인 버튼 클릭시
    let email = $('input.email').val(); //input의 value값을 변수에 저장
    let password = $('input.pw').val(); //input의 value값을 변수에 저장

    if(email == ""){ //이메일이 비어있으면
      $('#message').html(`<p class="wrong">이메일을 입력해주세요.</p>`); //메세지 출력
      $('input.email').focus(); //input에 focus
      return false;
    }else if(password == ""){ //비밀번호가 비어있으면
      $('#message').html(`<p class="wrong">비밀번호를 입력해주세요.</p>`); //메세지 출력
      $('input.pw').focus(); //input에 focus
      return false; //false 반환
    }else{
      let masterId = 'master'; //변수에 마스터ID 저장
      let masterPw = '1234' //변수에 마스터PW 저장

      if(email == masterId && password == masterPw){ //이메일과 비밀번호가 일치하면
            alert('로그인 성공'); //로그인 성공 메세지 출력
          }else{
            $('#message').html(`<p class="wrong">이메일 혹은 비밀번호가 일치하지 않습니다.</p>`); //메세지 출력
            $('input.email, input.pw').val(''); //input 모두 공백으로
            $('input.email').focus(); //input에 focus
            return false;
          }
        }
      });
    });