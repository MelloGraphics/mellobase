import { unregisterBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

/**
 * Unregister blocks
 *
 * @type {Array} Add the names of blocks to unregister here
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#using-a-deny-list
 */
const unregisterBlocks = [
	// "core/verse"
];

domReady(() => {
    unregisterBlocks.forEach((block) => {
        unregisterBlockType(block);
    });
});