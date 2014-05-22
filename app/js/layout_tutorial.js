$(function() {
  'use strict';
  var $window = $(window),
    windowHeight, menuWidth, menuHeight, menuTop, scrollNum, menuHeight;

  /*  語系判斷與切換按鈕  */
  var nowUrl = location.href;

  if (nowUrl.indexOf('en-us') == -1 && nowUrl.indexOf('zh-cn') == -1) {
    _langLayout('zh-tw');
  }
  if (nowUrl.indexOf('zh-cn') != -1) {
    _langLayout('zh-cn');
  }
  if (nowUrl.indexOf('en-us') != -1) {
    _langLayout('en-us');
  }

  function _langLayout(langCheck1) {
    if (langCheck1 == 'en-us') {
      fn_en();
    } else if (langCheck1 == 'zh-cn') {
      fn_zh_cn();
    } else {
      fn_zh_tw();
    }
  }

  $('.tutorial-left-menu>ul').css({
    'height': $window.height() - 90 + 'px'
  });
  menuHeight = $('.tutorial-left-menu>ul').height();
  menuWidth = $('.tutorial-left-menu').width();

  $('pre').addClass('prettyprint');

  /* 判斷頁面讓左側選單變色 */
  $('.tutorial-left-menu ul li ul li[page-content=' + $('body').attr('page-content') + ']').addClass('active').find('a').removeAttr('href');
  $('.tutorial-left-menu ul li ul li[page-content=' + $('body').attr('page-content') + ']').parent('ul').parent('li').addClass('active');

  $window.resize(function() {
    windowHeight = $window.height();
    menuWidth = $('.tutorial-left-menu').width();
    $('.tutorial-left-menu>ul').css({
      'height': $window.height() - 90 + 'px'
    });
    $('.tutorial-left-menu>ul').css({
      'width': menuWidth + 'px'
    });
    menuHeight = $('.tutorial-left-menu>ul').height();
  });

  $window.scroll(function() {
    scrollNum = $(document).height() - menuHeight - 90;
    menuTop = $('.tutorial-left-menu>ul').offset().top;

    /* 卷軸往下捲到一定程度，左側選單會固定不動 */
    if ($window.width() >= 978) {
      if ($window.scrollTop() > 200 && $window.scrollTop() < scrollNum) {
        $('.tutorial-left-menu>ul').css({
          'position': 'fixed',
          'top': '65px',
          'width': menuWidth + 'px',
          'height': $window.height() - 90 + 'px'
        });
      }
      if ($window.scrollTop() <= 200) {
        $('.tutorial-left-menu>ul').css({
          'position': 'relative',
          'top': '0',
          'width': '100%',
          'height': $window.height() - 90 + 'px'
        });
      }
      if ($window.scrollTop() >= (scrollNum - 60)) {
        $('.tutorial-left-menu>ul').css({
          'position': 'fixed',
          'top': '65px',
          'height': (menuHeight + $(document).height() - $window.scrollTop() - menuHeight - 170) + 'px',
          'width': menuWidth + 'px'
        });
      }
    } else {
      $('.tutorial-left-menu>ul').css({
        'position': 'relative',
        'top': '0',
        'width': '100%'
      });
    }
  });

  function fn_zh_tw() {
    $('.banner-content-text').append(
      '<h1>EZoApp 教學實作</h1>' +
      '<h2>學習快速開發 App 的程式饗宴</h2>'
    );

    /* tutorial 左側選單 */
    $('.tutorial-left-menu ul').append(
      '<li><a>基本元件實作</a>' +
      '<ul>' +
      '<li page-content="tutorial_1_basic_grid"><a href="tutorial_1_basic_grid.html">1. grid 基礎排版</a></li>' +
      '<li page-content="tutorial_2_button"><a href="tutorial_2_button.html">2. 製作特色按鈕</a></li>' +
      '<li page-content="tutorial_3_google_font"><a href="tutorial_3_google_font.html">3. 使用 Google Fonts</a></li>' +
      '<li page-content="tutorial_4_droplist"><a href="tutorial_4_droplist.html">4. 建立下拉選單</a></li>' +
      '<li page-content="tutorial_5_checklist"><a href="tutorial_5_checkbox.html">5. 設計 CheckBox</a></li>' +
      '<li page-content="tutorial_6_home_page"><a href="tutorial_6_home_page.html">6. 打造入口頁面</a></li>' +
      '<li page-content="tutorial_7_button"><a href="tutorial_7_button.html">7. 按鈕切換設定<span></span></a></li>' +
      '</ul>' +
      '</li>' +
      '<li><a>JavaScript 應用</a><i></i>' +
      '<ul>' +
      '<li page-content="tutorial_js_1_googlemap"><a href="tutorial_js_1_googlemap.html">1. Google 地圖應用</a></li>' +
      '<li page-content="tutorial_js_2_swipe_page"><a href="tutorial_js_2_swipe_page.html">2. 滑動頁面實作</a></li>' +
      '<li page-content="tutorial_js_3_star_widget"><a href="tutorial_js_3_star_widget.html">3. 星號分數評比</a></li>' +
      '<li page-content="tutorial_js_4_open_data"><a href="tutorial_js_4_open_data.html">4. 串接開放資料</a></li>' +
      '<li page-content="tutorial_js_5_rss"><a href="tutorial_js_5_rss.html">5. RSS 服務實作<span></span></a></li>' +
      '</ul>' +
      '</li>'
    );
  }

  function fn_zh_cn() {
    $('.banner-content-text').append(
      '<h1>EZoApp 教学实作</h1>' +
      '<h2>学习快速开发 App 的程序飨宴</h2>'
    );

    /* tutorial 左侧选单 */
    $('.tutorial-left-menu ul').append(
      '<li><a>基本组件实作</a>' +
      '<ul>' +
      '<li page-content="tutorial_1_basic_grid"><a href="tutorial_1_basic_grid.html">1. grid 基础排版</a></li>' +
      '<li page-content="tutorial_2_button"><a href="tutorial_2_button.html">2. 制作特色按钮</a></li>' +
      '<li page-content="tutorial_3_google_font"><a href="tutorial_3_google_font.html">3. 使用 Google Fonts</a></li>' +
      '<li page-content="tutorial_4_droplist"><a href="tutorial_4_droplist.html">4. 建立下拉选单</a></li>' +
      '<li page-content="tutorial_5_checklist"><a href="tutorial_5_checkbox.html">5. 设计 CheckBox</a></li>' +
      '<li page-content="tutorial_6_home_page"><a href="tutorial_6_home_page.html">6. 打造入口页面</a></li>' +
      '<li page-content="tutorial_7_button"><a href="tutorial_7_button.html">7. 按钮切换设定<span></span></a></li>' +
      '</ul>' +
      '</li>' +
      '<li><a>JavaScript 应用</a><i></i>' +
      '<ul>' +
      '<li page-content="tutorial_js_1_googlemap"><a href="tutorial_js_1_googlemap.html">1. Google 地图应用</a></li>' +
      '<li page-content="tutorial_js_2_swipe_page"><a href="tutorial_js_2_swipe_page.html">2. 滑动页面实作</a></li>' +
      '<li page-content="tutorial_js_3_star_widget"><a href="tutorial_js_3_star_widget.html">3. 星号分数评比</a></li>' +
      '<li page-content="tutorial_js_4_open_data"><a href="tutorial_js_4_open_data.html">4. 串接开放资料</a></li>' +
      '<li page-content="tutorial_js_5_rss"><a href="tutorial_js_5_rss.html">5. RSS 服务实作<span></span></a></li>' +
      '</ul>' +
      '</li>'
    );

  }

  function fn_en() {
    $('.banner-content-text').append(
      '<h1>EZoApp hands-on tutorial</h1>' +
      '<h2>Programming feast of learning rapid app development</h2>'
    );

    /* tutorial left */
    $('.tutorial-left-menu ul').append(
      '<li><a>Basic component</a>' +
      '<ul>' +
      '<li page-content="tutorial_1_basic_grid"><a href="tutorial_1_basic_grid.html">1. Basic grid layout</a></li>' +
      '<li page-content="tutorial_2_button"><a href="tutorial_2_button.html">2. Customized buttons</a></li>' +
      '<li page-content="tutorial_3_google_font"><a href="tutorial_3_google_font.html">3. Google fonts</a></li>' +
      '<li page-content="tutorial_4_droplist"><a href="tutorial_4_droplist.html">4. Droplist menus</a></li>' +
      '<li page-content="tutorial_5_checklist"><a href="tutorial_5_checkbox.html">5. CheckBox</a></li>' +
      '<li page-content="tutorial_6_home_page"><a href="tutorial_6_home_page.html">6. Entry point pages</a></li>' +
      // '<li page-content="tutorial_7_button"><a href="tutorial_7_button.html">7. Button<span></span></a></li>' +
      '</ul>' +
      '</li>' +
      '<li><a>Integrating JavaScript</a><i></i>' +
      '<ul>' +
      '<li page-content="tutorial_js_1_googlemap"><a href="tutorial_js_1_googlemap.html">1. Google Map app</a></li>' +
      '<li page-content="tutorial_js_2_swipe_page"><a href="tutorial_js_2_swipe_page.html">2. Swipe Pages</a></li>' +
      '<li page-content="tutorial_js_3_star_widget"><a href="tutorial_js_3_star_widget.html">3. Star Rating</a></li>' +
      '<li page-content="tutorial_js_4_open_data"><a href="tutorial_js_4_open_data.html">4. Open Data</a></li>' +
      '<li page-content="tutorial_js_5_rss"><a href="tutorial_js_5_rss.html">5. RSS Service<span></span></a></li>' +
      '</ul>' +
      '</li>'
    );

  }
});
