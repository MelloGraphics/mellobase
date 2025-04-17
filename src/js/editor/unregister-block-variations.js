import { unregisterBlockVariation } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

/**
 * Remove block variations
 *
 * @type {Object} Add the names of blocks and variations to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
const unregisterBlockVariations = {
	// "core/columns": "two-columns-two-thirds-one-third",
};

domReady(() => {
    Object.entries(unregisterBlockVariations).forEach(([block, variation]) => {
        unregisterBlockVariation(block, variation);
    });
});