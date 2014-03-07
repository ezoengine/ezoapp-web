$(function () {

/**
 * 判斷banner的img是否已載入，才能判斷文字初始位置
 */
  if($('.banner img')[0]){
    $('.banner').width() <= 640 ? $('.banner-text').css({
      'top': ($('.banner').height() / 2 - 80) + 'px'
    }) : $('.banner-text').css({
      'top': ($('.banner').height() / 2 - 100) + 'px'
    });
    $('.banner-text').fadeIn(1000);
  }

  $(window).resize(function () {
    $('.banner').width() <= 640 ? $('.banner-text').css({
      'top': ($('.banner').height() / 2 - 80) + 'px'
    }) : $('.banner-text').css({
      'top': ($('.banner').height() / 2 - 100) + 'px'
    });
  });
});
