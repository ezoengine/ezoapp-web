$(function () {
  var leftMenuWidth = $('.left-menu').width();

  $(window).resize(function (event) {
    leftMenuWidth = $('.left-menu').width();
  });


  $(window).scroll(function (event) {

    if ($(window).width() >= 1012) {
      $(window).scrollTop() > 200 ? $('.left-menu ul').css({
        'position': 'fixed',
        'top': '65px',
        'width': leftMenuWidth + 'px'
      }) : $('.left-menu ul').css({
        'position': 'relative',
        'top': '0',
        'width': '100%'
      });
    } else {
      $('.left-menu ul').css({
        'position': 'relative',
        'top': '0',
        'width': '100%'
      });
    }

    if ($(window).scrollTop() >= 0 && $(window).scrollTop() < ($('#right-2').offset().top - 70)) {
      $('.left-menu ul li').removeClass('actived');
      $('.left-menu ul li').eq(0).addClass('actived');
    }
    if ($(window).scrollTop() >= ($('#right-2').offset().top - 70) && $(window).scrollTop() < ($('#right-3').offset().top - 70)) {
      $('.left-menu ul li').removeClass('actived');
      $('.left-menu ul li').eq(1).addClass('actived');
    }
    if ($(window).scrollTop() >= ($('#right-3').offset().top - 70) && $(window).scrollTop() < ($('#right-4').offset().top - 70)) {
      $('.left-menu ul li').removeClass('actived');
      $('.left-menu ul li').eq(2).addClass('actived');
    }
    if ($(window).scrollTop() >= ($('#right-4').offset().top - 70)) {
      $('.left-menu ul li').removeClass('actived');
      $('.left-menu ul li').eq(3).addClass('actived');
    }

  });

  $('.left-menu ul li').on('click', function () {
    var menuIndex = $(this).index() + 1;
    menuIndex > 1 ? $("html,body").not(':animated').animate({
      "scrollTop": ($('#right-' + menuIndex).offset().top - 68) + 'px'
    }, 900) : $("html,body").not(':animated').animate({
      "scrollTop": '0'
    }, 900);
  });


});
