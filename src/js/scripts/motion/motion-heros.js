import { animate, easeIn, stagger } from 'motion';
import { easeBounce, easeCirc, revertSplitting } from './index';

document.addEventListener('DOMContentLoaded', () => {
	const heroHome = document.querySelector('.is-section-hero__large-centered');
	const heroLrg = document.querySelector('.is-section-hero__large');
	const heroLrgCentered = document.querySelector('.is-section-hero__large-centered');
	const heroContentWrapper = document.querySelector(
		'.is-section-hero__content-wrapper'
	);
	const googleRating = heroContentWrapper.querySelector(
		':has(> .is-pattern-google-reviews)'
	);
	const intoPara = heroContentWrapper.querySelector(
		'.is-section-hero__intro-para'
	);
	const ctaButton = heroContentWrapper.querySelectorAll('.wp-block-button');
	const imgLeft = heroContentWrapper.querySelector(
		'.wp-block-image.lightening-left'
	);
	const imgRight = heroContentWrapper.querySelector(
		'.wp-block-image.lightening-right'
	);

	// Hero Home
	if (heroHome) {
		const heroContentWrapper = heroHome.querySelector('.is-section-hero__content-wrapper');
		const googleRating = heroContentWrapper?.querySelector('.is-pattern-google-reviews');
		const intoPara = heroContentWrapper?.querySelector('.is-section-hero__intro-para');
		const ctaButton = heroContentWrapper?.querySelector('.wp-block-buttons');
		const imgLeft = heroContentWrapper?.querySelector('.wp-block-image.lightening-left');
		const imgRight = heroContentWrapper?.querySelector('.wp-block-image.lightening-right');

		const heroHomeTL = animate([
			googleRating ? [
				googleRating,
				{ y: ['1em', '0'], opacity: [0, 1] },
				{ at: '<', duration: 1, ease: easeBounce },
			] : null,
			imgLeft ? [
				imgLeft,
				{ x: ['3em', '0'], scale: [0.7, 2.3, 1.7] },
				{ at: '<', duration: 1.5, ease: easeCirc },
			] : null,
			imgRight ? [
				imgRight,
				{ x: ['-3em', '0'], scale: [0.7, 2.3, 1.7] },
				{ at: '<', duration: 1.5, ease: easeCirc },
			] : null,
			intoPara ? [
				intoPara,
				{ y: ['-1em', '0'], opacity: [0, 1] },
				{ at: '<', duration: 1, ease: easeBounce },
			] : null,
			heroHome.querySelector('[data-word="Masters"] .char') ? [
				heroHome.querySelectorAll('[data-word="Masters"] .char'),
				{
					scale: [1.5, 1],
					rotate: ['-45deg', '0deg'],
					x: ['.5em', '0'],
					opacity: [0, 1],
				},
				{
					ease: easeBounce,
					at: '<',
					duration: 0.7,
					delay: stagger(0.05),
				},
			] : null,
			heroHome.querySelector('[data-word="of"]') ? [
				heroHome.querySelectorAll('[data-word="of"]'),
				{ opacity: [0, 1] },
				{ ease: easeIn, at: '-.6', duration: 0.25 },
			] : null,
			heroHome.querySelector('[data-word="creating"]') ? [
				heroHome.querySelectorAll('[data-word="creating"]'),
				{ y: ['-.5em', '0'], opacity: [0, 1] },
				{ ease: easeBounce, duration: 0.5 },
			] : null,
			heroHome.querySelector('[data-word="unforgettable"] .char') ? [
				heroHome.querySelectorAll('[data-word="unforgettable"] .char'),
				{ scale: [0.5, 1], y: ['.5em', '0'], opacity: [0, 1] },
				{
					ease: easeBounce,
					at: '-.2',
					duration: 0.25,
					delay: stagger(0.03),
				},
			] : null,
			heroHome.querySelector('[data-word="brands"]') ? [
				heroHome.querySelectorAll('[data-word="brands"]'),
				{ x: ['.5em', '0'], opacity: [0, 1] },
				{ ease: easeBounce, at: '-.1', duration: 0.45 },
			] : null,
			ctaButton ? [
				ctaButton,
				{ scale: [0.75, 1], opacity: [0, 1] },
				{ at: '< .5', duration: 0.5, ease: easeBounce },
			] : null,
		].filter(Boolean))
		.then(() => {
			revertSplitting(heroHome);
		});
	}

	// Hero Large
	if (heroLrg) {
		const heroLrgTL = animate([
			[
				googleRating,
				{ y: ['1em', '0'], opacity: [0, 1] },
				{ at: '<', duration: 1, ease: easeBounce },
			],
			[
				intoPara,
				{ y: ['-1em', '0'], opacity: [0, 1] },
				{ at: '<', duration: 1, ease: easeBounce },
			],
			[
				heroLrg.querySelectorAll('.word .char'),
				{
					scale: [1.2, 1],
					rotate: ['-45deg', '0deg'],
					x: ['.5em', '0'],
					opacity: [0, 1],
				},
				{
					ease: easeBounce,
					at: '<',
					duration: 0.7,
					delay: stagger(0.05),
				},
			],
			[
				ctaButton,
				{ scale: [0.75, 1], opacity: [0, 1] },
				{ at: '< .5', duration: 0.5, ease: easeBounce },
			],
		]);
	}

	// Hero Large
	if (heroLrgCentered) {
		const heroLrgTL = animate([
			[
				googleRating,
				{ y: ['1em', '0'], opacity: [0, 1] },
				{ at: '<', duration: 1, ease: easeBounce },
			],
			[
				intoPara,
				{ y: ['-1em', '0'], opacity: [0, 1] },
				{ at: '<', duration: 1, ease: easeBounce },
			],
			[
				heroLrg.querySelectorAll('.word .char'),
				{
					scale: [1.2, 1],
					rotate: ['-45deg', '0deg'],
					x: ['.5em', '0'],
					opacity: [0, 1],
				},
				{
					ease: easeBounce,
					at: '<',
					duration: 0.7,
					delay: stagger(0.05),
				},
			],
			[
				ctaButton,
				{ scale: [0.75, 1], opacity: [0, 1] },
				{ at: '< .5', duration: 0.5, ease: easeBounce },
			],
		]);
	}
});