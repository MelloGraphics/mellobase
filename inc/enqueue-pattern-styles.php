<?php
/**
 * Enqueue scripts, styles, and functionality for patterns.
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

    // Get available pattern styles
    $pattern_files = glob( get_stylesheet_directory() . '/css/pattern--*.css' );
    
    // Safety check for glob failure
    if ( false === $pattern_files ) {
        return;
    }

    $theme_version = wp_get_theme()->get( 'Version' );
    $pattern_url = get_stylesheet_directory_uri() . '/css/';

    // Get content to scan - use the same comprehensive approach as sections
    $all_content = get_all_page_content();
    
    if ( empty( $all_content ) ) {
        return;
    }

    foreach ( $pattern_files as $file_path ) {
        $filename = basename( $file_path );
        $class_name = str_replace( '.css', '', $filename );

        if ( false !== strpos( $all_content, $class_name ) ) {
            $file_time = filemtime( $file_path ) ?: $theme_version;
            wp_enqueue_style(
                $class_name,
                $pattern_url . $filename,
                array(),
                $theme_version . '.' . $file_time
            );
        }
    }
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_pattern_styles' );

/**
 * Also try enqueueing on template_redirect to catch archive pages.
 */
add_action( 'template_redirect', __NAMESPACE__ . '\enqueue_pattern_styles_fallback' );

/**
 * Fallback enqueue function for archive pages.
 */
function enqueue_pattern_styles_fallback() {
    // Only run this if we're on an archive and styles haven't been enqueued yet
    if ( ! is_archive() && ! is_home() ) {
        return;
    }
    
    // Simple check - if no pattern styles are enqueued, try again
    global $wp_styles;
    $pattern_styles_found = false;
    
    if ( isset( $wp_styles->registered ) ) {
        foreach ( $wp_styles->registered as $handle => $style ) {
            if ( strpos( $handle, 'pattern--' ) === 0 ) {
                $pattern_styles_found = true;
                break;
            }
        }
    }
    
    // If no pattern styles found, try enqueuing again
    if ( ! $pattern_styles_found ) {
        enqueue_pattern_styles();
    }
}