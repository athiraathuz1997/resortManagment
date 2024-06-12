        // Banner carousal

        $(document).ready(function($) {
            $('.banner-carousal').slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev banner-carousal-prev"><i class="fa-solid fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next banner-carousal-prev"><i class="fa-solid fa-chevron-right"></i></button>',
            });
        });

        // Banner carousal

        // Header Scroll Fix

        window.addEventListener('scroll', function() {
            var header = document.getElementById('header-bar');
            var logo = document.getElementById('header-logo');
            if (window.scrollY > 100) { // You can adjust this value to your needs
                header.classList.add('scrolled');
                logo.src = 'image/header_logo_scroll.png';
            } else {
                header.classList.remove('scrolled');
                logo.src = 'image/header_logo.png';
            }
        });

        // Header Scroll Fix

        // Our Accommodation

        $(document).ready(function() {
            $('.card-slider-explore').slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev card-slider-explore-prev"><i class="fa-solid fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next card-slider-explore-next"><i class="fa-solid fa-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });

        // Our Accommodation

        // Make Your Stay Memorable

        $(document).ready(function($) {
            $('.card-slider-your-stay').slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev card-slider-your-stay-prev"><i class="fa-solid fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next card-slider-your-stay-next"><i class="fa-solid fa-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false
                        }
                    }
                ]
            });
        });

        // Make Your Stay Memorable

        // Testimonials

        $(document).ready(function($) {
            $('.card-slider-testimonial').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
            });
        });

        // Testimonials

        // Facilities Content Slider

        $(document).ready(function($) {
            $('.facilities-slider').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
            });
        });

        // Facilities Content Slider

        // Banner Toggle

        document.querySelector('.navbar-menu-btn').addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('.menu-items').classList.toggle('show');
        });
        document.querySelector('.menu-item-close').addEventListener('click', function() {
            document.querySelector('.menu-items').classList.remove('show');
        });

        // Banner Toggle