$(function () {
  if ($(window).width() >= 768) {
    $('.feature>div>div').hover(function () {
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
    }, function () {
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
    $('.feature>div>div').hover(function () {
      $(this).stop();
    }, function () {
      $(this).stop();
    });
  }
});
