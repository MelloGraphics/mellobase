<?php
/**
 * Registers block patterns and block pattern categories.
 */
function register_block_patterns() {
	register_block_pattern_category(
		'navigation',
		array( 'label' => esc_html__( 'Navigation', 'briks' ) )
	);

}
add_action( 'init', 'register_block_patterns', 9 );

/**
 * Remove core wordpres block patterns.
 */
add_action('init', function() {
    remove_theme_support('core-block-patterns');
},  9  );