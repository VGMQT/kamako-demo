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

    //----------------------<<dropdown>>----------------------\\
    (function () {
        var flag = true;
        var drop = $('.dropdown');

        drop.slideDown(500);

        $('.dropdown__svg').on('click', function (e) {
            e.preventDefault();

            if(flag) {
                flag = false;
                drop.slideUp(500, function () {
                    flag = true;
                });
            }
        })
    }());

    //----------------------<<search>>----------------------\\
    (function () {
        var flag = true;
        var link = $('.search__link');

        link.on('click', function (e) {
            e.preventDefault();

            if(flag) {
                flag = false;
                link.fadeOut(500, function () {
                    $('.form-search').fadeIn(500, function () {
                        flag = true;
                    });
                });
            }
        })

    }());

    //----------------------<<menu>>----------------------\\
    (function () {
        var flag = true;

        $('.menu__btn').on('click', function (e) {
            e.preventDefault();

            var $this = $(this);
            var menu = $('.menu__list');

            if (flag) {
                flag = false;
                if (!$this.hasClass('active')) {
                    $this.addClass('active');
                    menu.slideDown(500, function () {
                        flag = true;
                    });
                } else {
                    $this.removeClass('active');
                    menu.slideUp(500, function () {
                        flag = true;
                    });
                }
            }
        })
    }());

});