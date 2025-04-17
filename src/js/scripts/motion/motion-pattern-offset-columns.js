import { animate, inView, stagger } from 'motion';
import { easeBounce, resetTimeline } from './index';

document.addEventListener('DOMContentLoaded', () => {
	const offsetColumns = document.querySelectorAll(
		'.is-pattern-offset-columns'
	);

	// Loop through each offsetColumns element
	offsetColumns.forEach((column) => {
		// Check if the column has the class 'left' or 'right'
		const isLeft = column.classList.contains('left');
		const isRight = column.classList.contains('right');

		// Create animations for left and right columns if they exist
		if (isLeft) {
			const leftColumnTL = animate(
				[
					[
						column.querySelectorAll('.offset-column > *'),
						{ opacity: [0, 1] },
						{ delay: stagger(0.25), ease: easeBounce, duration: 1 },
					],
				],
				{ defaultOptions: { ease: easeBounce } }
			);

			resetTimeline(leftColumnTL);

			inView(
				column,
				() => {
					leftColumnTL.play(); // Play the timeline for the left column
				},
				{ amount: 0.25 }
			);
		}

		if (isRight) {
			const rightColumnTL = animate(
				[
					[
						column.querySelectorAll('.offset-column > *'),
						{ opacity: [0, 1] },
						{ delay: stagger(0.25), ease: easeBounce, duration: 1 },
					],
				],
				{ defaultOptions: { ease: easeBounce } }
			);

			resetTimeline(rightColumnTL);

			inView(
				column,
				() => {
					rightColumnTL.play(); // Play the timeline for the right column
				},
				{ amount: 0.25 }
			);
		}
	});
});
