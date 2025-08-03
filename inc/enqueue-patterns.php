<?php
/**
 * Enqueue scripts, styles, and functionality for blocks.
 *
 * @package MelloBase
 */

namespace MelloBase\Enqueue\Blocks;

/**
 * Enqueue CSS for pattern classes only when that class exists in the page content.
 */
function enqueue_pattern_styles() {
    if ( is_admin() ) {
        return;
    }

    global $post;
    $content = '';
    if ( is_singular() && isset( $post->post_content ) ) {
        // Get the rendered content HTML to include server-side and dynamic block output
        $content = apply_filters( 'the_content', $post->post_content );
    }

    $theme_version = wp_get_theme()->get( 'Version' );
    // Locate only pattern CSS files in the shared css/ folder
    $pattern_url       = get_stylesheet_directory_uri() . '/css/';
    $pattern_files     = glob( get_stylesheet_directory() . '/css/pattern--*.css' );

    foreach ( $pattern_files as $file_path ) {
        $filename   = basename( $file_path );                   // e.g. pattern-hero.css
        $class_name = str_replace( '.css', '', $filename );     // e.g. pattern-hero

        if ( false !== strpos( $content, $class_name ) ) {
            wp_enqueue_style(
                $class_name,
                $pattern_url . $filename,
                array(),
                $theme_version . '.' . filemtime( $file_path )
            );
        }
    }
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_pattern_styles' );
