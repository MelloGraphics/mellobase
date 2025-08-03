<?php
/**
 * Enqueue scripts, styles, and functionality for templates.
 *
 * @package MelloBase
 */

namespace MelloBase\Enqueue\Blocks;

/**
 * Dynamically enqueue CSS for templates based on filename-to-conditional mapping.
 */
function enqueue_template_styles() {
    if ( is_admin() ) {
        return;
    }

    $theme_version = wp_get_theme()->get( 'Version' );
    $css_dir       = get_stylesheet_directory() . '/css/';
    $css_uri       = get_stylesheet_directory_uri() . '/css/';

    // Find all template CSS files
    $template_files = glob( $css_dir . 'template--*.css' );
    foreach ( $template_files as $file_path ) {
        $filename = basename( $file_path ); // e.g. template--front-page.css
        $slug     = str_replace( [ 'template--', '.css' ], '', $filename );

        // Determine if this template slug matches the current page
        $should_enqueue = false;
        switch ( true ) {
            case 'front-page' === $slug && is_front_page():
            case 'home'       === $slug && is_home():
            case 'single'     === $slug && is_single():
                $should_enqueue = true;
                break;

            // Custom single post type templates: template--single-{post_type}.css
            case 0 === strpos( $slug, 'single-' ):
                $pt = substr( $slug, strlen( 'single-' ) );
                if ( is_singular( $pt ) ) {
                    $should_enqueue = true;
                }
                break;

            // Page templates: template--page-{slug}.css
            case 0 === strpos( $slug, 'page-' ):
                $tpl = substr( $slug, strlen( 'page-' ) ) . '.php';
                if ( is_page_template( $tpl ) ) {
                    $should_enqueue = true;
                }
                break;

            // Post type archives: template--post-type-archive-{post_type}.css
            case 0 === strpos( $slug, 'post-type-archive-' ):
                $pt = substr( $slug, strlen( 'post-type-archive-' ) );
                if ( is_post_type_archive( $pt ) ) {
                    $should_enqueue = true;
                }
                break;

            // Custom post type archives with shorthand filename: template--archive-{post_type}.css
            case 0 === strpos( $slug, 'archive-' ):
                $pt = substr( $slug, strlen( 'archive-' ) );
                if ( is_post_type_archive( $pt ) ) {
                    $should_enqueue = true;
                }
                break;

            // All other archives: template--archive.css
            case 'archive' === $slug && is_archive():
                $should_enqueue = true;
                break;
        }

        if ( $should_enqueue ) {
            // Generate a handle from the slug
            $handle = 'template-' . str_replace( '--', '-', $slug );
            wp_enqueue_style(
                $handle,
                $css_uri . $filename,
                array(),
                $theme_version . '.' . filemtime( $file_path )
            );
        }
    }
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_template_styles' );
