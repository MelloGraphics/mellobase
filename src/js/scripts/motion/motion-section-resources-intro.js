import { animate, inView, stagger } from "motion";
import { easeBounce, resetTimeline } from "./index";

document.addEventListener('DOMContentLoaded', () => {

const resourcesIntroSection = document.querySelector('.is-section-resources-intro');

if (resourcesIntroSection) {
    const resourcesIntroSectionTL = animate(
        [
            [resourcesIntroSection.querySelectorAll(".wp-block-heading .char"), { opacity: [ 0 , 1], x: [ "1em" , "0" ] }, { ease: easeBounce, duration: 1, delay: stagger(.05)}],
            [resourcesIntroSection.querySelectorAll("li"), { opacity: [ 0 , 1], x: [ '50%' , '0' ] }, { at: "<", duration: 1, ease: easeBounce, delay: stagger(.25) }],
        ],
        { defaultOptions: { ease: easeBounce }}
    );

    resetTimeline(resourcesIntroSectionTL);

    inView(resourcesIntroSection, ({ target }) => {
        resourcesIntroSectionTL.play() // Play the timeline
    }, {amount: 0.1});
}

});