$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>65){
            $("#navbar").css({transition: "background-color 1s", "background-color": "#ffffff"})
            $("#name, #about, #portfolo, #contact").css({transition: "color 1s", "color": "#e64a19"})
            $("#name").css({transition: "font-size 1s", "font-size": "25px"})
        } else {
          $("#navbar").css({transition: "background-color 1s", "background-color":"transparent"})
          $("#name, #about, #portfolo, #contact").css({transition: "color 1s", "color": "#ffffff"})
          $("#name").css({transition: "font-size 1s", "font-size": "40px"});
        }
    })
  $('.projects').hover(
    function(){
    $(this).find('img').css({'opacity': '0.3'})
    $(this).find('span').show();
    },
    function(){
      $(this).find('img').css({'opacity': '1.0'})
      $(this).find('span').hide();
    })
})


