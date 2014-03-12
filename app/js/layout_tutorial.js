$(function() {
    /**
     * 頁面高度不夠時，footer仍然維持在視窗底部
     */
  if($('.footer').offset().top<($(window).height()-90)){
    $('.footer').css({'margin-top':($(window).height()-90-$('.footer').offset().top)+'px'});
  }
    /**
     * 上方主選單
     */
    $('.top-menu').append(
        '<li page="index"><a href="../index.html">首頁</a></li>' +
        '<li page="play"><a href="http://jqmdesigner.appspot.com/1.4.2/designer.html" target="_blank">立刻體驗</a></li>' +
        '<li page="started"><a href="../started.html">基本介紹</a></li>' +
        '<li page="tutorial"><a href="tutorial_1_basic_grid.html">教學實作</a></li>' +
        //'<li page="pricing"><a href="../pricing.html">授權方案</a></li>' +
        '<li page="aboutus"><a href="../aboutus.html">關於我們</a></li>' +
        '<li page="blog"><a href="http://ezoui.wordpress.com/" target="_blank">Blog</a></li>'
    );

    /**
     * 判斷頁面讓主選單變色
     */
    $('.top-menu li[page=' + $('body').attr('page') + ']').addClass('active').find('a').removeAttr('href');

    /**
     * footer選單
     */
    $('.footer-menu').append(
        '<li page="index"><a href="../index.html">首頁</a></li>' +
        '<li page="plays"><a href="http://jqmdesigner.appspot.com/1.4.2/designer.html" target="_blank">立刻體驗</a></li>' +
        '<li page="started"><a href="../started.html">基本介紹</a></li>' +
        '<li page="tutorial"><a href="tutorial_1_basic_grid.html">教學實作</a></li>' +
        '<li page="aboutus"><a href="../aboutus.html">關於我們</a></li>' +
        '<li page="blog"><a href="http://ezoui.wordpress.com/" target="_blank">Blog</a></li>'
    );
    $('.social-menu').append(
        '<li><a href="https://plus.google.com/117990746163074166131" target="_blank"><img src="../img/logo01.png" alt="google+" /></a></li>' +
        '<li><a href="https://www.facebook.com/EZoUI" target="_blank"><img src="../img/logo02.png" alt="faacebook" /></a></li>' +
        '<li><a href="https://twitter.com/EZoService/status/405605560386461696" target="_blank"><img src="../img/logo03.png" alt="twitter" /></a></li>' +
        '<li><a href="http://ezoui.wordpress.com/" target="_blank"><img src="../img/logo04.png" alt="blog" /></a></li>'
    );
    $('.copyright').append(
        '<div>© InfoChamp Systems Corporation 2013</div>'
    );

    /**
     * tutorial 左側選單
     */

    $('.tutorial-left-menu ul').append(
      '<li><a>基本元件實作</a>'+
      '<ul>'+
      '<li page-content="tutorial_1_basic_grid"><a href="tutorial_1_basic_grid.html">1. gird 基礎排版</a></li>'+
      '<li page-content="tutorial_2_button"><a href="tutorial_2_button.html">2. 製作特色按鈕</a></li>'+
      '<li page-content="tutorial_3_google_font"><a href="tutorial_3_google_font.html">3. 使用 google font</a></li>'+
      '<li page-content="tutorial_4_droplist"><a href="tutorial_4_droplist.html">4. 建立下拉選單</a></li>'+
      '<li page-content="tutorial_5_checklist"><a href="tutorial_5_checklist.html">5. 設計 CheckList</a></li>'+
      '<li page-content="tutorial_6_home_page"><a href="tutorial_6_home_page.html">6. 打造入口頁面</a></li>'+
      '</ul>'+
      '</li>'+
      '<li><a>結合 javascript 應用</a>'+
      '<ul>'+
      '<li page-content="tutorial_js_1_googlemap"><a href="tutorial_js_1_googlemap.html">1. google 地圖應用</a></li>'+
      '<li page-content="tutorial_js_2_swipe_page"><a href="tutorial_js_2_swipe_page.html">2. 滑動頁面實作</a></li>'+
      '<li page-content="tutorial_js_3_star_widget"><a href="tutorial_js_3_star_widget.html">3. 星號分數評比</a></li>'+
      '<li page-content="tutorial_js_4_open_data"><a href="tutorial_js_4_open_data.html">4. 串接公開資料</a></li>'+
      '</ul>'+
      '</li>'
      );

    /**
     * 判斷頁面讓左側選單變色
     */
    $('.tutorial-left-menu ul li ul li[page-content=' + $('body').attr('page-content') + ']').addClass('active').find('a').removeAttr('href');
    $('.tutorial-left-menu ul li ul li[page-content=' + $('body').attr('page-content') + ']').parent('ul').parent('li').addClass('active');


    /**
     * 捲動時上方選單高度與背景色變化
     */
    $(window).scroll(function() {
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
