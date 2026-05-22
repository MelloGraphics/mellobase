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
			name: "main",
			title: "Main",
			description: "A full-width group block using a <main> tag.",
			attributes: {
				align: "full",
				tagName: "main",
				metadata: { name: "Main" },
			},
			scope: ["inserter"],
			isDefault: false,
			icon: "layout",
		},
				{
			name: "title-wrapper",
			title: "Title Wrapper",
			description: "A group block named 'Title Wrapper'.",
			icon: "layout",

			attributes: {
				metadata: { name: "Title Wrapper" },
				style: {
					spacing: {
						blockGap: "var(--wp--preset--spacing--x-small)"
					}
				}
			},

			innerBlocks: [
				[
					"core/heading",
					{
						level: 2,
						placeholder: "H2 Section Title",
						fontSize: "medium",
					}
				],
				[
					"core/heading",
					{
						level: 3,
						placeholder: "H3 Supporting Title",
						fontSize: "x-large",
					}
				]
			],

			scope: ["inserter"],
			isDefault: false
		},
		{
			name: "content-wrapper",
			title: "Content Wrapper",
			description: "A group block named 'Content Wrapper'.",
			attributes: {
				metadata: { name: "Content Wrapper" },
				align: "wide",
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