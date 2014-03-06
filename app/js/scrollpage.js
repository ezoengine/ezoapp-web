$(function () {
  var leftMenuWidth = $('.left-menu').width();

  $(window).resize(function (event) {
    leftMenuWidth = $('.left-menu').width();
  });

  $(window).scroll(function (event) {

    if ($(window).width() >= 1012) {
      $(window).scrollTop() > 200 ? $('.left-menu>ul').css({
        'position': 'fixed',
        'top': '65px',
        'width': leftMenuWidth + 'px'
      }) : $('.left-menu>ul').css({
        'position': 'relative',
        'top': '0',
        'width': '100%'
      });
    } else {
      $('.left-menu>ul').css({
        'position': 'relative',
        'top': '0',
        'width': '100%'
      });
    }

    if ($(window).scrollTop() >= 0 && $(window).scrollTop() < ($('#right-2').offset().top - 70)) {
      $('.left-menu>ul>li').removeClass('actived');
      $('.left-menu ul li#left-menu-1').addClass('actived');
    }
    if ($(window).scrollTop() >= ($('#right-2').offset().top - 70) && $(window).scrollTop() < ($('#right-3').offset().top - 70)) {
      $('.left-menu>ul>li').removeClass('actived');
      $('.left-menu ul li#left-menu-2').addClass('actived');
      $('.left-menu ul li ul li').removeClass('actived');
    }
    if ($(window).scrollTop() >= ($('#right-3').offset().top - 70) && $(window).scrollTop() < ($('#right-4').offset().top - 70)) {
      $('.left-menu>ul>li').removeClass('actived');
      $('.left-menu ul li#left-menu-3').addClass('actived');
    }
    if ($(window).scrollTop() >= ($('#right-4').offset().top - 70)) {
      $('.left-menu>ul>li').removeClass('actived');
      $('.left-menu ul li#left-menu-4').addClass('actived');
    }



    if ($(window).scrollTop() >= 0 && $(window).scrollTop() < ($('#right-1-2').offset().top - 70)) {
      $('.left-menu ul li ul li').removeClass('actived');
      $('.left-menu ul li ul li').eq(0).addClass('actived');
    }
    if ($(window).scrollTop() >= ($('#right-1-2').offset().top - 70) && $(window).scrollTop() < ($('#right-1-3').offset().top - 70)) {
      $('.left-menu ul li ul li').removeClass('actived');
      $('.left-menu ul li ul li').eq(1).addClass('actived');
    }
    if ($(window).scrollTop() >= ($('#right-1-3').offset().top - 70) && $(window).scrollTop() < ($('#right-1-4').offset().top - 70)) {
      $('.left-menu ul li ul li').removeClass('actived');
      $('.left-menu ul li ul li').eq(2).addClass('actived');
    }
    if ($(window).scrollTop() >= ($('#right-1-4').offset().top - 70) && $(window).scrollTop() < ($('#right-1-5').offset().top - 70)) {
      $('.left-menu ul li ul li').removeClass('actived');
      $('.left-menu ul li ul li').eq(3).addClass('actived');
    }
    if ($(window).scrollTop() >= ($('#right-1-5').offset().top - 70) && $(window).scrollTop() < ($('#right-1-6').offset().top - 70)) {
      $('.left-menu ul li ul li').removeClass('actived');
      $('.left-menu ul li ul li').eq(4).addClass('actived');
    }
    if ($(window).scrollTop() >= ($('#right-1-6').offset().top - 70) && $(window).scrollTop() < ($('#right-2').offset().top - 70)) {
      $('.left-menu ul li ul li').removeClass('actived');
      $('.left-menu ul li ul li').eq(5).addClass('actived');
    }

  });

  $('.left-menu>ul>li>a').on('click', function () {
    var menuIndex = $(this).parent('li').index() + 1;
    menuIndex > 1 ? $("html,body").not(':animated').animate({
      "scrollTop": ($('#right-' + menuIndex).offset().top - 68) + 'px'
    }, 900) : $("html,body").not(':animated').animate({
      "scrollTop": '0'
    }, 900);
  });

  $('.left-menu ul li ul li a').on('click', function () {
    var menuIndex1 = $(this).parent('li').index() + 1;
    console.log(menuIndex1)
    $("html,body").not(':animated').animate({
      "scrollTop": ($('#right-1-' + menuIndex1).offset().top - 68) + 'px'
    }, 900);
  });


});
