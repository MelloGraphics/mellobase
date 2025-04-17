import { animate, inView, stagger } from "motion";
import { easeBounce, resetTimeline } from "./index";

document.addEventListener('DOMContentLoaded', () => {

const servicesIntroSection = document.querySelector('.is-section-services-intro');

if (servicesIntroSection) {
    const servicesIntroSectionTL = animate(
        [
            [servicesIntroSection.querySelector(".wp-block-heading"), { opacity: [ 0 , 1], x: [ "1em" , "0" ] }, { ease: easeBounce, duration: 1 }],
            [servicesIntroSection.querySelectorAll("li"), { opacity: [ 0 , 1], x: [ '50%' , '0' ] }, { at: "<", duration: 1, ease: easeBounce, delay: stagger(.25) }],
        ],
        { defaultOptions: { ease: easeBounce }}
    );

    resetTimeline(servicesIntroSectionTL);

    inView(servicesIntroSection, ({ target }) => {
        servicesIntroSectionTL.play() // Play the timeline
    }, {amount: 0.1});
}

});