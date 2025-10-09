<?php
/**
 * Add inline styles to Post Terms block based on ACF color field
 */
function add_term_colors_to_post_terms_block($block_content, $block) {
    // Only target the post-terms block
    if ($block['blockName'] !== 'core/post-terms') {
        return $block_content;
    }
    
    // Get the current post
    global $post;
    if (!$post) {
        return $block_content;
    }
    
    // Get the taxonomy from block attributes
    $taxonomy = isset($block['attrs']['term']) ? $block['attrs']['term'] : 'category';
    
    // Get terms for this post
    $terms = get_the_terms($post->ID, $taxonomy);
    
    if (!$terms || is_wp_error($terms)) {
        return $block_content;
    }
    
    // Build inline styles for each term
    $styles = '<style>';
    foreach ($terms as $term) {
        $term_color = get_field('category_colour', $term);
        
        if (empty($term_color)) {
            $term_color = '#C6F6D5'; // fallback
        }
        
        // Convert hex to rgba with 30% opacity for background
        $rgba_color = hex_to_rgba($term_color, 0.15);
        
        // Create a CSS rule for each term link - only colors
        $styles .= sprintf(
            '.wp-block-post-terms a[href="%s"] { background-color: %s; color: %s; }',
            esc_url(get_term_link($term)),
            $rgba_color,
            esc_attr($term_color)
        );
    }
    $styles .= '</style>';
    
    // Return the original content with our styles prepended
    return $styles . $block_content;
}

add_filter('render_block', 'add_term_colors_to_post_terms_block', 10, 2);

/**
 * Convert hex color to rgba
 */
function hex_to_rgba($hex, $opacity = 1) {
    // Remove # if present
    $hex = str_replace('#', '', $hex);
    
    // Convert hex to rgb
    if (strlen($hex) == 3) {
        $r = hexdec(substr($hex, 0, 1) . substr($hex, 0, 1));
        $g = hexdec(substr($hex, 1, 1) . substr($hex, 1, 1));
        $b = hexdec(substr($hex, 2, 1) . substr($hex, 2, 1));
    } else {
        $r = hexdec(substr($hex, 0, 2));
        $g = hexdec(substr($hex, 2, 2));
        $b = hexdec(substr($hex, 4, 2));
    }
    
    return "rgba($r, $g, $b, $opacity)";
}