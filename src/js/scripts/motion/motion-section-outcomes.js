import { animate, easeInOut, scroll } from 'motion';

document.addEventListener('DOMContentLoaded', () => {
	const outcomesSection = document.querySelector('.is-section-outcomes');

	if (outcomesSection) {
		const scrollWrapper = outcomesSection.querySelector('.scroll-wrapper');
		const pinnedWrapper = outcomesSection.querySelector('.pinned-wrapper');
		const queryWrapper = scrollWrapper.querySelector('.is-style-scrollable ul');
		const cardsOutcomes = queryWrapper.querySelectorAll('li');
		const scrollProgress = scrollWrapper.querySelector('.scroll-progress hr');

		const calculateAndApplyAnimation = () => {
			if (cardsOutcomes.length > 0) {
				const cardWidth =
					cardsOutcomes[0].getBoundingClientRect().width;
				const gap = parseInt(getComputedStyle(queryWrapper).gap) || 0;
				const queryWrapperWidth =
					cardsOutcomes.length * cardWidth +
					(cardsOutcomes.length - 1) * gap;

				const totalScrollDistance = Math.max(
					queryWrapperWidth -
						scrollWrapper.getBoundingClientRect().width,
					0
				);

				// Horizontal animation for queryWrapper
				scroll(
					animate(
						queryWrapper,
						{
							x: ['0', `-${totalScrollDistance}px`],
						},
						{ ease: easeInOut }
					),
					{ target: scrollWrapper, offset: [0, 1] }
				);

				// Progress bar representing gallery scroll
				scroll(
					animate(
						scrollProgress,
						{ scaleX: [0, 1] },
						{ ease: easeInOut }
					),
					{ target: scrollWrapper, offset: [0, 1] }
				);

				// scroll((progress) => console.log(progress), {
				// 	target: scrollWrapper,
				// });

				// Image title parallax animation
				const segmentLength = 1 / cardsOutcomes.length;
				cardsOutcomes.forEach((card, i) => {
					const queryContent = card.querySelector(
						'.wp-block-column:has(.wp-block-post-title)'
					);
					const queryImage = card.querySelector(
						'.wp-block-post-featured-image img, .wp-block-post-featured-image video'
					);

					if (queryContent) {
						scroll(
							animate(
								queryContent,
								{ x: [50, -50] },
								{ ease: easeInOut }
							),
							{
								target: scrollWrapper,
								offset: [
									[i * segmentLength, 1],
									[(i + 1) * segmentLength, 0],
								],
							}
						);
					}

					// if (queryImage) {
					// 	scroll(
					// 		animate(
					// 			queryImage,
					// 			{ x: [-100, 100], opacity: [0, 1, 1] },
					// 			{ ease: easeInOut }
					// 		),
					// 		{
					// 			target: scrollWrapper,
					// 			offset: [
					// 				[i * segmentLength, 1],
					// 				[(i + 1) * segmentLength, 0],
					// 			],
					// 		}
					// 	);
					// }

				});
			}
		};

		// Initial calculation and animation
		calculateAndApplyAnimation();

		// Recalculate on window resize
		let resizeTimeout;
		window.addEventListener('resize', () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(calculateAndApplyAnimation, 200);
		});
	}
});
