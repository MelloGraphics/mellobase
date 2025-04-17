<?php

// add class to synced patterns

function add_class_to_reusable_blocks($block_content, $block) {
    // Ensure this is a core/block (reusable block)
    if ($block['blockName'] === 'core/block' && isset($block['attrs']['ref'])) {
        $pattern_id = $block['attrs']['ref'];
        $pattern_post = get_post($pattern_id);

        if ($pattern_post && $pattern_post->post_type === 'wp_block') {
            $pattern_name = sanitize_title($pattern_post->post_name);
            $class_to_add = 'is-pattern-' . $pattern_name;

            // Ensure the class is added to the wrapper div
            if (!strpos($block_content, $class_to_add)) {
                $block_content = preg_replace(
                    '/(<[^>]+class=["\']?)([^"\'>]*)(["\'>])/i',
                    '$1$2 ' . esc_attr($class_to_add) . '$3',
                    $block_content,
                    1
                );
            }
        }
    }

    return $block_content;
}
add_filter('render_block', 'add_class_to_reusable_blocks', 10, 2);