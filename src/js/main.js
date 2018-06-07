$(document).ready(function () {

    //----------------------<<svg for ie>>----------------------\\
    (function () {
        svg4everybody();
    }());

    //----------------------<<swiper>>----------------------\\
    (function () {
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-nx',
                prevEl: '.swiper-button-pr'
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        })
    }());

});