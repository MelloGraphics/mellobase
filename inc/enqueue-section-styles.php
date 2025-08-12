<?php
/**
 * Enqueue scripts, styles, and functionality for sections.
 *
 * @package MelloBase
 */

namespace MelloBase\Enqueue\Blocks;

/**
 * Enqueue CSS for section classes only when that class exists in the page content.
 */
function enqueue_section_styles() {
    if ( is_admin() ) {
        return;
    }

    // Get available section styles
    $section_files = glob( get_stylesheet_directory() . '/css/section--*.css' );
    
    // Safety check for glob failure
    if ( false === $section_files ) {
        return;
    }

    $theme_version = wp_get_theme()->get( 'Version' );
    $section_url = get_stylesheet_directory_uri() . '/css/';

    // Get content to scan - use output buffering to capture rendered content
    ob_start();
    $content = get_all_page_content();
    $buffer_content = ob_get_clean();
    
    // Combine both content sources
    $all_content = $content . ' ' . $buffer_content;
    
    if ( empty( $all_content ) ) {
        return;
    }

    foreach ( $section_files as $file_path ) {
        $filename = basename( $file_path );
        $class_name = str_replace( '.css', '', $filename );

        // Check for section classes (including BEM modifiers) on group blocks or <section> elements
        $base_class = preg_quote( $class_name, '/' );
        $pattern = '/(?:<section[^>]*class=["\'][^"\']*\b' . $base_class . '(?:__[^\s"\']*)?[^"\']*["\'][^>]*>|wp:group[^}]*"className":"[^"]*\b' . $base_class . '(?:__[^\s"\']*)?[^"]*")/';
        
        if ( preg_match( $pattern, $all_content ) ) {
            $file_time = filemtime( $file_path ) ?: $theme_version;
            wp_enqueue_style(
                $class_name,
                $section_url . $filename,
                array(),
                $theme_version . '.' . $file_time
            );
        }
    }
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_section_styles' );

/**
 * Also try enqueueing on template_redirect to catch archive pages.
 */
add_action( 'template_redirect', __NAMESPACE__ . '\enqueue_section_styles_fallback' );

/**
 * Fallback enqueue function for archive pages.
 */
function enqueue_section_styles_fallback() {
    // Only run this if we're on an archive and styles haven't been enqueued yet
    if ( ! is_archive() && ! is_home() ) {
        return;
    }
    
    // Simple check - if no section styles are enqueued, try again
    global $wp_styles;
    $section_styles_found = false;
    
    if ( isset( $wp_styles->registered ) ) {
        foreach ( $wp_styles->registered as $handle => $style ) {
            if ( strpos( $handle, 'section--' ) === 0 ) {
                $section_styles_found = true;
                break;
            }
        }
    }
    
    // If no section styles found, try enqueuing again
    if ( ! $section_styles_found ) {
        enqueue_section_styles();
    }
}

/**
 * Get all content that might contain section classes from various sources.
 *
 * @return string Combined content from all page elements.
 */
function get_all_page_content() {
    global $post;
    $content = '';

    // Main post/page content
    if ( is_singular() && isset( $post->post_content ) ) {
        $content .= apply_filters( 'the_content', $post->post_content );
        
        // Include custom fields/meta that might have content
        $custom_fields = get_post_meta( $post->ID );
        if ( is_array( $custom_fields ) ) {
            foreach ( $custom_fields as $key => $values ) {
                // Skip WordPress internal fields
                if ( strpos( $key, '_' ) === 0 || ! is_array( $values ) ) {
                    continue;
                }
                foreach ( $values as $value ) {
                    if ( is_string( $value ) && strlen( $value ) > 10 ) {
                        $content .= ' ' . $value;
                    }
                }
            }
        }
    }

    // Archive pages - descriptions and full post content
    if ( is_archive() || is_home() ) {
        // Archive description
        $archive_description = get_the_archive_description();
        if ( $archive_description ) {
            $content .= ' ' . $archive_description;
        }
        
        // Include full content from posts in the loop (not just excerpts)
        if ( have_posts() ) {
            while ( have_posts() ) {
                the_post();
                // Get full post content to catch section classes in archive posts
                $post_content = apply_filters( 'the_content', get_the_content() );
                if ( $post_content ) {
                    $content .= ' ' . $post_content;
                }
                
                // Also include excerpt as fallback
                $excerpt = get_the_excerpt();
                if ( $excerpt ) {
                    $content .= ' ' . $excerpt;
                }
            }
            wp_reset_postdata();
        }
    }

    // Search results
    if ( is_search() && have_posts() ) {
        while ( have_posts() ) {
            the_post();
            $content .= ' ' . get_the_excerpt();
        }
        wp_reset_postdata();
    }

    // Block theme template parts (header, footer, and current page template)
    $content .= get_block_theme_template_parts();

    return $content;
}

/**
 * Get content from block theme template parts.
 *
 * @return string Combined template parts content.
 */
function get_block_theme_template_parts() {
    $template_content = '';
    
    // Get the current template being used
    $current_template_slug = get_page_template_slug();
    if ( empty( $current_template_slug ) ) {
        // Determine template based on page type
        if ( is_front_page() ) {
            $current_template_slug = 'front-page';
        } elseif ( is_home() ) {
            $current_template_slug = 'home';
        } elseif ( is_archive() ) {
            $current_template_slug = 'archive';
        } elseif ( is_search() ) {
            $current_template_slug = 'search';
        } elseif ( is_404() ) {
            $current_template_slug = '404';
        } else {
            $current_template_slug = 'index';
        }
    }
    
    // Get the active template
    $current_template = get_block_template( get_stylesheet() . '//' . $current_template_slug );
    if ( ! $current_template ) {
        // Fallback to index template
        $current_template = get_block_template( get_stylesheet() . '//' . 'index' );
    }
    
    if ( $current_template && isset( $current_template->content ) ) {
        $template_content .= ' ' . $current_template->content;
    }
    
    // Get common template parts
    $template_parts = array( 'header', 'footer' );
    foreach ( $template_parts as $part ) {
        $template_part = get_block_template( get_stylesheet() . '//' . $part, 'wp_template_part' );
        if ( $template_part && isset( $template_part->content ) ) {
            $template_content .= ' ' . $template_part->content;
        }
    }
    
    return $template_content;
}

