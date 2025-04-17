<?php

function mello_render_hover_squiggles_on_team($block_content, $block) {
    // Only modify core/post-featured-image block
    if ($block['blockName'] !== 'core/post-featured-image') {
        return $block_content;
    }

    // Ensure we're in the loop
    if (!isset($GLOBALS['post'])) {
        return $block_content;
    }

    $post_id = $GLOBALS['post']->ID;

    // Only target 'team' post type
    if (get_post_type($post_id) !== 'team') {
        return $block_content;
    }

    // Get gallery images
    $hover_image = get_field('hover_squiggle', $post_id);
    if (!$hover_image || !is_array($hover_image)) {
        return $block_content;
    }

    // Use DOM to insert images into the block
    libxml_use_internal_errors(true);
    $dom = new DOMDocument();
    $dom->loadHTML(mb_convert_encoding($block_content, 'HTML-ENTITIES', 'UTF-8'));
    libxml_clear_errors();

    // Find the <figure> element to insert the images into
    $figure_elements = $dom->getElementsByTagName('figure');
    if ($figure_elements->length > 0) {
        $figure = $figure_elements->item(0);
        
        $wrapper = $dom->createElement('div');
        $wrapper->setAttribute('class', 'hover-squiggles style-svg');

        $img = $dom->createElement('img');
        $img->setAttribute('src', esc_url($hover_image['url']));
        $img->setAttribute('alt', esc_attr($hover_image['alt'] ?? ''));
        $img->setAttribute('class', 'hover-squiggle');
        $wrapper->appendChild($img);

        $figure->appendChild($wrapper);
    }

    // Output modified block content
    $body = $dom->getElementsByTagName('body')->item(0);
    $new_content = '';
    foreach ($body->childNodes as $child) {
        $new_content .= $dom->saveHTML($child);
    }

    return $new_content;
}

add_filter('render_block', 'mello_render_hover_squiggles_on_team', 10, 2);