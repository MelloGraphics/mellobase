import { registerBlockVariation } from "@wordpress/blocks";
import domReady from "@wordpress/dom-ready";

/**
 * Register block variations
 *
 * @type {Object} Add the names of blocks and variations to register here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
const registerBlockVariations = {
	"core/group": {
		name: "section",
		title: "Section",
		description: "A full-width group block using a <section> tag.",
		attributes: {
			align: "full",
			tagName: "section",
		},
		scope: ["inserter"], // Important: this allows it to appear as its own block
		isDefault: false,    // Ensure it's not overriding the default
		icon: "layout",
	},

};


domReady(() => {
	Object.entries(registerBlockVariations).forEach(([block, variation]) => {
		registerBlockVariation(block, variation);
	});
});