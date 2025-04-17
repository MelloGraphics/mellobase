import { animate, inView, stagger } from "motion";
import { easeBounce, resetTimeline } from "./index";

document.addEventListener('DOMContentLoaded', () => {
    const approachIntroSection = document.querySelector('.is-section-approach-small');

    if (!approachIntroSection) {
        return; // Exit early if section doesn't exist
    }

    const swiperWrapper = approachIntroSection.querySelector('.swiper-wrapper');

    if (!swiperWrapper) {
        return;
    }

    const heading = approachIntroSection.querySelector(".wp-block-heading");
    const swiperElements = swiperWrapper.querySelectorAll("*");

    if (!heading || swiperElements.length === 0) {
        return;
    }

    const approachIntroSectionTL = animate(
        [
            [heading, { opacity: [0, 1], x: ["1em", "0"] }, { ease: easeBounce, duration: 1 }],
            [swiperElements, { opacity: [0, 1], x: ['50%', '0'] }, { at: "<", duration: 1, ease: easeBounce, delay: stagger(0.01) }],
        ],
        { defaultOptions: { ease: easeBounce } }
    );

    resetTimeline(approachIntroSectionTL);

    inView(approachIntroSection, () => {
        approachIntroSectionTL.play(); // Play the timeline when in view
    }, { amount: 0.1 });
});