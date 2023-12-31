$('.owl-slider-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplaySpeed:1000,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.owl-review-carousel').owlCarousel({
    loop:true,
    margin:100,
    nav:true,
    dots:false,
    autoplay:true,
    autoplaySpeed:1000,
    autoplayTimeout:10000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        1024:{
            items:1
        },
        1400:{
            items:2
        }
    }
})

$('.owl-student-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})