import { animate } from "motion";
import { easeBounce, easeCirc } from "./index";


document.addEventListener('DOMContentLoaded', () => {

// const heroSection = document.getElementById('hero');
const heroSectionMed = document.querySelector('.is-section-hero-medium');
const heroSectionLrg = document.querySelector('.is-section-hero-medium');

if (heroSectionMed) {
    const heroMedTL = animate(
        [
            // [heroSection.querySelector("h2.wp-block-heading"), { opacity: [ 0 , 1], x: [ "1em" , "0" ] }, { ease: easeBounce, duration: 1 }],
            [heroSection.querySelector("p.has-large-font-size"), { opacity: [ 0 , 1] }, { at: "<", ease: easeBounce, duration: 2 }],
            [heroSection.nextElementSibling, { opacity: [ 0 , 1], y: [ "1em" , "0" ] }, { at: "<", ease: easeCirc, duration: 1 }],
        ],
        { defaultOptions: { ease: easeBounce }}
    );

    // heroSectionTL.pause();

    // inView(heroSection, ({ target }) => {
    //     heroSectionTL.play() // Play the timeline
    // }, {amount: 0.1});
}

if (heroSectionLrg) {
    const heroMedTL = animate(
        [
            // [heroSection.querySelector("h2.wp-block-heading"), { opacity: [ 0 , 1], x: [ "1em" , "0" ] }, { ease: easeBounce, duration: 1 }],
            [heroSection.querySelector("p.has-large-font-size"), { opacity: [ 0 , 1] }, { at: "<", ease: easeBounce, duration: 2 }],
            [heroSection.nextElementSibling, { opacity: [ 0 , 1], y: [ "1em" , "0" ] }, { at: "<", ease: easeCirc, duration: 1 }],
        ],
        { defaultOptions: { ease: easeBounce }}
    );

    // heroSectionTL.pause();

    // inView(heroSection, ({ target }) => {
    //     heroSectionTL.play() // Play the timeline
    // }, {amount: 0.1});
}

});