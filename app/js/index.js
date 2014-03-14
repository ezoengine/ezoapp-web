$(function() {
  'use strict';
  var $window = $(window);
  if ($window.width() >= 768) {
    $('.feature>div>div').hover(function() {
      $(this).stop(false, false).animate({
        'margin-top': '-20px',
        'margin-bottom': '20px'
      }, {
        queue: false
      });
      $(this).find('img').css({
        '-webkit-transform': 'rotate(15deg)',
        'box-shadow': '#000 0 5px 10px'
      });
      $(this).find('.line').css({
        'border-color': '#c00'
      });
    }, function() {
      $(this).stop(false, false).animate({
        'margin-top': '0px',
        'margin-bottom': '0'
      }, {
        queue: false
      }).removeAttr('a');
      $(this).find('img').css({
        '-webkit-transform': 'rotate(0deg)',
        'box-shadow': 'none'
      });
      $(this).find('.line').css({
        'border-color': '#ccc'
      });
    });
  } else {
    $('.feature>div>div').hover(function() {
      $(this).stop();
    }, function() {
      $(this).stop();
    });
  }

  /**
   * 下方四個區塊的連結，如果直接使用 a 會因為 bootstrap 的緣故導致版面錯亂
   */
  $('.gallery>div').eq(0).on('click', function() {
    window.open('tutorial/tutorial_1_basic_grid.html', '_top');
  });
  $('.gallery>div').eq(1).on('click', function() {
    window.open('tutorial/tutorial_6_home_page.html', '_top');
  });
  $('.gallery>div').eq(2).on('click', function() {
    window.open('tutorial/tutorial_js_4_open_data.html', '_top');
  });
  $('.gallery>div').eq(3).on('click', function() {
    window.open('started.html', '_top');
  });
});
