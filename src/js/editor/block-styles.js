console.log('this is file src/editor/block-styles.js');

import { registerBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

/**
 * Register block styles
 *
 * @type {Object} Add the names of blocks and styles to register here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
const registerBlockStyles = {
	'core/button': [
		{
			name: 'primary',
			label: 'Primary',
		},
		{
			name: 'secondary',
			label: 'Secondary',
		},
		{
			name: 'tertiary',
			label: 'Tertiary',
		},
	],
	'core/image': [
		{
			name: 'rounded-medium',
			label: 'Rounded Medium',
		},
	],
	'core/details': [
		{
			name: 'tabbed',
			label: 'Tabbed',
		},
		{
			name: 'icon-check',
			label: 'Check',
		},
		{
			name: 'icon-star',
			label: 'Star',
		},
	],
	'core/cover': [
		{
			name: 'rounded-medium',
			label: 'Rounded Medium',
		},
	],
	'core/columns': [
		{
			name: 'offset',
			label: 'OffSet',
		},
	],
	'core/column': [
		{
			name: 'mobile-row',
			label: 'Mobile Row',
		},
	],
	'core/paragraph': [
		{
			name: 'after-line',
			label: 'After line',
		},
		{
			name: 'tag',
			label: 'Tag',
		},
	],
	'core/list': [
		{
			name: 'tags',
			label: 'Tags',
		},
		{
			name: 'checks',
			label: 'Checks',
		},
	],
	'core/heading': [
		{
			name: 'after-line',
			label: 'After line',
		},
	],
	'core/navigation': [
		{
			name: 'mega-menu',
			label: 'Mega Menu',
		},
	],
	'core/navigation-link': [
		{
			name: 'link-chevron',
			label: 'Chevron',
		},
		{
			name: 'link-box',
			label: 'Box',
		},
		{
			name: 'link-button',
			label: 'Button',
		},
		{
			name: 'link-tag',
			label: 'Tag',
		},
	],
	'core/navigation-submenu': [
		{
			name: 'link-icon',
			label: 'Icon only',
		},
	],
	'core/post-terms': [
		{
			name: 'tags',
			label: 'Tags',
		},
		{
			name: 'after-line',
			label: 'After-line',
		},
	],
	'core/post-title': [
		{
			name: 'arrow-after',
			label: 'Arrow after',
		},
	],
	'core/site-logo': [
		{
			name: 'reversed',
			label: 'Reversed',
		},
	],
	'core/read-more': [
		{
			name: 'secondary',
			label: 'Secondary',
		},
		{
			name: 'tertiary',
			label: 'Tertiary',
		},
	],
	'mellobase/post-type': [
		{
			name: 'after-line',
			label: 'After line',
		},
	],
};

domReady(() => {
	Object.entries(registerBlockStyles).forEach(([block, styles]) => {
		registerBlockStyle(block, styles);
	});
});
