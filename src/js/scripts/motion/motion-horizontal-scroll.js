import { animate, easeInOut, scroll } from "motion";

document.addEventListener('DOMContentLoaded', () => {
    const outcomesSection = document.querySelector('.is-section-outcomes');

    if (outcomesSection) {
        const scrollWrapper = outcomesSection.querySelector(".scroll-wrapper");
        const queryWrapper = scrollWrapper.querySelector('.is-style-scrollable ul');
        const cardsOutcomes = queryWrapper.querySelectorAll("li");
        const scrollProgress = scrollWrapper.querySelector(".scroll-progress hr");

        const calculateAndApplyAnimation = () => {
            if (cardsOutcomes.length > 0) {
                // Calculate the full width of queryWrapper including all cards and gaps
                const cardWidth = cardsOutcomes[0].getBoundingClientRect().width;
                const gap = parseInt(getComputedStyle(queryWrapper).gap) || 0;
                const queryWrapperWidth = (cardsOutcomes.length * cardWidth) + ((cardsOutcomes.length - 1) * gap);

                // Ensure the total scroll distance is not negative
                const totalScrollDistance = Math.max(queryWrapperWidth - scrollWrapper.getBoundingClientRect().width, 0);

                // Scroll animation for queryWrapper
                scroll(
                    animate(queryWrapper, {
                        transform: ["none", `translateX(-${totalScrollDistance}px)`]
                    }, { ease: easeInOut }),
                    { target: scrollWrapper, offset: [0, 1] }
                );

                // Progress bar representing gallery scroll
                scroll(animate(scrollProgress, { scaleX: [0, 1] }, { ease: easeInOut }), {
                    target: scrollWrapper, offset: [0, 1]
                });
            }
        };

        // Initial calculation and animation
        calculateAndApplyAnimation();

        // Recalculate on window resize to adapt the animation
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(calculateAndApplyAnimation, 200); // Adjust the delay as needed
        });
    }
});
