$(document).ready(function(){
    //focus일 때 클래스 삽입
    $('.email, .pw').focus(function(){
    $(this).parent().addClass('input-focus');
    $(this).parent().siblings().removeClass('input-focus');
    });
});