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
    "core/button": [
        {
            name: "primary",
            label: "Primary",
        }
    ],
    "core/details": [
        {
            name: "hover-reveal",
            label: "Hover Reveal",
        },
        {
            name: "tabbed",
            label: "Tabbed",
        }
    ],
    "core/cover": [
        {
            name: "blurred",
            label: "Blurred",
        },
        {
            name: "faded",
            label: "Faded",
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
            name: "mello-menu",
            label: "Mello Menu",
        }
    ],
    "core/navigation-link": [
        {
            name: "link-primary",
            label: "Primary",
        },
        {
            name: "link-box",
            label: "Box",
        },
    ],
    "core/query": [
        {
            name: "carousel",
            label: "Carousel",
        },
        {
            name: "scrollable",
            label: "Scrollable",
        }
    ],
    "core/gallery": [
        {
            name: "booklet",
            label: "Booklet",
        }
    ],
    "wpgb/grid": [
        {
            name: "large-grid",
            label: "Large Grid",
        },
        {
            name: "stepped-grid",
            label: "Stepped Grid",
        }
    ]
};

domReady(() => {
    Object.entries(registerBlockStyles).forEach(([block, styles]) => {
        registerBlockStyle(block, styles);
    });
});