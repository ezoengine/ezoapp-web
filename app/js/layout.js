$(function() {
  'use strict';
  var $window = $(window);
  $('body').append(
    '<div id="gotoTop" title="back to top"></div>'
  );
  $('#gotoTop').on('click', function() {
    $('html,body').not(':animated').animate({
      'scrollTop': '0'
    }, 900);
  });

  var webUrl, twUrl, cnUrl, enUrl,
    nowUrl = location.href,
    urlParts = nowUrl.split('/'),
    fileName = urlParts.pop() || 'index.html';
  if (urlParts[3] == 'app') {
    webUrl = urlParts[0] + '//' + urlParts[2] + '/app/';
    _langUrl(webUrl, fileName);
  } else {
    webUrl = urlParts[0] + '//' + urlParts[2] + '/';
    _langUrl(webUrl, fileName);
  };

  /*  語系判斷與切換按鈕  */
  if (nowUrl.indexOf('en-us') == -1 && nowUrl.indexOf('zh-cn') == -1) {
    _langLayout('zh-tw');
    _check_cookie('zh-tw');
  }
  if (nowUrl.indexOf('zh-cn') != -1) {
    _langLayout('zh-cn');
    _check_cookie('zh-cn');
  }
  if (nowUrl.indexOf('en-us') != -1) {
    _langLayout('en-us');
    _check_cookie('en-us');
  }

  /* 載入 layout 之後，判斷是點選切換語系按鈕 */

  function _langBtn() {
    if ($('.language-tw')) {
      $('.language-tw a').attr('href', twUrl).on('click', function() {
        $.cookie('ezoapp_web_cookie', 'zh-tw', {
          path: '/'
        });
      });
    }
    if ($('.language-en')) {
      $('.language-en a').attr('href', enUrl).on('click', function() {
        $.cookie('ezoapp_web_cookie', 'en-us', {
          path: '/'
        });
      });
    }
    if ($('.language-cn')) {
      $('.language-cn a').attr('href', cnUrl).on('click', function() {
        $.cookie('ezoapp_web_cookie', 'zh-cn', {
          path: '/'
        });
      });
    }
  }

  /* 初始化網址 */

  function _langUrl(url1, url2) {
    twUrl = url1 + url2;
    cnUrl = url1 + 'zh-cn/' + url2;
    enUrl = url1 + 'en-us/' + url2;
  }

  /* 判斷不同語系網站，載入不同的 layout */

  function _langLayout(langCheck1) {
    if (langCheck1 == 'en-us') {
      fn_en();
    } else if (langCheck1 == 'zh-cn') {
      fn_zh_cn();
    } else {
      fn_zh_tw();
    }
  }

  /* 進入網站時，判斷瀏覽器語系，記錄cookie */

  function _check_cookie(langCheck2) {
    if (!$.cookie('ezoapp_web_cookie')) {
      var lang = window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage;
      if (lang.toLowerCase().indexOf('zh-tw') != -1) {
        $.cookie('ezoapp_web_cookie', 'zh-tw', {
          path: '/'
        });
        window.open(twUrl, '_self');
      }
      if (lang.toLowerCase().indexOf('zh-cn') != -1) {
        $.cookie('ezoapp_web_cookie', 'zh-cn', {
          path: '/'
        });
        window.open(cnUrl, '_self');
      }
      if (lang.toLowerCase().indexOf('en-us') != -1) {
        $.cookie('ezoapp_web_cookie', 'en-us', {
          path: '/'
        });
        window.open(enUrl, '_self');
      }
      if (lang.toLowerCase().indexOf('zh-tw') == -1 && lang.toLowerCase().indexOf('zh-cn') == -1 && lang.toLowerCase().indexOf('en-us') == -1) {
        $.cookie('ezoapp_web_cookie', 'en-us', {
          path: '/'
        });
        window.open(enUrl, '_self');
      }
    } else {
      if ($.cookie('ezoapp_web_cookie') == 'zh-tw' && langCheck2 != 'zh-tw') {
        $.cookie('ezoapp_web_cookie', 'zh-tw', {
          path: '/'
        });
        window.open(twUrl, '_self');
      }
      if ($.cookie('ezoapp_web_cookie') == 'zh-cn' && langCheck2 != 'zh-cn') {
        $.cookie('ezoapp_web_cookie', 'zh-cn', {
          path: '/'
        });
        window.open(cnUrl, '_self');
      }
      if ($.cookie('ezoapp_web_cookie') == 'en-us' && langCheck2 != 'en-us') {
        $.cookie('ezoapp_web_cookie', 'en-us', {
          path: '/'
        });
        window.open(enUrl, '_self');
      }
    }
  }

  /* 判斷頁面讓主選單變色 */
  $('.top-menu li[page=' + $('body').attr('page') + ']').addClass('active').find('a').removeAttr('href');

  /* 版權宣告 */
  $('.copyright').append(
    '<div>© InfoChamp Systems Corporation 2014</div>'
  );

  /* 頁面高度不夠時，footer仍然維持在視窗底部 */
  if ($('.footer').offset().top < ($window.height() - 100)) {
    $('.footer').css({
      'margin-top': ($window.height() - 100 - $('.footer').offset().top) + 'px'
    });
  }

  /* 捲動時上方選單高度與背景色變化 */
  $window.scroll(function() {
    var gotoTopPosition = $('.footer').offset().top - $window.scrollTop();
    if ($window.scrollTop() > 0) {
      $('.navbar-inverse').not(':animated').animate({
        'padding': '0'
      }).css({
        'background': 'rgba(5,10,15,.85)'
      });
      if (gotoTopPosition < $window.height()) {
        $('#gotoTop').css({
          'bottom': ($window.height() - gotoTopPosition) + 'px'
        });
      } else {
        $('#gotoTop').css({
          'bottom': '0'
        });
      }
      $window.width() > 992 ? $('#gotoTop').stop(true, false).fadeIn(200) : $('#gotoTop').hide();
    } else {
      $('.navbar-inverse').animate({
        'padding': '10px 0'
      }, {
        queue: false
      }).css({
        'background': 'rgba(7,7,7,1)'
      });
      $window.width() > 992 ? $('#gotoTop').stop(true, false).fadeOut(200) : $('#gotoTop').hide();
    }
  });

  /* google analytics */
  $('body').append(
    "<script>\
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\
    ga('create', 'UA-28403683-1', 'ezoui.com');\
    ga('send', 'pageview');\
    </script>"
  );

  /* 繁體中文 */

  function fn_zh_tw() {
    $('head').append(
      '<link rel="icon" href="favicon.ico" type="image/x-icon"/>' +
      '<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>'
    );

    /* 上方主選單 */
    $('.top-menu').append(
      '<li page="index"><a href="index.html">首頁</a></li>' +
      '<li page="play"><a href="http://jqmdesigner.appspot.com" target="_blank">立刻體驗</a></li>' +
      '<li page="started"><a href="started.html">基本介紹</a></li>' +
      '<li page="tutorial"><a href="tutorial_1_basic_grid.html">教學實作</a></li>' +
      '<li page="aboutus"><a href="aboutus.html">關於我們</a></li>' +
      '<li page="blog"><a href="http://ezoui.wordpress.com/" target="_blank">Blog</a></li>' +
      '<li class="language"><a>語系切換</a>' +
      '<ul>' +
      '<li class="language-cn"><a>简体中文</a></li>' +
      '<li class="language-en"><a>English</a></li>' +
      '</ul>' +
      '</li>' +
      '<li class="language-cn"><a>简体中文</a></li>' +
      '<li class="language-en"><a>English</a></li>'
    );

    $('.navbar-header').append(
      '<a class="navbar-brand" href="http://www.ezoui.com" title="EZoApp - 快速開發行動 App 的最佳工具"><img src="img/logo.png" style="width:27px; margin:-3px 5px 0 0; border:none;">EZoApp</a>'
    );

    /* footer選單 */
    $('.footer-menu').append(
      '<li page="index"><a href="index.html">首頁</a></li>' +
      '<li page="plays"><a href="http://jqmdesigner.appspot.com" target="_blank">立刻體驗</a></li>' +
      '<li page="started"><a href="started.html">基本介紹</a></li>' +
      '<li page="tutorial"><a href="tutorial_1_basic_grid.html">教學實作</a></li>' +
      '<li page="aboutus"><a href="aboutus.html">關於我們</a></li>' +
      '<li page="blog"><a href="http://ezoui.wordpress.com/" target="_blank">Blog</a></li>'
    );
    $('.social-menu').append(
      '<li><a href="mailto:EZoService@icsc.com.tw" target="_blank"><img src="img/logo05.png" alt="mail to us" title="mail to us" /></a></li>' +
      '<li><a href="https://plus.google.com/117990746163074166131" target="_blank"><img src="img/logo01.png" alt="google+" title="Find us on Google+" /></a></li>' +
      '<li><a href="https://www.facebook.com/EZoUI" target="_blank"><img src="img/logo02.png" alt="faacebook" title="Find us on Facebook" /></a></li>' +
      '<li><a href="https://twitter.com/EZoService/status/405605560386461696" target="_blank"><img src="img/logo03.png" alt="twitter" title="Find us on Twitter" /></a></li>' +
      '<li><a href="http://ezoui.wordpress.com/" target="_blank"><img src="img/logo04.png" alt="blog" title="Find us on blog" /></a></li>'
    );
    _langBtn();
  }

  /* 简体中文 */

  function fn_zh_cn() {
    $('head').append(
      '<link rel="icon" href="../favicon.ico" type="image/x-icon"/>' +
      '<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon"/>'
    );

    /* 上方主选单 */
    $('.top-menu').append(
      '<li page="index"><a href="index.html">首页</a></li>' +
      '<li page="play"><a href="http://jqmdesigner.appspot.com" target="_blank">立刻体验</a></li>' +
      '<li page="started"><a href="started.html">基本介绍</a></li>' +
      '<li page="tutorial"><a href="tutorial_1_basic_grid.html">教学实作</a></li>' +
      '<li page="aboutus"><a href="aboutus.html">关于我们</a></li>' +
      '<li page="blog"><a href="http://ezoui.wordpress.com/" target="_blank">Blog</a></li>' +
      '<li class="language"><a>语系切换</a>' +
      '<ul>' +
      '<li class="language-tw"><a>繁体中文</a></li>' +
      '<li class="language-en"><a>English</a></li>' +
      '</ul>' +
      '<li class="language-tw"><a>繁体中文</a>' +
      '<li class="language-en"><a>English</a>' +
      '</li>'
    );

    $('.navbar-header').append(
      '<a class="navbar-brand" href="http://www.ezoui.com" title="EZoApp - 快速开发行动 App 的最佳工具"><img src="../img/logo.png" style="width:27px; margin:-3px 5px 0 0; border:none;">EZoApp</a>'
    );

    /* footer选单 */
    $('.footer-menu').append(
      '<li page="index"><a href="index.html">首页</a></li>' +
      '<li page="plays"><a href="http://jqmdesigner.appspot.com" target="_blank">立刻体验</a></li>' +
      '<li page="started"><a href="started.html">基本介绍</a></li>' +
      '<li page="tutorial"><a href="tutorial_1_basic_grid.html">教学实作</a></li>' +
      '<li page="aboutus"><a href="aboutus.html">关于我们</a></li>' +
      '<li page="blog"><a href="http://ezoui.wordpress.com/" target="_blank">Blog</a></li>'
    );
    $('.social-menu').append(
      '<li><a href="mailto:EZoService@icsc.com.tw" target="_blank"><img src="../img/logo05.png" alt="mail to us" title="mail to us" /></a></li>' +
      '<li><a href="https://plus.google.com/117990746163074166131" target="_blank"><img src="../img/logo01.png" alt="google+" title="Find us on Google+" /></a></li>' +
      '<li><a href="https://www.facebook.com/EZoUI" target="_blank"><img src="../img/logo02.png" alt="faacebook" title="Find us on Facebook" /></a></li>' +
      '<li><a href="https://twitter.com/EZoService/status/405605560386461696" target="_blank"><img src="../img/logo03.png" alt="twitter" title="Find us on Twitter" /></a></li>' +
      '<li><a href="http://ezoui.wordpress.com/" target="_blank"><img src="../img/logo04.png" alt="blog" title="Find us on blog" /></a></li>'
    );
    _langBtn();
  }

  /* English */

  function fn_en() {
    $('head').append(
      '<link rel="icon" href="../favicon.ico" type="image/x-icon"/>' +
      '<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon"/>'
    );

    /* top menu */
    $('.top-menu').append(
      '<li page="index"><a href="index.html">Home</a></li>' +
      '<li page="play"><a href="http://jqmdesigner.appspot.com" target="_blank">Try</a></li>' +
      '<li page="started"><a href="started.html">Get Started</a></li>' +
      '<li page="tutorial"><a href="tutorial_1_basic_grid.html">Tutorial</a></li>' +
      '<li page="aboutus"><a href="aboutus.html">About</a></li>' +
      '<li page="blog"><a href="http://ezoui.wordpress.com/" target="_blank">Blog</a></li>' +
      '<li class="language"><a>Language</a>' +
      '<ul>' +
      '<li class="language-tw"><a>繁体中文</a></li>' +
      '<li class="language-cn"><a>简体中文</a></li>' +
      '</ul>' +
      '<li class="language-tw"><a>繁体中文</a>' +
      '<li class="language-cn"><a>简体中文</a>' +
      '</li>'
    );

    $('.navbar-header').append(
      '<a class="navbar-brand" href="http://www.ezoui.com" title="EZoApp - Best tool for the rapid development of mobile apps"><img src="../img/logo.png" style="width:27px; margin:-3px 5px 0 0; border:none;">EZoApp</a>'
    );

    /* footer */
    $('.footer-menu').append(
      '<li page="index"><a href="index.html">Home</a></li>' +
      '<li page="plays"><a href="http://jqmdesigner.appspot.com" target="_blank">Try</a></li>' +
      '<li page="started"><a href="started.html">Get Started</a></li>' +
      '<li page="tutorial"><a href="tutorial_1_basic_grid.html">Tutorial</a></li>' +
      '<li page="aboutus"><a href="aboutus.html">About</a></li>' +
      '<li page="blog"><a href="http://ezoui.wordpress.com/" target="_blank">Blog</a></li>'
    );
    $('.social-menu').append(
      '<li><a href="mailto:EZoService@icsc.com.tw" target="_blank"><img src="../img/logo05.png" alt="mail to us" title="mail to us" /></a></li>' +
      '<li><a href="https://plus.google.com/117990746163074166131" target="_blank"><img src="../img/logo01.png" alt="google+" title="Find us on Google+" /></a></li>' +
      '<li><a href="https://www.facebook.com/EZoUI" target="_blank"><img src="../img/logo02.png" alt="faacebook" title="Find us on Facebook" /></a></li>' +
      '<li><a href="https://twitter.com/EZoService/status/405605560386461696" target="_blank"><img src="../img/logo03.png" alt="twitter" title="Find us on Twitter" /></a></li>' +
      '<li><a href="http://ezoui.wordpress.com/" target="_blank"><img src="../img/logo04.png" alt="blog" title="Find us on blog" /></a></li>'
    );
    _langBtn();
  }
});
