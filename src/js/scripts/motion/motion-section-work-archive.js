import { animate, inView } from "motion";
import { easeBounce } from './index';


document.addEventListener('DOMContentLoaded', () => {
    const workArchiveSection = document.querySelector('.is-section-work-archive');

    if (workArchiveSection) {
        // Animate heading when section is in view
        const headingElement = workArchiveSection.querySelector(".wp-block-heading");

        if (headingElement) {
            // Set initial state for the heading
            headingElement.style.opacity = "0";
            headingElement.style.transform = "translateX(1em)";

            // Create animation instance
            const headingAnimation = animate(
                headingElement,
                { opacity: [0, 1], x: ["1em", "0"] },
                { ease: easeBounce, duration: 1 }
            );
            headingAnimation.pause();

            inView(headingElement, () => {
                headingAnimation.play();
            }, { amount: 0.1 });
        }

        // Get all 'li' elements and set individual animations
        const listItems = workArchiveSection.querySelectorAll("li");

        listItems.forEach((li, index) => {
            // Set initial state for the list item
            li.style.opacity = "0";
            li.style.transform = "translateY(50%)";

            // Create animation instance
            const liAnimation = animate(
                li,
                { opacity: [0, 1], y: ['25%', '0'] },
                { ease: easeBounce, duration: 1, delay: index * 0.1 }
            );
            liAnimation.pause();

            inView(li, () => {
                liAnimation.play();
            }, { amount: 0.1 });
        });
    }
});
