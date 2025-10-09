<?php

function debug_core_query_block_details($block_content, $block) {
    // Run only on the front-end (not in the editor)
    if (is_admin()) {
        return $block_content;
    }

    if (isset($block['blockName']) && $block['blockName'] === 'core/query') {
        echo '<pre style="background: #f4f4f4; padding: 10vw; border: 1px solid #ddd; white-space: pre-wrap; font-size: small;">';
        echo '<strong>Full Block Array:</strong><br>';
        
        // Print the entire block array
        echo esc_html(print_r($block, true));

        echo '</pre>';
    }
    return $block_content;
}
add_filter('render_block', 'debug_core_query_block_details', 10, 2);