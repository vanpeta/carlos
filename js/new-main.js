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
    if ($(window).scrollTop() - (window.innerHeight - (window.innerHeight * 0.38)) > (window.innerHeight * 0.09)) {
      arrow.removeClass('pointing');
      arrow.addClass('stick pic');
      $('.arrow').addClass('hidden');
    }
    if ($(window).scrollTop() - (window.innerHeight - (window.innerHeight * 0.38)) < (window.innerHeight * 0.09)) {
      arrow.addClass('pointing');
      arrow.removeClass('stick pic');
      $('.arrow').removeClass('hidden');
    }
		stickyTop();
  });
});

var pattern = Trianglify({
  width: window.innerWidth,
  height: window.innerHeight
});
$('main').append(pattern.canvas());

var lastWindowHeight = $(window).height();

function checkScroll() {
	var newWindowHeight = $(window).height();
	var windowHeightDif = newWindowHeight - lastWindowHeight;
	lastWindowHeight = newWindowHeight;

	var contentHeight = $('.content-wrapper').height();
	$('body').height(newWindowHeight + contentHeight);
}

function stickyTop() {
	var windowScrollTop = $(window).scrollTop();
	var maxScroll = ($(window).height() - 290);

	if (windowScrollTop >= maxScroll) {
		$('.content-wrapper').css('position', 'fixed').css('top', 290);
	} else {
		$('.content-wrapper').css('position', 'absolute').css('top', '')
	}
	if ($('.content-wrapper').css('position') === 'fixed') {
		$('.content').css('top', -(windowScrollTop - maxScroll));
	} else {
		$('.content').css('top', 0);
	}
}

checkScroll();
stickyTop();
$(window).resize(function () {
	checkScroll();
	stickyTop();
})

$('.meTrigger').click(function() {
    $('.me').toggle();
  });


// $('.navBarElements').hover(function() {
//   $(this).find('.navText').removeClass('hidden');
// }, function() {
//   $(this).find('.navText').addClass('hidden');
// });

//(arrow.offset().top - $(window).scrollTop()) < (window.innerHeight * 0.09)


