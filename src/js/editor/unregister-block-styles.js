import { unregisterBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

/**
 * Remove block styles
 *
 * @type {Object} Add the names of blocks and styles to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
const unregisterBlockStyles = {
	"core/button": [ "fill" , "outline" ],
    "core/image": "rounded",
    "core/site-logo": "rounded",
    "core/separator": [ "dots", "wide" ]
};

domReady(() => {
    Object.entries(unregisterBlockStyles).forEach(([block, style]) => {
        unregisterBlockStyle(block, style);
    });
});