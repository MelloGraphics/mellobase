import { animate, easeInOut, inView, stagger } from "motion";
import { easeBounce, resetTimeline } from "./index";

document.addEventListener('DOMContentLoaded', () => {
    const approachPhases = document.querySelectorAll('.is-section-approach-main');

    // Loop through each phase and add timeline
    approachPhases.forEach((approachPhase) => {
        const elements = {
            line: approachPhase.querySelector('.approach-phase__dotted-line'),
            icon: approachPhase.querySelector('.approach-phase__icon'),
            afterLine: approachPhase.querySelector('.is-style-after-line'),
            title: approachPhase.querySelector('.approach-phase__title'),
            description: approachPhase.querySelector('.approach-phase__description'),
            benefits: approachPhase.querySelectorAll('.approach-phase__benefit'),
            titleSmall: approachPhase.querySelector('.approach-phase__title-small'),
            tags: approachPhase.querySelectorAll('.is-style-tags li')
        };

        const animations = [];

        if (elements.line) {
            animations.push([
                elements.line,
                { clipPath: ['inset(0 0 100% 0)', 'inset(0 0 0 0)'] },
                { ease: easeInOut, duration: 2 }
            ]);
        }

        if (elements.icon) {
            animations.push([
                elements.icon,
                { opacity: [0, 1], rotate: ['25deg', '0'], y: ['50%', '0'] },
                { at: 0.25, ease: easeBounce, duration: 1 }
            ]);
        }

        if (elements.afterLine) {
            animations.push([
                elements.afterLine,
                { opacity: [0, 1] },
                { at: "<", ease: easeBounce, duration: 1 }
            ]);
        }

        if (elements.title) {
            animations.push([
                elements.title,
                { opacity: [0, 1], x: ["2em", "0"] },
                { at: "<", ease: easeBounce, duration: 1 }
            ]);
        }

        if (elements.description) {
            animations.push([
                elements.description,
                { opacity: [0, 1], x: ["2em", "0"] },
                { at: "<", ease: easeBounce, duration: 1 }
            ]);
        }

        if (elements.benefits.length) {
            animations.push([
                elements.benefits,
                { opacity: [0, 1], y: ["2em", "0"] },
                { at: "<", delay: stagger(0.15), ease: easeBounce, duration: 0.5 }
            ]);
        }

        if (elements.titleSmall) {
            animations.push([
                elements.titleSmall,
                { opacity: [0, 1], y: ["2em", "0"] },
                { at: "<", ease: easeBounce, duration: 0.5 }
            ]);
        }

        if (elements.tags.length) {
            animations.push([
                elements.tags,
                { opacity: [0, 1], y: ["2em", "0"] },
                { at: "<", delay: stagger(0.1), ease: easeBounce, duration: 0.5 }
            ]);
        }

        const approachPhaseTL = animate(animations);
        
        resetTimeline(approachPhaseTL);

        inView(approachPhase, () => {
            approachPhaseTL.play(); // Play the timeline
        }, { amount: 0.25 });

    });
});
