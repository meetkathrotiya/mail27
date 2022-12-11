$(document).ready(function () {

    $('#mainsec').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ['<i class="bi bi-arrow-left lft_arow"></i>', '<i class="bi bi-arrow-right rght_arow"></i>'],
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    new WOW().init();

    var owl = $('#mainsec');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {

        new WOW().init();

    })




    $('#product').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })





    $(document).ready(function () {
        $('.btn_top').hide()
        $(window).scroll(function () {
            var h = $(window).scrollTop()

            if (h > 180) {
                $('.header_top').addClass('fixed');
                $('.btn_top').fadeIn(500);
                $('.btn_top').fadeIn(500);
            }
            else {
                $('.header_top').removeClass('fixed');
                $('.btn_top').fadeOut(500)
            }
        })
        $('.btn_top').click(function () {
            $('html,body').animate({ scrollTop: 0 })
        })
        setTimeout(function () {
            $('.loader').fadeOut(500)
        }, 700)
    })



    $(document).ready(function () {
        $('.mob_sub_menu').hide()
        // $('.mob_main_menu').hide()

        $('.toggle').click(function () {
            //  $('.mob_main_menu').slideToggle()
            $('.mob_main_menu').toggleClass('close open')
            $('.toggle i').toggleClass('fa-bars fa-times')
        })

        $('.mob_main_menu > li > a').click(function () {
            $(this).next('.mob_sub_menu').slideToggle()
        })
    })

    $(document).ready(function () {

        $('.pro-addt-detls').css('display', 'none')

        $('.product_des .div1').click(function () {
            $('.peo-dec-detls').show();
            $('.pro-addt-detls').hide();
        })

        $('.product_des .div2').click(function () {
            $('.peo-dec-detls').hide();
            $('.pro-addt-detls').show();
        })

    })

    $(document).ready(function () {

        $('.active_blog_sec1').hide()
        $('.active_blog_sec2').hide()
        $('.active_blog_sec3').hide()

        $('.active-c2').click(function () {
            $('.active_blog_sec1').show()
            $('.active_blog_sec2').hide()
            $('.active_blog_sec3').hide()
            $('.active_blog_sec').hide()
        })

        $('.active-c3').click(function () {
            $('.active_blog_sec2').show()
            $('.active_blog_sec1').hide()
            $('.active_blog_sec3').hide()
            $('.active_blog_sec').hide()
        })

        $('.active-c4').click(function () {
            $('.active_blog_sec3').show()
            $('.active_blog_sec1').hide()
            $('.active_blog_sec2').hide()
            $('.active_blog_sec').hide()
        })

        $('.active-c1').click(function () {
            $('.active_blog_sec').show()
            $('.active_blog_sec1').hide()
            $('.active_blog_sec2').hide()
            $('.active_blog_sec3').hide()
        })

    })

    $(document).ready(function () {

        $(window).scroll(function () {
            var h = $(window).scrollTop()
            var s = $(window).scrollTop()

            if (h > 150) {
                $('.sldbar-width-area').addClass('sldbar_fixed')
            }
            else {
                $('.sldbar-width-area').removeClass('sldbar_fixed')
            }


            if (s > 6000) {
                $('.sldbar-width-area').addClass('sldbar_fixed1')
            }
            else {
                $('.sldbar-width-area').removeClass('sldbar_fixed1')
            }
        })
    })

});    