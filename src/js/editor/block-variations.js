import { registerBlockVariation } from "@wordpress/blocks";
import domReady from "@wordpress/dom-ready";

/**
 * Variations to register
 */
const registerBlockVariations = {
	"core/group": [
		{
			name: "section",
			title: "Section",
			description: "A full-width group block using a <section> tag.",
			attributes: {
				align: "full",
				tagName: "section",
				metadata: { name: "Section" },
			},
			scope: ["inserter"],
			isDefault: false,
			icon: "layout",
		},
		{
			name: "title-wrapper",
			title: "Title Wrapper",
			description: "A group block named 'Title Wrapper'.",
			attributes: {
				metadata: { name: "Title Wrapper" },
			},
			scope: ["inserter"],
			isDefault: false,
			icon: "layout",
		},
		{
			name: "content-wrapper",
			title: "Content Wrapper",
			description: "A group block named 'Content Wrapper'.",
			attributes: {
				metadata: { name: "Content Wrapper" },
			},
			scope: ["inserter"],
			isDefault: false,
			icon: "layout",
		}
	],
};

domReady(() => {
	Object.entries(registerBlockVariations).forEach(([block, variations]) => {
		variations.forEach((variation) => {
			registerBlockVariation(block, variation);
		});
	});
});