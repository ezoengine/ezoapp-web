$(function () {
  $('.banner').width() <= 640 ? $('.banner-text').css({
    'top': ($('.banner').height() / 2 - 80) + 'px'
  }) : $('.banner-text').css({
    'top': ($('.banner').height() / 2 - 100) + 'px'
  });

  $(window).resize(function () {
    $('.banner').width() <= 640 ? $('.banner-text').css({
      'top': ($('.banner').height() / 2 - 80) + 'px'
    }) : $('.banner-text').css({
      'top': ($('.banner').height() / 2 - 100) + 'px'
    });
  });


  $(window).scroll(function () {
    $(window).scrollTop() > 0 ? $('.navbar-inverse').not(':animated').animate({
      'padding': '0'
    }).css({
      'background': 'rgba(5,10,15,.85)'
    }) : $('.navbar-inverse').animate({
      'padding': '10px 0'
    }, {
      queue: false
    }).css({
      'background': 'rgba(7,7,7,1)'
    });
  });

});
