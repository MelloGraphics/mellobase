<?php

// // Show WP custom fields even when ACF is active
// add_filter('acf/settings/remove_wp_meta_box', '__return_false');

// function register_meta_keys() {
//     $meta_keys = array(
//         'test_meta' => array(
//             'show_in_rest'      => true,
//             'single'            => true,
//             'type'              => 'string',
//             'sanitize_callback' => 'wp_strip_all_tags'
//         ),
//         'post_featured_video' => array(
//             'show_in_rest'      => true,
//             'single'            => true,
//             'type'              => 'url',
//             'sanitize_callback' => 'absint'
//         ),
//     );

//     foreach ($meta_keys as $meta_key => $args) {
//         register_meta('post', $meta_key, $args);
//     }
// }
// add_action('init', 'register_meta_keys');

// //
// // Register custom block binding sources
// //

// add_action( 'init', 'block_theme_register_block_bindings' );

// function block_theme_register_block_bindings() {
// 	register_block_bindings_source( 'block_theme/copyright', array(
// 		'label'              => __( 'Copyright', 'block_theme' ),
// 		'get_value_callback' => 'block_theme_copyright_binding'
// 	) );
// }

// function block_theme_copyright_binding() {
// 	return '&copy; ' . date( 'Y' );
// }


function register_acf_taxonomy_binding_source() {
    if (!function_exists('register_block_bindings_source')) {
        return;
    }

    register_block_bindings_source('acf/taxonomy-field', array(
        'label'             => __('ACF Taxonomy Field', 'textdomain'),
        'get_value_callback' => 'acf_taxonomy_binding_callback',
        'args'              => array(
            'key'      => array(
                'type'        => 'string',
                'default'     => 'seo_title',
                'description' => 'The ACF field key to retrieve from the taxonomy term.'
            ),
            'taxonomy' => array(
                'type'        => 'string',
                'default'     => 'category',
                'description' => 'The taxonomy to retrieve the field from.'
            )
        )
    ));
}

add_action('init', 'register_acf_taxonomy_binding_source', 10);

// function acf_taxonomy_binding_callback($source_args) {
//     if (!isset($source_args['key']) || empty($source_args['key'])) {
//         return null;
//     }

//     $field_key = $source_args['key'];
//     $taxonomy_slug = $source_args['taxonomy'] ?? 'category'; // Default to category if missing

//     // Taxonomy archive pages
//     if (is_tax() || is_category() || is_tag()) {
//         $term = get_queried_object();
//         if ($term) {
//             $value = get_field($field_key, 'term_' . $term->term_id);
//             return $value ? esc_html($value) : null;
//         }
//     }

//     // Single post - Get the assigned term
//     if (is_singular()) {
//         $post_id = get_the_ID();
//         $terms = get_the_terms($post_id, $taxonomy_slug);
//         if ($terms && !is_wp_error($terms)) {
//             $term_id = $terms[0]->term_id; // Assuming single term usage
//             $value = get_field($field_key, 'term_' . $term_id);
//             return $value ? esc_html($value) : null;
//         }
//     }

//     return null;
// }