$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>40){
      $('.box1').addClass('navBarOn')
      $('nav').removeClass('hidden');
    } else {
      $('.box1').removeClass('navBarOn');
      $('nav').addClass('hidden');
    }
  });
});
var pattern = Trianglify({
  width: window.innerWidth,
  height: window.innerHeight
});
$('main').append(pattern.canvas());


