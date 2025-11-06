<?php
/**
 * Registers block patterns and block pattern categories.
 */
function mellobase_register_block_patterns()
{

	// Define all pattern categories in an array.
	$pattern_categories = [
		'navigation' => [
			'label' => esc_html__('Navigation', 'mellobase'),
			'description' => esc_html__('Sub navigation layouts for building out mega menus', 'mellobase'),
		],
		'heros' => [
			'label' => esc_html__('Heros', 'mellobase'),
			'description' => esc_html__('Large hero and intro banner layouts for key page headings.', 'mellobase'),
		],
		'content' => [
			'label' => esc_html__('Content', 'mellobase'),
			'description' => esc_html__('Small chunks of content such as feature points, used to build bigger sections', 'mellobase'),
		],
		'sections' => [
			'label' => esc_html__('Sections', 'mellobase'),
			'description' => esc_html__('Structured sections of content ready for use around the site', 'mellobase'),
		],
		'cards' => [
			'label' => esc_html__('Cards', 'mellobase'),
			'description' => esc_html__('Cards used in query loops', 'mellobase'),
		],
	];

	// Loop through and register each category.
	foreach ($pattern_categories as $slug => $props) {
		register_block_pattern_category($slug, $props);
	}

	// (Optional) Loop through your block patterns if you have them.
	if (!empty($block_patterns)) {
		foreach ($block_patterns as $slug => $pattern) {
			register_block_pattern("mellobase/{$slug}", $pattern);
		}
	}
}
add_action('init', 'mellobase_register_block_patterns', 9);

/**
 * Remove core WordPress block patterns.
 */
add_action('init', function () {
	remove_theme_support('core-block-patterns');
}, 9);