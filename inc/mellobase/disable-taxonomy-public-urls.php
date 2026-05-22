<?php

/**
 * Mellobase: Private Taxonomies
 *
 * Prevents public-facing archive URLs from being generated for specified taxonomies
 * while keeping them queryable for use in block query loops, WP_Query filtering,
 * and the Post Terms block. Also strips links from Post Terms block output since
 * the taxonomy URLs are not publicly accessible.
 *
 * IMPORTANT: For each taxonomy listed below, you must also turn off "Public" in the
 * ACF UI under the taxonomy's settings. This function restores the necessary args
 * after ACF sets them, but ACF's "Public" setting must be off to prevent rewrite
 * rules from being registered in the first place.
 *
 * Steps for each taxonomy:
 * 1. In ACF → Taxonomies → [Your Taxonomy] → turn off "Public"
 * 2. Add the taxonomy slug to the $private_taxonomies array below
 * 3. Flush permalinks via Settings → Permalinks → Save Changes
 */

$private_taxonomies = [
    'sponsor-type', // Add further taxonomy slugs here
];

// Disable public URLs but keep queryable for blocks and REST API
add_filter( 'register_taxonomy_args', function( $args, $taxonomy ) use ( $private_taxonomies ) {
    if ( in_array( $taxonomy, $private_taxonomies, true ) ) {
        $args['public']             = false;
        $args['rewrite']            = false;
        $args['publicly_queryable'] = true;
        $args['show_in_rest']       = true;
    }
    return $args;
}, 5, 2 );

// Strip links from Post Terms block output since URLs don't exist
foreach ( $private_taxonomies as $tax ) {
    add_filter( "term_links-{$tax}", function( $links ) {
        return array_map( 'wp_strip_all_tags', $links );
    } );
}