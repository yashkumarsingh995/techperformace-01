$(window).on('load', function () {
    $('.loader').fadeOut();
});
//
//$('ul.navbar-nav li.dropdown').hover(function () {
//    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(100);
//}, function () {
//    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(100);
//});

//$(document).ready(function () {
//    jQuery('header nav').meanmenu();
//});


/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.header_sec').addClass('fixed-header');
    }
    else {
        $('.header_sec').removeClass('fixed-header');
    }
});
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('body').addClass('action--menu-top');
    }
    else {
        $('body').removeClass('action--menu-top');
    }
});

AOS.init({
//    disable: function () {
//        var maxWidth = 800;
//        return window.innerWidth < maxWidth;
//    }
   once: true
});




// Testimonial Carousel
$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 300,
    autoPlay: 7000,
    dots: false,
    navText: ['<span class="arrow-left"></span>', '<span class="arrow-right"></span>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
            nav: false,
            dots:false
        },
        800: {
            items: 1,
            nav: false,
            dots:false
        },
        1024: {
            items: 1
        }
    }
});

$('.industries_carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 300,
    autoplay: 5000,
    dots: false,
    navText: ['<i class="las la-long-arrow-alt-left"></i>', '<i class="las la-long-arrow-alt-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
});


$('.it_serv_slide').owlCarousel({
    loop: true,
    items: 2,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: true,
    //navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1,
            margin: 10,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 2,

        }
    }
})

$('.architechture_drafting').owlCarousel({
    loop: false,
    items: 3,
    margin: 15,
    responsiveClass: true,
    nav: false,
    dots: false,
    //navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1,
            margin: 10,
            loop: true,
        },
        600: {
            items: 1,
            loop: true,
        },
        1000: {
            items: 3,
            lopp: false,

        }
    }
})

$('.mechanical_process').owlCarousel({
    loop: false,
    items: 5,
    margin: 5,
    responsiveClass: true,
    nav: false,
    dots: false,
    //navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1,
            margin: 10,
            loop: true,
        },
        600: {
            items: 1,
            loop: true,
        },
        1000: {
            items: 5,
            lopp: false,

        }
    }
})

$('.project_single_slider').owlCarousel({
    loop: true,
    items: 1,
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    //navText: ['<i class="las la-chevron-circle-left"></i>', '<i class="las la-chevron-circle-right"></i>'],
    responsive: {
        0: {
            items: 1,
            margin: 10,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,

        }
    }
})

$('.success_testimonial').owlCarousel({
    loop: true,
    items: 3,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: true,
    //navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
})

$('.industries_slider').owlCarousel({
    loop: true,
    items: 3,
    margin: 20,
    responsiveClass: true,
    nav: false,
    dots: true,
    //navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
})

$('.reviewCarousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: ['<i class="las la-chevron-circle-left"></i>', '<i class="las la-chevron-circle-right"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})
$('.blog_carousal').owlCarousel({
    loop: true,
    items: 2,
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    //navText: ['<i class="las la-chevron-circle-left"></i>', '<i class="las la-chevron-circle-right"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 2,
        }
    }
})


// Dropdown Menu Fade    
jQuery(document).ready(function () {
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).fadeIn("fast");
        },
        function () {
            $('.dropdown-menu', this).fadeOut("fast");
        });
});


jQuery("#portfolio").mixItUp({
    selectors: {
        target: ".tile",
        filter: ".filter",
        sort: ".sort-btn"
    },

    animation: {
        animateResizeContainer: false,
        effects: "fade scale"
    }
});






/********************************************Progeress Bar*********************************************************/

var skills = {
    ht: 100,
    cs: 85,
    js: 93,
    rc: 50
};

$.each(skills, function (key, value) {
    var skillbar = $("." + key);

    skillbar.animate({
            width: value + "%"
        },
        3000,
        function () {
            $(".speech-bubble").fadeIn();
        }
    );
});






$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({
        count: settings.start
    }).animate({
        count: settings.end
    }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({
    end: 950,
    duration: 3000
});
$('#number2').jQuerySimpleCounter({
    end: 550,
    duration: 3000
});
$('#number3').jQuerySimpleCounter({
    end: 150,
    duration: 2000
});


//
///* AUTHOR LINK */
//$('.about-me-img').hover(function () {
//    $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
//}, function () {
//    $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
//});
//








// JQuery and JS for Owl Carousel - Yash Sonalia

//Our works: Designing Page
$('.our-recent-works-carousel').owlCarousel({
    loop: true,
    items: 2,
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'one',
    navText: ['<i class="las la-chevron-circle-left"></i>', '<i class="las la-chevron-circle-right"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 2,
        }
    }
})


// Our Expertise: Designing Page
$('.expertise-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'exp-one',
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})

//const expertiseButtons = document.querySelectorAll('.web_design_expertise .button');
//
//expertiseButtons.forEach(button => {
//
//    button.addEventListener('click', () => {
//
//        expertiseButtons.forEach(btn => {
//            btn.classList.remove('button-active');
//        });
//        button.classList.toggle('button-active');
//    })
//});

// tech we leverage: Designing Page
$('.tech-we-leverage-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'texh-one',
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})

//const techLeverageButtons = document.querySelectorAll('.tech_we_leverage_buttons .button');
//
//
//techLeverageButtons.forEach(button => {
//
//    button.addEventListener('click', () => {
//
//        techLeverageButtons.forEach(btn => {
//            btn.classList.remove('button-active');
//        });
//        button.classList.toggle('button-active');
//    })
//});


// Our Metrics: Digital Marketing Page
$('.metrics-details-container').owlCarousel({
    loop: true,
    items: 1,
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'one',
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})

//const metricsButton = document.querySelectorAll('.metrics-button');
//
//metricsButton.forEach(button => {
//
//    button.addEventListener('click', () => {
//
//        metricsButton.forEach(btn => {
//            btn.classList.remove('active');
//        });
//        button.classList.toggle('active');
//    })
//});


$('.card__speed__1').owlCarousel({
    loop: true,
    items: 1,
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    URLhashListener: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    startPosition: 'mot-1',
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
});
$('.card__speed__2').owlCarousel({
    loop: true,
    items: 1,
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    URLhashListener: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    startPosition: 'mot-1',
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
});
$('.card__speed__3').owlCarousel({
    loop: true,
    items: 1,
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    URLhashListener: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    startPosition: 'mot-1',
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
});






//######  Type.JS #####
jQuery(document).ready(function () {
    var typed3 = new Typed("#testJ", {
        strings: [
            "A Creative Digital Agency Focused On Growing Brands",
            "",
            "You can't anticipate your future growth.But we can.",
            "",
            "We’ll know your business like the backs of our hands.",
            "",
            "Our team develops actionable plans to hit your goals.",
            "",
            "We execute; relentlessly and repeatedly.",
            ""
          ],
        typeSpeed: 100,
        backSpeed: 10,
        smartBackspace: true,
        loop: true
    });
});



// ===== Scroll to Top ====
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        // If page is scrolled more than 50px
        $("#return-to-top").fadeIn(200); // Fade in the arrow
    } else {
        $("#return-to-top").fadeOut(200); // Else fade out the arrow
    }
});
$("#return-to-top").click(function () {
    // When arrow is clicked
    $("body,html").animate({
            scrollTop: 0 // Scroll to top of body
        },
        500
    );
});

//
//
//const imgContent = document.querySelectorAll(".img-content-hover");
//
//function showImgContent(e) {
//    for (var i = 0; i < imgContent.length; i++) {
//        x = e.pageX;
//        y = e.pageY;
//        imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
//    }
//}
//
//document.addEventListener("mousemove", showImgContent);