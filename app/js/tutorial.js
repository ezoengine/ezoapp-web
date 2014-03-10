$(function () {
  var tutorialLeftMenuWidth = $('.tutorial-left-menu').width();

  $(window).resize(function () {
    tutorialLeftMenuWidth = $('.tutorial-left-menu').width();
  });

  $(window).scroll(function () {

/**
 * 卷軸往下捲到一定程度，左側選單會固定不動
 */
    if ($(window).width() >= 978) {
      $(window).scrollTop() > 200 ? $('.tutorial-left-menu>ul').css({
        'position': 'fixed',
        'top': '65px',
        'width': tutorialLeftMenuWidth + 'px'
      }) : $('.tutorial-left-menu>ul').css({
        'position': 'relative',
        'top': '0',
        'width': '100%'
      });
    } else {
      $('.tutorial-left-menu>ul').css({
        'position': 'relative',
        'top': '0',
        'width': '100%'
      });
    }

  });

});
