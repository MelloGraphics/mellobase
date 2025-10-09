<?php
/**
 * Replace <p> tags with <span> tags for icon font paragraphs.
 * Adds display:block inline to preserve paragraph alignment.
 */
add_filter( 'render_block', function( $block_content, $block ) {

    // Only target paragraph blocks.
    if ( $block['blockName'] !== 'core/paragraph' ) {
        return $block_content;
    }

    // Only proceed if the block uses the icon font.
    if ( strpos( $block_content, 'has-icon-font-family' ) === false ) {
        return $block_content;
    }

    // Replace <p> with <span>, preserving classes and attributes, adding display:block.
    $block_content = preg_replace(
        '/<p([^>]*)class="([^"]*has-icon-font-family[^"]*)"([^>]*)>/',
        '<span$1class="$2"$3 aria-hidden="true" style="display:block;">',
        $block_content
    );

    // Replace closing tag.
    $block_content = str_replace('</p>', '</span>', $block_content);

    return $block_content;

}, 10, 2 );