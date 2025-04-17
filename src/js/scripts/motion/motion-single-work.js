import { animate, inView, scroll } from 'motion';
import { easeBounce, resetTimeline } from './index';

document.addEventListener('DOMContentLoaded', () => {
	const workSingle = document.querySelector('body.single-work');

	if (workSingle) {
		// hero image on load
		// const workSingleTL = animate(
		// 	[
		// 		[
		// 			document.querySelector('.wp-block-post-featured-image img'),
		// 			{ scale: [1.2, 1], opacity: [0, 1] },
		// 			{ duration: 1 },
		// 		],
		// 	],
		// 	{ ease: easeBounce }
		// );

		// post media

		const workMedia = workSingle.querySelectorAll(
			'.is-pattern-case-study-media > *, .is-pattern-case-study-section__media-wrapper > *, .is-pattern-case-study-media__gallery > *'
		);

		workMedia.forEach((item) => {
			scroll(animate(item, { opacity: [0, 1] }, { ease: easeBounce }), {
				target: item,
				offset: ['start end', 'start .25'],
			});
		});

		// section part

		const workParts = workSingle.querySelectorAll('.is-pattern-case-study-section__content-wrapper');

		workParts.forEach((workPart) => {
			const workPartTL = animate(
				workPart,
				{ opacity: [0, 1], y: ['2em', '0'] },
				{ ease: easeBounce, duration: .5 }
			);

			resetTimeline(workPartTL);

			inView(
				workPart,
				() => {
					workPartTL.play(); // Play the timeline when in view
				},
				{ amount: .5 }
			);
		});
	}
});
