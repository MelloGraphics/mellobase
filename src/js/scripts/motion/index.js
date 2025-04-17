// // Split headings text into characters
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";

// const splittingTarget = document.querySelectorAll('.has-xx-large-font-size, .wp-block-heading.has-x-large-font-size, .is-section-hero__display-heading');
// Splitting({ target: splittingTarget, by: 'chars'});

import Splitting from 'splitting';

// Store original text before splitting
document.querySelectorAll('[data-splitting]').forEach((el) => {
	el.dataset.originalText = el.innerHTML.trim();
});

Splitting();

// Function to revert splitting
export function revertSplitting(animatedElement) {
	if (!animatedElement) return; // Exit early if no element is provided

	// Find the nearest element with `data-splitting`, defaulting to the provided element
	const scope = animatedElement.closest('[data-splitting]') || animatedElement;

	// Restore the original text for each split element within the scope
	scope.querySelectorAll('[data-splitting]').forEach(target => {
		if (target.dataset.originalText) {
			target.innerHTML = target.dataset.originalText; 
		}
	});
}

// Motion utilities
export function resetTimeline(animate) {
	animate.pause();
	animate.currentTime = 0; // Reset to the start
}
export const easeBounce = [0.18, 0.89, 0.32, 1.28];
export const easeCirc = [0.075, 0.82, 0.165, 1.0];

// import and collate individual script files
import './lenis-smooth-scroll';
import './motion-approach-scroll';
import './motion-heros';
import './motion-horizontal-scroll';
import './motion-pattern-offset-columns';
import './motion-section-approach-intro';
import './motion-section-approach-phase';
import './motion-section-hero';
import './motion-section-outcomes';
import './motion-section-resources-intro';
import './motion-section-services-intro';
import './motion-section-solutions-intro';
import './motion-section-testimonial-ticker';
import './motion-section-work-archive';
import './motion-single-work';

