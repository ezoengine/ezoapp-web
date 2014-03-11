$(function() {
    $('#div0').css({'height':($('#div0').height()+$('.footer').height()*2)+'px'});
    /**
     * 上方主選單
     */
    $('.top-menu').append(
        '<li page="index"><a href="index.html">首頁</a></li>' +
        '<li page="play"><a href="http://jqmdesigner.appspot.com/1.4.2/designer.html" target="_blank">立刻體驗</a></li>' +
        '<li page="started"><a href="started.html">基本介紹</a></li>' +
        '<li page="tutorial"><a href="tutorial/tutorial_1_basic_grid.html">教學實作</a></li>' +
        '<li page="pricing"><a href="pricing.html">授權方案</a></li>' +
        '<li page="aboutus"><a href="aboutus.html">關於我們</a></li>' +
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
        '<li page="index"><a href="index.html">首頁</a></li>' +
        '<li page="plays"><a href="http://jqmdesigner.appspot.com/1.4.2/designer.html" target="_blank">立刻體驗</a></li>' +
        '<li page="started"><a href="started.html">基本介紹</a></li>' +
        '<li page="tutorial"><a href="tutorial/tutorial_1_basic_grid.html">教學實作</a></li>' +
        '<li page="aboutus"><a href="aboutus.html">關於我們</a></li>' +
        '<li page="blog"><a href="http://ezoui.wordpress.com/" target="_blank">Blog</a></li>'
    );
    $('.social-menu').append(
        '<li><a href="https://plus.google.com/117990746163074166131" target="_blank"><img src="img/logo01.png" alt="google+" /></a></li>'+
        '<li><a href="https://www.facebook.com/EZoUI" target="_blank"><img src="img/logo02.png" alt="faacebook" /></a></li>'+
        '<li><a href="https://twitter.com/EZoService/status/405605560386461696" target="_blank"><img src="img/logo03.png" alt="twitter" /></a></li>'+
        '<li><a href="http://ezoui.wordpress.com/" target="_blank"><img src="img/logo04.png" alt="blog" /></a></li>'
    );
    $('.copyright').append(
        '<div>© InfoChamp Systems Corporation 2013</div>'
      );


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
