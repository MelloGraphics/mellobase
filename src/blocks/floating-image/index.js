/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import save from './save';

// Custom SVG icon
const icon = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11.1025 12.0049C11.6067 12.0562 12 12.4823 12 13V21L11.9951 21.1025C11.9472 21.573 11.573 21.9472 11.1025 21.9951L11 22H3C2.48232 22 2.05621 21.6067 2.00488 21.1025L2 21V13C2 12.4477 2.44772 12 3 12H11L11.1025 12.0049ZM7.51172 18.5479C7.25284 18.7895 6.86047 18.8172 6.57031 18.6143L4.9082 17.4512L3.5 18.6836V20.5H10.5V18.0225L9.18359 16.9863L7.51172 18.5479ZM3.5 16.8262L4.36328 15.9355L4.46582 15.8604C4.71675 15.7067 5.03959 15.7125 5.28711 15.8857L6.93164 17.0371L8.63086 15.4521C8.90142 15.1996 9.31566 15.1822 9.60645 15.4111L10.5 16.1602V13.5H3.5V16.8262Z" fill="black" />
		<path d="M18 3.25C19.5188 3.25 20.75 4.48122 20.75 6V18C20.75 19.5188 19.5188 20.75 18 20.75H13V19.25H18C18.6904 19.25 19.25 18.6904 19.25 18V6C19.25 5.30964 18.6904 4.75 18 4.75H6C5.30964 4.75 4.75 5.30964 4.75 6V11H3.25V6C3.25 4.48122 4.48122 3.25 6 3.25H18Z" fill="black" />
	</svg>
);

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	icon,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
