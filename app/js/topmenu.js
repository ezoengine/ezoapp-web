$(function() {
    $(window).scroll(function(event) {
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
