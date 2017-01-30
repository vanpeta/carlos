$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>40){
      $('.box1').addClass('navBarOn')
      setTimeout(function () {
        $('nav').removeClass('hidden');
      }, 1000);
    } else {
      $('.box1').removeClass('navBarOn')
      $('nav').addClass('hidden')
    }
  })
})

