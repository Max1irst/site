AOS.init()

$(document).ready(function () {
    $('#portfolio_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    })
    const dots = '.slick-dots'
    $(dots).attr('data-aos', 'fade-up')
    $(dots).addClass('portfolio_pages')
    $('.slick-list').addClass('portfolio_box')
    $('#slick-slide-control00').text('react / javascript')
    $('#slick-slide-control01').text('tailwind / bootstrap')
    $('#slick-slide-control02').text('cucumber / playwright / cypress')

    $('#testimonials_slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    $('.mobile_nav_toggle').click(function () {
        $('#navbar').toggleClass('d-none')
    })

    $('#nav_menu a').click(function () {
        $('#navbar').addClass('d-none')
    })
})
