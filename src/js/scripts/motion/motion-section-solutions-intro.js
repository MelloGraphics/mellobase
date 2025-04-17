import { animate, inView, stagger } from "motion";
import { easeBounce, resetTimeline } from "./index";

document.addEventListener('DOMContentLoaded', () => {
    const solutionsIntroSection = document.querySelector('.is-section-solutions-overview');

    if (!solutionsIntroSection) {
        return; 
    }

    const heading = solutionsIntroSection.querySelector(".wp-block-heading");
    const solutionsCards = solutionsIntroSection.querySelectorAll('.is-section-solutions-overview__card');

    if (!heading) {
        return;
    }

    if (solutionsCards.length === 0) {
        return;
    }

    const solutionsIntroSectionTL = animate(
        [
            [heading, { opacity: [0, 1], y: ["1em", "0"] }, { ease: easeBounce, duration: 1 }],
            [solutionsCards, { opacity: [0, 1], y: ['50%', '0'] }, { at: "<", duration: 1, ease: easeBounce, delay: stagger(0.25) }],
        ],
        { defaultOptions: { ease: easeBounce } }
    );

    resetTimeline(solutionsIntroSectionTL);

    inView(solutionsIntroSection, () => {
        solutionsIntroSectionTL.play(); // Play the timeline when in view
    }, { amount: 0.25 });
});