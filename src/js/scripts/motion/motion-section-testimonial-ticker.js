import { animate, inView, stagger } from "motion";
import { easeBounce, easeCirc, resetTimeline } from "./index";

document.addEventListener('DOMContentLoaded', () => {

// const heroSection = document.getElementById('hero');
const testimonialsTickerSection = document.querySelector('.is-section-testimonial-ticker');

if (testimonialsTickerSection) {
    const testimonialsTickerSectionTL = animate(
        [
            [testimonialsTickerSection.querySelectorAll(".swiper-wrapper"), { opacity: [ 0 , 1 ] }, { duration: 1, ease: easeCirc, delay: stagger(.15) }],
            // [testimonialsTickerSection.querySelectorAll(".swiper-wrapper > .wp-block-group"), { opacity: [ 0 , 1 ], x: [ '10em' , '0' ] }, { at: '<', duration: .5, ease: easeBounce, delay: stagger(.01) }],
        ],
        { defaultOptions: { ease: easeBounce }}
    );

    resetTimeline(testimonialsTickerSectionTL);


    inView(testimonialsTickerSection, ({ target }) => {
        testimonialsTickerSectionTL.play() // Play the timeline
    }, {amount: 0.5});
}

});