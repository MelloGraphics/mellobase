const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const RemovePlugin = require("remove-files-webpack-plugin");
const path = require("path");
const { getEntries } = require("./get-entries");
// styleOutputFolder should be relative to the root of the theme with no leading or trailing slashes
const styleOutputFolder = "css";
// Generate pattern entries, prefixing each basename with "pattern-"
const rawPatternEntries = getEntries({
	root: "src/scss/patterns",
	include: "**/*.scss",
	outputFolder: styleOutputFolder,
});
const patternEntries = Object.fromEntries(
	Object.entries(rawPatternEntries).map(([key, filePath]) => {
		// Split the entry key path into segments
		const segments = key.split("/");
		// Take the last segment (filename without extension)
		const name = segments.pop();
		// Prefix it
		segments.push(`pattern--${name}`);
		return [segments.join("/"), filePath];
	})
);
// Generate template entries, prefixing each basename with "template--"
const rawTemplateEntries = getEntries({
	root: "src/scss/templates",
	include: "**/*.scss",
	outputFolder: styleOutputFolder,
});
const templateEntries = Object.fromEntries(
	Object.entries(rawTemplateEntries).map(([key, filePath]) => {
		// Split the entry key path into segments
		const segments = key.split("/");
		// Take the last segment (filename without extension)
		const name = segments.pop();
		// Prefix it
		segments.push(`template--${name}`);
		return [segments.join("/"), filePath];
	})
);
/**
 * Custom Webpack Configuration
 *
 * Adds the ability to compile extra scripts and CSS files for the theme.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-scripts/#webpack-config
 */
var config = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry(),
		...getEntries({ root: "src/js", include: "*.js", outputFolder: "js" }),
		...getEntries({
			root: "src/scss",
			include: "*.scss",
			outputFolder: styleOutputFolder,
		}),
		...getEntries({
			root: "src/scss/blocks",
			include: "**/*.scss",
			outputFolder: styleOutputFolder,
			blockDir: true,
		}),
		// Use prefixed pattern entries
		...patternEntries,
		// Use prefixed template entries
		...templateEntries,
	},
	output: {
		...defaultConfig.output,
		// change the output path for blocks to the blocks/ folder
		path: path.resolve(process.cwd(), "blocks"),
		assetModuleFilename: "../src/scss/utils/[name].scss",
	},
	plugins: [
		new RemovePlugin({
			/**
			 * After compilation permanently removes
			 * the extra `.js`, `.php`, and `.js.map` files in the output folders
			 */

			before: {
				log: false,
				test: [
					{
						folder: styleOutputFolder,
						method: (absoluteItemPath) => {
							return new RegExp(/\.css(\.map)*$/, "m").test(absoluteItemPath);
						},
					},
				],
			},
			after: {
				log: false,
				test: [
					{
						folder: styleOutputFolder,
						method: (absoluteItemPath) => {
							return new RegExp(/\.js/, "m").test(absoluteItemPath);
						},
					},
					{
						folder: styleOutputFolder,
						method: (absoluteItemPath) => {
							return new RegExp(/\.php$/, "m").test(absoluteItemPath);
						},
					},
					{
						folder: "./src/scss/utils",
						method: (absoluteItemPath) => {
							return new RegExp(/\.php$/, "m").test(absoluteItemPath);
						},
					},
					{
						folder: "./src/scss/utils",
						method: (absoluteItemPath) => {
							return new RegExp(/(\.js)(\.map)*$/, "m").test(absoluteItemPath);
						},
					},
					{
						folder: ".",
						method: (absoluteItemPath) => {
							return new RegExp(/(json\.js)(\.map)*$/, "m").test(
								absoluteItemPath
							);
						},
					},
					{
						folder: ".",
						method: (absoluteItemPath) => {
							return new RegExp(/theme\.json\.asset\.php$/, "m").test(
								absoluteItemPath
							);
						},
					},
				],
			},
		}),
		...defaultConfig.plugins,
	],
	cache: false,
};

// Return Configuration
module.exports = config;