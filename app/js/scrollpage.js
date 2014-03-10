$(function () {
  var leftMenuWidth = $('.left-menu').width();

  $(window).resize(function () {
    leftMenuWidth = $('.left-menu').width();
  });

  $(window).scroll(function () {

/**
 * 卷軸往下捲到一定程度，左側選單會固定不動
 */
    if ($(window).width() >= 978) {
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

/*
 *  判斷卷軸與第一層選單的連動 
 */
    if ($(window).scrollTop() >= 0 && $(window).scrollTop() < ($('.right-content-1').eq(1).offset().top - 70)) {
      $('.left-menu>ul>li').removeClass('active');
      $('.left-menu-1').eq(0).addClass('active');
      $('.left-menu-1 ul li').removeClass('active');
    }
    if ($(window).scrollTop() >= ($('.right-content-1').eq(1).offset().top - 70) && $(window).scrollTop() < ($('.right-content-1').eq(2).offset().top - 70)) {
      $('.left-menu>ul>li').removeClass('active');
      $('.left-menu-1').eq(1).addClass('active');
      $('.left-menu-1 ul li').removeClass('active');
    }
    if ($(window).scrollTop() >= ($('.right-content-1').eq(2).offset().top - 70) && $(window).scrollTop() < ($('.right-content-1').eq(3).offset().top - 70)) {
      $('.left-menu>ul>li').removeClass('active');
      $('.left-menu ul li.left-menu-1').eq(2).addClass('active');
    }
    if ($(window).scrollTop() >= ($('.right-content-1').eq(3).offset().top - 70)) {
      $('.left-menu>ul>li').removeClass('active');
      $('.left-menu ul li.left-menu-1').eq(3).addClass('active');
    }


/*
 *  判斷卷軸與第二層選單的連動 
 */
    if ($('.right-content-1-1')[0]) {
      leftMenuGetSon1($('.right-content-1-1').length);
    }

  });

/*
 *  第二層選單的連動function 
 */
  function leftMenuGetSon1(rightSonNum) {
    for (var i = 0; i < rightSonNum - 1; i++) {
      if ($(window).scrollTop() >= ($('.right-content-1-1').eq(i).offset().top - 70) && $(window).scrollTop() < ($('.right-content-1-1').eq(i + 1).offset().top - 70)) {
        $('.left-menu-1 ul li').removeClass('active');
        $('.left-menu-1 ul li').eq(i).addClass('active');
      }
    }
    if ($(window).scrollTop() >= ($('.right-content-1-1').eq(rightSonNum - 1).offset().top - 70) && $(window).scrollTop() < ($('.right-content-1').eq(1).offset().top - 70)) {
      $('.left-menu-1 ul li').removeClass('active');
      $('.left-menu-1 ul li').eq(rightSonNum - 1).addClass('active');
    }
  }

/**
 * 選單點選後跳到適當的位置
 */

  $('.left-menu>ul>li>a').on('click', function () {
    var menuIndex = $(this).parent('li').index();
    if (menuIndex > 0) {
      $('html,body').not(':animated').animate({
        'scrollTop': ($('.right-content-1').eq(menuIndex).offset().top - 68) + 'px'
      }, 900);
    } else {
      $('html,body').not(':animated').animate({
        'scrollTop': '0'
      }, 900);
    }
  });

  $('.left-menu ul li ul li a').on('click', function () {
    var menuIndex1 = $(this).parent('li').index();
    $('html,body').not(':animated').animate({
      'scrollTop': ($('.right-content-1-1').eq(menuIndex1).offset().top - 68) + 'px'
    }, 900);
  });


});
