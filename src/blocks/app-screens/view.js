document.addEventListener('DOMContentLoaded', () => {
	const blocks = document.querySelectorAll('.wp-block-mellobase-app-screens');

	blocks.forEach((block) => {
		const screens = block.querySelectorAll('.wp-block-mellobase-app-screens__screen');
		if (screens.length === 0) return;

		// Hide all screens except the first one using classes
		screens.forEach((screen, index) => {
			screen.classList.remove('is-active', 'is-inactive');
			if (index === 0) {
				screen.classList.add('is-active');
			} else {
				screen.classList.add('is-inactive');
			}
		});

		// Find sections with matching data-key attributes
		const sections = document.querySelectorAll('[data-screen-key]');
		const observerOptions = {
			root: null,
			rootMargin: '0px 0px -50% 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const key = entry.target.getAttribute('data-screen-key');
					screens.forEach((screen) => {
						const screenKey = screen.getAttribute('data-key');
						screen.classList.remove('is-active', 'is-inactive');
						if(screenKey === key) {
							screen.classList.add('is-active');
						} else {
							screen.classList.add('is-inactive');
						}
					});
				}
			});
		}, observerOptions);

		sections.forEach((section) => observer.observe(section));
	});
});