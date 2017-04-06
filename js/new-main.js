$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>40){
      $('.box1').addClass('navBarOn');
      $('nav').removeClass('hidden');
    } else {
      $('.box1').removeClass('navBarOn');
      $('nav').addClass('hidden');
    }
    var arrow = $('.arrow-container');
    if ((arrow.offset().top - $(window).scrollTop()) < (window.innerHeight * 0.09)) {
      arrow.removeClass('pointing');
      arrow.addClass('stick pic');
      $('.arrow').addClass('hidden');
    }
    if ((arrow.offset().top - $(window).scrollTop()) > (window.innerHeight * 0.09)) {
      arrow.addClass('pointing');
      arrow.removeClass('stick pic');
      $('.arrow').removeClass('hidden');
    }

    console.log(arrow.offset().top - $(window).scrollTop())
  });
});

var pattern = Trianglify({
  width: window.innerWidth,
  height: window.innerHeight
});
$('main').append(pattern.canvas());

// $('.navBarElements').hover(function() {
//   $(this).find('.navText').removeClass('hidden');
// }, function() {
//   $(this).find('.navText').addClass('hidden');
// });




