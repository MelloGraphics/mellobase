import { animate, scroll } from "motion";
import circOut from './index';

document.addEventListener('DOMContentLoaded', () => {
    const approachWrapper = document.querySelector('.is-section-approach-scroll__right-column')
    const approachCards = document.querySelectorAll('.is-section-approach-scroll__phase-card');
    
    
    approachCards.forEach((approachCard) => {

        const startRotation = (Math.random() * 10 - 5).toFixed(2) + "deg"; // Random -5deg to 5deg
        const endRotation = (Math.random() * 10 - 5).toFixed(2) + "deg";   // Another random -5deg to 5deg
        
        scroll(
            animate(
                approachCard,
                { rotate: [startRotation, startRotation, endRotation],  scale: [ 1, 1.1, 1, ], y: [ "-50%" , "-70%", '-50%' ] },
                { ease: circOut }
            ),
            {
                target: approachCard,
                offset: ["start 1.5", "start .8", "start .5"] // Triggers animation as it enters and leaves
            }
        );
    });
});