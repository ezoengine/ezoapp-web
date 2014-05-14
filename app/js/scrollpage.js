$(function() {
  'use strict';
  var $window = $(window),
  windowHeight, menuWidth, menuHeight, menuTop, scrollNum, menuHeight;

  $('.left-menu>ul').css({
    'height': $window.height() - 90 + 'px'
  });
  menuHeight = $('.left-menu>ul').height();
  menuWidth = $('.left-menu').width();

  $window.resize(function() {
    windowHeight = $window.height();
    menuWidth = $('.left-menu').width();
    $('.left-menu>ul').css({
      'height': $window.height() - 90 + 'px'
    });
    $('.left-menu>ul').css({
      'width': menuWidth + 'px'
    });
    menuHeight = $('.left-menu>ul').height();
  });

  $window.scroll(function() {
    /**
     * 卷軸往下捲到一定程度，左側選單會固定不動
     */
    scrollNum = $(document).height() - menuHeight - 90;
    menuTop = $('.left-menu>ul').offset().top;

    /* 卷軸往下捲到一定程度，左側選單會固定不動 */
    if ($window.width() >= 978) {
      if ($window.scrollTop() > 200 && $window.scrollTop() < scrollNum) {
        $('.left-menu>ul').css({
          'position': 'fixed',
          'top': '65px',
          'width': menuWidth + 'px',
          'height': $window.height() - 90 + 'px'
        });
      }
      if ($window.scrollTop() <= 200) {
        $('.left-menu>ul').css({
          'position': 'relative',
          'top': '0',
          'width': '100%',
          'height': $window.height() - 90 + 'px'
        });
      }
      if ($window.scrollTop() >= (scrollNum - 60)) {
        $('.left-menu>ul').css({
          'position': 'fixed',
          'top': '65px',
          'height': (menuHeight + $(document).height() - $window.scrollTop() - menuHeight - 170) + 'px',
          'width': menuWidth + 'px'
        });
      }
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
    var leftMenuLength = $('.left-menu-1').length - 1;
    if ($window.scrollTop() >= 0 && $window.scrollTop() < ($('.right-content-1').eq(1).offset().top - 70)) {
      $('.left-menu>ul>li').removeClass('active');
      $('.left-menu-1').eq(0).addClass('active');
      $('.left-menu-1 ul li').removeClass('active');
    }
    for (var leftMenuNum = 1; leftMenuNum < leftMenuLength; leftMenuNum++) {
      if ($window.scrollTop() >= ($('.right-content-1').eq(leftMenuNum).offset().top - 70) && $window.scrollTop() < ($('.right-content-1').eq(leftMenuNum+1).offset().top - 70)) {
        $('.left-menu>ul>li').removeClass('active');
        $('.left-menu-1').eq(leftMenuNum).addClass('active');
        $('.left-menu-1 ul li').removeClass('active');
      }
    }
    if ($window.scrollTop() >= ($('.right-content-1').eq(leftMenuNum).offset().top - 70)) {
      $('.left-menu>ul>li').removeClass('active');
      $('.left-menu ul li.left-menu-1').eq(leftMenuNum).addClass('active');
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
      if ($window.scrollTop() >= ($('.right-content-1-1').eq(i).offset().top - 70) && $window.scrollTop() < ($('.right-content-1-1').eq(i + 1).offset().top - 70)) {
        $('.left-menu-1 ul li').removeClass('active');
        $('.left-menu-1 ul li').eq(i).addClass('active');
      }
    }
    if ($window.scrollTop() >= ($('.right-content-1-1').eq(rightSonNum - 1).offset().top - 70) && $window.scrollTop() < ($('.right-content-1').eq(1).offset().top - 70)) {
      $('.left-menu-1 ul li').removeClass('active');
      $('.left-menu-1 ul li').eq(rightSonNum - 1).addClass('active');
    }
  }

  /**
   * 選單點選後跳到適當的位置
   */

  $('.left-menu>ul>li>a').on('click', function() {
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

  $('.left-menu ul li ul li a').on('click', function() {
    var menuIndex1 = $(this).parent('li').index();
    $('html,body').not(':animated').animate({
      'scrollTop': ($('.right-content-1-1').eq(menuIndex1).offset().top - 68) + 'px'
    }, 900);
  });

});
