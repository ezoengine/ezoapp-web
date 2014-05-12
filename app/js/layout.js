// var path;
$(function() {
    'use strict';
    var $window = $(window);
    // if (!path) {
    //   path = ''
    // };

    $('head').append(
        '<link rel="icon" href="favicon.ico" type="image/x-icon"/>' +
        '<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>'
    );

    /**
     *  google analytics
     */
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
    /**
     * 頁面高度不夠時，footer仍然維持在視窗底部
     */
    if ($('.footer').offset().top < ($window.height() - 100)) {
        $('.footer').css({
            'margin-top': ($window.height() - 100 - $('.footer').offset().top) + 'px'
        });
    }

    /**
     * 上方主選單
     */
    $('.top-menu').append(
        '<li page="index"><a href="index.html">首頁</a></li>' +
        '<li page="play"><a href="http://jqmdesigner.appspot.com" target="_blank">立刻體驗</a></li>' +
        '<li page="started"><a href="started.html">基本介紹</a></li>' +
        '<li page="tutorial"><a href="tutorial_1_basic_grid.html">教學實作</a></li>' +
        //'<li page="pricing"><a href="'+path+'pricing.html">授權方案</a></li>' +
        '<li page="aboutus"><a href="aboutus.html">關於我們</a></li>' +
        '<li page="blog"><a href="http://ezoui.wordpress.com/" target="_blank">Blog</a></li>' +
        '<li class="language"><a>語系切換</a>' +
        '<ul>' +
        '<li class="language-cn"><a>简体中文</a></li>' +
        '<li class="language-en"><a>English</a></li>' +
        '</ul>' +
        '<li class="language-cn"><a>简体中文</a>' +
        '<li class="language-en"><a>English</a>' +
        '</li>'
    );

    $('.navbar-header').append(
        '<a class="navbar-brand" href="http://www.ezoui.com" title="EZoApp - 快速開發行動 App 的最佳工具"><img src="img/logo.png" style="width:27px; margin:-3px 5px 0 0; border:none;">EZoApp</a>'
    );

    /**
     * 判斷頁面讓主選單變色
     */
    $('.top-menu li[page=' + $('body').attr('page') + ']').addClass('active').find('a').removeAttr('href');

    /**
     * footer選單
     */
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
    $('.copyright').append(
        '<div>© InfoChamp Systems Corporation 2014</div>'
    );


    /**
     * 捲動時上方選單高度與背景色變化
     */
    $window.scroll(function() {
        $window.scrollTop() > 0 ? $('.navbar-inverse').not(':animated').animate({
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

    /*  語系切換  */
    var nowUrl = location.href;
    var urlParts = nowUrl.split("/");
    var fileName = urlParts.pop();
    var webUrl = "http://127.0.0.1:9000/"
    var enUrl = webUrl + "en/" + fileName;
    var cnUrl = webUrl + "cn/" + fileName;
    var twUrl = webUrl + fileName;
    if ($('.language-tw')) {
        $('.language-tw a').attr('href', twUrl);
    }
    if ($('.language-en')) {
        $('.language-en a').attr('href', enUrl);
    }
    if ($('.language-cn')) {
        $('.language-cn a').attr('href', cnUrl);
    }
});
