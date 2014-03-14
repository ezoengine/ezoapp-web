(function (j,w) {
  var tutorialLeftMenuWidth = $('.tutorial-left-menu').width();

  $(w).resize(function () {
    tutorialLeftMenuWidth = $('.tutorial-left-menu').width();
  });

  $(w).scroll(function () {

/**
 * 卷軸往下捲到一定程度，左側選單會固定不動
 */
    if ($(w).width() >= 978) {
      $(w).scrollTop() > 200 ? $('.tutorial-left-menu>ul').css({
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

})(jQuery,window);
