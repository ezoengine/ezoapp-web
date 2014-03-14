$(function() {
  'use strict';
  /**
   * 判斷banner的img是否已載入，才能判斷文字初始位置
   */
  var $banner = $('.banner'),
    $bannertext = $('.banner-text');

  if ($('.banner img')[0]) {
    $banner.width() <= 640 ? $bannertext.css({
      'top': ($banner.height() / 2 - 80) + 'px'
    }) : $bannertext.css({
      'top': ($banner.height() / 2 - 100) + 'px'
    });
    $bannertext.fadeIn(1000);
  }

  $(window).resize(function() {
    $banner.width() <= 640 ? $bannertext.css({
      'top': ($banner.height() / 2 - 80) + 'px'
    }) : $bannertext.css({
      'top': ($banner.height() / 2 - 100) + 'px'
    });
  });

});
