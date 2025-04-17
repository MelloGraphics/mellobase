<?php

// ACF Display Custom Fields
// add_filter('acf/settings/remove_wp_meta_box', '__return_false');

function register_meta_keys() {
    $meta_keys = array(
        'test_meta' => array(
            'show_in_rest'      => true,
            'single'            => true,
            'type'              => 'string',
            'sanitize_callback' => 'wp_strip_all_tags'
        ),
        'post_featured_video' => array(
            'show_in_rest'      => true,
            'single'            => true,
            'type'              => 'url',
            'sanitize_callback' => 'absint'
        ),
    );

    foreach ($meta_keys as $meta_key => $args) {
        register_meta('post', $meta_key, $args);
    }
}
add_action('init', 'register_meta_keys');