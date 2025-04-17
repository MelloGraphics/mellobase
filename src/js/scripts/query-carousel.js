// JS for style is-style-carousel

import $ from 'jquery';
import 'slick-carousel';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';

// JS for style is-style-carousel
$(document).ready(function() {
  if ($('.is-style-carousel > .wp-block-post-template').length) {
    $('.is-style-carousel > .wp-block-post-template').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      nextArrow: $('.is-style-carousel .slick-next'),
      prevArrow: $('.is-style-carousel .slick-prev'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            // slidesToScroll: 1,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 1
          }
        }
      ]
    });
  }
});
