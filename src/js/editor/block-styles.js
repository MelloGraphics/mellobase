import { registerBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

/**
 * Register block styles
 *
 * @type {Object} Add the names of blocks and styles to register here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
const registerBlockStyles = {
    "core/button": [
        {
            name: "primary",
            label: "Primary",
        },
        {
            name: "secondary",
            label: "Secondary",
        },
        {
            name: "tertiary",
            label: "Tertiary",
        }
    ],
    "core/paragraph": [
        {
            name: "icon",
            label: "Icon",
        }
    ],
    "core/navigation": [
        {
            name: "mega-menu",
            label: "Mega Menu",
        }
    ],
    "core/navigation-submenu": [
        {
            name: "two-column",
            label: "Two Column",
        },
        {
            name: "four-column",
            label: "Four Column",
        }
    ],
    "core/navigation-link": [
        {
            name: "box",
            label: "Box",
        },
    ],
};

domReady(() => {
    Object.entries(registerBlockStyles).forEach(([block, styles]) => {
        registerBlockStyle(block, styles);
    });
});