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
		<path d="M17 19.5V21H7V19.5H17ZM17.5 19V5C17.5 4.72386 17.2761 4.5 17 4.5H7C6.72386 4.5 6.5 4.72386 6.5 5V19C6.5 19.2761 6.72386 19.5 7 19.5V21L6.7959 20.9893C5.85435 20.8938 5.1062 20.1457 5.01074 19.2041L5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.0357 18.2128 20.887 17.2041 20.9893L17 21V19.5C17.2761 19.5 17.5 19.2761 17.5 19Z" fill="black" />
		<path d="M9 16.5C9 16.2239 9.22386 16 9.5 16H14.5C14.7761 16 15 16.2239 15 16.5V17C15 17.2761 14.7761 17.5 14.5 17.5H9.5C9.22386 17.5 9 17.2761 9 17V16.5Z" fill="black" />
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
