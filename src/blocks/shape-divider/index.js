import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import save from './save';

// Custom SVG icon
const icon = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M20 4.99821C11.6667 1.53769 10.6667 8.46589 4 4.99821" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4 19.0018C12.3333 22.4623 13.3333 15.5341 20 19.0018" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
);

registerBlockType(metadata.name, {
	...metadata,
	icon,
	edit: Edit,
	save,
});