// Import Swiper
import Swiper from 'swiper';
import { Autoplay, EffectFade, FreeMode, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    const swiperWrappers = document.querySelectorAll('.swiper-wrapper');

    // Add `swiper-slide` class to each child element of `.swiper-wrapper`
    swiperWrappers.forEach((wrapper) => {
        wrapper.querySelectorAll(':scope > *').forEach((child) => {
            child.classList.add('swiper-slide');
        });
    });

    //
    // Initialize Swipers Based on Style
    //

    // One Across Style
    document.querySelectorAll('.swiper.is-style-one-across').forEach((swiperElement) => {
        new Swiper(swiperElement, {

            modules: [Navigation,  Mousewheel],

            speed: 1000,
            slidesPerView: 1,
            grabCursor: true,
            spaceBetween: 60,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            mousewheel: {
                enabled: true,
                forceToAxis: true,
                releaseOnEdges: true,
            },
        });
    });

    // Two Across Style
    document.querySelectorAll('.swiper.is-style-two-across').forEach((swiperElement) => {
        new Swiper(swiperElement, {

            modules: [Navigation, Scrollbar, Pagination, Mousewheel],

            speed: 400,
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            mousewheel: {
                enabled: true,
                releaseOnEdges: true,
                forceToAxis: true,
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                // hide: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1.25,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1.25,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 60
                }
            }
        });
    });

    // Three Across Style
    document.querySelectorAll('.swiper.is-style-three-across').forEach((swiperElement) => {
        new Swiper(swiperElement, {

            modules: [Navigation, Scrollbar, Pagination, Mousewheel],

            speed: 400,
            grabCursor: true,
            spaceBetween: 60,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            mousewheel: {
                enabled: true,
                forceToAxis: true,
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                // hide: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1.25,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }
        });
    });

    // Ticker Left Style
    document.querySelectorAll('.swiper.is-style-ticker-left').forEach((swiperElement) => {
        new Swiper(swiperElement, {

            modules: [Autoplay, FreeMode],

            freeMode: {
                enabled: true,
                sticky: true,
            },
            speed: 60000,
            grabCursor: true,
            loop: true,
            // loopAdditionalSlides: "10",
            slidesPerView: "auto",
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            spaceBetween: 0,
            // centeredSlides: true,
        });
    });

    // Ticker Right Style
    document.querySelectorAll('.swiper.is-style-ticker-right').forEach((swiperElement) => {
        new Swiper(swiperElement, {

            modules: [Autoplay, FreeMode],

            freeMode: {
                enabled: true,
                sticky: true,
            },
            speed: 60000,
            grabCursor: true,
            loop: true,
            // loopAdditionalSlides: "10",
            slidesPerView: "auto",
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: true,
            },
            spaceBetween: 0,
            // centeredSlides: true,
        });
    });

    // Style Fade
    document.querySelectorAll('.swiper.is-style-fade').forEach((swiperElement) => {
        new Swiper(swiperElement, {

            modules: [Autoplay, Pagination, EffectFade],

            effect: "fade",
            speed: 250,
            loop: true,
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            spaceBetween: 0,
            grabCursor: true,
        });
    });

    // // New: Swipers using only `data-swiper`
    // document.querySelectorAll('.swiper[data-swiper]').forEach((swiperElement) => {
    //     try {
    //         const options = JSON.parse(swiperElement.getAttribute('data-swiper'));
    //         new Swiper(swiperElement, options);
    //     } catch (error) {
    //         console.error('Invalid JSON in data-swiper:', swiperElement.getAttribute('data-swiper'));
    //     }
    // });
});